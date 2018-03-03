import express from 'express';
import multer from 'multer';

import FileUpload from './fileUpload';

import User from '../models/userModel'
import Shopify from './shopify';
import passport from 'passport';
import Users from './users';
import GetUsers from './getUsers';

let router = express.Router();
 const upload = multer();

router.get('/test',  (req,res)=>{
	console.log('test request');
	res.send('test path return data');
});


router.post('/fileUpload', upload.single('file'), FileUpload);
router.get('/shopify', Shopify);
router.post('/users', Users);
router.get('/getUsers', GetUsers);
export default router;
