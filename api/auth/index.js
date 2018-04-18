import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import jwt from 'jsonwebtoken';
import auth from '../../passportConfig';

const router = express.Router(); // eslint-disable-true

// login
router.post('/login', auth.requireLogin, (req, res) => {
  res.status(200).json({
    token: generateToken(req.user),
    user: req.user
  });
});

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send();
});

function generateToken(user) {  
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}

export default router;