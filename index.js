/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/*! exports provided: FullscreenApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenApplication", function() { return FullscreenApplication; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);






var PIXI = window.PIXI;

var FullscreenApplication =
/*#__PURE__*/
function (_PIXI$Application) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FullscreenApplication, _PIXI$Application);

  function FullscreenApplication(everyTick, pixiApplicationOptions) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FullscreenApplication);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FullscreenApplication).call(this, pixiApplicationOptions));

    _this.everyTick = (everyTick || function () {}).bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    document.body.style.fontSize = 0;
    document.body.style.margin = 0;
    document.body.appendChild(_this.renderer.view);
    window.addEventListener('resize', _this.requestResize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)));

    _this.requestResize();

    _this.renderLoop(performance.now());

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FullscreenApplication, [{
    key: "renderLoop",
    value: function renderLoop(time) {
      requestAnimationFrame(this.renderLoop.bind(this));
      this.everyTick(time);
    }
  }, {
    key: "requestResize",
    value: function requestResize() {
      this.renderer.resize(innerWidth, innerHeight);
    }
  }]);

  return FullscreenApplication;
}(PIXI.Application);



/***/ }),

/***/ "./lib/extract.js":
/*!************************!*\
  !*** ./lib/extract.js ***!
  \************************/
/*! exports provided: TextureExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureExtractor", function() { return TextureExtractor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var PIXI = window.PIXI;

var TextureExtractor =
/*#__PURE__*/
function () {
  function TextureExtractor(_ref) {
    var tilewidth = _ref.tilewidth,
        tileheight = _ref.tileheight,
        texture = _ref.texture,
        offset = _ref.offset,
        limit = _ref.limit,
        scaleMode = _ref.scaleMode;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TextureExtractor);

    this.tilewidth = tilewidth;
    this.tileheight = tileheight;
    this.offset = offset || 0;
    this.texture = texture;
    this.textureCache = {};
    this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST;
    var count = limit || this.width / this.tilewidth * (this.height / this.tileheight);

    for (var i = 0; i < count; i++) {
      this.prepareTexture(i);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TextureExtractor, [{
    key: "prepareTexture",
    value: function prepareTexture(frame) {
      var width = this.width / this.tilewidth;
      var x = (frame - this.offset) % width * this.tilewidth;
      var y = Math.floor((frame - this.offset) / width) * this.tileheight;
      var rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight);
      this.textureCache[frame] = new PIXI.Texture(this.texture, rect);
      this.textureCache[frame].baseTexture.scaleMode = this.scaleMode;
      this.textureCache[frame].cacheAsBitmap = true;
    }
  }, {
    key: "getFrame",
    value: function getFrame(frame) {
      if (!this.textureCache[frame]) {
        this.prepareTexture(frame);
      }

      return this.textureCache[frame];
    }
  }, {
    key: "width",
    get: function get() {
      return this.texture.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.texture.height;
    }
  }]);

  return TextureExtractor;
}();



/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: FullscreenApplication, TiledApplication, TextureExtractor, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenApplication", function() { return FullscreenApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledApplication", function() { return TiledApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureExtractor", function() { return TextureExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
var _require = __webpack_require__(/*! ./app */ "./lib/app.js"),
    FullscreenApplication = _require.FullscreenApplication;

var _require2 = __webpack_require__(/*! ./tiledApp */ "./lib/tiledApp.js"),
    TiledApplication = _require2.TiledApplication;

var _require3 = __webpack_require__(/*! ./extract */ "./lib/extract.js"),
    TextureExtractor = _require3.TextureExtractor;

var _require4 = __webpack_require__(/*! ./utils */ "./lib/utils.js"),
    utils = _require4.utils;


/* global window */

window.PIXI.Tiled = {
  FullscreenApplication: FullscreenApplication,
  TiledApplication: TiledApplication,
  TextureExtractor: TextureExtractor,
  utils: utils
};

/***/ }),

/***/ "./lib/tiled.js":
/*!**********************!*\
  !*** ./lib/tiled.js ***!
  \**********************/
/*! exports provided: tiled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tiled", function() { return tiled; });
var PIXI = window.PIXI;

var TiledUtils = __webpack_require__(/*! tiled-utils */ "./node_modules/tiled-utils/index.js");

var tiled = new TiledUtils(PIXI);


/***/ }),

/***/ "./lib/tiledApp.js":
/*!*************************!*\
  !*** ./lib/tiledApp.js ***!
  \*************************/
/*! exports provided: TiledApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledApplication", function() { return TiledApplication; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);







var PIXI = window.PIXI;

var _require = __webpack_require__(/*! axios */ "./node_modules/axios/index.js"),
    get = _require.get;

var _require2 = __webpack_require__(/*! ./app */ "./lib/app.js"),
    FullscreenApplication = _require2.FullscreenApplication;

var _require3 = __webpack_require__(/*! ./extract */ "./lib/extract.js"),
    TextureExtractor = _require3.TextureExtractor;

var _require4 = __webpack_require__(/*! ./tiled */ "./lib/tiled.js"),
    tiled = _require4.tiled;

var _require5 = __webpack_require__(/*! ./utils */ "./lib/utils.js"),
    utils = _require5.utils;

var TiledApplication =
/*#__PURE__*/
function (_FullscreenApplicatio) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TiledApplication, _FullscreenApplicatio);

  function TiledApplication(everyTick, options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TiledApplication);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(TiledApplication).call(this, everyTick, options));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TiledApplication, [{
    key: "createTiles",
    value: function createTiles(config) {
      this.tiles = new TextureExtractor(config);
    }
  }, {
    key: "createWorld",
    value: function () {
      var _createWorld = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(world, tileset, tilesize) {
        var _this = this;

        var group,
            clear,
            pickable,
            _ref,
            data,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                group = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];
                clear = _args.length > 4 && _args[4] !== undefined ? _args[4] : [];
                pickable = _args.length > 5 && _args[5] !== undefined ? _args[5] : [];
                if (!this.tiles) console.warn('Creating tile-less world. You should propably first call createTiles()');
                _context.next = 6;
                return get(world);

              case 6:
                _ref = _context.sent;
                data = _ref.data;
                this.world = tiled.makeTiledWorld(data, tileset);
                this.ground = this.world.children.filter(function (_ref2) {
                  var type = _ref2.type;
                  return type === 'tilelayer';
                });
                this.objects = this.createObjects(tilesize, group, clear, pickable);
                this.sprites = this.createSprites(tilesize, clear);
                this.ground.forEach(function (ground) {
                  return _this.stage.addChild(ground);
                });
                this.sprites.forEach(function (sprite) {
                  return _this.stage.addChild(sprite);
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createWorld(_x, _x2, _x3) {
        return _createWorld.apply(this, arguments);
      }

      return createWorld;
    }()
  }, {
    key: "createObjects",
    value: function createObjects(tilesize) {
      var _this2 = this;

      var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var pickable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var objects = [];
      var groups = utils.groupObjects(this.world.objects);
      var groupRegExp = group.map(function (string) {
        return new RegExp(string);
      });
      Object.keys(groups).filter(function (name) {
        var markedForRemove = utils.contains(clear, name);
        return !markedForRemove && !utils.contains(pickable, name);
      }).forEach(function (name) {
        console.log("\u2523\u2501 parse object: ".concat(name));
        var next = groups[name];
        var group = groupRegExp.find(function (regExp) {
          return name.match(regExp);
        });
        var container;

        if (group) {
          container = new PIXI.Container();
          utils.pushObject(container, objects);
          utils.nameObject(container, {
            name: name,
            type: 'layer'
          });
          console.log("\u2523\u2501 add layer: ".concat(name));
        }

        if (Array.isArray(next)) {
          next.forEach(function (object) {
            if (object.gid) {
              var sprite = utils.createSprite(object.gid, tilesize, _this2.tiles);

              if (sprite) {
                utils.nameObject(sprite, object, ['x', 'y', 'gid', 'name']);

                if (group) {
                  console.log("\u2523\u2501 add object ".concat(object.name, " (").concat(~~sprite.x, "/").concat(~~sprite.y, ") to layer: ").concat(name));
                  container.addChild(sprite);
                } else {
                  utils.pushObject(sprite, objects);
                }
              }
            }
          });
        }
      });
      return objects;
    }
  }, {
    key: "createSprites",
    value: function createSprites() {
      var tilesize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return this.objects.filter(function (sprite) {
        return !utils.contains(clear, sprite.name);
      }).map(function (sprite) {
        try {
          var x = Math.round((sprite.x || 0) + (sprite.offsetx || 0));
          var y = Math.round((sprite.y || 0) + (sprite.offsety || 0));
          var objects = sprite.children.length ? sprite.children : [sprite];
          var bounds = utils.getBounds(objects);
          sprite.x = sprite.basex = bounds.left + x;
          sprite.y = sprite.basey = bounds.down + y - tilesize;
          objects.forEach(function (child) {
            child.x -= bounds.left - child.width * 0.5;
            child.y -= bounds.down - tilesize;
            child.anchor.set(0.5, 1);
          });
          return sprite;
        } catch (err) {
          console.error(err.message, err.stack);
        }
      });
    }
  }]);

  return TiledApplication;
}(FullscreenApplication);



