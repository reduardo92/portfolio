// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\bg\\box.png":[["box.e53f56b4.png","img/bg/box.png"],"img/bg/box.png"],"./..\\img\\bg\\blackBg2.jpg":[["blackBg2.fcc134aa.jpg","img/bg/blackBg2.jpg"],"img/bg/blackBg2.jpg"],"./..\\img\\person5.jpg":[["person5.f005794b.jpg","img/person5.jpg"],"img/person5.jpg"],"./..\\img\\person7.jpg":[["person7.17dfa8bc.jpg","img/person7.jpg"],"img/person7.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

// import './../scss/main.scss';
// Init carousel
var carousel = document.querySelectorAll('.carousel');
M.Carousel.init(carousel, {
  shift: 60,
  dist: -280
}); // Tooggel mobile Nav

var toggle = document.querySelector('.nav--toggle').addEventListener('click', function () {
  document.body.classList.toggle('nav-open');
}); // Scroll Navbar

var navBar = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > navBar.offsetHeight + 300) {
    navBar.classList.add('scrollNav');
  } else {
    navBar.classList.remove('scrollNav');
  }
}); // Cursor Fallow Animations

var cursor = document.querySelector('.fallow--curser');

var fallowCursor = function fallowCursor(e) {
  cursor.style.top = "".concat(e.pageY, "px");
  cursor.style.left = "".concat(e.pageX, "px");
};

var animateCursor = function animateCursor(e) {
  var item = e.target.classList;

  if (item.contains('logo--img') || item.contains('nav--links') || item.contains('icon') || item.contains('btn')) {
    cursor.classList.add('cursor-animate');
  } else {
    cursor.classList.remove('cursor-animate');
  }
};

window.addEventListener('mousemove', fallowCursor);
window.addEventListener('mouseover', animateCursor); // Load Screen Animations

var joinWords = function joinWords(target) {
  var ele = document.querySelector(target);
  var splitText = ele.textContent.split('').map(function (i) {
    return i === ' ' ? " <span class='span--title'>".concat(i, "</span>") : "<span class='span--title'>".concat(i, "</span>");
  }).join('');
  ele.innerHTML = splitText;
  return ele;
};

var titleHero = joinWords('.hero--content__title'); // GSAP ANIMATIONS

var controller;
var scene;

var animateHome = function animateHome() {
  // Init Controller
  // Elements
  var header = document.querySelector('.header');
  var navLogo = header.querySelector('.nav--logo');
  var heroContent = document.querySelector('.hero--content'); // GSAP TIMELINE

  var tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'powe2.inOut'
    }
  });
  tl.fromTo('.load-screen span', 3, {
    y: '-50%',
    opacity: 0
  }, {
    y: '0',
    opacity: 1,
    stagger: 0.15
  }).to('.load-screen', 0.5, {
    opacity: 0
  }, '-=.50').to('body', 0.1, {
    overflow: 'hidden auto'
  });
  tl.fromTo(header, 1.7, {
    top: '-100%'
  }, {
    top: '0%'
  }, '-=1');
  tl.fromTo(navLogo, {
    x: '-100%',
    opacity: 0
  }, {
    x: '0%',
    opacity: 1
  }); ///////////  HOME SECTION \\\\\\\\\\\\\\
  // ME IMG DIV

  tl.fromTo(heroContent.children[0], {
    scale: 1.3,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  }, '-=1'); // ME IMG

  tl.fromTo(heroContent.children[0].firstElementChild, {
    scale: 2.5,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  }, '-=1.1'); // TITLE

  tl.fromTo(".span--title", 0.5, {
    display: 'inline-block',
    opacity: 0,
    y: '100px'
  }, {
    opacity: 1,
    y: '0px',
    stagger: 0.08
  }, '-=.10'); // SUBTITLE ,BTN,LINKS

  tl.fromTo([heroContent.children[2], heroContent.children[3], heroContent.children[4]], {
    scale: 0.9,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  }, '-=.20'); // BTN MOVE Y

  tl.fromTo(heroContent.children[4], {
    y: '50px'
  }, {
    y: '0px'
  }, '-=.98');
};

