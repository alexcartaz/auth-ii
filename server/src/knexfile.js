// Update with your config settings.
const path = require('path');

const dbPath = path.resolve(__dirname, 'authiiDev.db');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // filename: './src/authiiDev.sqlite3'
      filename: dbPath,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
