import express from 'express';
import Users from './users';
import Login from './login'

import User from '../models/userModel'

let router = express.Router();



router.post('/login', Login);
router.post('/users', Users);
router.get('/users', (req,res) => {
	User.find({}, function(err, users){res.send(users);});
});

export default router;
