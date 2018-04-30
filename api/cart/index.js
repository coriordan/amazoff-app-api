import express from 'express';
import asyncHandler from 'express-async-handler';
import Cart from '../../models/cartModel';
import Product from '../../models/productModel';

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
    let lineItem = cart.items.id(lineItemId);

    if (!lineItem) return res.status(404).json({error: 'Cart item does not exist'});
    
    lineItem.set({quantity: quantity}); // apply new quantity
    await cart.save();
  } else {
    let existingItem = cart.items.find(
      item => item.product._id.toString() === productId); // is item already in cart

    if (existingItem) {
      existingItem.quantity++;
      await cart.save();
    } else {
      const product = await Product.findById(productId);
      cart.items.push({product: product._id, quantity: 1}); // add item to cart
      await cart.save();  
    }
  }

  res.status(201).json(cart);
}));

// delete from cart
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const lineItemId = req.body.lineItem;
  
  let cart = await Cart.findOne({_id: id});
  if (!cart) return res.status(404).json({error: 'Cart does not exist'});
    
  const lineItem = cart.items.id(lineItemId);
  if (!lineItem) return res.status(404).json({error: 'LineItem does not exist'});

  if (lineItem.quantity > 1) {
    lineItem.quantity--; // decrease quantity by 1
    await cart.save();
  } else {
    cart.items.id(lineItem._id).remove(); // remove item from cart
    cart.save();
  }

  return res.status(200).json(cart);
}));

export default router;
