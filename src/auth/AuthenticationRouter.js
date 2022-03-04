const express = require('express');
const { check } = require('express-validator');

const AuthenticationController = require('./AuthenticationController');
const tokenAuthentication = require('../middleware/tokenAuthentication');
const UserValidation = require('../middleware/UserValidation');
const validationResult = require('../middleware/validationResults');

const router = express.Router();

router.post(
  '/register',
  check('email').isEmail(),
  check('password').exists(),
  UserValidation.emailAlreadyExist,
  validationResult,
  AuthenticationController.register
);

router.post(
  '/login',
  check('email').isEmail(),
  check('password').exists(),
  validationResult,
  AuthenticationController.login
);
router.post('/logout', tokenAuthentication, AuthenticationController.logout);

module.exports = router;
