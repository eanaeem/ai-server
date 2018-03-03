import passportJWT from 'passport-jwt';
import User from '../models/userModel';


let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = 'secretKeyForJwt';

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  console.log('***payload end');
  User.find({_id:jwt_payload.id},(err,user)=>{
    if(err)next(err, null);
    next(null, user);
  });
  
});

export default strategy;

