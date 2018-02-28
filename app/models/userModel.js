import mongoose from 'mongoose';
let Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: {type:Date, default: Date.now },
  updated_at: Date
});

userSchema.methods.dudify = function() {
	this.name = this.name + '-dude'; 
	return this.name;
 };

let User = mongoose.model('User', userSchema);

export default User;