import oauth2orize, { DeserializeClientDoneFunction, ExchangeDoneFunction, IssueGrantCodeDoneFunction, SerializeClientDoneFunction } from 'oauth2orize';
import Client, { ClientDoc } from '../models/client.model';
import User, { UserDoc } from '../models/user.model';
import AuthCode from '../models/authCode.model';
const { v4: uuidv4 } = require('uuid');
import jwt from 'jsonwebtoken';

const server = oauth2orize.createServer<ClientDoc, UserDoc>();

server.serializeClient((client, done: SerializeClientDoneFunction) => {
  return done(null, client._id.toString());
});

server.deserializeClient(async (id, done: DeserializeClientDoneFunction<ClientDoc>) => {
  try {
    const client = await Client.findById(id);
    if (client)
      return done(null, client);
    else
      return done(null, false);
  } catch (error: any) {
    return done(error);
  }
});

server.grant(oauth2orize.grant.code(async (client, redirectURI, user, done: IssueGrantCodeDoneFunction) => {
  const code = uuidv4();
  const authCode = new AuthCode({
    code,
    clientId: client.clientId,
    redirectUri: redirectURI,
    userId: user.id,
  });
  try {
    await authCode.save();
    return done(null, code);
  } catch (error: any) {
    return done(error);
  }
}));

server.exchange(oauth2orize.exchange.code(async (client, code, redirectURI, done: ExchangeDoneFunction) => {
  try {
    const authCode = await AuthCode.findOne({ code });
    if (!authCode || authCode.clientId !== client.clientId || authCode.redirectUri !== redirectURI) {
      return done(null, false);
    }
    await authCode.deleteOne();

    const user = await User.findById(authCode.userId);
    if (!user) {
      return done(null, false);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return done(null, token);
  } catch (error: any) {
    return done(error);
  }
}));

export default server;
