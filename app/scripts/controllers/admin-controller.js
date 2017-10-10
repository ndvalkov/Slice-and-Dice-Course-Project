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

  return {
    saveDish,
    saveMenu
  };
}();

export default adminController;
