import User from '../models/userModel'

const Users = (req, res) => {
  console.log(req.body);
  const { name, username, password } = req.body;
  if (!name || !username) res.send('Please send name and username');
  let user = new User({ name, username, password });
  user.save((err, user) => {
    if (err) console.log('User not saved successfully!', err);
    res.send({msg: 'user saved successfully', user});
  });
};

export default Users;


