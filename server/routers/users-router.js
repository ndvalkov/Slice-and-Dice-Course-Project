var express = require('express'),
  authKeyGenerator = require('../../utils/auth-key-generator');

const attachTo = (app, data) => {
  var usersRouter = express.Router();

  usersRouter
    .post('/', function (req, res) {
      var user = req.body;
      user.authKey = authKeyGenerator.get(user.id);

      data.users.findByUsername(user.username)
        .then((user) => {
          if (user) {
            res.status(400)
              .json('Username is already taken');
          }
        })
        .then(() => {
          data.users.create(user);
        })
        .then(() => {
          res.status(201)
            .json({
              result: user
            });
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    })
    .put('/auth', function (req, res) {

      var user = req.body;
      var dbUser = db('users').find({
        usernameLower: user.username.toLowerCase()
      });

      if (!dbUser || dbUser.passHash !== user.passHash) {
        res.status(404)
          .json('Username or password is invalid');
      } else {
        res.json({
          result: {
            username: dbUser.username,
            authKey: dbUser.authKey
          }
        });
      }
    });

  app.use('/api/users', usersRouter);
};

module.exports = { attachTo };
