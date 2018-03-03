import User from '../models/userModel'
import jwt from 'jsonwebtoken'; //testing the manual verification of token
import { jwtOptions } from '../lib/utils';

const mcToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN5c3RlbWFkbWluQG1hcmtldGN1YmUuaW8iLCJfaWQiOiI1OWMxMzRkM2M4ZWZiNDAwMWEyYmYxYWQiLCJpYXQiOjE1MjAwODk3ODV9.-HT_BPAZCOhozUgtfAewgqyARwxVFrU_Jb5Cy_O-jGY';

const GetUsers = (req, res) => {
  //testing token verification manually
  console.log(req.headers);
  const token = jwt.verify(req.headers.authorization.split(' ')[1], jwtOptions.secretOrKey);
  console.log('token is ::',token);
  const token2 = jwt.verify(mcToken, 'market-cube-key');
  console.log('token2 is ::',token2);
  

  User.find({}, (err, users) => { 
    res.send(users); 
  });

};

export default GetUsers;


