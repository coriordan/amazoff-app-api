import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LineItemSchema = new Schema({
  cart: {type: Schema.Types.ObjectId, ref: 'Cart'},
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
}, {timestamps: true});

export default mongoose.model('LineItem', LineItemSchema);
