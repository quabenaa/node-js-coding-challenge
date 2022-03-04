const express = require('express');
const { check } = require('express-validator');

const AuthController = require('./AuthController');
const tokenAuthentication = require('../middleware/tokenAuthentication');
const validationResult = require('../middleware/validationResults');

const router = express.Router();

router.post('/api/login', check('email').isEmail(), check('password').exists(), validationResult, AuthController.login);
router.post('/api/logout', tokenAuthentication, AuthController.logout);

module.exports = router;
