const init = (dev) => {
  var express = require('express'),
    bodyParser = require('body-parser'),
    low = require('lowdb');

  var app = express(),
    db = low('data/data.json');
  db._.mixin(require('underscore-db'));

  app.use(bodyParser.json());

  if (dev) {
    app.use(express.static('app'));
    app.use(express.static('.tmp'));
  } else {
    app.use(express.static('dist'));
  }

  app.use('/bower_components', express.static('bower_components'));

  var usersRouter = require('./routers/users-router')(db);
  require('./utils/authorized-user')(app, db);
  app.use('/api/users', usersRouter);

  var port = process.env.PORT || 3000;

  app.listen(port, function () {
    console.log('Server is running at http://localhost:' + port);
  });
};

module.exports = {init};



