import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  items: [{type: Schema.Types.ObjectId, ref: 'LineItem'}],
}, {timestamps: true});

function populateItems(next) {  //eslint-disable-line
  this.populate({path: 'items', //eslint-disable-line
    populate: {path: 'product'},
  });
  next();
}

CartSchema.pre('find', populateItems);
CartSchema.pre('findOne', populateItems);

export default mongoose.model('Cart', CartSchema);
