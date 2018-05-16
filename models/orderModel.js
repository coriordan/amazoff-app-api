import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// OrderItem schema
const OrderItemSchema = new Schema({
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
  price: {
    currency: String,
    amount: Number,
  }, 
}, {timestamps: true});

// Order schema
const OrderSchema = new Schema({
  items: [OrderItemSchema],
}, {timestamps: true});

function populateProduct(next) {  //eslint-disable-line
  this.populate({path: 'items.product'});
  next();
}

OrderSchema.pre('find', populateProduct);
OrderSchema.pre('findOne', populateProduct);

export default mongoose.model('Order', OrderSchema);
