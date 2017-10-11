import dataService from '../data';
import templateLoader from '../template-loader';

const menuController = function () {

  function all(context) {
    const p1 = dataService.cuisine.getMenus();

    Promise.all([p1])
      .then(function (results) {
        const lastMenu = results[0].pop();
        lastMenu.appetizers = lastMenu.appetizers.map(JSON.parse);
        lastMenu.mainCourses = lastMenu.mainCourses.map(JSON.parse);
        lastMenu.desserts = lastMenu.desserts.map(JSON.parse);
        return templateLoader.get('menu', lastMenu);
      })
      .then(function (template) {
        context.$element().html(template);
      })
  }

  return {
    all: all
  };
}();

export default menuController;
