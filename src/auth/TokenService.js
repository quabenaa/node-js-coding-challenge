const jwt = require('jsonwebtoken');

const jwtSecret = 'coding-challenge';

const createToken = (email) => {
  return jwt.sign({ email }, jwtSecret);
};

const verify = (token) => {
  return jwt.verify(token, jwtSecret);
};

module.exports = {
  createToken,
  verify,
};
