const express = require('express');

const TokenService = require('../auth/TokenService');
const UserService = require('./UserService');
const UserValidation = require('./UserValidation');

const router = express.Router();

router.post(
  '/api/register',
  UserValidation.email,
  UserValidation.password,
  UserValidation.userExists,
  async (req, res) => {
    await UserService.save(req);
    const token = TokenService.createToken(req.body.email);
    return res.status(201).send({ token });
  }
);

router.post('/api/login', UserValidation.email, UserValidation.password, async (req, res) => {
  const user = await UserService.save(req);
  console.log('body', req.body);
  const token = TokenService.createToken(req.body.email);
  return res.status(200).send({ token });
});

module.exports = router;
