const TokenService = require('../auth/TokenService');

const tokenAuthentication = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers['authorization'].split(' ')[1];
    const user = await TokenService.verify(token);
    req.authenticatedUser = user;
  }
  next();
};

module.exports = tokenAuthentication;
