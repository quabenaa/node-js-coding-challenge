const UserService = require('./UserService');
const TokenService = require('../auth/TokenService');

const register = async (req, res) => {
  let user = { ...req.body };
  await UserService.save(user);
  const token = TokenService.createToken(user.email);
  return res.status(201).send({ user, token });
};

const profile = async (req, res) => {
  if (!req.authenticatedUser) {
    return res.status(401).send('Unauthorized User Update');
  }
  return res.status(200).send({ email: req.authenticatedUser.email });
};

module.exports = { register, profile };
