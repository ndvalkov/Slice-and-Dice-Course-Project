const BaseModel = require('./base/base.model');

class Dish extends BaseModel {
  static isValid(model) {
    // validate name, description, price, type
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Dish;
