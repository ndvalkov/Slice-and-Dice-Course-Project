var express = require('express');

const attachTo = (app, data) => {
  var dishesRouter = express.Router();
  var expressValidator = require('express-validator');
  app.use(expressValidator());

  dishesRouter
    .get('/', function (req, res) {
      data.dishes.getAll()
        .then((dishes) => {
          if (dishes) {
            res.status(201)
              .json({
                result: dishes
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
          return data.dishes.findById(id);
        })
        .then((dish) => {
          if (dish) {
            res.status(201)
              .json({
                result: dish
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

      req.checkBody('name', 'Dish name is required').notEmpty();

      req.sanitizeBody('name').escape();
      req.sanitizeBody('description').escape();
      req.sanitizeBody('price').escape();
      req.sanitizeBody('type').escape();

      req.sanitizeBody('name').trim();
      req.sanitizeBody('description').trim();
      req.sanitizeBody('price').trim();
      req.sanitizeBody('type').trim();

      req.getValidationResult()
        .then((validationResult) => {
          if (!validationResult.isEmpty()) {
            res.status(400)
              .json('Sorry, validation failed');
          } else {
            var dish = {
              name: req.body.name,
              description: req.body.description,
              price: +req.body.price,
              type: req.body.type,
            };

            return data.dishes.create(dish);
          }
        })
        .then((dish) => {
          if (!dish) {
            res.status(400)
              .json('Unable to add dish');
          } else {
            res.status(201)
              .json({
                result: dish
              });
          }
        })
        .catch(() => {
          res.status(500)
            .json('Oops! Something went wrong.');
        });
    });


  app.use('/api/dishes', dishesRouter);
};

module.exports = {attachTo};
