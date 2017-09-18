'use strict';

// Test Handlebars
// const pesho = 'PESHO';
// const html = MyApp.templates.partial({pesho: pesho});
// alert(html);

// Test Browserify
// import foo from './foo';
// foo(); // => hello world

import requester from './requester';

requester.get('', {})
  .then((res) => {
    alert(res);
  });

