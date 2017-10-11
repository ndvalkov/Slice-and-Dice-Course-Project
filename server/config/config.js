/* globals __dirname */

const bodyParser = require('body-parser');
const express = require('express');
const compression = require('compression');

const applyTo = (app, dev) => {

  app.use(bodyParser.json());
  app.use(compression());

  if (dev) {
    app.use(express.static('app'));
    app.use(express.static('.tmp'));
  } else {
    app.use(express.static('dist'));
  }

  app.use('/bower_components', express.static('bower_components'));
};

module.exports = { applyTo };
