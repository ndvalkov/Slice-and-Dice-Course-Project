const BaseData = require('./base/base.data');
const Testimonial = require('../models/testimonial.model');

class TestimonialsData extends BaseData {
  constructor(db) {
    super(db, Testimonial, Testimonial);
  }

  _isModelValid(model) {
    // custom validation
    return super._isModelValid(model);
  }
}

module.exports = TestimonialsData;
