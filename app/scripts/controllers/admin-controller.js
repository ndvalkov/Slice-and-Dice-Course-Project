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

  return {
    saveDish
  };
}();

export default adminController;
