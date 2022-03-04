const TokenService = require('../auth/TokenService');

module.exports = async (req, res, next) => {
  if (req.get('authorization')) {
    const token = req.get('authorization').split(' ')[1];
    const payload = await TokenService.verify(token);
    const isTokenDeactivated = await TokenService.findDeactivatedToken(payload.email, token);
    if (isTokenDeactivated) {
      next();
    }
    req.authenticatedUser = { ...payload, token };
  }
  next();
};
