const UsersData = require('./users.data');
const DishesData = require('./dishes.data');
const MenusData = require('./menus.data');
const PostsData = require('./posts.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    dishes: new DishesData(db),
    menus: new MenusData(db),
    posts: new PostsData(db)
  });
};

module.exports = {init};
