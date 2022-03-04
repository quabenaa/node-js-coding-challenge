const bcrypt = require('bcrypt');
const User = require('./User');

const save = async (user) => {
  const hashPassword = await bcrypt.hash(user.password, 10);
  return await User.insertOne({ ...user, password: hashPassword });
};

const findByEmail = async (email) => {
  return User.find({ email });
};

const validatePassword = async (password, encyrptedPassword) => {
  return await bcrypt.compare(password, encyrptedPassword);
};

module.exports = { save, findByEmail, validatePassword };
