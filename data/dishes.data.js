const BaseData = require('./base/base.data');
const Dish = require('../models/dish.model');

class DishesData extends BaseData {
  constructor(db) {
    super(db, Dish, Dish);
  }

  _isModelValid(model) {
    // custom validation
    return super._isModelValid(model);
  }
}

module.exports = DishesData;
