'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.jwtOptions = undefined;

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtractJwt = _passportJwt2.default.ExtractJwt;

var jwtOptions = exports.jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
	secretOrKey: 'secretKeyForJwt'
};