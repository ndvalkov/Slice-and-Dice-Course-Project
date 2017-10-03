const BaseData = require('./base/base.data');
const Menu = require('../models/menu.model');

class MenusData extends BaseData {
  constructor(db) {
    super(db, Menu, Menu);
  }

  _isModelValid(model) {
    // custom validation
    return super._isModelValid(model);
  }
}

module.exports = MenusData;
