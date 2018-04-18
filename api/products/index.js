import express from 'express';
import Product from '../../models/productModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-true

// Get all Product
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res.send(products);
}));

// Create Product
router.post('/', asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
}));

function handleError(res, err) {
  return res.status(500).send(err);
}

export default router;