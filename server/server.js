const express = require('express');

const init = (data, dev) => {
  const app = express();

  require('./config').applyTo(app, dev);
  require('./routers')
    .attachTo(app, data);

  return Promise.resolve(app);
};

module.exports = {
  init,
};
