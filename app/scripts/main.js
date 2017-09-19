import dataService from './data';
import homeController from './controllers/home-controller';
import usersController from './controllers/users-controller';

(function () {

  const sammyApp = Sammy('#content', function () {

    this.get('#/', homeController.all);

    this.get('#/register', usersController.register);

    // this.get('#/songs', songsController.get);
    // this.get('#/songs/all', songsController.all);
    // this.get('#/songs/add', songsController.add);
    // this.get('#/songs/:id', songsController.byId);
    // this.get('#/songs/:id/del', songsController.del);
    // this.get('#/songs/:id/comments', songsController.comments);
    // this.get('#/songs/:id/comment', songsController.comment);
    // this.get('#/songs/tops', songsController.tops);
    // this.get('#/songs/top/:count', songsController.top);
    //
    // this.get('#/songs/add/query', youTubeController.query);

  });

  $(function () {
    sammyApp.run('#/');

    if (dataService.users.hasUser()) {
      $('#container-sign-out').removeClass('hidden');
      $('#main-nav').removeClass('hidden');
      $('#signed-in-user').html(localStorage.getItem('signed-in-user-username'));
      $('#btn-sign-out').on('click', function (e) {
        e.preventDefault();
        usersController.signOut();
      });
    } else {
      $('#container-sign-in').removeClass('hidden');
      $('#btn-sign-in').on('click', function (e) {
        e.preventDefault();
        usersController.signIn();
      });
    }

  });
}());



// test controllers
// import hc from './controllers/home-controller';
//
// hc.all();

// Test Handlebars
// const pesho = 'PESHO';
// const html = MyApp.templates.main({pesho: pesho});
// alert(html);

// Test Browserify
// import foo from './foo';
// foo(); // => hello world

// import requester from './requester';
//
// requester.get('', {})
//   .then((res) => {
//     alert(res);
//   });

// test Template loader
// import tl from './template-loader';
//
// tl.get('main', {'pesho':'Pesho'})
//   .then((res) => {alert(res)});

