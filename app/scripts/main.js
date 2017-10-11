import homeController from './controllers/home-controller';
import menuController from './controllers/menu-controller';
import postsController from './controllers/posts-controller';

(function () {

  const sammyApp = Sammy('#content', function () {
    this.get('#/', homeController.all);
    this.get('#/menu', menuController.all);
    this.get('#/posts', postsController.all);
    this.get('#/posts/food', postsController.food);
    this.get('#/posts/recipes', postsController.recipes);
    this.get('#/posts/lifestyle', postsController.lifestyle);
  });

  $(function () {
    sammyApp.run('#/');

    $(window).load(function() {
      $('.loader').fadeOut('slow');
    })
  });
}());
