const express = require('express');
const router = express.Router();

const ProfileRouter = require('./user/ProfileRouter');
const AuthenticationRouter = require('./auth/AuthenticationRouter');
const basePath = '/api';

router.use(basePath, AuthenticationRouter);
router.use(basePath, ProfileRouter);

module.exports = router;
