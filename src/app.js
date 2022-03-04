'use strict';

const express = require('express');

var bodyParser = require('body-parser');

const mongoDBConnection = require('./middleware/mongoDBConnection');

const AppRouter = require('./AppRouter');

const app = express();

app.set('port', 4489);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(mongoDBConnection);

app.use(AppRouter);

module.exports = app;
