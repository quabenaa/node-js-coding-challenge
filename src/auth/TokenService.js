const jwt = require('jsonwebtoken');

const DeactivatedToken = require('./DeactivatedToken');

const jwtSecret = 'coding-challenge';

const createToken = (email) => {
  return jwt.sign({ email }, jwtSecret);
};

const verify = (token) => {
  DeactivatedToken.
  return jwt.verify(token, jwtSecret);
};

const deactivate = (user) => {
  const { email, token } = user;
  return DeactivatedToken.insertOne({ email, token });
};

module.exports = {
  createToken,
  verify,
  deactivate,
};
