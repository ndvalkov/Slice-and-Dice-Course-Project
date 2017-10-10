var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var reviewsRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  reviewsRouter
    .get('/', function (req, res) {
      data.reviews.getAll()
        .then((reviews) => {
          if (reviews) {
            res.status(201)
              .json({
                result: reviews
              });
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

      req.checkBody('author', 'Dish name is required').notEmpty();
      req.checkBody('title', 'Dish name is required').notEmpty();
      req.checkBody('content', 'Dish name is required').notEmpty();

      req.sanitizeBody('author').trim();
      req.sanitizeBody('title').trim();
      req.sanitizeBody('content').trim();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var review = {
              author: req.body.author,
              title: req.body.title,
              content: req.body.content
            };

            return data.reviews.create(review);
          }
        })
        .then((review) => {
          if (!review) {
            res.status(400)
              .json('Unable to add review');
          } else {
            res.status(201)
              .json({
                result: review
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });

  app.use('/api/reviews', reviewsRouter);
};

module.exports = {attachTo};

