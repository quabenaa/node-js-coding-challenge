const email = (req, res, next) => {
  const user = req.body;
  if (!user.email || user.email === null) {
    return res.status(400).send({ message: 'The e-mail is invalid' });
  }
  next();
};

const password = (req, res, next) => {
  const user = req.body;
  if (!user.password || user.password === null) {
    return res.status(400).send({ message: 'The password is invalid' });
  }
  next();
};

const userExists = async (req, res, next) => {
  const user = req.body;
  const userExist = await req.db.collection('users').find({ email: user.email }).toArray();

  if (userExist.length > 0) {
    return res.status(400).send({ message: 'The email is already used' });
  }
  next();
};

module.exports = { email, password, userExists };
