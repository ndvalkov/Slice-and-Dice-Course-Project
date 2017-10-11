import templateLoader from '../template-loader';

const locationController = function () {
  function all(context) {
    templateLoader.get('location')
      .then(function (template) {
        context.$element().html(template);
      })
  }

  return {
    all: all
  };
}();

export default locationController;
