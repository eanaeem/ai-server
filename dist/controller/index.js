'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _fileUpload = require('./fileUpload');

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _shopify = require('./shopify');

var _shopify2 = _interopRequireDefault(_shopify);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _getUsers = require('./getUsers');

var _getUsers2 = _interopRequireDefault(_getUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var upload = (0, _multer2.default)();

router.get('/test', function (req, res) {
	console.log('test request');
	res.send('test path return data');
});

router.post('/fileUpload', upload.single('file'), _fileUpload2.default);
router.get('/shopify', _shopify2.default);
router.post('/users', _users2.default);
router.get('/getUsers', _getUsers2.default);
exports.default = router;