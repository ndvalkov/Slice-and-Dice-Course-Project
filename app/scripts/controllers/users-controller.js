import dataService from '../data';

const usersController = function () {
  function signOut() {
    dataService.users.signOut()
      .then(function () {
        document.location = '#/';
        document.location.reload(true);
      });
  }

  function signIn() {
    const user = {
      username: $('#usernameLogin').val(),
      password: $('#passwordLogin').val()
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
    signOut,
    signIn
  };
}();

export default usersController;
