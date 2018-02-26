import express from 'express';
import multer from 'multer';

import Users from './users';
import Login from './login'
import FileUpload from './fileUpload';

import User from '../models/userModel'
import Shopify from './shopify';
import axios from 'axios';
import ListTasks from './listTasks';

let router = express.Router();
const upload = multer();

router.get('/test', (req, res) => {
	

res.send('test data for server ** ');
});

router.post('/fileUpload', upload.single('file'), FileUpload);
router.get('/listTasks', ListTasks);
router.post('/login', Login);
router.get('/shopify', Shopify);
router.post('/users', Users);
router.get('/users', (req, res) => {
	User.find({}, function (err, users) { res.send(users); });
});

export default router;
