import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  (req, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token });
  }
);

export default router;
