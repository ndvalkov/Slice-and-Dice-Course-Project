var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var postsRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  postsRouter
    .get('/', function (req, res) {
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
    })
    .get('/comments', function (req, res) {
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
    })
    .get('/:id', function (req, res) {
      utils.validateUrlParam(req.params.id)
        .then(() => {
          const id = req.params.id;
          return data.posts.findById(id);
        })
        .then((post) => {
          if (post) {
            res.status(201)
              .json({
                result: post
              });
          } else {
            res.status(400)
              .json('No post with such Id exists');
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    })
    .get('/category/:name', function (req, res) {
      utils.validateUrlParam(req.params.name)
        .then(() => {
          const name = req.params.name;
          return data.posts.filterBy({category: name.toLowerCase()});
        })
        .then((posts) => {
          if (posts) {
            res.status(201)
              .json({
                result: posts
              });
          } else {
            return Promise.reject();
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    })
    .post('/', function (req, res) {
      var user = req.user;
      // if (!user) {
      //   res.status(401)
      //     .json('Not authorized User');
      //   return;
      // }

      req.checkBody('title', 'Title is required').notEmpty();
      req.checkBody('content', 'Content is required').notEmpty();
      req.checkBody('category', 'Category is required').notEmpty();

      req.sanitizeBody('title').escape();
      req.sanitizeBody('content').escape();
      req.sanitizeBody('category').escape();
      req.sanitizeBody('imageUrl').escape();

      req.sanitizeBody('title').trim();
      req.sanitizeBody('content').trim();
      req.sanitizeBody('category').trim();
      req.sanitizeBody('imageUrl').trim();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var post = {
              author: user ? user.username : 'anonymous',
              title: req.body.title,
              content: req.body.content,
              category: req.body.category.toLowerCase(),
              imageUrl: req.body.imageUrl,
              comments: [],
              date: new Date(Date.now()).toISOString()
            };

            return data.posts.create(post);
          }
        })
        .then((post) => {
          if (!post) {
            res.status(400)
              .json('Unable to add menu');
          } else {
            res.status(201)
              .json({
                result: post
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    })
    .post('/:id/comments', function (req, res) {
      var user = req.user;
      // if (!user) {
      //   res.status(401)
      //     .json('Not authorized User');
      //   return;
      // }

      utils.validateUrlParam(req.params.id)
        .then(() => {
          req.checkBody('comment', 'Comment is required').notEmpty();
          req.sanitizeBody('comment').escape();
          req.sanitizeBody('comment').trim();

          req.getValidationResult()
            .then((validationResult) => {
              if (!validationResult.isEmpty()) {
                res.status(400)
                  .json('Sorry, validation failed');
              } else {
                const id = req.params.id;
                return data.posts.findById(id);
              }
            })
            .then((post) => {
              if (!post) {
                res.status(400)
                  .json('Sorry, validation failed');
              } else {
                const comment = {
                  author: user ? user.username : 'anonymous',
                  comment: req.body.comment,
                  date: new Date(Date.now()).toISOString()
                };

                post.comments.push(comment);
                return data.posts.updateById(post);
              }
            })
            .then((post) => {
              if (!post) {
                res.status(400)
                  .json('Unable to add comment');
              } else {
                res.status(201)
                  .json({
                    result: post
                  });
              }
            })
            .catch(() => {
              res.status(500)
                .json('Oops! Something went wrong.');
            });
        })
    })
    .get('/:id/comments', function (req, res) {
      utils.validateUrlParam(req.params.id)
        .then(() => {
          const id = req.params.id;
          return data.posts.findById(id);
        })
        .then((post) => {
          if (post) {
            res.status(201)
              .json({
                result: post.comments
              });
          } else {
            res.status(400)
              .json('No post with such Id exists');
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });

  app.use('/api/posts', postsRouter);
};

module.exports = {attachTo};
