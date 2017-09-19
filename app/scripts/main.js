'use strict';

// Test Handlebars
// const pesho = 'PESHO';
// const html = MyApp.templates.main({pesho: pesho});
// alert(html);

// Test Browserify
// import foo from './foo';
// foo(); // => hello world

import requester from './requester';

requester.get('', {})
  .then((res) => {
    alert(res);
  });

// test Template loader
// import tl from './template-loader';
//
// tl.get('main', {'pesho':'Pesho'})
//   .then((res) => {alert(res)});

