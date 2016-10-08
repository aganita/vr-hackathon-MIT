const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');


module.exports = function(app) {

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../client')));
  app.use(express.static(path.join(__dirname, '../../node_modules')));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', require('../routes'));

  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
  });

}