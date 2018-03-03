import express from 'express';
import multer from 'multer';

import Users from './users';
// import Login from './login'
import FileUpload from './fileUpload';

import User from '../models/userModel'
import Shopify from './shopify';
import passport from 'passport';

import axios from 'axios';

let router = express.Router();
 const upload = multer();

router.get('/test',  (req,res)=>{
	console.log('test request');
	res.send('test path return data');
});


router.post('/fileUpload', upload.single('file'), FileUpload);
// router.post('/login', Login);
router.get('/shopify', Shopify);
router.post('/users', Users);
router.get('/users', (req,res) => {
	User.find({}, function(err, users){res.send(users);});
});

export default router;
