import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import auth from '../../passportConfig';

const router = express.Router(); // eslint-disable-true

router.get('/profile', auth.requireAuth, (req, res) => {
  res.send(req.user);
});

export default router;