const db = require('../dbConfig.js');

module.exports = {
  getLogin: function(username) {
    let query = db('users');
    return query
      .where('name', name)
      .first();
  },
  insert: function(user) {
    return db('users')
      .insert(user)
      .then(([id]) => id );
  },
};
