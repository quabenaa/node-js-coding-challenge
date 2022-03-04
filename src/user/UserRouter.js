const express = require('express');
const { check } = require('express-validator');

const UserController = require('./UserController');
const tokenAuthentication = require('../middleware/tokenAuthentication');

const router = express.Router();

router.get('/profile', tokenAuthentication, UserController.profile);

module.exports = router;
