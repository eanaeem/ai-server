import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';

import routes from './controller';

const app = express();
app.use(passport.initialize());

// app.use(logger());

// mongoose.connect('mongodb://sham:mitcham1@aws-eu-west-1-portal.10.dblayer.com:18000/ena?ssl=true', (err) => {
// 	if (err) console.log('***not connected to db****');
// 	else console.log('****connected to db****');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes)

app.listen(3001, () => console.log('Example app listening on port 3001!'));






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