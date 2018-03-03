import User from '../models/userModel'
import { jwtOptions } from '../lib/utils';
import jwt from 'jsonwebtoken';

const Login = (req, res) => {
	const { username, name, password } = req.body;
	console.log('req.body', req.body);
	const user = User.find({ username }, (err, user) => {
		console.log('inside login funct***', user);
		const [{ username, _id }] = user;
		if (user[0].password === password) {
			const payload = { id: _id };
			const token = jwt.sign(payload, jwtOptions.secretOrKey);
			res.json({ message: "ok", token: token });
		} else {
			res.status(401).json({ message: "no such user found" });
		}
	});
};


export default Login;