const TokenService = require('../auth/TokenService');
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

  const token = TokenService.createToken(req.body.email);
  return res.status(200).send({ token });
};

const logout = async (req, res) => {
  await TokenService.deactivate(req.authenticatedUser);
  return res.status(200).send();
};

module.exports = { login, logout };
