'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const AppRouter = require('./AppRouter');

const app = express();

app.set('port', 4489);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter);

module.exports = app;
