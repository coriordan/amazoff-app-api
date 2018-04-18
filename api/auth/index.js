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

// register
router.post('/register', asyncHandler(async (req, res) => {
  // find user by email
  // if already exists, return error
  
  const user = await User.create(req.body).catch((err) => {
    res.send(500, err);
  });
  
  res.status(201).json(user);
}));

function generateToken(user) {  
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}

export default router;