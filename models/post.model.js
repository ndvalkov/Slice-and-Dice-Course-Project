const BaseModel = require('./base/base.model');

class Post extends BaseModel {
  static isValid(model) {
    // validate author, title, content, category, imageUrl, comments[]
    // category types: food - lifestyle
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Post;
