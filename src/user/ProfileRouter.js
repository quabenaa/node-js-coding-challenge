const express = require('express');

const ProfileController = require('./ProfileController');
const tokenAuthentication = require('../middleware/tokenAuthentication');

const router = express.Router();

router.get('/profile', tokenAuthentication, ProfileController.profile);

module.exports = router;
