const UserService = require('./UserService');

const emailAlreadyExist = async (req, res, next) => {
  const user = req.body;
  const userExist = await UserService.findByEmail(user.email);

  if (userExist) {
    return res.status(400).send({ message: 'The email is already used' });
  }
  next();
};

module.exports = { emailAlreadyExist };
