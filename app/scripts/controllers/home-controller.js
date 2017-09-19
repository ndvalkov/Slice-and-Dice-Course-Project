import templateLoader from '../template-loader';

const homeController = function () {

  function all(context) {

    templateLoader.get('main')
      .then(function (template) {
        alert('From Main');
        // context.$element().html(template);
      });
  }

  return {
    all: all
  };
}();

export default homeController;
