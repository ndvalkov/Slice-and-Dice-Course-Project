import dataService from '../data';
import usersController from './users-controller';
import templateLoader from '../template-loader';

const homeController = function () {

  function all(context) {
    templateLoader.get('home')
      .then(function (template) {
        context.$element().html(template);
      })
      .then(function () {
        if (dataService.users.hasUser()) {
          var currentUsername = localStorage.getItem('signed-in-user-username');

          if (currentUsername === 'niki') {
            $('.admin').removeClass('hidden');
          }

          $('#signed-in-user').html(currentUsername);
          $('#btn-sign-out').on('click', function (e) {
            e.preventDefault();
            usersController.signOut();
          });
        } else {
          $('#btn-sign-out').hide();
          $('#myModal').modal('show');
          $('#btn-sign-in').on('click', function (e) {
            e.preventDefault();
            usersController.signIn();
          });

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
              username: $('#usernameRegister').val(),
              password: $('#passwordRegister').val()
            };

            dataService.users.register(user)
              .then(function (resp) {
                toastr.success('Registered successfully');
              }, function (resp) {
                toastr.error(resp.responseJSON);
                return Promise.reject();
              })
              .then(function (res) {
                context.redirect('#/');
                document.location.reload(true);
              });
          });
        }
      });
  }

  return {
    all: all
  };
}();

export default homeController;
