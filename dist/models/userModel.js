'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String, required: true },
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

userSchema.methods.dudify = function () {
  this.name = this.name + '-dude';
  return this.name;
};

var User = _mongoose2.default.model('User', userSchema);

exports.default = User;