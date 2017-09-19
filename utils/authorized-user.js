const AUTH_KEY_HEADER_NAME = 'x-auth-key';
module.exports = function (app, data) {
  app.use(function (req, res, next) {
    var authKey = req.headers[AUTH_KEY_HEADER_NAME];

    data.users.filterBy({
      authKey: authKey
    })
      .then((res) => {
        req.user = res[0] || null;
        console.log(req.user);
        next();
      });
  });
};
