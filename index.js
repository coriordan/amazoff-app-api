import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from './api/products';
import authRouter from './api/auth';
import usersRouter from './api/user';
import cartRouter from './api/cart';
import orderRouter from './api/order';
import mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';
import {loadProducts} from './productsData';
import logger from 'morgan';

dotenv.config();

export const app = express();
const port = process.env.PORT;

// Connect to database
if (process.env.NODE_ENV == 'test') {
  // use mockgoose for testing
  const mockgoose = new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(() => {
    mongoose.connect(process.env.mongoDB);
  });
} else {
  // use real deal for everything else
  mongoose.connect(process.env.mongoDB);
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: '+ err);
  process.exit(-1);
});

if (process.env.seedDb && process.env.NODE_ENV == 'test') {
  loadProducts();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use(express.static('public'));

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(err);
  next();
});

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
