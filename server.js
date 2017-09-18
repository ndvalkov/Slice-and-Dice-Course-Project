const init = () => {
  var express = require('express'),
    bodyParser = require('body-parser');

  var app = express();

  app.use(bodyParser.json());

  app.use(express.static('app'));
  app.use(express.static('.tmp'));
  // app.use(express.static('dist'));

  app.use('/bower_components', express.static('bower_components'));

  var port = process.env.PORT || 3000;

  app.listen(port, function () {
    console.log('Server is running at http://localhost:' + port);
  });
};

module.exports = {init};


