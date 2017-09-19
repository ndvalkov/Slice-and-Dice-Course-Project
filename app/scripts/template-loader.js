const templateLoader = (() => {
  function get(templateName, params) {
    return new Promise((resolve) => {
      resolve(MyApp.templates[templateName](params));
    });
  }

  return {get};
})();

export default templateLoader;
