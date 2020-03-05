const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const logger = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(logger('dev'))
app.use('/v1', routes);


module.exports =  app ;