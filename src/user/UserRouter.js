const express = require('express');
const bcrypt = require('bcrypt');

const TokenService = require('../auth/TokenService');
const UserService = require('./UserService');
const UserValidation = require('./UserValidation');
const tokenAuthentication = require('../middleware/tokenAuthentication');

const router = express.Router();

router.post(
  '/api/register',
  UserValidation.email,
  UserValidation.password,
  UserValidation.userExists,
  async (req, res) => {
    let user = { ...req.body };
    await UserService.save(user);
    const token = TokenService.createToken(user.email);
    return res.status(201).send({ user, token });
  }
);

router.post('/api/login', UserValidation.email, UserValidation.password, async (req, res) => {
  const { email, password } = req.body;
  const user = await UserService.findByEmail(email);

  if (!user) {
    return res.status(401).send('User does not exists');
  }

  const isPasswordValid = await UserService.validatePassword(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send('User does not exists');
  }

  const token = TokenService.createToken(req.body.email);
  return res.status(200).send({ token });
});

router.get('/api/profile', tokenAuthentication, async (req, res) => {
  if (!req.authenticatedUser) {
    return res.status(401).send('Unauthorized User Update');
  }

  return res.status(200).send({ email: req.authenticatedUser.email });
});

router.get('/api/logout', tokenAuthentication, async (req, res) => {
  return res.status(200).send();
});

module.exports = router;
