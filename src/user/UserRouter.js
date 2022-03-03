const express = require('express');
const jwt = require('jsonwebtoken');
const UserService = require('./UserService');
const UserValidation = require('./UserValidation');
const router = express.Router();
const jwtSecret = 'coding-challenge';
router.post(
  '/api/register',
  UserValidation.email,
  UserValidation.password,
  UserValidation.userExists,
  async (req, res) => {
    await UserService.save(req);
    const token = jwt.sign({ email: req.body.email }, jwtSecret);
    return res.status(201).send({ token });
  }
);

router.post('/api/login', UserValidation.email, UserValidation.password, async (req, res) => {
  await UserService.save(req);
  const token = jwt.sign({ email: req.body.email }, jwtSecret);
  return res.status(201).send({ token });
});

module.exports = router;
