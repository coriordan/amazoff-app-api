import express from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../../models/orderModel';
import Cart from '../../models/cartModel';

const router = express.Router(); // eslint-disable-true

// get all Orders
router.get('/', asyncHandler(async (req, res)=> {
  const orders = await Order.find();
  return res.send(orders);
}));

// Get an Order
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  return res.send(order);
}));

// Create Order from existing Cart
router.post('/', asyncHandler(async (req, res) => {
  const cartId = req.body.cart;
  
  let cart = await Cart.findOne({_id: cartId});
  if(!cart) return res.status(404).json({error: 'Cart does not exist'});
  
  let order = new Order(); // create a new order
  
  for (let item of cart.items) {
    order.items.push({product: item.product._id, 
                      quantity: item.quantity, 
                      price: item.product.price}); // copy over lineItems 
  }

  await order.save();
  cart.order = order;
  await cart.save();
  res.status(201).json(order);
}));

export default router;