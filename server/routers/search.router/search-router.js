var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var searchRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  searchRouter
    .get('/posts/', function (req, res) {
      if (Object.keys(req.query).length !== 0) {
        req.checkQuery('t', 'Invalid url param').isAlpha();
        req.sanitizeQuery('t').escape();

        req.getValidationResult()
          .then((validationResult) => {
            if (!validationResult.isEmpty()) {
              res.status(400)
                .json('Sorry, validation failed');
            } else {
              const target = req.query.t;
              data.posts.searchPosts(target)
                .then((posts) => {
                  if (posts) {
                    res.status(201)
                      .json({
                        result: posts
                      });
                  }
                })
                .catch(() => {
                  res.status(500)
                    .json('Oops! Something went wrong.');
                });
            }
          });
      } else {
        data.posts.getAll()
          .then((posts) => {
            if (posts) {
              res.status(201)
                .json({
                  result: posts
                });
            }
          })
          .catch(() => {
            res.status(500)
              .json('Oops! Something went wrong.');
          });
      }
    })
    .get('/comments/', function (req, res) {
      if (Object.keys(req.query).length !== 0) {
        req.checkQuery('t', 'Invalid url param').isAlpha();
        req.sanitizeQuery('t').escape();

        req.getValidationResult()
          .then((validationResult) => {
            if (!validationResult.isEmpty()) {
              res.status(400)
                .json('Sorry, validation failed');
            } else {
              const target = req.query.t;
              data.posts.getAll()
                .then((posts) => {
                  if (posts) {
                    const comments = posts.map((p) => p.comments)
                      .reduce((arr, x) => x.concat(arr), [])
                      .filter(x => x.comment.indexOf(target) >= 0);

                    res.status(201)
                      .json({
                        result: comments
                      });
                  }
                })
                .catch(() => {
                  res.status(500)
                    .json('Oops! Something went wrong.');
                });
            }
          });
      } else {
        data.posts.getAll()
          .then((posts) => {
            if (posts) {
              const comments = posts.map((p) => p.comments)
                .reduce((arr, x) => x.concat(arr), []);

              res.status(201)
                .json({
                  result: comments
                });
            }
          })
          .catch(() => {
            res.status(500)
              .json('Oops! Something went wrong.');
          });
      }
    });


  app.use('/api/search', searchRouter);
};

module.exports = {attachTo};

