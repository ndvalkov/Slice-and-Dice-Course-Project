var express = require('express'),
  idGenerator = require('../utils/id-generator')(),
  authKeyGenerator = require('../utils/auth-key-generator');

module.exports = function (db) {
  var router = express.Router();

  router
    .post('/', function (req, res) {
      var user = req.body;
      user.usernameLower = user.username.toLowerCase();
      user.authKey = authKeyGenerator.get(user.id);

      if (db('users').find({
          usernameLower: user.username.toLowerCase()
        })) {
        res.status(400)
          .json('Username is already taken');
        return;
      }
      db('users').insert(user);

      res.status(201)
        .json({
          result: user
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
  return router;
};
