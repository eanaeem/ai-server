import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import routes from './controller';
import Config from './config/index';


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



let { db, port  } = Config;
port = process.env.PORT || port;

if (process.env.ENV == 'Test') {
	mongoose.connect(db);
} else {
	mongoose.connect(db);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port , () => console.log(`Example app listening on port ${port}`));






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