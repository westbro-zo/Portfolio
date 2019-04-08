// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"index.js":[function(require,module,exports) {
// email 클릭하면 copy 되기
var header = document.querySelector('.header');
var goTop = document.querySelector('.go-top');
var goTopSign = goTop.querySelector('.go-top__sign');
var cgvImage = document.querySelector('.projects-image-cgv');
var cgvCover = cgvImage.querySelector('.image-cover-cgv');
var cgvMore = cgvImage.querySelector('.image-cover-cgv__btn');
var cgvModal = document.querySelector('.projects-modal-cgv');
var cgvClose = cgvModal.querySelector('.projects-modal-cgv__close');
var cgvMvp = cgvModal.querySelector('.cgv-mvp');
var cgvTech = cgvModal.querySelector('.cgv-tech');
var cgvRole = cgvModal.querySelector('.cgv-role');
var cgvMvpWrap = cgvModal.querySelector('.cgv-mvp__wrap');
var cgvTechWrap = cgvModal.querySelector('.cgv-tech__wrap');
var cgvRoleWrap = cgvModal.querySelector('.cgv-role__wrap');
var mallImage = document.querySelector('.projects-image-mall');
var mallCover = mallImage.querySelector('.image-cover-mall');
var mallMore = mallImage.querySelector('.image-cover-mall__btn');
var mallModal = document.querySelector('.projects-modal-mall');
var mallClose = mallModal.querySelector('.projects-modal-mall__close');
var mallMvp = mallModal.querySelector('.mall-mvp');
var mallTech = mallModal.querySelector('.mall-tech');
var mallRole = mallModal.querySelector('.mall-role');
var mallMvpWrap = mallModal.querySelector('.mall-mvp__wrap');
var mallTechWrap = mallModal.querySelector('.mall-tech__wrap');
var mallRoleWrap = mallModal.querySelector('.mall-role__wrap'); // go top

goTop.addEventListener("mouseenter", function () {
  goTopSign.style.display = "block";
});
goTop.addEventListener("mouseleave", function () {
  goTopSign.style.display = "none";
});
goTop.addEventListener("click", function () {
  goTop.classList.add('rotate');
  window.scrollTo(0, 0);
  setTimeout(function () {
    goTop.classList.remove('rotate');
  }, 1500);
}); // 프로젝트 이미지 호버

cgvImage.addEventListener("mouseover", function () {
  cgvCover.style.opacity = "1";
});
cgvImage.addEventListener("mouseleave", function () {
  cgvCover.style.opacity = "0";
});
mallImage.addEventListener("mouseover", function () {
  mallCover.style.opacity = "1";
});
mallImage.addEventListener("mouseleave", function () {
  mallCover.style.opacity = "0";
}); // 프로젝트 모달창

cgvMore.addEventListener("click", function (e) {
  e.preventDefault();
  cgvModal.classList.add('slide-animate');
  document.body.classList.add('stop-scrolling');
  cgvClose.style.display = "block"; // disableScrolling();
});
cgvClose.addEventListener("click", function () {
  cgvTechWrap.classList.remove('give-max-height');
  cgvRoleWrap.classList.remove('give-max-height');
  cgvMvpWrap.classList.remove('give-max-height');
  cgvModal.classList.remove('slide-animate');
  document.body.classList.remove('stop-scrolling');
  cgvClose.style.display = "none"; // enableScrolling();
});
mallMore.addEventListener("click", function (e) {
  e.preventDefault();
  mallModal.classList.add('slide-animate');
  document.body.classList.add('stop-scrolling');
  mallClose.style.display = "block";
});
mallClose.addEventListener("click", function () {
  mallTechWrap.classList.remove('give-max-height');
  mallRoleWrap.classList.remove('give-max-height');
  mallMvpWrap.classList.remove('give-max-height');
  mallModal.classList.remove('slide-animate');
  document.body.classList.remove('stop-scrolling');
  mallClose.style.display = "none";
}); // cgv 모달 컨텐트

cgvMvp.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    cgvMvpWrap.classList.toggle('give-max-height');
    cgvTechWrap.classList.remove('give-max-height');
    cgvRoleWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
});
cgvTech.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    cgvTechWrap.classList.toggle('give-max-height');
    cgvMvpWrap.classList.remove('give-max-height');
    cgvRoleWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
});
cgvRole.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    cgvRoleWrap.classList.toggle('give-max-height');
    cgvMvpWrap.classList.remove('give-max-height');
    cgvTechWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
}); // mall 모달 컨텐트

mallMvp.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    mallMvpWrap.classList.toggle('give-max-height');
    mallTechWrap.classList.remove('give-max-height');
    mallRoleWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
});
mallTech.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    mallTechWrap.classList.toggle('give-max-height');
    mallMvpWrap.classList.remove('give-max-height');
    mallRoleWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
});
mallRole.addEventListener("click", function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 768) {} else {
    mallRoleWrap.classList.toggle('give-max-height');
    mallMvpWrap.classList.remove('give-max-height');
    mallTechWrap.classList.remove('give-max-height'); // cgvMvpWrap.classList.toggle('give-height');
  }
}); // 헤더 바 그림자

document.addEventListener("scroll", function () {
  var top = window.pageYOffset;

  if (top === 0) {
    header.classList.remove("box-shadow-add");
  } else {
    header.classList.add("box-shadow-add");
  }
}); // scroll 막기
// function disableScrolling() {
//     var x = window.scrollX;
//     var y = window.scrollY;
//     window.onscroll = function () { window.scrollTo(x, y); };
// }
// // scroll 허용
// function enableScrolling() {
//     window.onscroll = function () { };
// }
// 이스터에그

console.log('%c          ', 'font-size: 100px; background: url(https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif) no-repeat; background-size: contain;');
console.log("I know you'll like me ♡");
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "0.0.0.0" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63668" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map