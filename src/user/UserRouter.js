const express = require('express');
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
    return res.status(201).send({ token: '_testToken' });
  }
);

module.exports = router;
