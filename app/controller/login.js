import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;


const Login = (req, res) => {
	const { name, email, password } = req.body;
	var token = jwt.sign(email, 'hello123');
	console.log('**Login**', token);
	res.send(token);
};

export default Login;