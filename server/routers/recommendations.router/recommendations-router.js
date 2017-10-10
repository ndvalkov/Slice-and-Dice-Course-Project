var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var recommendationsRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator({
    customValidators: {
      isArray: function (value) {
        return Array.isArray(value);
      },
      notEmpty: function (array) {
        return array.length > 0;
      },
      gte: function (param, num) {
        return param >= num;
      }
    }
  }));

  recommendationsRouter
    .get('/', function (req, res) {
      data.recommendations.getAll()
        .then((recommendations) => {
          if (recommendations) {
            res.status(201)
              .json({
                result: recommendations
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

      req.checkBody('dishes', 'Dishes list required').isArray();
      req.checkBody('dishes', 'Dishes not empty').notEmpty();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            const dishes = req.body.dishes;
            const promises = [];
            dishes
              .map(x => JSON.parse(x))
              .forEach((d) => {
              promises.push(data.dishes.filterBy({name: d.name}));
            });

            return Promise.all(promises);
          }
        })
        .then((results) => {
          if (!results) {
            res.status(400)
              .json('Unable to add recommendations');
          } else {
            const recommendations = [];
            // remove duplicates
            results.forEach(p => {
              recommendations.push(p.pop());
            });

            const chefs = {
              dishes: recommendations,
              date: new Date(Date.now()).toISOString()
            };

            return data.recommendations.create(chefs);
          }
        })
        .then((chefs) => {
          if (chefs) {
            res.status(201)
              .json({
                result: chefs,
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });

  app.use('/api/recommendations', recommendationsRouter);
};

module.exports = {attachTo};


