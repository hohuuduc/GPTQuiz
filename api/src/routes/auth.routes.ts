import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // After successful Google authentication, redirect to the OAuth authorization page
    // This preserves the original OAuth flow query parameters
    const returnTo = (req.session as any)?.returnTo || '/oauth/authorize';
    delete (req.session as any)?.returnTo;

    // If there are query parameters from the original OAuth request, include them
    const queryString = req.query ? '?' + new URLSearchParams(req.query as any).toString() : '';
    res.redirect(returnTo + queryString);
  }
);

export default router;
