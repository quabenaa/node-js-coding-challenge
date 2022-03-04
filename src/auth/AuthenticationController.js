const TokenService = require('./TokenService');
const UserService = require('../user/UserService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserService.findByEmail(email);

  if (!user) {
    return res.status(401).send('User does not exists');
  }

  const isPasswordValid = await UserService.validatePassword(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send('User does not exists');
  }

  const token = TokenService.createToken({ email: req.body.email, loginTime: Date.now() });
  return res.status(200).send({ token });
};

const logout = async (req, res) => {
  await TokenService.deactivate(req.authenticatedUser);
  return res.status(200).send();
};

const register = async (req, res) => {
  let user = { ...req.body };
  await UserService.save(user);
  const token = TokenService.createToken({ email: user.email, loginTime: Date.now() });
  return res.status(201).send({ user, token });
};

module.exports = { login, logout, register };
