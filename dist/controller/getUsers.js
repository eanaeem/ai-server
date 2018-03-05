'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _utils = require('../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mcToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN5c3RlbWFkbWluQG1hcmtldGN1YmUuaW8iLCJfaWQiOiI1OWMxMzRkM2M4ZWZiNDAwMWEyYmYxYWQiLCJpYXQiOjE1MjAwODk3ODV9.-HT_BPAZCOhozUgtfAewgqyARwxVFrU_Jb5Cy_O-jGY'; //testing the manual verification of token


var GetUsers = function GetUsers(req, res) {
  //testing token verification manually
  console.log(req.headers);
  var token = _jsonwebtoken2.default.verify(req.headers.authorization.split(' ')[1], _utils.jwtOptions.secretOrKey);
  console.log('token is ::', token);
  var token2 = _jsonwebtoken2.default.verify(mcToken, 'market-cube-key');
  console.log('token2 is ::', token2);

  _userModel2.default.find({}, function (err, users) {
    res.send(users);
  });
};

exports.default = GetUsers;