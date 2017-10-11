window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return r(w.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&v[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+E.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+x.join(r+" ")+r).split(" "),s(o,t,n))}var l,f,d={},p=t.documentElement,h="modernizr",m=t.createElement(h),v=m.style,g=t.createElement("input"),y=":)",b={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),_="Webkit Moz O ms",E=_.split(" "),x=_.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},C={},k={},T={},A=[],j=A.slice,M=function(e,n,r,o){var i,a,c,s,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:h+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),u.id=h,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),p.style.overflow=s),!!a},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return M("@media "+t+" { #"+h+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},N=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),$={}.hasOwnProperty;f=i($,"undefined")||i($.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return $.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),C.flexbox=function(){return u("flexWrap")},C.flexboxlegacy=function(){return u("boxDirection")},C.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},C.canvastext=function(){return!(!d.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!e.WebGLRenderingContext},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",w.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!u("indexedDB",e)},C.hashchange=function(){return N("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!(!e.history||!history.pushState)},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(v.backgroundColor,"rgba")||a(v.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},C.backgroundsize=function(){return u("backgroundSize")},C.borderimage=function(){return u("borderImage")},C.borderradius=function(){return u("borderRadius")},C.boxshadow=function(){return u("boxShadow")},C.textshadow=function(){return""===t.createElement("div").style.textShadow},C.opacity=function(){return o("opacity:.55"),/^0.55$/.test(v.opacity)},C.cssanimations=function(){return u("animationName")},C.csscolumns=function(){return u("columnCount")},C.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+w.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(v.backgroundImage,"gradient")},C.cssreflections=function(){return u("boxReflect")},C.csstransforms=function(){return!!u("transform")},C.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in p.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return u("transition")},C.fontface=function(){var e;return M('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},C.generatedcontent=function(){var e;return M(["#",h,"{font:0/0 a}#",h,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},C.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},C.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(S.svg,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(S.svg,"clipPath")))};for(var D in C)f(C,D)&&(l=D.toLowerCase(),d[l]=C[D](),A.push((d[l]?"":"no-")+l));return d.input||function(){d.input=function(n){for(var r=0,o=n.length;r<o;r++)T[n[r]]=!!(n[r]in g);return T.list&&(T.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)g.setAttribute("type",o=e[a]),r="text"!==g.type,r&&(g.value=y,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&g.style.WebkitAppearance!==n?(p.appendChild(g),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,p.removeChild(g)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?g.checkValidity&&!1===g.checkValidity():g.value!=y)),k[e[a]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,p.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),m=g=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},m++,e[h]=m,v[m]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;a<s;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function s(e){e||(e=t);var r=o(e);return!g.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){u=!0,l=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==f.shivCSS,supportsUnknownElements:l,shivMethods:!1!==f.shivMethods,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=g,s(t)}(this,t),d._version="2.8.3",d._prefixes=w,d._domPrefixes=x,d._cssomPrefixes=E,d.mq=P,d.hasEvent=N,d.testProp=function(e){return c([e])},d.testAllProps=u,d.testStyles=M,d.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+A.join(" "),d}(this,this.document),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ES6Promise=t()}(this,function(){"use strict";function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function t(e){return"function"==typeof e}function n(e){R=e}function r(e){B=e}function o(){return void 0!==W?function(){W(a)}:i()}function i(){var e=setTimeout;return function(){return e(a,1)}}function a(){for(var e=0;e<I;e+=2){(0,K[e])(K[e+1]),K[e]=void 0,K[e+1]=void 0}I=0}function c(e,t){var n=arguments,r=this,o=new this.constructor(u);void 0===o[Q]&&A(o);var i=r._state;return i?function(){var e=n[i-1];B(function(){return C(i,o,e,r._result)})}():_(r,o,e,t),o}function s(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(u);return g(n,e),n}function u(){}function l(){return new TypeError("You cannot resolve a promise with itself")}function f(){return new TypeError("A promises callback cannot return that same promise.")}function d(e){try{return e.then}catch(e){return te.error=e,te}}function p(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function h(e,t,n){B(function(e){var r=!1,o=p(n,t,function(n){r||(r=!0,t!==n?g(e,n):b(e,n))},function(t){r||(r=!0,w(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,w(e,o))},e)}function m(e,t){t._state===Z?b(e,t._result):t._state===ee?w(e,t._result):_(t,void 0,function(t){return g(e,t)},function(t){return w(e,t)})}function v(e,n,r){n.constructor===e.constructor&&r===c&&n.constructor.resolve===s?m(e,n):r===te?(w(e,te.error),te.error=null):void 0===r?b(e,n):t(r)?h(e,n,r):b(e,n)}function g(t,n){t===n?w(t,l()):e(n)?v(t,n,d(n)):b(t,n)}function y(e){e._onerror&&e._onerror(e._result),E(e)}function b(e,t){e._state===X&&(e._result=t,e._state=Z,0!==e._subscribers.length&&B(E,e))}function w(e,t){e._state===X&&(e._state=ee,e._result=t,B(y,e))}function _(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+Z]=n,o[i+ee]=r,0===i&&e._state&&B(E,e)}function E(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?C(n,r,o,i):o(i);e._subscribers.length=0}}function x(){this.error=null}function S(e,t){try{return e(t)}catch(e){return ne.error=e,ne}}function C(e,n,r,o){var i=t(r),a=void 0,c=void 0,s=void 0,u=void 0;if(i){if(a=S(r,o),a===ne?(u=!0,c=a.error,a.error=null):s=!0,n===a)return void w(n,f())}else a=o,s=!0;n._state!==X||(i&&s?g(n,a):u?w(n,c):e===Z?b(n,a):e===ee&&w(n,a))}function k(e,t){try{t(function(t){g(e,t)},function(t){w(e,t)})}catch(t){w(e,t)}}function T(){return re++}function A(e){e[Q]=re++,e._state=void 0,e._result=void 0,e._subscribers=[]}function j(e,t){this._instanceConstructor=e,this.promise=new e(u),this.promise[Q]||A(this.promise),H(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&b(this.promise,this._result))):w(this.promise,M())}function M(){return new Error("Array Methods must be provided an Array")}function P(e){return new j(this,e).promise}function N(e){var t=this;return new t(H(e)?function(n,r){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function $(e){var t=this,n=new t(u);return w(n,e),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[Q]=T(),this._result=this._state=void 0,this._subscribers=[],u!==e&&("function"!=typeof e&&D(),this instanceof z?k(this,e):F())}function L(){var e=void 0;if("undefined"!=typeof global)e=global;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z}var O=void 0;O=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var H=O,I=0,W=void 0,R=void 0,B=function(e,t){K[I]=e,K[I+1]=t,2===(I+=2)&&(R?R(a):J())},q="undefined"!=typeof window?window:void 0,V=q||{},U=V.MutationObserver||V.WebKitMutationObserver,G="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Y="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,K=new Array(1e3),J=void 0;J=G?function(){return function(){return process.nextTick(a)}}():U?function(){var e=0,t=new U(a),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}():Y?function(){var e=new MessageChannel;return e.port1.onmessage=a,function(){return e.port2.postMessage(0)}}():void 0===q&&"function"==typeof require?function(){try{var e=require,t=e("vertx");return W=t.runOnLoop||t.runOnContext,o()}catch(e){return i()}}():i();var Q=Math.random().toString(36).substring(16),X=void 0,Z=1,ee=2,te=new x,ne=new x,re=0;return j.prototype._enumerate=function(e){for(var t=0;this._state===X&&t<e.length;t++)this._eachEntry(e[t],t)},j.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===s){var o=d(e);if(o===c&&e._state!==X)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===z){var i=new n(u);v(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},j.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===X&&(this._remaining--,e===ee?w(r,n):this._result[t]=n),0===this._remaining&&b(r,this._result)},j.prototype._willSettleAt=function(e,t){var n=this;_(e,void 0,function(e){return n._settledAt(Z,t,e)},function(e){return n._settledAt(ee,t,e)})},z.all=P,z.race=N,z.resolve=s,z.reject=$,z._setScheduler=n,z._setAsap=r,z._asap=B,z.prototype={constructor:z,then:c,catch:function(e){return this.then(null,e)}},z.polyfill=L,z.Promise=z,z.polyfill(),z});