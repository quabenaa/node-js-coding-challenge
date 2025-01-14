const jwt = require('jsonwebtoken');

const DeactivatedToken = require('./DeactivatedToken');

const jwtSecret = 'coding-challenge';

const createToken = (payload) => {
  return jwt.sign({ ...payload }, jwtSecret);
};

const verify = (token) => {
  return jwt.verify(token, jwtSecret);
};

const findDeactivatedToken = async (email, token) => {
  return await DeactivatedToken.find({ email, token });
};

const deactivate = (user) => {
  const { email, token } = user;
  return DeactivatedToken.insertOne({ email, token });
};

module.exports = {
  createToken,
  verify,
  deactivate,
  findDeactivatedToken,
};
