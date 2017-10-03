const UsersData = require('./users.data');
const DishesData = require('./dishes.data');
const MenusData = require('./menus.data');
const PostsData = require('./posts.data');
const ReviewsData = require('./reviews.data');
const TestimonialsData = require('./testimonials.data');
const RecommendationsData = require('./recommendations.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    dishes: new DishesData(db),
    menus: new MenusData(db),
    posts: new PostsData(db),
    reviews: new ReviewsData(db),
    testimonials: new TestimonialsData(db),
    recommendations: new RecommendationsData(db)

  });
};

module.exports = {init};
