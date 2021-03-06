
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(users) {
    users.increments();
    users.string('username', 128).notNullable();
    users.string('password', 128).notNullable();
    users.string('department', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
