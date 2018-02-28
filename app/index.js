import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

// import routes from './controller';
import Config from './config/index';


const app = express();
// app.use(session({secret:'shah'}));
// app.use(passport.initialize());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
// 	origin: "http://localhost:3005",
// 	// Credentials: true,
// 	// optionsSuccessStatus: 200

// }));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(logger());

app.get('/test', (req,res)=>{
	console.log('test request');
	res.send('test path return data');
});


let { db, port, remoteDb } = Config;
port = process.env.PORT || port;

// mongoose.connect(remoteDb, { useMongoClient: true }, (err) => {
// 	if (err) console.log('*** Error connecting to db****');
// 	else console.log('****connected to db****');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
