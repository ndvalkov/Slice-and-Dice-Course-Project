const BaseModel = require('./base/base.model');

class Recommendation extends BaseModel {
  static isValid(model) {
    // validate dish
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Recommendation;
