'use strict';

const express = require('express');

var bodyParser = require('body-parser');

const mongoDBConnection = require('./src/middleware/mongoDBConnection');

const UserRouter = require('./src/user/UserRouter');

const app = express();

app.set('port', 4489);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoDBConnection);

app.use(UserRouter);

module.exports = app;
