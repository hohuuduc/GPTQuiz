import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // After successful Google authentication, redirect to the OAuth authorization page
    // The returnTo URL already contains all the OAuth parameters we need
    const returnTo = (req.session as any)?.returnTo || '/oauth/authorize';
    delete (req.session as any)?.returnTo;

    console.log('Google callback - redirecting to:', returnTo);
    res.redirect(returnTo);
  }
);

export default router;
