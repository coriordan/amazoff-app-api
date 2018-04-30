import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// LineItem schema
const LineItemSchema = new Schema({
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
}, {timestamps: true});

// Cart schema
const CartSchema = new Schema({
  items: [LineItemSchema],
}, {timestamps: true});

function populateProduct(next) {  //eslint-disable-line
  this.populate({path: 'items.product'});
  next();
}

CartSchema.pre('find', populateProduct);
CartSchema.pre('findOne', populateProduct);

export default mongoose.model('Cart', CartSchema);
