const express = require('express');
const router = express.Router();

const UserRouter = require('./user/UserRouter');
const AuthenticationRouter = require('./auth/AuthenticationRouter');
const basePath = '/api';

router.use(basePath, AuthenticationRouter);
router.use(basePath, UserRouter);

module.exports = router;
