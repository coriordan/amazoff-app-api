import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema({
  format: {type: String, required: true},
  price: {
    currency: String,
    amount: Number,
  },
}, {timestamps: true});

const ProductSchema = new Schema({
  title: {type: String, required: true},
  imageUrl: String,
  type: {type: String, required: true},
  description: String,
  published: {type: Date, required: true},
  authors: [{type: String}],
  variants: [ProductVariantSchema],
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema);
