import User from '../models/userModel'

const Users = (req, res) => {
  const {name, username, password}= req.body;
  if(!name || !username) res.send('Please send name and username');
  let user = new User({name, username, password });
  user.save( (err, user) => {
    if (err) console.log('User not saved successfully!', err);
    res.send('users saved successfully ');
  });
};

export default Users;



// user.dudify(function (err, name) {
//   if (err) throw err;
//   console.log('Your new name is ' + name);
// });