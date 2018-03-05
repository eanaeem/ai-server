'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _utils = require('../lib/utils');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(req, res) {
	var _req$body = req.body,
	    username = _req$body.username,
	    name = _req$body.name,
	    password = _req$body.password;

	console.log('req.body', req.body);
	var user = _userModel2.default.find({ username: username }, function (err, user) {
		console.log('inside login funct***', user);

		var _user = _slicedToArray(user, 1),
		    _user$ = _user[0],
		    username = _user$.username,
		    _id = _user$._id;

		if (user[0].password === password) {
			var payload = { id: _id, username: username };
			var token = _jsonwebtoken2.default.sign(payload, _utils.jwtOptions.secretOrKey);
			res.json({ message: "ok", token: token });
		} else {
			res.status(401).json({ message: "no such user found" });
		}
	});
};

exports.default = Login;