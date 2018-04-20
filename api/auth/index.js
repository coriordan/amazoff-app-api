import express from 'express';
import passport from 'passport';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import User from '../../models/userModel';
import jwt from 'jsonwebtoken';
import auth from '../../passportConfig';

dotenv.config();

const router = express.Router(); // eslint-disable-true

// login
router.post('/', (req, res) => {
  passport.authenticate('local', (err, user, info, status) => {
    if (!user) { return res.status(401).send(info); }
    
    res.status(200).json({
      token: 'BEARER ' + generateToken(user),
      user: user
    }); 
  })(req, res);
});

// logout
router.delete('/', (req, res) => {
  req.logout();
  res.status(200).send();
});

function generateToken(user) {  
  return jwt.sign(user.toJSON(), process.env.secret, {
    expiresIn: 10800 // in seconds
  });
}

export default router;