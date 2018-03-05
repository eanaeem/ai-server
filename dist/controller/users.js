'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function Users(req, res) {
  console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      username = _req$body.username,
      password = _req$body.password;

  if (!password || !name) {
    res.send('Please send name and username');return;
  }
  var user = new _userModel2.default({ name: name, username: username, password: password });
  user.save().then(function (user) {
    res.status(200).json({ msg: 'user saved successfully', user: user });
  }).catch(function (err) {
    console.log('error saving user: ' + err);
    res.send(err);
  });
};

exports.default = Users;