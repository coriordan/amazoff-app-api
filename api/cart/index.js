import express from 'express';
import asyncHandler from 'express-async-handler';
import Cart from '../../models/cartModel';
import Product from '../../models/productModel';
import LineItem from '../../models/lineItemModel';

const router = express.Router(); // eslint-disable-true

// get a cart
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const cart = await Cart.findOne({_id: id});

  return res.send({cart});
}));

// create a cart
router.post('/', asyncHandler(async (req, res) => {
  const cart = await Cart.create({});
  return res.status(201).json(cart);
}));

// add to cart or change quantity
router.put('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productId = req.body.product;
  const lineItemId = req.body.lineItem;
  const quantity = req.body.quantity || 1;

  let cart = await Cart.findOne({_id: id});

  if(!cart) return res.status(404).json({error: 'Cart does not exist'});
  
  if (req.query.action === 'updateQuantity') { // update quantity of existing item
    let lineItem = cart.items.find(
      item => item._id.toString() === lineItemId);

    if (!lineItem) return res.status(404).json({error: 'Cart item does not exist'});
      
    await lineItem.update({quantity: quantity}); // apply new quantity
  } else {
    let existingItem = cart.items.find(
      item => item.product._id.toString() === productId); // is item already in cart

    if (existingItem) {
      existingItem.quantity++;
      await existingItem.save();
    } else {
      const product = await Product.findById(productId);
      const lineItem = await LineItem.create({product: product._id, 
                     cart: cart._id, 
                     quantity: 1});

      cart.items.push(lineItem); // add item to cart
    }
  }
  
  await cart.save();
  cart = await Cart.findOne({_id: id}); // reload cart
  res.status(201).json(cart);
}));

// delete from cart
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const lineItemId = req.body.lineItem;

  const lineItem = await LineItem.findById(lineItemId);
  if (!lineItem) return res.status(404).json({error: 'LineItem does not exist'});
  
  let cart = await Cart.findOne({_id: id});
                        
  if(!cart) return res.status(404).json({error: 'Cart does not exist'});

  if (lineItem.quantity > 1) {
    lineItem.quantity--; // decrease quantity by 1
    await lineItem.save();
  } else {
    cart.items.pull(lineItem._id); // remove item from cart
    await lineItem.remove();
  }
  
  await cart.save();
  cart = await Cart.findOne({_id: id}); // reload cart
  return res.status(200).json(cart);
}));

export default router;
