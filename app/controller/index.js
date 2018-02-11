import express from 'express';
import Users from './users';
import Login from './login'

import multer from 'multer';
// const upload = multer();
import FileUpload from './fileUpload';

import User from '../models/userModel'

let router = express.Router();

const storage = multer.diskStorage({
	destination: './files',
	filename(req, file, cb) {
	  cb(null, `${file.originalname}`);
	},
 });
 
 const upload = multer({ storage });


router.get('/test', (req,res)=>{
	debugger;	
	res.send('test data for server ** ');
});

router.post('/fileUpload', upload.single('file'), FileUpload);
router.post('/login', Login);
router.post('/users', Users);
router.get('/users', (req,res) => {
	User.find({}, function(err, users){res.send(users);});
});

export default router;
