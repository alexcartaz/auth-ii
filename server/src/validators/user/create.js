const ValidationError = require('../validationError');

module.exports = {
  username: ({ username }) => {
    if (username === '' || typeof username !== 'string' || username.length > 128) {
      throw new ValidationError('Invalid username.');
    }
    return true;
  },
  password: ({ password }) => {
    if (password === '' || typeof password !== 'string' || password.length > 128 || password.length < 6) {
      throw new ValidationError('Invalid password.');
    }
    return true;
  },
  department: ({ department }) => {
    if (department === '' || typeof department !== 'string' || department.length > 128) {
      throw new ValidationError('Invalid department.');
    }
    return true;
  },
};
