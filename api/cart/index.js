import express from 'express';
import asyncHandler from 'express-async-handler';
import Cart from '../../models/cartModel';
import Product from '../../models/productModel';

const router = express.Router(); // eslint-disable-true

// get a cart
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const cart = await Cart.findById(id)
                         .populate({
                           path: 'items',
                           populate: {path: 'product'}
                         });
  return res.send({cart});
}));

// create a cart
router.post('/', asyncHandler(async (req, res) => {
  const cart = await Cart.create({});
  return res.status(201).json(cart);
}));

// add to cart
router.post('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productId = req.body.product;
  const quantity = req.body.quantity;
  
  const cart = await Cart.findById(id);
  const product = await Product.findById(productId);
  
  const lineItem = await LineItem.create({product: product._id, 
                   cart: cart._id, 
                   quantity: quantity});

  res.status(201).json(lineItem);
}));

export default router;