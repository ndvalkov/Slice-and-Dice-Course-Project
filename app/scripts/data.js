import jsonRequester from './requester';

const dataService = (function () {
  const USERNAME_KEY = 'signed-in-user-username';
  const AUTH_KEY = 'signed-in-user-auth-key';

  /* Users */
  function register(user) {
    const reqUser = {
      username: user.username,
      passHash: sha1(user.username + user.password).toString()
    };

    return jsonRequester.post('api/users', {
      data: reqUser
    })
      .then(function (resp) {
        const user = resp.result;
        localStorage.setItem(USERNAME_KEY, user.username);
        localStorage.setItem(AUTH_KEY, user.authKey);
        return {
          username: resp.result.username
        };
      });
  }

  function signIn(user) {
    const reqUser = {
      username: user.username,
      passHash: sha1(user.username + user.password).toString()
    };

    const options = {
      data: reqUser
    };

    return jsonRequester.put('api/users/auth', options)
      .then(function (resp) {
        const user = resp.result;
        localStorage.setItem(USERNAME_KEY, user.username);
        localStorage.setItem(AUTH_KEY, user.authKey);
        return user;
      });
  }

  function signOut() {
    return Promise.resolve()
      .then(() => {
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(AUTH_KEY);
      });
  }

  function hasUser() {
    return !!localStorage.getItem(USERNAME_KEY) &&
      !!localStorage.getItem(AUTH_KEY);
  }

  /*Dishes*/

  function getDishes() {
    return jsonRequester.get('api/dishes')
      .then(function (resp) {
        return resp.result;
      });
  }

  function getDishById(id) {
    const url = 'api/dishes/' + id;
    return jsonRequester.get(url)
      .then(function (resp) {
        return resp.result;
      });
  }

  function createDish(dish) {
    return jsonRequester.post('api/dishes', {
      data: dish
    })
      .then(function (resp) {
        return resp.result;
      });
  }

  /*Menus*/
  function getMenus() {
    return jsonRequester.get('api/menus')
      .then(function (resp) {
        return resp.result;
      });
  }

  function getMenusByType(type) {
    const url = 'api/dishes/' + type;
    return jsonRequester.get(url)
      .then(function (resp) {
        return resp.result;
      });
  }

  function createMenu(menu) {
    return jsonRequester.post('api/menus', {
      data: menu
    })
      .then(function (resp) {
        return resp.result;
      });
  }

  /*Recommendations*/
  function getRecommendations() {
    return jsonRequester.get('api/recommendations')
      .then(function (resp) {
        return resp.result;
      });
  }

  function addRecommendation(rec) {
    return jsonRequester.post('api/recommendations', {
      data: rec
    })
      .then(function (resp) {
        return resp.result;
      });
  }

  /*Reviews*/
  function getReviews() {
    return jsonRequester.get('api/reviews')
      .then(function (resp) {
        return resp.result;
      });
  }

  function addReview(review) {
    return jsonRequester.post('api/reviews', {
      data: review
    })
      .then(function (resp) {
        return resp.result;
      });
  }

  /*Testiomonials*/
  function getTestimonials() {
    return jsonRequester.get('api/testimonials')
      .then(function (resp) {
        return resp.result;
      });
  }

  function addTestimonial(test) {
    return jsonRequester.post('api/testimonials', {
      data: test
    })
      .then(function (resp) {
        return resp.result;
      });
  }



  return {
    users: {
      signIn,
      signOut,
      register,
      hasUser
    },
    admin: {
      getDishes,
      getDishById,
      createDish,
      getMenus,
      getMenusByType,
      createMenu,
      getRecommendations,
      addRecommendation,
      getReviews,
      addReview,
      getTestimonials,
      addTestimonial
    }
  };
}());

export default dataService;
