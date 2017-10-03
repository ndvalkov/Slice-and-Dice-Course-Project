const BaseModel = require('./base/base.model');

class Dish extends BaseModel {
  static isValid(model) {
    // validate name, description, price, type
    // type in: appetizer - main course - dessert
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Dish;
