const bcrypt = require('bcrypt');

const save = async (req) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const user = { ...req.body, password: hashPassword };
  await req.db.collection('users').insertOne(user);
};

module.exports = { save };
