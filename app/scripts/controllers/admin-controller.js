import dataService from '../data';

const adminController = function () {
  function saveDish(dish) {
    dataService.admin.createDish(dish)
      .then(function (resp) {
        toastr.success('Dish added successfully!');
      })
      .catch(function(err) {
        toastr.warning('Unable to save dish!');
      });
  }

  function saveMenu(menu) {
    dataService.admin.createMenu(menu)
      .then(function (resp) {
        toastr.success('Menu saved successfully!');
      })
      .catch(function(err) {
        toastr.warning('Unable to save menu!');
      });
  }

  function saveRecommendation(rec) {
    dataService.admin.addRecommendation(rec)
      .then(function (resp) {
        toastr.success('Chef recommendations saved successfully!');
      })
      .catch(function(err) {
        toastr.warning('Unable to save recommended dishes!');
      });
  }

  function saveReview(review) {
    dataService.admin.addReview(review)
      .then(function (resp) {
        toastr.success('Review saved successfully!');
      })
      .catch(function(err) {
        toastr.warning('Unable to save review!');
      });
  }

  function saveTestimonial(test) {
    dataService.admin.addTestimonial(test)
      .then(function (resp) {
        toastr.success('Testimonial saved successfully!');
      })
      .catch(function(err) {
        toastr.warning('Unable to save testimonial!');
      });
  }

  return {
    saveDish,
    saveMenu,
    saveRecommendation,
    saveReview,
    saveTestimonial
  };
}();

export default adminController;
