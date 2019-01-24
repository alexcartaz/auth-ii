const bcrypt = require('bcryptjs');
const userDb = require('../../db/user.js');

module.exports = {
  type: 'POST',
  url: '/login/',
  handler: (req, res) => {
    const user = req.body;
    // if add validators, promise.all goes here
    userDb.getLogin(user.username)
      .then((returnedUser) => {
        if (returnedUser && bcrypt.compareSync(user.password, returnedUser.password)) {
          req.session.user = user;
          res.status(201).json(`welcome ${user.username}`);
        } else {
          res.status(400).json({ error: 'Not authenticated.' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error verifying user in database.' });
      });
  },
};
