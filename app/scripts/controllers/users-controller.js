import templateLoader from '../template-loader';
import dataService from '../data';

const usersController = function () {

  function register(context) {
    templateLoader.get('register')
      .then(function (template) {
        context.$element().html(template);

        $('#register-user-form')
          .bootstrapValidator({
            live: 'enabled',
            trigger: null
          });

        $('#btn-register').on('click', function (event) {
          event.preventDefault();

          const bootstrapValidator = $('#register-user-form').data('bootstrapValidator');

          if (!bootstrapValidator.isValid()) {
            toastr.warning('Unable to register user!');
            return;
          }

          const user = {
            username: $('#tb-reg-username').val(),
            password: $('#tb-reg-pass').val()
          };

          dataService.users.register(user)
            .then(function (resp) {
              toastr.success('Registered successfully');
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve(resp);
                }, 500);
              });
            }, function (resp) {
              toastr.error(resp.responseJSON);
              return Promise.reject();
            })
            .then(function (res) {
              context.redirect('#/');
              document.location.reload(true);
            });
        });
      });
  }

  function signOut() {
    dataService.users.signOut()
      .then(function () {
        document.location = '#/';
        document.location.reload(true);
      });
  }

  function signIn() {
    const user = {
      username: $('#tb-username').val(),
      password: $('#tb-password').val()
    };

    dataService.users.signIn(user)
      .then(function (user) {
        document.location = '#/';
        document.location.reload(true);
      }, function (err) {
        $('#container-sign-in').trigger('reset');
        toastr.error(err.responseJSON);
      });
  }

  return {
    register,
    signOut,
    signIn
  };
}();

export default usersController;
