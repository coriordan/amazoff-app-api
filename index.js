import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from './api/products';
import authRouter from './api/auth';
import userRouter from './api/user';
import mongoose from 'mongoose';
import {loadProducts} from './productsData';
import logger from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.mongoDB);

if (process.env.seedDb) {
  loadProducts();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
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
