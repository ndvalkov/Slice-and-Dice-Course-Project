var express = require('express');
var utils = require('../../../utils/router-utils')();

const attachTo = (app, data) => {
  var menusRouter = express.Router();
  var expressValidator = require('express-validator');

  app.use(expressValidator({
    customValidators: {
      isArray: function(value) {
        return Array.isArray(value);
      },
      notEmpty: function(array) {
        return array.length > 0;
      },
      gte: function(param, num) {
        return param >= num;
      }
    }
  }));

  menusRouter
    .get('/', function (req, res) {
      data.menus.getAll()
        .then((menus) => {
          if (menus) {
            res.status(201)
              .json({
                result: menus
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    })
    .get('/:type', function (req, res) {
      utils.validateUrlParam(req.params.type)
        .then(() => {
          const type = req.params.type;
          return data.menus.filterBy({type: type.toLowerCase()});
        })
        .then((menus) => {
          if (menus && menus.length !== 0) {
            res.status(201)
              .json({
                result: menus.pop()
              });
          } else {
            res.status(400)
              .json('No menus of this type available');
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

      // do nested validation
      req.checkBody('appetizers', 'Appetizer is required').isArray();
      req.checkBody('mainCourses', 'Main course is required').isArray();
      req.checkBody('desserts', 'Dessert is required').isArray();

      req.sanitizeBody('type').escape();
      req.sanitizeBody('type').trim();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var menu = {
              appetizers: req.body.appetizers,
              mainCourses: req.body.mainCourses,
              desserts: req.body.desserts,
              type: req.body.type,
              date: new Date(Date.now()).toISOString()
            };

            return data.menus.create(menu);
          }
        })
        .then((menu) => {
          if (!menu) {
            res.status(400)
              .json('Unable to add menu');
          } else {
            res.status(201)
              .json({
                result: menu
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });


  app.use('/api/menus', menusRouter);
};

module.exports = {attachTo};
