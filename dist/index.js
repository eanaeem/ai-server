'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _jwtStrategy = require('./lib/jwtStrategy');

var _jwtStrategy2 = _interopRequireDefault(_jwtStrategy);

var _login = require('./controller/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_passport2.default.use(_jwtStrategy2.default);

var app = (0, _express2.default)();
app.use(_passport2.default.initialize());

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('combined'));
app.use((0, _morgan2.default)());

// app.use((req, res, next)=>{
// 	debugger;
// 	next();
// });

var db = _index2.default.db,
    port = _index2.default.port,
    remoteDb = _index2.default.remoteDb;

port = process.env.PORT || port;

_mongoose2.default.connect(remoteDb, function (err) {
	if (err) console.log('*** Error connecting to db****');else console.log('****connected to db****');
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.post('/login', _login2.default);
app.use('/api', _passport2.default.authenticate('jwt', { session: false }), _controller2.default);

app.listen(port, function () {
	return console.log('Example app listening on port ' + port);
});

// app.use(cors({
// 	origin: "http://localhost:3004",
// Credentials: true,
// optionsSuccessStatus: 200

// }));