import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  items: [{ type: Schema.Types.ObjectId, ref: 'LineItem'}]
}, {timestamps: true});

export default mongoose.model('Cart', CartSchema);
