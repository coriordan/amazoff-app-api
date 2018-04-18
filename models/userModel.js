import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String, 
    lowercase: true, 
    unique: true, 
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

UserSchema.pre('save', function(next) {
  const user = this;
  
  if (!user.isModified('password')) return next();
  
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
      
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });    
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);