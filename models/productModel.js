import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {type: String, required: true},
  imageUrl: String,
  type: {type: String, required: true},
  description: String,
  published: {type: Date, required: true},
  authors: [{type: String}],
  price: {
    currency: String,
    amount: Number,
  },
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema);

