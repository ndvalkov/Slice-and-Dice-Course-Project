var express = require('express'),
  authKeyGenerator = require('../../utils/auth-key-generator');

const attachTo = (app, data) => {
  var usersRouter = express.Router();

  usersRouter
    .post('/', function (req, res) {
      var user = req.body;
      user.authKey = authKeyGenerator.get(user.username);
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
    })
    .put('/auth', function (req, res) {
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
    });

  app.use('/api/users', usersRouter);
};

module.exports = {attachTo};
