import templateLoader from '../template-loader';

const homeController = function () {

  function all(context) {
    templateLoader.get('sliced-menu')
      .then(function (template) {
        context.$element().html(template);
      });
  }

  return {
    all: all
  };
}();

export default homeController;
