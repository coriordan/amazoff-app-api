import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import auth from '../../passportConfig';

const router = express.Router(); // eslint-disable-true

// user profile
router.get('/profile', auth.requireAuth, (req, res) => {
  res.send({userprofile: "true"});
});

// register
router.post('/', asyncHandler(async (req, res) => {
  const {email} = req.body;
  
  // check for existing user
  const existingUser = await User.findOne({email}).catch((err) => {
    return res.status(403).send(err);
  });
  
  if (existingUser) {
    return res.status(422).send({ error: 'That email address is already in use.' });
  }
  
  const user = await User.create(req.body);
  
  return res.status(201).json(user);
}));

export default router;