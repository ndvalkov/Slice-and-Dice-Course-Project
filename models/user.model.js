const BaseModel = require('./base/base.model');

class User extends BaseModel {
  static isValid(model) {
    // const result =
    //   typeof model.username !== 'undefined'
    //   && typeof model.username === 'string'
    //   && typeof model.password !== 'undefined'
    //   && typeof model.password === 'string';
    // return result;
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = User;
