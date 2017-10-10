var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var testimonialsRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  testimonialsRouter
    .get('/', function (req, res) {
      data.testimonials.getAll()
        .then((testimonials) => {
          if (testimonials) {
            res.status(201)
              .json({
                result: testimonials
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

      req.checkBody('content', 'Content is required').notEmpty();
      // req.sanitizeBody('content').escape();
      req.sanitizeBody('content').trim();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var testimonial = {
              author: user ? user.username : 'Anonymous',
              content: req.body.content
            };

            return data.testimonials.create(testimonial);
          }
        })
        .then((testimonial) => {
          if (!testimonial) {
            res.status(400)
              .json('Unable to add review');
          } else {
            res.status(201)
              .json({
                result: testimonial
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });

  app.use('/api/testimonials', testimonialsRouter);
};

module.exports = {attachTo};


