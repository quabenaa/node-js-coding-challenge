const UserService = require('../user/UserService');

const emailAlreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const userExist = await UserService.findByEmail(email);

  if (userExist) {
    return res.status(400).send({ message: 'The email is already used' });
  }
  next();
};

module.exports = { emailAlreadyExist };
