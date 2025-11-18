import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

passport.use('bearer', new BearerStrategy(
  async (token, done) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
      const user = await User.findById(decoded.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user, { scope: 'all' });
    } catch (error) {
      return done(error);
    }
  }
));

export const authenticateBearer = passport.authenticate('bearer', { session: false });
