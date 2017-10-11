import dataService from '../data';
import templateLoader from '../template-loader';

const postsController = function () {

  function all(context) {
    const p1 = dataService.posts.getAllPosts();

    Promise.all([p1])
      .then(function (results) {
        // const hbsParams = {};
        // hbsParams.recommendations = results[0].pop();
        // hbsParams.testimonials = results[1].pop();
        // return templateLoader.get('menu', hbsParams);
        return templateLoader.get('post');
      })
      .then(function (template) {
        context.$element().html(template);
      })
  }

  function food(context) {
    const p1 = dataService.posts.getPostsByCategory('food');

    Promise.all([p1])
      .then(function (results) {
        // const hbsParams = {};
        // hbsParams.recommendations = results[0].pop();
        // hbsParams.testimonials = results[1].pop();
        // return templateLoader.get('menu', hbsParams);
        return templateLoader.get('post');
      })
      .then(function (template) {
        context.$element().html(template);
      })
  }

  function recipes(context) {
    const p1 = dataService.posts.getPostsByCategory('recipes');

    Promise.all([p1])
      .then(function (results) {
        // const hbsParams = {};
        // hbsParams.recommendations = results[0].pop();
        // hbsParams.testimonials = results[1].pop();
        // return templateLoader.get('menu', hbsParams);
        return templateLoader.get('post');
      })
      .then(function (template) {
        context.$element().html(template);
      })
  }

  function lifestyle(context) {
    const p1 = dataService.posts.getPostsByCategory('lifestyle');

    Promise.all([p1])
      .then(function (results) {
        // const hbsParams = {};
        // hbsParams.recommendations = results[0].pop();
        // hbsParams.testimonials = results[1].pop();
        // return templateLoader.get('menu', hbsParams);
        return templateLoader.get('post');
      })
      .then(function (template) {
        context.$element().html(template);
      })
  }

  return {
    all: all,
    food: food,
    recipes: recipes,
    lifestyle: lifestyle,
  };
}();

export default postsController;
