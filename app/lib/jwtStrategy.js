import passportJWT from 'passport-jwt';
import User from '../models/userModel';
import { jwtOptions } from './utils';

const JwtStrategy = passportJWT.Strategy;

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  User.find({ _id: jwt_payload.id }, (err, user) => {
    if (err) next(err, null);
    next(null, user);
  });

});
export default strategy;

