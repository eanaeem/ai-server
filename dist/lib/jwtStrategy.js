'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JwtStrategy = _passportJwt2.default.Strategy;

var strategy = new JwtStrategy(_utils.jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  _userModel2.default.find({ _id: jwt_payload.id }, function (err, user) {
    if (err) next(err, null);
    next(null, user);
  });
});
exports.default = strategy;