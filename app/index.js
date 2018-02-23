import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import _ from 'lodash';


import routes from './controller';
import Config from './config/index';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = 'shamis';

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
	console.log('payload received &&****', jwt_payload);
	// usually this would be a database call:
	var user = users[_.findIndex(users, { id: jwt_payload.id })];
	if (user) {
		next(null, user);
	} else {
		next(null, false);
	}
});

passport.use(strategy);

const app = express();
app.use(passport.initialize());
// app.use (morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000",
	// Credentials: true,
	// optionsSuccessStatus: 200

}));

// app.use(logger());



let { db, port } = Config;
port = process.env.PORT || port;

if (process.env.ENV == 'Test') {
	mongoose.connect(db);
} else {
	mongoose.connect(db);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

//remove this code to different file

var users = [
	{
		id: 1,
		name: 'shami',
		password: 'hello1'
	},
	{
		id: 2,
		name: 'test',
		password: 'test'
	}
];

app.post("/login", function (req, res) {
	console.log('*****', req.body);
	if (req.body.name && req.body.password) {
		var name = req.body.name;
		var password = req.body.password;
	}
	// usually this would be a database call:
	var user = users[_.findIndex(users, { name: name })];
	if (!user) {
		res.status(401).json({ message: "no such user found" });
	}

	if (user.password === req.body.password) {
		// from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
		var payload = { id: user.id };
		var token = jwt.sign(payload, jwtOptions.secretOrKey);
		res.json({ message: "ok", token: token });
	} else {
		res.status(401).json({ message: "passwords did not match" });
	}
});

app.get("/secret", passport.authenticate('jwt', { session: false }), function (req, res) {
	res.json({ message: "Success! You can not see this without a token" });
});



app.listen(port, () => console.log(`Example app listening on port ${port}`));






// app.post('/', (req, res)=>	console.log('****req.body****', req.body) );

// let buff = new Buffer('hello', 'utf8');
// console.log('****buff*****', buff.toJSON());
// const [,,first] = buff; 
// console.log('****buff destructuring*****', first);
// buff.write('ti');
// console.log('****buff destructuring*****', buff.toString());





 // app.use(function (req, res, next) {
		 // 	console.log('****req.body****',req.body);
		 // 	next();
		 // })