const BaseModel = require('./base/base.model');

class Review extends BaseModel {
  static isValid(model) {
    // validate author, title, content
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Review;
