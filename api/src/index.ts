import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import quizRoutes from './routes/quiz.routes';
import resultRoutes from './routes/result.routes';
import authRoutes from './routes/auth.routes';
import oauthRoutes from './routes/oauth.routes';
import gptRoutes from './routes/gpt.routes';
import passport from './config/passport';
import MongoStore from 'connect-mongo';
import { openApiSchema } from './openapi.schema';

dotenv.config();

const app: Express = express();

app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Group API routes
const apiRouter = express.Router();
apiRouter.use(quizRoutes);
apiRouter.use(resultRoutes);
apiRouter.use(gptRoutes);
app.use('/api', apiRouter);

// Group root-level routes
app.use('/', [authRoutes, oauthRoutes]);

app.get('/', (req: Request, res: Response) => {
  res.json(openApiSchema);
});
