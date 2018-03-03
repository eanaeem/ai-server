import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import routes from './controller';
import Config from './config/index';

import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import strategy from './lib/jwtStrategy';
import Login from './controller/login';

passport.use(strategy);

const app = express();
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(logger());

// app.use((req, res, next)=>{
// 	debugger;
// 	next();
// });

let { db, port, remoteDb } = Config;
port = process.env.PORT || port;

mongoose.connect(remoteDb, { useMongoClient: true }, (err) => {
	if (err) console.log('*** Error connecting to db****');
	else console.log('****connected to db****');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/login',  Login);
app.use('/api', passport.authenticate('jwt', { session: false }), routes);

app.listen(port, () => console.log(`Example app listening on port ${port}`));




// app.use(cors({
	// 	origin: "http://localhost:3004",
	// Credentials: true,
	// optionsSuccessStatus: 200
	
	// }));