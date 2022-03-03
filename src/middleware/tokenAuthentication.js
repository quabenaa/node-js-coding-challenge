const UserService = require('../user/UserService');
const TokenService = require('../auth/TokenService');

const tokenAuthentication = async (req, res, next) => {
  const authorization = req.header.authorization;
  if (authorization) {
    const token = authorization.substring(7);
    const user = await TokenService.verify(token);
    req.authenticatedUser = user;
  }
  next();
};

module.exports = tokenAuthentication;
