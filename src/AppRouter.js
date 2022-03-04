const express = require('express');
const router = express.Router();

const UserRouter = require('./user/UserRouter');
const AuthRouter = require('./auth/AuthRouter');

router.use(AuthRouter);
router.use(UserRouter);

module.exports = router;
