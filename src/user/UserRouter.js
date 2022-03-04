const express = require('express');
const { check } = require('express-validator');

const UserController = require('./UserController');
const validationResult = require('../middleware/validationResults');
const UserValidation = require('./UserValidation');
const tokenAuthentication = require('../middleware/tokenAuthentication');

const router = express.Router();

router.post(
  '/api/register',
  check('email').isEmail(),
  check('password').exists(),
  UserValidation.emailAlreadyExist,
  validationResult,
  UserController.register
);

router.get('/api/profile', tokenAuthentication, UserController.profile);

module.exports = router;
