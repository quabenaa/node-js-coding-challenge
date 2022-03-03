const UserService = require('../user/UserService');
const TokenService = require('../auth/TokenService');

const tokenAuthentication = async (req, res, next) => {
  console.log(req);
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const token = bearerHeader.substring(7);
    const user = await TokenService.verify(token);
    req.authenticatedUser = user;
  }
  next();
};

module.exports = tokenAuthentication;