/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
var PIXI = window.PIXI;
var utils = {
  getTexture: function getTexture(frame, tiles) {
    if (tiles && typeof tiles.getFrame === 'function') {
      return tiles.getFrame(frame);
    } else {
      console.warn('! tiles not set @ getTexture');
    }

    return PIXI.Texture.EMPTY;
  },
  createSprite: function createSprite(frame) {
    var tilesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    var tiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var sprite;

    if (tiles) {
      if (!isNaN(frame) && isFinite(frame)) {
        sprite = new PIXI.Sprite(utils.getTexture(~~frame, tiles));
      } else if (frame) {
        sprite = PIXI.Sprite.fromFrame(frame);
      }
    } else {
      sprite = new PIXI.Sprite();
    }

    if (sprite) {
      sprite.width = tilesize;
      sprite.height = tilesize;

      if (sprite.texture) {
        sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
      }

      return sprite;
    }
  },
  getModel: function getModel(source, url) {
    var cursor = source;
    var propList = url.split('.');

    while (cursor && propList.length) {
      cursor = cursor[propList.shift()];
    }

    return cursor;
  },
  contains: function contains(array, value) {
    return value && array.some(function (string) {
      return value.startsWith(string);
    });
  },
  groupObjects: function groupObjects(array) {
    var groupName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'group.name';
    return array ? array.reduce(function (groups, item) {
      var cursor = utils.getModel(item, groupName);

      if (cursor) {
        if (!groups[cursor]) {
          groups[cursor] = [];
        }

        groups[cursor].push(item);
      }

      return groups;
    }, {}) : {};
  },
  nameObject: function nameObject(target) {
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['name', 'type'];
    if (!target) return;
    props.forEach(function (prop) {
      if (source[prop] && !target[prop]) {
        target[prop] = source[prop];
      }
    });
  },
  pushObject: function pushObject(source, target, props) {
    if (target.indexOf(source) !== -1) return;

    if (Array.isArray(source.objects)) {
      source.objects.forEach(function (sprite) {
        utils.nameObject(sprite, source, props);
      });
    }

    target.push(source);
  },
  getBounds: function getBounds(array) {
    if (Array.isArray(array) && array.length) {
      var up = Infinity;
      var left = Infinity;
      var right = -Infinity;
      var down = -Infinity;
      var temp;
      array.forEach(function (sprite) {
        var w = sprite.width;
        var h = sprite.height;

        if ((temp = sprite.x) < left) {
          left = temp;
        }

        if ((temp = sprite.y) < up) {
          up = temp;
        }

        if ((temp = sprite.x + w) > right) {
          right = temp;
        }

        if ((temp = sprite.y + h) > down) {
          down = temp;
        }
      });
      return {
        up: up,
        down: down,
        left: left,
        right: right
      };
    }

    return {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    };
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tiled-utils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/tiled-utils/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global PIXI */

module.exports = module.exports.default = class TileUtilities {
  constructor (renderingEngine = PIXI) {
    if (renderingEngine === undefined) throw new Error('Please assign a rendering engine in the constructor before using bump.js')

    // Find out which rendering engine is being used (the default is Pixi)
    this.renderer = ''

    // If the `renderingEngine` is Pixi, set up Pixi object aliases
    if (renderingEngine.Container && renderingEngine.Sprite) {
      this.renderingEngine = renderingEngine
      this.renderer = 'pixi'
      this.Container = this.renderingEngine.Container
      this.TextureCache = this.renderingEngine.utils.TextureCache
      this.Texture = this.renderingEngine.Texture
      this.Sprite = this.renderingEngine.Sprite
      this.Rectangle = this.renderingEngine.Rectangle
      this.Graphics = this.renderingEngine.Graphics
      this.loader = this.renderingEngine.loader
      this.resources = this.renderingEngine.resources
    }
  }

  // Make a texture from a frame in another texture or image
  frame (source, x, y, width, height) {
 
    // for backend use (with pixi-shim)
    // return without frame retangle
    if (!source) {
      return this.Texture.EMPTY
    }

    let texture

    // If the source is a string, it's either a texture in the
    // cache or an image file
    if (typeof source === 'string') {
      if (this.TextureCache[source]) {
        texture = new this.Texture(this.TextureCache[source])
      }
    }

    // If the `source` is a texture,  use it
    else if (source instanceof this.Texture) {
      texture = new this.Texture(source)
    }

    if (texture) {
      // Make a rectangle the size of the sub-image
      texture.frame = new this.Rectangle(x, y, width, height)
      return texture
    }
  }

  // #### getIndex
  // The `getIndex` helper method
  // converts a sprite's x and y position to an array index number.
  // It returns a single index value that tells you the map array
  // index number that the sprite is in
  getIndex (x, y, tilewidth, tileheight, mapWidthInTiles) {
    const index = {}

    // Convert pixel coordinates to map index coordinates
    index.x = Math.floor(x / tilewidth)
    index.y = Math.floor(y / tileheight)

    // Return the index number
    return index.x + (index.y * mapWidthInTiles)
  }

  /*
  #### getTile
  The `getTile` helper method
  converts a tile's index number into x/y screen
  coordinates, and capture's the tile's grid index (`gid`) number.
  It returns an object with `x`, `y`, `centerX`, `centerY`, `width`, `height`, `halfWidth`
  `halffHeight` and `gid` properties. (The `gid` number is the value that the tile has in the
  mapArray) This lets you use the returned object
  with the 2d geometric collision functions like `hitTestRectangle`
  or `rectangleCollision`

  The `world` object requires these properties:
  `x`, `y`, `tilewidth`, `tileheight` and `widthInTiles`
  */
  getTile (index, mapArray, world) {
    const tile = {}
    tile.gid = mapArray[index]
    tile.width = world.tilewidth
    tile.height = world.tileheight
    tile.halfWidth = world.tilewidth / 2
    tile.halfHeight = world.tileheight / 2
    tile.x = ((index % world.widthInTiles) * world.tilewidth) + world.x
    tile.y = ((Math.floor(index / world.widthInTiles)) * world.tileheight) + world.y
    tile.gx = tile.x
    tile.gy = tile.y
    tile.centerX = tile.x + world.tilewidth / 2
    tile.centery = tile.y + world.tileheight / 2

    // Return the tile object
    return tile
  }

  /*
  #### surroundingCells
  The `surroundingCells` helper method returns an array containing 9
  index numbers of map array cells around any given index number.
  Use it for an efficient broadphase/narrowphase collision test.
  The 2 arguments are the index number that represents the center cell,
  and the width of the map array.
  */

  surroundingCells (index, widthInTiles) {
    return [
      index - widthInTiles - 1,
      index - widthInTiles,
      index - widthInTiles + 1,
      index - 1,
      index,
      index + 1,
      index + widthInTiles - 1,
      index + widthInTiles,
      index + widthInTiles + 1
    ]
  }

  // #### getPoints
  /*
  The `getPoints` method takes a sprite and returns
  an object that tells you what all its corner points are. The return
  object has four properties, each of which is an object with `x` and `y` properties:

  - `topLeft`: `x` and `y` properties describing the top left corner
  point.
  - `topRight`: `x` and `y` properties describing the top right corner
  point.
  - `bottomLeft`: `x` and `y` properties describing the bottom left corner
  point.
  - `bottomRight`: `x` and `y` properties describing the bottom right corner
  point.

  If the sprite has a `collisionArea` property that defines a
  smaller rectangular area inside the sprite, that collision
  area can be used instead for collisions instead of the sprite's dimensions. Here's
  How you could define a `collsionArea` on a sprite called `elf`:
  ```js
  elf.collisionArea = {x: 22, y: 44, width: 20, height: 20};
  ```
  Here's how you could use the `getPoints` method to find all the collision area's corner points.
  ```js
  let cornerPoints = tu.getPoints(elf.collisionArea);
```
  */

  getPoints (s) {
    const ca = s.collisionArea
    if (ca !== undefined) {
      return {
        topLeft: {
          x: s.x + ca.x,
          y: s.y + ca.y
        },
        topRight: {
          x: s.x + ca.x + ca.width,
          y: s.y + ca.y
        },
        bottomLeft: {
          x: s.x + ca.x,
          y: s.y + ca.y + ca.height
        },
        bottomRight: {
          x: s.x + ca.x + ca.width,
          y: s.y + ca.y + ca.height
        }
      }
    }
    return {
      topLeft: {
        x: s.x,
        y: s.y
      },
      topRight: {
        x: s.x + s.width - 1,
        y: s.y
      },
      bottomLeft: {
        x: s.x,
        y: s.y + s.height - 1
      },
      bottomRight: {
        x: s.x + s.width - 1,
        y: s.y + s.height - 1
      }
    }
  }

  // ### hitTestTile
  /*
  `hitTestTile` checks for a
  collision between a sprite and a tile in any map array that you
  specify. It returns a `collision` object.
  `collision.hit` is a Boolean that tells you if a sprite is colliding
  with the tile that you're checking. `collision.index` tells you the
  map array's index number of the colliding sprite. You can check for
  a collision with the tile against "every" corner point on the
  sprite, "some" corner points, or the sprite's "center" point.
  `hitTestTile` arguments:
  sprite, array, collisionTileGridIdNumber, worldObject, spritesPointsToCheck
  ```js
  tu.hitTestTile(sprite, array, collisioGid, world, pointsToCheck);
  ```
  The `world` object (the 4th argument) has to have these properties:
  `tileheight`, `tilewidth`, `widthInTiles`.
  Here's how you could use  `hitTestTile` to check for a collision between a sprite
  called `alien` and an array of wall sprites with map gid numbers of 0.
  ```js
  let alienVsFloor = g.hitTestTile(alien, wallMapArray, 0, world, "every");
  ```
  */

  hitTestTile (sprite, mapArray, gidToCheck, world, pointsToCheck) {
    // The `checkPoints` helper function Loop through the sprite's corner points to
    // find out if they are inside an array cell that you're interested in.
    // Return `true` if they are
    const checkPoints = (key) => {
      // Get a reference to the current point to check.
      // (`topLeft`, `topRight`, `bottomLeft` or `bottomRight` )
      const point = sprite.collisionPoints[key]

      // Find the point's index number in the map array
      collision.index = this.getIndex(
        point.x, point.y,
        world.tilewidth, world.tileheight, world.widthInTiles
      )

      // Find out what the gid value is in the map position
      // that the point is currently over
      collision.gid = mapArray[collision.index]

      // If it matches the value of the gid that we're interested, in
      // then there's been a collision
      if (collision.gid === gidToCheck) {
        return true
      }
      return false
    }

    // Assign "some" as the default value for `pointsToCheck`
    pointsToCheck = pointsToCheck || 'some'

    // The collision object that will be returned by this function
    let collision = {}

    // Which points do you want to check?
    // "every", "some" or "center"?
    switch (pointsToCheck) {
    case 'center':

      // `hit` will be true only if the center point is touching
      sprite.collisionPoints = {
        center: {
          x: sprite.centerX,
          y: sprite.centerY
        }
      }
      collision.hit = Object.keys(sprite.collisionPoints).some(checkPoints)
      break
    case 'every':

      // `hit` will be true if every point is touching
      sprite.collisionPoints = this.getPoints(sprite)
      collision.hit = Object.keys(sprite.collisionPoints).every(checkPoints)
      break
    case 'some':

      // `hit` will be true only if some points are touching
      sprite.collisionPoints = this.getPoints(sprite)
      collision.hit = Object.keys(sprite.collisionPoints).some(checkPoints)
      break
    }

    // Return the collision object.
    // `collision.hit` will be true if a collision is detected.
    // `collision.index` tells you the map array index number where the
    // collision occured
    return collision
  }

  // ### updateMap
  /*
  `updateMap` takes a map array and adds a sprite's grid index number (`gid`) to it.
  It finds the sprite's new index position, and retuns the new map array.
  You can use it to do very efficient collision detection in tile based game worlds.
  `updateMap` arguments:
  array, singleSpriteOrArrayOfSprites, worldObject
  The `world` object (the 4th argument) has to have these properties:
  `tileheight`, `tilewidth`, `widthInTiles`.
  The sprite objects have to have have these properties:
  `centerX`, `centerY`, `index`, `gid` (The number in the array that represpents the sprite)
  Here's an example of how you could use `updateMap` in your game code like this:

      blockLayer.data = updateMap(blockLayer.data, blockLayer.children, world);

  The `blockLayer.data` array would now contain the new index position numbers of all the
  child sprites on that layer.
  */

  updateMap (mapArray, spritesToUpdate, world) {
    // First create a map a new array filled with zeros.
    // The new map array will be exactly the same size as the original
    const newMapArray = mapArray.map((gid) => {
      gid = 0
      return gid
    })

    // Is `spriteToUpdate` an array of sprites?
    if (spritesToUpdate instanceof Array) {
      // Get the index number of each sprite in the `spritesToUpdate` array
      // and add the sprite's `gid` to the matching index on the map
      const self = this
      spritesToUpdate.forEach((sprite) => {
        // Find the new index number
        sprite.index = self.getIndex(
          sprite.centerX, sprite.centerY,
          world.tilewidth, world.tileheight, world.widthInTiles
        )

        // Add the sprite's `gid` number to the correct index on the map
        newMapArray[sprite.index] = sprite.gid
      })
    }

    // Is `spritesToUpdate` just a single sprite?
    else {
      const sprite = spritesToUpdate
      // Find the new index number
      sprite.index = this.getIndex(
        sprite.centerX, sprite.centerY,
        world.tilewidth, world.tileheight, world.widthInTiles
      )

      // Add the sprite's `gid` number to the correct index on the map
      newMapArray[sprite.index] = sprite.gid
    }

    // Return the new map array to replace the previous one
    return newMapArray
  }

  /*
  ###makeTiledWorld

  `makeTiledWorld` is a quick and easy way to display a game world designed in
  Tiled Editor. Supply `makeTiledWorld` with 2 **string arguments**:

  1. A JSON file generated by Tiled Editor.
  2. A source image that represents the tile set you used to create the Tiled Editor world.
  ```js
  let world = makeTiledWorld("tiledEditorMapData.json", "tileset.png");
  ```
  (Note: `makeTiledWorld` looks for the JSON data file in Pixi's `loader.resources` object. So,
  make sure you've loaded the JSON file using Pixi's `loader`.)

  `makeTiledWorld` will return a Pixi `Container` that contains all the things in your Tiled Editor
  map as Pixi sprites.

  All the image tiles you create in Tiled Editor are automatically converted into Pixi sprites
  for you by `makeTiledWorld`. You can access all of them using two methods: `getObject` (for
  single sprites) and `getObjects` (with an "s") for multiple sprites. Let's find out how they work.

  ####world.getObject

  Tile Editor lets you assign a "name" properties any object.
  You can access any sprite by this name using the `getObject` method. `getObject` searches for and
  returns a sprite in the `world` that has the same `name` property that you assigned
  in Tiled Editor. Here's how to use `getObject` to look for an object called "alien"
  in the Tiled map data and assign it to a variable called `alien`
  ```js
  let alien = world.getObject("alien");
  ```
  `alien` is now an ordinary Pixi sprite that you can control just like any other Pixi
  sprite in your games.

  #### Creating sprites from generic objects

  Tiled Editor lets you create generic objects. These are objects that don't have images associated
  with them. Generic objects are handy to use, because they let you create complex game objects inside
  Tiled Editor, as pure data. You can then use that data your game code to build complex game objects.

  For example, imagine that you want to create a complex animated walking sprite called "elf".
  First, create the elf object in Tiled Editor as a generic object, but don't assign any image tiles
  to it. Next, in your game code, create a new Pixi MovieClip called `elf` and give it any textures you want
  to use for its animation states.
  ```js
  //Create a new Pixi MovieClip sprite
  let elf = new PIXI.MovieClip(elfSpriteTextures);
  ```
  Then use the `x` and `y` data from the generic "elf" object you created in Tiled Editor to position the
  `elf` sprite.
  ```js
  elf.x = world.getObject("elf").x;
  elf.y = world.getObject("elf").y;
  ```
  This is a simple example, but you could make very complex data objects in Tiled Editor and
  use them to build complex sprites in the same way.

  ####Accessing Tiled Editor layer groups

  Tiled Editor lets you create **layer groups**. Each layer group you create
  in Tiled Editor is automatically converted by `makeTiledWorld` into a Pixi `Container`
  object. You can access those containers using `getObject` to extract the layer group
  container.

  Here's how you could extract the layer group called "objects" and add the
  `elf` sprite to it.
  ```js
  let objectsLayer = world.getObject("objects");
  objectsLayer.addChild(elf);
  ```
  If you want to add the sprite to a different world layer, you can do it like this:
  ```js
  world.getObject("treeTops").addChild(elf);
  ```
  If you want to access all the sprites in a specific Tiled Editor layer, just supply
  `getObject` with the name of the layer. For example, if the layer name is "items", you
  can access it like this:
  ```js
  let itemsLayer = world.getObject("items");
  ```
  `itemsLayer` is now a Pixi container with a `children` array that contains all the sprites
  on that layer.

  To be safe, clone this array to create a new version
  that doesn't point to the original data file:
  ```js
  items = itemsLayer.children.slice(0);
  ```
  You can now manipulate the `items` array freely without worrying about changing
  the original array. This can possibly help prevent some weird bugs in a complex game.

  ###Finding the "gid" values

  Tiled Editor uses "gid" numbers to identify different kinds of things in the world.
  If you ever need to extract sprites with specific `gid` numbers in a
  layer that contains different kinds of things, you can do it like this:
  ```js
  let items = itemsLayer.children.map(sprite => {
    if (sprite.gid !== 0) return sprite;
  });
  ```
  Every sprite created by `makeTiledWorld` has a `gid` property with a value that matches its
  Tiled Editor "gid" value.

  ####Accessing a layer's "data" array

  Tiled Editor's layers have a `data` property
  that is an array containing all the grid index numbers (`gid`) of
  the tiles in that array. Imagine that you've got a layer full of similar
  tiles representing the walls in a game. How do you access the array
  containing all the "gid" numbers of the wall sprites in that layer? If the layer's name is called "wallLayer", you
  can access the `wallLayer`'s `data` array of sprites like this:
  ```js
  wallMapArray = world.getObject("wallLayer").data;
  ```
  `wallMapArray` is now an array of "gid" numbers referring to all the sprites on that
  layer. You can now use this data for collision detection, or doing any other kind
  of world building.

  ###world.getObjects

  There's another method called `getObjects` (with an "s"!) that lets you extract
  an array of sprites from the Tiled Editor data. Imagine that you created three
  game objects in Tiled Editor called "marmot", "skull" and "heart". `makeTiledWorld`
  automatically turns them into sprites, and you can access
  all of them as array of sprites using `getObjects` like this:
  ```js
  let gameItemsArray = world.getObjects("marmot", "skull", "heart");
  ```
  */

  makeTiledWorld (jsonTiledMap, tileset) {
    // Create a group called `world` to contain all the layers, sprites
    // and objects from the `tiledMap`. The `world` object is going to be
    // returned to the main game program
    const tiledMap = (typeof jsonTiledMap === 'string') ? this.resources[jsonTiledMap].data : jsonTiledMap
    const world = new this.Container()

    world.tileheight = tiledMap.tileheight
    world.tilewidth = tiledMap.tilewidth

    // Calculate the `width` and `height` of the world, in pixels
    world.worldWidth = tiledMap.width * tiledMap.tilewidth
    world.worldHeight = tiledMap.height * tiledMap.tileheight

    // Get a reference to the world's height and width in
    // tiles, in case you need to know this later (you will!)
    world.widthInTiles = tiledMap.width
    world.heightInTiles = tiledMap.height

    // Create an `objects` array to store references to any
    // named objects in the map. Named objects all have
    // a `name` property that was assigned in Tiled Editor
    world.objects = []

    // The optional spacing (padding) around each tile
    // This is to account for spacing around tiles
    // that's commonly used with texture atlas tilesets. Set the
    // `spacing` property when you create a new map in Tiled Editor
    const spacing = tiledMap.tilesets[0].spacing

    // Figure out how many columns there are on the tileset.
    // This is the width of the image, divided by the width
    // of each tile, plus any optional spacing thats around each tile
    const numberOfTilesetColumns =
      Math.floor(
        tiledMap.tilesets[0].imagewidth / (tiledMap.tilewidth + spacing)
      )

    // Loop through all the map layers
    tiledMap.layers.forEach((tiledLayer) => {
      // Make a group for this layer and copy
      // all of the layer properties onto it.
      const layerGroup = new this.Container()

      Object.keys(tiledLayer).forEach((key) => {
        // Add all the layer's properties to the group, except the
        // width and height (because the group will work those our for
        // itself based on its content).
        if (key !== 'width' && key !== 'height') {
          layerGroup[key] = tiledLayer[key]
        }
      })

      // Set the width and height of the layer to
      // the `world`'s width and height
      // layerGroup.width = world.width;
      // layerGroup.height = world.height;

      // Translate `opacity` to `alpha`
      layerGroup.alpha = tiledLayer.opacity

      // Add the group to the `world`
      world.addChild(layerGroup)

      // Push the group into the world's `objects` array
      // So you can access it later
      world.objects.push(layerGroup)

      // Is this current layer a `tilelayer`?
      if (tiledLayer.type === 'tilelayer') {
        // Loop through the `data` array of this layer
        tiledLayer.data.forEach((gid, index) => {
          let tileSprite,
            texture,
            mapX,
            mapY,
            tilesetX,
            tilesetY,
            mapColumn,
            mapRow,
            tilesetColumn,
            tilesetRow

          // If the grid id number (`gid`) isn't zero, create a sprite
          if (gid !== 0) {
            // Figure out the map column and row number that we're on, and then
            // calculate the grid cell's x and y pixel position.
            mapColumn = index % world.widthInTiles
            mapRow = Math.floor(index / world.widthInTiles)
            mapX = mapColumn * world.tilewidth
            mapY = mapRow * world.tileheight

            // Figure out the column and row number that the tileset
            // image is on, and then use those values to calculate
            // the x and y pixel position of the image on the tileset
            tilesetColumn = ((gid - 1) % numberOfTilesetColumns)
            tilesetRow = Math.floor((gid - 1) / numberOfTilesetColumns)
            tilesetX = tilesetColumn * world.tilewidth
            tilesetY = tilesetRow * world.tileheight

            // Compensate for any optional spacing (padding) around the tiles if
            // there is any. This bit of code accumlates the spacing offsets from the
            // left side of the tileset and adds them to the current tile's position
            if (spacing > 0) {
              tilesetX += spacing + (spacing * ((gid - 1) % numberOfTilesetColumns))
              tilesetY += spacing + (spacing * Math.floor((gid - 1) / numberOfTilesetColumns))
            }

            // Use the above values to create the sprite's image from
            // the tileset image
            texture = this.frame(
              tileset, tilesetX, tilesetY,
              world.tilewidth, world.tileheight
            )

            // I've dedcided that any tiles that have a `name` property are important
            // and should be accessible in the `world.objects` array.

            let tileproperties = tiledMap.tilesets[0].tileproperties || {}
            let key = String(gid - 1)

            // If the JSON `tileproperties` object has a sub-object that
            // matches the current tile, and that sub-object has a `name` property,
            // then create a sprite and assign the tile properties onto
            // the sprite
            if (tileproperties[key] && tileproperties[key].name) {
              // Make a sprite
              tileSprite = new this.Sprite(texture)

              // Copy all of the tile's properties onto the sprite
              // (This includes the `name` property)
              Object.keys(tileproperties[key]).forEach((property) => {
                // console.log(tileproperties[key][property])
                tileSprite[property] = tileproperties[key][property]
              })

              // Push the sprite into the world's `objects` array
              // so that you can access it by `name` later
              world.objects.push(tileSprite)
            }

            // If the tile doesn't have a `name` property, just use it to
            // create an ordinary sprite (it will only need one texture)
            else {
              tileSprite = new this.Sprite(texture)
            }

            // Position the sprite on the map
            tileSprite.x = mapX
            tileSprite.y = mapY

            // Make a record of the sprite's index number in the array
            // (We'll use this for collision detection later)
            tileSprite.index = index

            // Make a record of the sprite's `gid` on the tileset.
            // This will also be useful for collision detection later
            tileSprite.gid = gid

            // Add the sprite to the current layer group
            layerGroup.addChild(tileSprite)
          }
        })
      }

      // Is this layer an `objectgroup`?
      if (tiledLayer.type === 'objectgroup') {
        tiledLayer.objects.forEach((object) => {
          // We're just going to capture the object's properties
          // so that we can decide what to do with it later

          // Get a reference to the layer group the object is in
          object.group = layerGroup

          // Because this is an object layer, it doesn't contain any
          // sprites, just data object. That means it won't be able to
          // calucalte its own height and width. To help it out, give
          // the `layerGroup` the same `width` and `height` as the `world`
          // layerGroup.width = world.width;
          // layerGroup.height = world.height;

          // Push the object into the world's `objects` array
          world.objects.push(object)
        })
      }
    })

    // Search functions
    // `world.getObject` and `world.getObjects`  search for and return
    // any sprites or objects in the `world.objects` array.
    // Any object that has a `name` propery in
    // Tiled Editor will show up in a search.
    // `getObject` gives you a single object, `getObjects` gives you an array
    // of objects.
    // `getObject` returns the actual search function, so you
    // can use the following format to directly access a single object:
    // sprite.x = world.getObject("anySprite").x;
    // sprite.y = world.getObject("anySprite").y;

    world.getObject = objectName => {
      const searchForObject = () => {
        let foundObject
        world.objects.some((object) => {
          if (object.name && object.name === objectName) {
            foundObject = object
            return true
          }
        })
        if (foundObject) {
          return foundObject
        }
        throw new Error(`There is no object with the property name: ${objectName}`)
      }

      // Return the search function
      return searchForObject()
    }

    world.getObjects = objectNames => {
      const foundObjects = []
      world.objects.forEach((object) => {
        if (object.name && objectNames.indexOf(object.name) !== -1) {
          foundObjects.push(object)
        }
      })
      if (foundObjects.length > 0) {
        return foundObjects
      }
      throw new Error('I could not find those objects')
    }

    // That's it, we're done!
    // Finally, return the `world` object back to the game program
    return world
  }

  /* Isometric tile utilities */

  /*
  ### byDepth
  And array `sort` function that depth-sorts sprites according to
  their `z` properties
  */
  byDepth (a, b) {
    // Calculate the depths of `a` and `b`
    // (add `1` to `a.z` and `b.x` to avoid multiplying by 0)
    a.depth = (a.cartX + a.cartY) * (a.z + 1)
    b.depth = (b.cartX + b.cartY) * (b.z + 1)

    // Move sprites with a lower depth to a higher position in the array
    if (a.depth < b.depth) {
      return -1
    } else if (a.depth > b.depth) {
      return 1
    }
    return 0
  }

  /*
  ### hitTestIsoTile
  Same API as `hitTestTile`, except that it works with isometric sprites.
  Make sure that your `world` object has properties called
  `cartTileWidth` and `cartTileHeight` that define the Cartesian with and
  height of your tile cells, in pixels.

  */

  hitTestIsoTile (sprite, mapArray, gidToCheck, world, pointsToCheck) {
    // The `checkPoints` helper function Loop through the sprite's corner points to
    // find out if they are inside an array cell that you're interested in.
    // Return `true` if they are
    const checkPoints = (key) => {
      // Get a reference to the current point to check.
      // (`topLeft`, `topRight`, `bottomLeft` or `bottomRight` )
      const point = sprite.collisionPoints[key]

      // Find the point's index number in the map array
      collision.index = this.getIndex(
        point.x, point.y,
        world.cartTilewidth, world.cartTileheight, world.widthInTiles
      )

      // Find out what the gid value is in the map position
      // that the point is currently over
      collision.gid = mapArray[collision.index]

      // If it matches the value of the gid that we're interested, in
      // then there's been a collision
      if (collision.gid === gidToCheck) {
        return true
      }
      return false
    }

    // Assign "some" as the default value for `pointsToCheck`
    pointsToCheck = pointsToCheck || 'some'

    // The collision object that will be returned by this function
    let collision = {}

    // Which points do you want to check?
    // "every", "some" or "center"?
    switch (pointsToCheck) {
    case 'center':

      // `hit` will be true only if the center point is touching
      sprite.collisionPoints = {
        center: {
          x: sprite.centerX,
          y: sprite.centerY
          // x: s.cartX + ca.x + (ca.width / 2),
          // y: s.cartY + ca.y + (ca.height / 2)
        }
      }
      collision.hit = Object.keys(sprite.collisionPoints).some(checkPoints)
      break
    case 'every':

      // `hit` will be true if every point is touching
      sprite.collisionPoints = this.getIsoPoints(sprite)
      collision.hit = Object.keys(sprite.collisionPoints).every(checkPoints)
      break
    case 'some':

      // `hit` will be true only if some points are touching
      sprite.collisionPoints = this.getIsoPoints(sprite)
      collision.hit = Object.keys(sprite.collisionPoints).some(checkPoints)
      break
    }

    // Return the collision object.
    // `collision.hit` will be true if a collision is detected.
    // `collision.index` tells you the map array index number where the
    // collision occured
    return collision
  }

  /*
  ### getIsoPoints
  The isomertic version of `getPoints`
  */

  getIsoPoints (s) {
    const ca = s.collisionArea
    if (ca !== undefined) {
      return {
        topLeft: {
          x: s.cartX + ca.x,
          y: s.cartY + ca.y
        },
        topRight: {
          x: s.cartX + ca.x + ca.width,
          y: s.cartY + ca.y
        },
        bottomLeft: {
          x: s.cartX + ca.x,
          y: s.cartY + ca.y + ca.height
        },
        bottomRight: {
          x: s.cartX + ca.x + ca.width,
          y: s.cartY + ca.y + ca.height
        }
      }
    }
    return {
      topLeft: {
        x: s.cartX,
        y: s.cartY
      },
      topRight: {
        x: s.cartX + s.cartWidth - 1,
        y: s.cartY
      },
      bottomLeft: {
        x: s.cartX,
        y: s.cartY + s.cartHeight - 1
      },
      bottomRight: {
        x: s.cartX + s.cartWidth - 1,
        y: s.cartY + s.cartHeight - 1
      }
    }
  }

  /*
  ### makeIsoPointer
  Used to add a isometric properties to any mouse/touch `pointer` object with
  `x` and `y` properties. Supply `makeIsoPointer` with the pointer object and
  the isometric `world` object
  */

  // Create some useful properties on the pointer
  makeIsoPointer (pointer, world) {
    Object.defineProperties(pointer, {

      // The isometric's world's Cartesian coordiantes
      cartX: {
        get () {
          const x =
            (((2 * this.y + this.x) - (2 * world.y + world.x)) / 2) - (world.cartTilewidth / 2)

          return x
        },
        enumerable: true,
        configurable: true
      },
      cartY: {
        get () {
          const y =
            (((2 * this.y - this.x) - (2 * world.y - world.x)) / 2) + (world.cartTileheight / 2)

          return y
        },
        enumerable: true,
        configurable: true
      },

      // The tile's column and row in the array
      column: {
        get () {
          return Math.floor(this.cartX / world.cartTilewidth)
        },
        enumerable: true,
        configurable: true
      },
      row: {
        get () {
          return Math.floor(this.cartY / world.cartTileheight)
        },
        enumerable: true,
        configurable: true
      },

      // The tile's index number in the array
      index: {
        get () {
          const index = {}

          // Convert pixel coordinates to map index coordinates
          index.x = Math.floor(this.cartX / world.cartTilewidth)
          index.y = Math.floor(this.cartY / world.cartTileheight)

          // Return the index number
          return index.x + (index.y * world.widthInTiles)
        },
        enumerable: true,
        configurable: true
      }
    })
  }

  /*
  ### isoRectangle
  A function for creating a simple isometric diamond
  shaped rectangle using Pixi's graphics library
  */

  isoRectangle (width, height, fillStyle) {
    // Figure out the `halfHeight` value
    const halfHeight = height / 2

    // Draw the flattened and rotated square (diamond shape)
    const rectangle = new this.Graphics()
    rectangle.beginFill(fillStyle)
    rectangle.moveTo(0, 0)
    rectangle.lineTo(width, halfHeight)
    rectangle.lineTo(0, height)
    rectangle.lineTo(-width, halfHeight)
    rectangle.lineTo(0, 0)
    rectangle.endFill()

    // Generate a texture from the rectangle
    const texture = rectangle.generateTexture()

    // Use the texture to create a sprite
    const sprite = new this.Sprite(texture)

    // Return it to the main program
    return sprite
  }

  /*
  ### addIsoProperties
  Add properties to a sprite to help work between Cartesian
  and isometric properties: `isoX`, `isoY`, `cartX`,
  `cartWidth` and `cartHeight`.
  */

  addIsoProperties (sprite, x, y, width, height) {
    // Cartisian (flat 2D) properties
    sprite.cartX = x
    sprite.cartY = y
    sprite.cartWidth = width
    sprite.cartHeight = height

    // Add a getter/setter for the isometric properties
    Object.defineProperties(sprite, {
      isoX: {
        get () {
          return this.cartX - this.cartY
        },
        enumerable: true,
        configurable: true
      },
      isoY: {
        get () {
          return (this.cartX + this.cartY) / 2
        },
        enumerable: true,
        configurable: true
      }
    })
  }

  /*
  ### makeIsoTiledWorld
  Make an isometric world from TiledEditor map data. Uses the same API as `makeTiledWorld`

  */

  makeIsoTiledWorld (jsonTiledMap, tileset) {
    // Create a group called `world` to contain all the layers, sprites
    // and objects from the `tiledMap`. The `world` object is going to be
    // returned to the main game program
    const tiledMap = (typeof jsonTiledMap === 'string') ? this.resources[jsonTiledMap].data : jsonTiledMap

    // A. You need to add three custom properties to your Tiled Editor
    // map: `cartTilewidth`,`cartTileheight` and `tileDepth`. They define the Cartesian
    // dimesions of the tiles (32x32x64).
    // Check to make sure that these custom properties exist
    if (!tiledMap.properties.cartTilewidth && !tiledMap.properties.cartTileheight && !tiledMap.properties.tileDepth) {
      throw new Error(
        'Set custom cartTilewidth, cartTileheight and tileDepth map properties in Tiled Editor'
      )
    }

    // Create the `world` container
    const world = new this.Container()

    // B. Set the `tileHeight` to the `tiledMap`'s `tileDepth` property
    // so that it matches the pixel height of the sprite tile image
    world.tileheight = parseInt(tiledMap.properties.tileDepth)
    world.tilewidth = tiledMap.tilewidth

    // C. Define the Cartesian dimesions of each tile
    world.cartTileheight = parseInt(tiledMap.properties.cartTileheight)
    world.cartTilewidth = parseInt(tiledMap.properties.cartTilewidth)

    // D. Calculate the `width` and `height` of the world, in pixels
    // using the `world.cartTileHeight` and `world.cartTilewidth`
    // values
    world.worldWidth = tiledMap.width * world.cartTilewidth
    world.worldHeight = tiledMap.height * world.cartTileheight

    // Get a reference to the world's height and width in
    // tiles, in case you need to know this later (you will!)
    world.widthInTiles = tiledMap.width
    world.heightInTiles = tiledMap.height

    // Create an `objects` array to store references to any
    // named objects in the map. Named objects all have
    // a `name` property that was assigned in Tiled Editor
    world.objects = []

    // The optional spacing (padding) around each tile
    // This is to account for spacing around tiles
    // that's commonly used with texture atlas tilesets. Set the
    // `spacing` property when you create a new map in Tiled Editor
    const spacing = tiledMap.tilesets[0].spacing

    // Figure out how many columns there are on the tileset.
    // This is the width of the image, divided by the width
    // of each tile, plus any optional spacing thats around each tile
    const numberOfTilesetColumns =
      Math.floor(
        tiledMap.tilesets[0].imagewidth / (tiledMap.tilewidth + spacing)
      )

    // E. A `z` property to help track which depth level the sprites are on
    let z = 0

    // Loop through all the map layers
    tiledMap.layers.forEach((tiledLayer) => {
      // Make a group for this layer and copy
      // all of the layer properties onto it.
      const layerGroup = new this.Container()

      Object.keys(tiledLayer).forEach((key) => {
        // Add all the layer's properties to the group, except the
        // width and height (because the group will work those our for
        // itself based on its content).
        if (key !== 'width' && key !== 'height') {
          layerGroup[key] = tiledLayer[key]
        }
      })

      // Translate `opacity` to `alpha`
      layerGroup.alpha = tiledLayer.opacity

      // Add the group to the `world`
      world.addChild(layerGroup)

      // Push the group into the world's `objects` array
      // So you can access it later
      world.objects.push(layerGroup)

      // Is this current layer a `tilelayer`?
      if (tiledLayer.type === 'tilelayer') {
        // Loop through the `data` array of this layer
        tiledLayer.data.forEach((gid, index) => {
          let tileSprite,
            texture,
            mapX,
            mapY,
            tilesetX,
            tilesetY,
            mapColumn,
            mapRow,
            tilesetColumn,
            tilesetRow

          // If the grid id number (`gid`) isn't zero, create a sprite
          if (gid !== 0) {
            // Figure out the map column and row number that we're on, and then
            // calculate the grid cell's x and y pixel position.
            mapColumn = index % world.widthInTiles
            mapRow = Math.floor(index / world.widthInTiles)

            // F. Use the Cartesian values to find the
            // `mapX` and `mapY` values
            mapX = mapColumn * world.cartTilewidth
            mapY = mapRow * world.cartTileheight

            // Figure out the column and row number that the tileset
            // image is on, and then use those values to calculate
            // the x and y pixel position of the image on the tileset
            tilesetColumn = ((gid - 1) % numberOfTilesetColumns)
            tilesetRow = Math.floor((gid - 1) / numberOfTilesetColumns)
            tilesetX = tilesetColumn * world.tilewidth
            tilesetY = tilesetRow * world.tileheight

            // Compensate for any optional spacing (padding) around the tiles if
            // there is any. This bit of code accumlates the spacing offsets from the
            // left side of the tileset and adds them to the current tile's position
            if (spacing > 0) {
              tilesetX += spacing + (spacing * ((gid - 1) % numberOfTilesetColumns))
              tilesetY += spacing + (spacing * Math.floor((gid - 1) / numberOfTilesetColumns))
            }

            // Use the above values to create the sprite's image from
            // the tileset image
            texture = this.frame(
              tileset, tilesetX, tilesetY,
              world.tilewidth, world.tileheight
            )

            // I've dedcided that any tiles that have a `name` property are important
            // and should be accessible in the `world.objects` array.

            let tileproperties = tiledMap.tilesets[0].tileproperties || {}
            let key = String(gid - 1)

            // If the JSON `tileproperties` object has a sub-object that
            // matches the current tile, and that sub-object has a `name` property,
            // then create a sprite and assign the tile properties onto
            // the sprite
            if (tileproperties[key] && tileproperties[key].name) {
              // Make a sprite
              tileSprite = new this.Sprite(texture)

              // Copy all of the tile's properties onto the sprite
              // (This includes the `name` property)
              Object.keys(tileproperties[key]).forEach((property) => {
                // console.log(tileproperties[key][property])
                tileSprite[property] = tileproperties[key][property]
              })

              // Push the sprite into the world's `objects` array
              // so that you can access it by `name` later
              world.objects.push(tileSprite)
            }

            // If the tile doesn't have a `name` property, just use it to
            // create an ordinary sprite (it will only need one texture)
            else {
              tileSprite = new this.Sprite(texture)
            }

            // G. Add isometric properties to the sprite
            this.addIsoProperties(
              tileSprite, mapX, mapY,
              world.cartTilewidth, world.cartTileheight
            )

            // H. Use the isometric position to add the sprite to the world
            tileSprite.x = tileSprite.isoX
            tileSprite.y = tileSprite.isoY
            tileSprite.z = z

            // Make a record of the sprite's index number in the array
            // (We'll use this for collision detection later)
            tileSprite.index = index

            // Make a record of the sprite's `gid` on the tileset.
            // This will also be useful for collision detection later
            tileSprite.gid = gid

            // Add the sprite to the current layer group
            layerGroup.addChild(tileSprite)
          }
        })
      }

      // Is this layer an `objectgroup`?
      if (tiledLayer.type === 'objectgroup') {
        tiledLayer.objects.forEach((object) => {
          // We're just going to capture the object's properties
          // so that we can decide what to do with it later

          // Get a reference to the layer group the object is in
          object.group = layerGroup

          // Push the object into the world's `objects` array
          world.objects.push(object)
        })
      }

      // I. Add 1 to the z index (the first layer will have a z index of `1`)
      z += 1
    })

    // Search functions
    // `world.getObject` and `world.getObjects`  search for and return
    // any sprites or objects in the `world.objects` array.
    // Any object that has a `name` propery in
    // Tiled Editor will show up in a search.
    // `getObject` gives you a single object, `getObjects` gives you an array
    // of objects.
    // `getObject` returns the actual search function, so you
    // can use the following format to directly access a single object:
    // sprite.x = world.getObject("anySprite").x;
    // sprite.y = world.getObject("anySprite").y;

    world.getObject = objectName => {
      const searchForObject = () => {
        let foundObject
        world.objects.some((object) => {
          if (object.name && object.name === objectName) {
            foundObject = object
            return true
          }
        })
        if (foundObject) {
          return foundObject
        }
        throw new Error(`There is no object with the property name: ${objectName}`)
      }

      // Return the search function
      return searchForObject()
    }

    world.getObjects = objectNames => {
      const foundObjects = []
      world.objects.forEach((object) => {
        if (object.name && objectNames.indexOf(object.name) !== -1) {
          foundObjects.push(object)
        }
      })
      if (foundObjects.length > 0) {
        return foundObjects
      }
      throw new Error('I could not find those objects')
    }

    // That's it, we're done!
    // Finally, return the `world` object back to the game program
    return world
  }

  /*
//### The `shortestPath` function

An A-Star search algorithm that returns an array of grid index numbers that
represent the shortest path between two points on a map. Use it like this:

let shortestPath = tu.shortestPath(
  startIndex,               //The start map index
  destinationIndex,         //The destination index
  mapArray,                 //The map array
  mapWidthInTiles,          //Map wdith, in tiles
  [1,2],                    //Obstacle gid array
  "manhattan"               //Heuristic to use: "manhatten", "euclidean" or "diagonal"
);

*/

  shortestPath (
    startIndex,
    destinationIndex,
    mapArray,
    mapWidthInTiles,
    obstacleGids = [],
    heuristic = 'manhattan',
    useDiagonalNodes = true
  ) {
  // The `nodes` function creates the array of node objects
    const nodes = (mapArray, mapWidthInTiles) => mapArray.map((cell, index) => {
      // Figure out the row and column of this cell
      const column = index % mapWidthInTiles
      const row = Math.floor(index / mapWidthInTiles)

      // The node object
      return {
        f: 0,
        g: 0,
        h: 0,
        parent: null,
        column,
        row,
        index
      }
    })

    // Initialize theShortestPath array
    const theShortestPath = []

    // Initialize the node map
    const nodeMap = nodes(mapArray, mapWidthInTiles)

    // Initialize the closed and open list arrays
    const closedList = []
    let openList = []

    // Declare the "costs" of travelling in straight or
    // diagonal lines
    const straightCost = 10
    const diagonalCost = 14

    // Get the start node
    const startNode = nodeMap[startIndex]

    // Get the current center node. The first one will
    // match the path's start position
    let centerNode = startNode

    // Push the `centerNode` into the `openList`, because
    // it's the first node that we're going to check
    openList.push(centerNode)

    // Get the current destination node. The first one will
    // match the path's end position
    const destinationNode = nodeMap[destinationIndex]

    // All the nodes that are surrounding the current map index number
    const surroundingNodes = (index, mapArray, mapWidthInTiles, useDiagonalNodes) => {
    // Find out what all the surrounding nodes are, including those that
    // might be beyond the borders of the map
      const allSurroundingNodes = [
        nodeMap[index - mapWidthInTiles - 1],
        nodeMap[index - mapWidthInTiles],
        nodeMap[index - mapWidthInTiles + 1],
        nodeMap[index - 1],
        nodeMap[index + 1],
        nodeMap[index + mapWidthInTiles - 1],
        nodeMap[index + mapWidthInTiles],
        nodeMap[index + mapWidthInTiles + 1]
      ]

      // Optionaly exlude the diagonal nodes, which is often perferable
      // for 2D maze games
      const crossSurroundingNodes = [
        nodeMap[index - mapWidthInTiles],
        nodeMap[index - 1],
        nodeMap[index + 1],
        nodeMap[index + mapWidthInTiles]
      ]

      // Use either `allSurroundingNodes` or `crossSurroundingNodes` depending
      // on the the value of `useDiagonalNodes`
      let nodesToCheck
      if (useDiagonalNodes) {
        nodesToCheck = allSurroundingNodes
      } else {
        nodesToCheck = crossSurroundingNodes
      }

      // Find the valid sourrounding nodes, which are ones inside
      // the map border that don't incldue obstacles. Change `allSurroundingNodes`
      // to `crossSurroundingNodes` to prevent the path from choosing diagonal routes
      const validSurroundingNodes = nodesToCheck.filter((node) => {
      // The node will be beyond the top and bottom edges of the
      // map if it is `undefined`
        const nodeIsWithinTopAndBottomBounds = node !== undefined

        // Only return nodes that are within the top and bottom map bounds
        if (nodeIsWithinTopAndBottomBounds) {
        // Some Boolean values that tell us whether the current map index is on
        // the left or right border of the map, and whether any of the nodes
        // surrounding that index extend beyond the left and right borders
          const indexIsOnLeftBorder = index % mapWidthInTiles === 0
          const indexIsOnRightBorder = (index + 1) % mapWidthInTiles === 0
          const nodeIsBeyondLeftBorder = node.column % (mapWidthInTiles - 1) === 0 && node.column !== 0
          const nodeIsBeyondRightBorder = node.column % mapWidthInTiles === 0

          // Find out whether of not the node contains an obstacle by looping
          // through the obstacle gids and and returning `true` if it
          // finds any at this node's location
          const nodeContainsAnObstacle = obstacleGids.some(obstacle => mapArray[node.index] === obstacle)

          // If the index is on the left border and any nodes surrounding it are beyond the
          // left border, don't return that node
          if (indexIsOnLeftBorder) {
          // console.log("left border")
            return !nodeIsBeyondLeftBorder
          }

          // If the index is on the right border and any nodes surrounding it are beyond the
          // right border, don't return that node
          else if (indexIsOnRightBorder) {
          // console.log("right border")
            return !nodeIsBeyondRightBorder
          }

          // Return `true` if the node doesn't contain any obstacles
          else if (nodeContainsAnObstacle) {
            return false
          }

          // The index must be inside the area defined by the left and right borders,
          // so return the node

          // console.log("map interior")
          return true
        }
      })

      // console.log(validSurroundingNodes)
      // Return the array of `validSurroundingNodes`
      return validSurroundingNodes
    }

    // Diagnostic
    // console.log(nodeMap);
    // console.log(centerNode);
    // console.log(destinationNode);
    // console.log(wallMapArray);
    // console.log(surroundingNodes(86, mapArray, mapWidthInTiles));

    // Heuristic methods
    // 1. Manhattan
    const manhattan = (testNode, destinationNode) => {
      const h = Math.abs(testNode.row - destinationNode.row) * straightCost + Math.abs(testNode.column - destinationNode.column) * straightCost
      return h
    }

    // 2. Euclidean
    const euclidean = (testNode, destinationNode) => {
      let vx = destinationNode.column - testNode.column
      let vy = destinationNode.row - testNode.row
      let h = Math.floor(Math.sqrt(vx * vx + vy * vy) * straightCost)
      return h
    }

    // 3. Diagonal
    const diagonal = (testNode, destinationNode) => {
      let vx = Math.abs(destinationNode.column - testNode.column)
      let vy = Math.abs(destinationNode.row - testNode.row)
      let h = 0

      if (vx > vy) {
        h = Math.floor(diagonalCost * vy + straightCost * (vx - vy))
      } else {
        h = Math.floor(diagonalCost * vx + straightCost * (vy - vx))
      }
      return h
    }

    // Loop through all the nodes until the current `centerNode` matches the
    // `destinationNode`. When they they're the same we know we've reached the
    // end of the path
    while (centerNode !== destinationNode) {
    // Find all the nodes surrounding the current `centerNode`
      const surroundingTestNodes = surroundingNodes(centerNode.index, mapArray, mapWidthInTiles, useDiagonalNodes)

      // Loop through all the `surroundingTestNodes` using a classic `for` loop
      // (A `for` loop gives us a marginal performance boost)
      for (let i = 0; i < surroundingTestNodes.length; i++) {
      // Get a reference to the current test node
        const testNode = surroundingTestNodes[i]

        // Find out whether the node is on a straight axis or
        // a diagonal axis, and assign the appropriate cost

        // A. Declare the cost variable
        let cost = 0

        // B. Do they occupy the same row or column?
        if (centerNode.row === testNode.row || centerNode.column === testNode.column) {
        // If they do, assign a cost of "10"
          cost = straightCost
        } else {
        // Otherwise, assign a cost of "14"
          cost = diagonalCost
        }

        // C. Calculate the costs (g, h and f)
        // The node's current cost
        const g = centerNode.g + cost

        // The cost of travelling from this node to the
        // destination node (the heuristic)
        let h
        switch (heuristic) {
        case 'manhattan':
          h = manhattan(testNode, destinationNode)
          break

        case 'euclidean':
          h = euclidean(testNode, destinationNode)
          break

        case 'diagonal':
          h = diagonal(testNode, destinationNode)
          break

        default:
          throw new Error('Oops! It looks like you misspelled the name of the heuristic')
        }

        // The final cost
        const f = g + h

        // Find out if the testNode is in either
        // the openList or closedList array
        const isOnOpenList = openList.some(node => testNode === node)
        const isOnClosedList = closedList.some(node => testNode === node)

        // If it's on either of these lists, we can check
        // whether this route is a lower-cost alternative
        // to the previous cost calculation. The new G cost
        // will make the difference to the final F cost
        if (isOnOpenList || isOnClosedList) {
          if (testNode.f > f) {
            testNode.f = f
            testNode.g = g
            testNode.h = h

            // Only change the parent if the new cost is lower
            testNode.parent = centerNode
          }
        }

        // Otherwise, add the testNode to the open list
        else {
          testNode.f = f
          testNode.g = g
          testNode.h = h
          testNode.parent = centerNode
          openList.push(testNode)
        }

      // The `for` loop ends here
      }

      // Push the current centerNode into the closed list
      closedList.push(centerNode)

      // Quit the loop if there's nothing on the open list.
      // This means that there is no path to the destination or the
      // destination is invalid, like a wall tile
      if (openList.length === 0) {
        return theShortestPath
      }

      // Sort the open list according to final cost
      openList = openList.sort((a, b) => a.f - b.f)

      // Set the node with the lowest final cost as the new centerNode
      centerNode = openList.shift()

    // The `while` loop ends here
    }

    // Now that we have all the candidates, let's find the shortest path!
    if (openList.length !== 0) {
    // Start with the destination node
      let testNode = destinationNode
      theShortestPath.push(testNode)

      // Work backwards through the node parents
      // until the start node is found
      while (testNode !== startNode) {
      // Step through the parents of each node,
      // starting with the destination node and ending with the start node
        testNode = testNode.parent

        // Add the node to the beginning of the array
        theShortestPath.unshift(testNode)

      // ...and then loop again to the next node's parent till you
      // reach the end of the path
      }
    }

    // Return an array of nodes that link together to form
    // the shortest path
    return theShortestPath
  }

  /*
  ### tileBasedLineOfSight

  Use the `tileBasedLineOfSight` function to find out whether two sprites
  are visible to each other inside a tile based maze environment.

  */

  tileBasedLineOfSight (
    spriteOne, // The first sprite, with `centerX` and `centerY` properties
    spriteTwo, // The second sprite, with `centerX` and `centerY` properties
    mapArray, // The tile map array
    world, // The `world` object that contains the `tilewidth
    //`tileheight` and `widthInTiles` properties
    emptyGid = 0, // The Gid that represents and empty tile, usually `0`
    segment = 32, // The distance between collision points
    angles = [] // An array of angles to which you want to
    // restrict the line of sight
  ) {
    // Plot a vector between spriteTwo and spriteOne
    let vx = spriteTwo.centerX - spriteOne.centerX
    let vy = spriteTwo.centerY - spriteOne.centerY

    // Find the vector's magnitude (its length in pixels)
    const magnitude = Math.sqrt(vx * vx + vy * vy)

    // How many points will we need to test?
    const numberOfPoints = magnitude / segment

    // Create an array of x/y points that
    // extends from `spriteOne` to `spriteTwo`
    const points = () => {
      // Initialize an array that is going to store all our points
      // along the vector
      const arrayOfPoints = []

      // Create a point object for each segment of the vector and
      // store its x/y position as well as its index number on
      // the map array
      for (let i = 1; i <= numberOfPoints; i++) {
        // Calculate the new magnitude for this iteration of the loop
        const newMagnitude = segment * i

        // Find the unit vector
        let dx = vx / magnitude
        let dy = vy / magnitude

        // Use the unit vector and newMagnitude to figure out the x/y
        // position of the next point in this loop iteration
        let x = spriteOne.centerX + dx * newMagnitude
        let y = spriteOne.centerY + dy * newMagnitude

        // Find the map index number that this x and y point corresponds to
        const index = this.getIndex(
          x, y,
          world.tilewidth,
          world.tileheight,
          world.widthInTiles
        )

        // Push the point into the `arrayOfPoints`
        arrayOfPoints.push({
          x, y, index
        })
      }

      // Return the array
      return arrayOfPoints
    }

    // The tile-based collision test.
    // The `noObstacles` function will return `true` if all the tile
    // index numbers along the vector are `0`, which means they contain
    // no walls. If any of them aren't 0, then the function returns
    // `false` which means there's a wall in the way
    const noObstacles = points().every(point => mapArray[point.index] === emptyGid)

    // Restrict the line of sight to right angles only (we don't want to
    // use diagonals)
    const validAngle = () => {
      // Find the angle of the vector between the two sprites
      const angle = Math.atan2(vy, vx) * 180 / Math.PI

      // If the angle matches one of the valid angles, return
      // `true`, otherwise return `false`
      if (angles.length !== 0) {
        return angles.some(x => x === angle)
      }
      return true
    }

    // Return `true` if there are no obstacles and the line of sight
    // is at a 90 degree angle
    if (noObstacles === true && validAngle() === true) {
      return true
    }
    return false
  }

  /*
  surroundingCrossCells
  ---------------------

  Returns an array of index numbers matching the cells that are orthogonally
  adjacent to the center `index` cell

  */

  surroundingCrossCells (index, widthInTiles) {
    return [
      index - widthInTiles,
      index - 1,
      index + 1,
      index + widthInTiles
    ]
  }

  /*
  surroundingDiagonalCells
  ---------------------

  Returns an array of index numbers matching the cells that touch the
  4 corners of the center the center `index` cell

  */

  surroundingDiagonalCells (index, widthInTiles) {
    return [
      index - widthInTiles - 1,
      index - widthInTiles + 1,
      index + widthInTiles - 1,
      index + widthInTiles + 1
    ]
  }

  /*
  validDirections
  ---------------

  Returns an array with the values "up", "down", "left" or "right"
  that represent all the valid directions in which a sprite can move
  The `validGid` is the grid index number for the "walkable" part of the world
  (such as, possibly, `0`.)
  */

  validDirections (sprite, mapArray, validGid, world) {
    // Get the sprite's current map index position number
    const index = this.getIndex(
      sprite.x,
      sprite.y,
      world.tilewidth,
      world.tileheight,
      world.widthInTiles
    )

    // An array containing the index numbers of tile cells
    // above, below and to the left and right of the sprite
    const surroundingCrossCells = (index, widthInTiles) => [
      index - widthInTiles,
      index - 1,
      index + 1,
      index + widthInTiles
    ]

    // Get the index position numbers of the 4 cells to the top, right, left
    // and bottom of the sprite
    const surroundingIndexNumbers = surroundingCrossCells(index, world.widthInTiles)

    // Find all the tile gid numbers that match the surrounding index numbers
    const surroundingTileGids = surroundingIndexNumbers.map(index => mapArray[index])

    // `directionList` is an array of 4 string values that can be either
    // "up", "left", "right", "down" or "none", depending on
    // whether there is a cell with a valid gid that matches that direction.
    const directionList = surroundingTileGids.map((gid, i) => {
      // The possible directions
      const possibleDirections = ['up', 'left', 'right', 'down']

      // If the direction is valid, choose the matching string
      // identifier for that direction. Otherwise, return "none"
      if (gid === validGid) {
        return possibleDirections[i]
      }
      return 'none'
    })

    // We don't need "none" in the list of directions
    // (it's just a placeholder), so let's filter it out
    const filteredDirectionList = directionList.filter(direction => direction !== 'none')

    // Return the filtered list of valid directions
    return filteredDirectionList
  }

  /*
  canChangeDirection
  ------------------

  Returns `true` or `false` depending on whether a sprite in at a map
  array location in which it able to change its direction
  */

  canChangeDirection (validDirections = []) {
    // Is the sprite in a dead-end (cul de sac.) This will be true if there's only
    // one element in the `validDirections` array
    const inCulDeSac = validDirections.length === 1

    // Is the sprite trapped? This will be true if there are no elements in
    // the `validDirections` array
    const trapped = validDirections.length === 0

    // Is the sprite in a passage? This will be `true` if the the sprite
    // is at a location that contain the values
    // “left” or “right” and “up” or “down”
    let up = validDirections.find(x => x === 'up')
    let down = validDirections.find(x => x === 'down')
    let left = validDirections.find(x => x === 'left')
    let right = validDirections.find(x => x === 'right')
    let atIntersection = (up || down) && (left || right)

    // Return `true` if the sprite can change direction or
    // `false` if it can't
    return trapped || atIntersection || inCulDeSac
  }

  /*
  randomDirection
  ---------------

  Randomly returns the values "up", "down", "left" or "right" based on
  valid directions supplied. If the are no valid directions, it returns "trapped"

  */

  randomDirection (sprite, validDirections = []) {
    // The `randomInt` helper function returns a random integer between a minimum
    // and maximum value
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    // Is the sprite trapped?
    const trapped = validDirections.length === 0

    // If the sprite isn't trapped, randomly choose one of the valid
    // directions. Otherwise, return the string "trapped"
    if (!trapped) {
      return validDirections[randomInt(0, validDirections.length - 1)]
    }
    return 'trapped'
  }

  /*
  closestDirection
  ----------------

  Tells you the closes direction to `spriteTwo` from `spriteOne` based on
  supplied validDirections. The function returns any of these
  4 values: "up", "down", "left" or "right"

  */

  closestDirection (spriteOne, spriteTwo) {
    // A helper function to find the closest direction

    // Plot a vector between spriteTwo and spriteOne
    let vx = spriteTwo.centerX - spriteOne.centerX
    let vy = spriteTwo.centerY - spriteOne.centerY

    // If the distance is greater on the X axis...
    if (Math.abs(vx) >= Math.abs(vy)) {
      // Try left and right
      if (vx <= 0) {
        return 'left'
      }
      return 'right'
    }

    // If the distance is greater on the Y axis...

    // Try up and down
    if (vy <= 0) {
      return 'up'
    }
    return 'down'
  }
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map