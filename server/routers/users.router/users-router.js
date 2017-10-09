var express = require('express'),
  authKeyGenerator = require('../../../utils/auth-key-generator');

const attachTo = (app, data) => {
  var usersRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  usersRouter
    .post('/', function (req, res) {
      req.checkBody('username', 'Username is required').notEmpty();
      req.checkBody('passHash', 'Password is required').notEmpty();

      req.sanitizeBody('username').escape();
      req.sanitizeBody('passHash').escape();

      req.sanitizeBody('username').trim();
      req.sanitizeBody('passHash').trim();

      req.checkBody('username', 'Invalid username length')
        .matches(/^([a-zA-Z0-9_-]){4,30}$/);

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var user = req.body;

            user.authKey = authKeyGenerator.get(user.username.length);
            data.users.findByUsername(user.username)
              .then((userFromDb) => {
                if (userFromDb) {
                  res.status(400)
                    .json('Username is already taken');
                } else {
                  data.users.create(user)
                    .then(() => {
                      res.status(201)
                        .json({
                          result: user
                        });
                    })
                }
              })
              .catch(() => {
                res.status(500)
                  .json('Oops! Something went wrong.');
              });
          }
        })
    })
    .put('/auth', function (req, res) {
      req.checkBody('username', 'Username is required').notEmpty();
      req.checkBody('passHash', 'Password is required').notEmpty();

      req.sanitizeBody('username').escape();
      req.sanitizeBody('passHash').escape();

      req.sanitizeBody('username').trim();
      req.sanitizeBody('passHash').trim();

      req.checkBody('username', 'Invalid username length')
        .matches(/^([a-zA-Z0-9_-]){4,30}$/);

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var user = req.body;
            data.users.findByUsername(user.username)
              .then((userFromDb) => {
                if (!userFromDb || userFromDb.passHash !== user.passHash) {
                  res.status(404)
                    .json('Username or password is invalid');
                } else {
                  res.json({
                    result: {
                      username: userFromDb.username,
                      authKey: userFromDb.authKey
                    }
                  });
                }
              })
              .catch(() => {
                res.status(500)
                  .json('Oops! Something went wrong.');
              });
          }
        });
    });

  app.use('/api/users', usersRouter);
};

module.exports = {attachTo};
