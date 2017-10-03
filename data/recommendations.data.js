const BaseData = require('./base/base.data');
const Recommendation = require('../models/recommendation.model');

class RecommendationsData extends BaseData {
  constructor(db) {
    super(db, Recommendation, Recommendation);
  }

  _isModelValid(model) {
    // custom validation
    return super._isModelValid(model);
  }
}

module.exports = RecommendationsData;
