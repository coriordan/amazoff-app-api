import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import auth from '../../passportConfig';

const router = express.Router(); // eslint-disable-true

router.get('/profile', auth.requireAuth, (req, res) => {
  res.send(req.user);
});

// register
router.post('/', asyncHandler(async (req, res) => {
  // find user by email
  // if already exists, return error
  
  const user = await User.create(req.body).catch((err) => {
    res.status(500).send(err);
  });
  
  res.status(201).json(user);
}));


export default router;