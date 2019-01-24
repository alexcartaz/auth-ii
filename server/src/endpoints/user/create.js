const bcrypt = require('bcryptjs');
const userDb = require('../../db/user.js');
const validators = require('../../validators/user/create.js');

module.exports = {
  type: 'POST',
  url: '/register/',
  handler: (req, res) => {
    const { username, password, department } = req.body;
    const newUser = {
      username,
      password,
      department,
    };
    const newKeys = Object.keys(newUser);
    const validations = newKeys.map(key => validators[key](newUser));
    Promise.all(validations).then(() => {
      const hash = bcrypt.hashSync(newUser.password, 14);
      newUser.password = hash;
      userDb.insert(newUser)
        .then((id) => {
          res.status(201).json(id);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Error saving new user to database.' });
        });
    }).catch(err => res.status(err.statusCode || 500).json(err.stack));
  },
};
