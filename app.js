const start = (dev) => {
  const async = () => {
    return Promise.resolve();
  };

  const config = require('./config');

  return async()
    .then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./server').init(data, dev))
    .then((app) => {
      app.listen(config.port, () =>
        console.log(`Server running at port: ${config.port}`));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {start};


