const BaseModel = require('./base/base.model');

class Menu extends BaseModel {
  static isValid(model) {
    // validate date, appetizers, mainCourses, desserts
    // type in: dinner - lunch - breakfast
    return true;
  }

  get id() {
    return this._id;
  }
}

module.exports = Menu;
