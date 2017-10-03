const BaseModel = require('./base/base.model');

class Testimonial extends BaseModel {
  static isValid(model) {
    // validate author, content
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Testimonial;
