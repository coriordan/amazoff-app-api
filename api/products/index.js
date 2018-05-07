import express from 'express';
import Product from '../../models/productModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-true

// Get all Product
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res.send(products);
}));

// Get a Product
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  return res.send(product);
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