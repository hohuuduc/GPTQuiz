import { NextFunction, Request, Response, Router } from 'express';
import oauth2Server from '../config/oauth2';
import Client from '../models/client.model';
import { ValidateDoneFunction } from 'oauth2orize';

const router = Router();

// Middleware to ensure the user is authenticated
const ensureLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google'); // Redirect to Google login if not authenticated
};

router.get('/oauth/authorize',
  ensureLoggedIn,
  oauth2Server.authorization(async (clientID, redirectURI, done: ValidateDoneFunction) => {
    try {
      const client = await Client.findOne({ clientId: clientID });
      if (!client || !client.redirectUris.includes(redirectURI)) {
        return done(new Error('Invalid client or redirect URI'));
      }
      return done(null, client, redirectURI);
    } catch (error: any) {
      return done(error);
    }
  }),
  (req, res) => {
    // Render a consent page to the user
    res.send(`
      <html>
        <body>
          <p>Hi ${req.user?.displayName},</p>
          <p><b>${req.oauth2?.client.clientId}</b> is requesting access to your account.</p>
          <form action="/oauth/authorize/decision" method="post">
            <input type="hidden" name="transaction_id" value="${req.oauth2?.transactionID}">
            <button type="submit" name="decision" value="approve">Allow</button>
            <button type="submit" name="decision" value="deny">Deny</button>
          </form>
        </body>
      </html>
    `);
  }
);

router.post('/oauth/authorize/decision',
  ensureLoggedIn,
  oauth2Server.decision()
);

router.post('/oauth/token',
  oauth2Server.token(),
  oauth2Server.errorHandler()
);

// Seed a default client for GPT Actions
const seedDefaultClient = async () => {
  try {
    const result = await Client.findOneAndUpdate(
      { clientId: process.env.GPT_CLIENT_ID },
      {
        clientId: process.env.GPT_CLIENT_ID,
        clientSecret: process.env.GPT_CLIENT_SECRET,
        redirectUris: [`https://chat.openai.com/aip/${process.env.GPT_ID}/oauth/callback`],
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    console.log('Default GPT Action client ready.');
  } catch (error: any) {
    if (error.code !== 11000) {
      console.error('Error seeding default client:', error);
    }
  }
};

seedDefaultClient();

export default router;