var animateSlides = function animateSlides() {
  // Init Controller
  controller = new ScrollMagic.Controller(); // Elements

  document.querySelectorAll('.section').forEach(function (section) {
    var cont = section.querySelector('.cont'); //   GSAP TIMELINE

    var tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'powe2.inOut'
      }
    }); ////////// ABOUT \\\\\\\\\\\

    cont.classList.contains('about--content') && tl.fromTo('.about--content__avatar', {
      x: '-300px',
      opacity: 0
    }, {
      x: '0px',
      opacity: 1
    }, '-=.90').fromTo('.about .about--content__text', {
      x: '300px',
      opacity: 0
    }, {
      x: '0px',
      opacity: 1
    }, '-=.40').fromTo('.about--content__avatar .avatar--img', {
      scale: 2,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }, '-=.90').to('.about--content__avatar', {
      overflow: 'visible'
    }).fromTo(['.about .email--box', '.about .about--content__links'], {
      y: '20px',
      opacity: 0
    }, {
      y: '0px',
      opacity: 1
    }, '-=1').fromTo('.about .btn', {
      y: '20px',
      opacity: 0
    }, {
      y: '0px',
      opacity: 1
    }); ///////// PORTFOLIO \\\\\\\\\\\

    cont.classList.contains('p-content') && tl.fromTo('.portfolio .title', {
      y: '-200px',
      opacity: 0
    }, {
      y: '0px',
      opacity: 1
    }).fromTo('.portfolio--content__card--screens', {
      x: '-300px',
      opacity: 0
    }, {
      x: '0px',
      opacity: 1
    }, '-=.85').fromTo('.portfolio--content__card--info', {
      x: '300px',
      opacity: 0
    }, {
      x: '0px',
      opacity: 1
    }, '-=.85').fromTo(['.portfolio--content__card--screens .tablet', '.portfolio--content__card--screens .laptop'], {
      opacity: 0,
      transformOrigin: 'bottom',
      scale: 0
    }, {
      opacity: 1,
      scale: 1
    }, '-=.80'); ////////// SKILLS \\\\\\\\\\\\\

    cont.classList.contains('skills--content') && tl.fromTo('.skills .title', {
      y: '-200px',
      opacity: 0
    }, {
      y: '0px',
      opacity: 1
    }).fromTo('.skills--tabs__tab', {
      opacity: 0,
      scale: 0.2
    }, {
      opacity: 1,
      scale: 1,
      stagger: 0.1
    }); ////////// CONTACT \\\\\\\\\\\\\

    cont.classList.contains('contact--content') && tl.fromTo('.contact .title', {
      y: '-200px',
      opacity: 0
    }, {
      y: '0px',
      opacity: 1
    }).fromTo('.contact--content__boxes--box', {
      opacity: 0,
      x: '-300px'
    }, {
      opacity: 1,
      x: '0px',
      stagger: 0.15
    }, '-=.95').fromTo('.contact--form__group', {
      opacity: 0,
      x: '300px'
    }, {
      opacity: 1,
      x: '0px',
      stagger: 0.15
    }, '-=.95').fromTo('.contact--links', {
      opacity: 0,
      x: '50px'
    }, {
      opacity: 1,
      x: '0px'
    }, '-=.95').fromTo('.contact .btn', {
      opacity: 0,
      x: '-50px'
    }, {
      opacity: 1,
      x: '0px'
    }, '-=.95'); // Create About Scene

    scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.8,
      reverse: false
    }).setTween(tl).addTo(controller);
  });
};

var activeNav = function activeNav() {
  // Init Controller
  controller = new ScrollMagic.Controller(); // Elements

  document.querySelectorAll('section').forEach(function (section) {
    //   GSAP TIMELINE
    var tl = gsap.timeline({
      defaults: {
        duration: 0.1,
        ease: 'powe2.inOut'
      }
    }); //   HOME

    addLinkClass(section.id, 'home', tl); //   ABOUT

    addLinkClass(section.id, 'about', tl); //   PORTFOLIO

    addLinkClass(section.id, 'portfolio', tl); //   SKILLS

    addLinkClass(section.id, 'skills', tl); //   CONTACT

    addLinkClass(section.id, 'contact', tl); // Create About Scene

    scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.15
    }).setTween(tl).addTo(controller);
  });
}; // CALL GSAP;


animateHome();
animateSlides();
activeNav();

function addLinkClass(id, target, tl) {
  id === target ? tl.to(".nav--container a[href='#".concat(target, "']"), {
    className: '+=nav--links active'
  }) : tl.to(".nav--container a[href='#".concat(target, "']"), {
    className: '+=nav--links'
  });
}
},{"../scss/main.scss":"scss/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58157" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map