this.MyApp=this.MyApp||{},this.MyApp.templates=this.MyApp.templates||{},this.MyApp.templates.home=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<h2>Welcome to <strong>Melody Underdog</strong></h2>\n<p>This is not an app for popular music videos</p>\n<ul>\n  <li>Here you can share links to old, underrated and forgotten songs</li>\n  <li>Only links to <a href="https://www.youtube.com/" target="_blank">YouTube</a> videos with fewer views, likes, or older upload dates can be added</li>\n  <li>Up to 1000000 views, or up to 1000 likes</li>\n  <li>The songs\' <span class="label label-info">Underdog</span> status is then evaluated, and it serves as a modifier for their new rating</li>\n  <li>You have 5 stars to award each day, stars given are multiplied by the <span class="label label-info">Underdog</span> modifier</li>\n  <li>In a way, this app helps raise popularity of good but less known songs</li>\n  <li>Have fun! Thanks...</li>\n  <li>This app was created only for educational purpose</li>\n</ul>\n'},useData:!0}),this.MyApp=this.MyApp||{},this.MyApp.templates=this.MyApp.templates||{},this.MyApp.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var r;return"<div class=\"jumbotron\">\n  <h1>'Allo, 'Allo! I am HBSs "+this.escapeExpression((r=null!=(r=t.pesho||(null!=e?e.pesho:e))?r:t.helperMissing,"function"==typeof r?r.call(e,{name:"pesho",hash:{},data:a}):r))+'</h1>\n  <p class="lead">Always a pleasure scaffolding your apps.</p>\n  <p><a class="btn btn-lg btn-success" href="#">Splendid!</a></p>\n</div>\n'},useData:!0}),this.MyApp=this.MyApp||{},this.MyApp.templates=this.MyApp.templates||{},this.MyApp.templates.partial=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var r;return"<div class=\"jumbotron\">\n  <h1>'Allo, 'Allo! "+this.escapeExpression((r=null!=(r=t.pesho||(null!=e?e.pesho:e))?r:t.helperMissing,"function"==typeof r?r.call(e,{name:"pesho",hash:{},data:a}):r))+'</h1>\n  <p class="lead">Always a pleasure scaffolding your apps.</p>\n  <p><a class="btn btn-lg btn-success" href="#">Splendid!</a></p>\n</div>\n'},useData:!0}),this.MyApp=this.MyApp||{},this.MyApp.templates=this.MyApp.templates||{},this.MyApp.templates.register=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<form id="register-user-form" class="form-horizontal">\n  <div class="form-group">\n    <label class="control-label" for="tb-reg-username">Username</label>\n    <input id="tb-reg-username" type="text" class="form-control" name="username"\n           data-bv-notempty="true"\n           data-bv-notempty-message="The username is required and cannot be empty"\n\n           data-bv-stringlength="true"\n           data-bv-stringlength-min="6"\n           data-bv-stringlength-max="30"\n           data-bv-stringlength-message="The username must be more than 6 and less than 30 characters long"\n\n           data-bv-regexp="true"\n           data-bv-regexp-regexp="^[a-zA-Z0-9]+$"\n           data-bv-regexp-message="The username can only consist of alphabetical and number"\n\n           data-bv-different="true"\n           data-bv-different-field="password"\n           data-bv-different-message="The username and password cannot be the same as each other" />\n\n    <label class="control-label" for="tb-reg-pass">Password</label>\n    <input id="tb-reg-pass" type="password" class="form-control" name="password"\n           data-bv-notempty="true"\n           data-bv-notempty-message="The password is required and cannot be empty"\n\n           data-bv-stringlength="true"\n           data-bv-stringlength-min="5"\n           data-bv-stringlength-message="The password must have at least 5 characters"\n\n           data-bv-different="true"\n           data-bv-different-field="username"\n           data-bv-different-message="The password cannot be the same as username" />\n  </div>\n\n  <div class="form-group">\n    <div class="col-sm-9 col-sm-offset-3">\n      \x3c!-- Do NOT use name="submit" or id="submit" for the Submit button --\x3e\n      <button id="btn-register" type="submit" class="btn btn-default btn-block">Register</button>\n    </div>\n  </div>\n\n</form>\n'},useData:!0}),function e(t,n,a){function r(o,i){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!i&&l)return l(o,!0);if(s)return s(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return r(n||e)},d,d.exports,e,t,n,a)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../template-loader"),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(e){r.default.get("main").then(function(t){e.$element().html(t)})}return{all:e}}();n.default=s},{"../template-loader":6}],2:[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../template-loader"),s=a(r),o=e("../data"),i=a(o),l=function(){function e(e){s.default.get("register").then(function(t){e.$element().html(t),$("#register-user-form").bootstrapValidator({live:"enabled",trigger:null}),$("#btn-register").on("click",function(t){if(t.preventDefault(),!$("#register-user-form").data("bootstrapValidator").isValid())return void toastr.warning("Unable to register user!");var n={username:$("#tb-reg-username").val(),password:$("#tb-reg-pass").val()};i.default.users.register(n).then(function(e){return toastr.success("Registered successfully"),new Promise(function(t,n){setTimeout(function(){t(e)},500)})},function(e){return toastr.error(e.responseJSON),Promise.reject()}).then(function(t){e.redirect("#/"),document.location.reload(!0)})})})}function t(){i.default.users.signOut().then(function(){document.location="#/",document.location.reload(!0)})}function n(){var e={username:$("#tb-username").val(),password:$("#tb-password").val()};i.default.users.signIn(e).then(function(e){document.location="#/",document.location.reload(!0)},function(e){$("#container-sign-in").trigger("reset"),toastr.error(e.responseJSON)})}return{register:e,signOut:t,signIn:n}}();n.default=l},{"../data":3,"../template-loader":6}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("./requester"),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(e){var t={username:e.username,passHash:sha1(e.username+e.password).toString()};return r.default.post("api/users",{data:t}).then(function(e){var t=e.result;return localStorage.setItem(o,t.username),localStorage.setItem(i,t.authKey),{username:e.result.username}})}function t(e){var t={username:e.username,passHash:sha1(e.username+e.password).toString()},n={data:t};return r.default.put("api/users/auth",n).then(function(e){var t=e.result;return localStorage.setItem(o,t.username),localStorage.setItem(i,t.authKey),t})}function n(){return Promise.resolve().then(function(){localStorage.removeItem(o),localStorage.removeItem(i)})}function a(){return!!localStorage.getItem(o)&&!!localStorage.getItem(i)}function s(){return r.default.get("api/users").then(function(e){return e.result})}var o="signed-in-user-username",i="signed-in-user-auth-key";return{users:{signIn:t,signOut:n,register:e,hasUser:a,get:s}}}();n.default=s},{"./requester":5}],4:[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=e("./data"),s=a(r),o=e("./controllers/home-controller"),i=a(o),l=e("./controllers/users-controller"),u=a(l);!function(){var e=Sammy("#content",function(){this.get("#/",i.default.all),this.get("#/register",u.default.register)});$(function(){e.run("#/"),s.default.users.hasUser()?($("#container-sign-out").removeClass("hidden"),$("#main-nav").removeClass("hidden"),$("#signed-in-user").html(localStorage.getItem("signed-in-user-username")),$("#btn-sign-out").on("click",function(e){e.preventDefault(),u.default.signOut()})):($("#container-sign-in").removeClass("hidden"),$("#btn-sign-in").on("click",function(e){e.preventDefault(),u.default.signIn()}))})}()},{"./controllers/home-controller":1,"./controllers/users-controller":2,"./data":3}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t,n){n=n||{};var a=n.headers||{},r=n.data||void 0;return new Promise(function(n,s){$.ajax({url:t,method:e,contentType:"application/json",headers:a,data:JSON.stringify(r),success:function(e){n(e)},error:function(e){s(e)}})})}function t(t,n){return e("GET",t,n)}function n(t,n){return e("POST",t,n)}function a(t,n){return e("PUT",t,n)}function r(t,n){return e("POST",t,n)}return{send:e,get:t,post:n,put:a,delete:r}}();n.default=a},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){return new Promise(function(n){n(MyApp.templates[e](t))})}return{get:e}}();n.default=a},{}]},{},[4]);