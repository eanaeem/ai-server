import express from 'express';
import multer from 'multer';

import Users from './users';
import Login from './login'
import FileUpload from './fileUpload';

import User from '../models/userModel'

let router = express.Router();
// const storage = multer.diskStorage({
// 	destination: './files',
// 	filename(req, file, cb) {
// 	  cb(null, `${file.originalname}`);
// 	},
//  });
 
//  const upload = multer({ storage });
 const upload = multer();


router.get('/test', (req,res)=>{
	res.send('test data for server ** ');
});

router.post('/fileUpload', upload.single('file'), FileUpload);
router.post('/login', Login);
router.post('/users', Users);
router.get('/users', (req,res) => {
	User.find({}, function(err, users){res.send(users);});
});

export default router;
