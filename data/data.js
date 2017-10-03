const UsersData = require('./users.data');
const DishesData = require('./dishes.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        dishes:new DishesData(db)
    });
};

module.exports = { init };
