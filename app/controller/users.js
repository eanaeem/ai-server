import User from '../models/userModel'

const Users = (req, res) => {
  console.log(req.body);
  const { name, username, password } = req.body;
  if (!password || !name) { res.send('Please send name and username'); return; }
  let user = new User({ name, username, password });
  user.save()
    .then((user) => {
      res.status(200).json({ msg: 'user saved successfully', user });
    })
    .catch(err => {
      console.log(`error saving user: ${err}`);
      res.send(err);
    });
};

export default Users;


