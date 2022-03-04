const TokenService = require('../auth/TokenService');

const tokenAuthentication = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers['authorization'].split(' ')[1];
    const user = await TokenService.verify(token);

    const isTokenDeactivated = await TokenService.findDeactivatedToken(user.email, token);
    if (isTokenDeactivated) {
      next();
    }

    req.authenticatedUser = { ...user, token };
  }
  next();
};

module.exports = tokenAuthentication;
