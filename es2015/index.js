/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/***/ ((module) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PIXI = window.PIXI;
/**
 * class FullscreenApplication
 */

var FullscreenApplication = /*#__PURE__*/function (_PIXI$Application) {
  _inherits(FullscreenApplication, _PIXI$Application);

  var _super = _createSuper(FullscreenApplication);

  /**
   * @param {function} [everyTick]
   * @param {PIXI.ApplicationOptions} [pixiApplicationOptions]
   */
  function FullscreenApplication(everyTick, pixiApplicationOptions) {
    var _this;

    _classCallCheck(this, FullscreenApplication);

    _this = _super.call(this, pixiApplicationOptions);

    _this.everyTick = (everyTick || function () {}).bind(_assertThisInitialized(_this));

    document.body.style.fontSize = 0;
    document.body.style.margin = 0;
    _this.renderer && document.body.appendChild(_this.renderer.view);
    window.addEventListener("resize", _this.requestResize.bind(_assertThisInitialized(_this)));

    _this.requestResize();

    _this.renderLoop(performance.now());

    return _this;
  }
  /**
   * main loop gets initialized at constructor, runs everyTick function
   * @param {number} time
   */


  _createClass(FullscreenApplication, [{
    key: "renderLoop",
    value: function renderLoop(time) {
      requestAnimationFrame(this.renderLoop.bind(this));
      this.everyTick(time);
    }
    /**
     * resizes to window
     */

  }, {
    key: "requestResize",
    value: function requestResize() {
      this.renderer && this.renderer.resize(innerWidth, innerHeight);
    }
  }]);

  return FullscreenApplication;
}(PIXI.Application);

module.exports = FullscreenApplication;

/***/ }),

/***/ "./lib/extract.js":
/*!************************!*\
  !*** ./lib/extract.js ***!
  \************************/
/***/ ((module) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PIXI = window.PIXI;
/**
 * class TextureExtractor
 */

var TextureExtractor = /*#__PURE__*/function () {
  function TextureExtractor(_ref) {
    var tilewidth = _ref.tilewidth,
        tileheight = _ref.tileheight,
        texture = _ref.texture,
        offset = _ref.offset,
        count = _ref.count,
        scaleMode = _ref.scaleMode;

    _classCallCheck(this, TextureExtractor);

    this.tilewidth = tilewidth;
    this.tileheight = tileheight;
    this.offset = offset || 0;
    this.texture = texture;
    this.textureCache = [];
    this.scaleMode = scaleMode || PIXI.SCALE_MODES.NEAREST;

    this._prepareTextures(count);
  }
  /**
   * get inner texture width
   * @returns number
   */


  _createClass(TextureExtractor, [{
    key: "width",
    get: function get() {
      return this.texture.width;
    }
    /**
     * get inner texture height
     * @returns number
     */

  }, {
    key: "height",
    get: function get() {
      return this.texture.height;
    }
    /**
     * prepares n-th frame (zero indexed)
     * @param {number} frame
     * @returns PIXI.Texture
     */

  }, {
    key: "prepareTexture",
    value: function prepareTexture(frame) {
      var cols = Math.floor(this.width / this.tilewidth);
      var x = (frame - this.offset) % cols * this.tilewidth;
      var y = Math.floor((frame - this.offset) / cols) * this.tileheight;
      var rect = new PIXI.Rectangle(x, y, this.tilewidth, this.tileheight);
      var texture = new PIXI.Texture(this.texture, rect);
      texture.baseTexture.scaleMode = this.scaleMode;
      texture.cacheAsBitmap = true;
      return texture;
    }
    /**
     * gets n-th frame (zero indexed)
     * @param {number} frame
     * @returns PIXI.Texture
     */

  }, {
    key: "getFrame",
    value: function getFrame(frame) {
      if (!this.textureCache[frame]) {
        this.prepareTexture(frame);
      }

      return this.textureCache[frame];
    }
    /**
     * private prepares cache up to count, used in constructor
     * @param {number} count
     */

  }, {
    key: "_prepareTextures",
    value: function _prepareTextures(count) {
      var _this = this;

      var size = count || this.width / this.tilewidth * (this.height / this.tileheight);
      this.textureCache = new Array(size).fill(0).map(function (_, frame) {
        return _this.prepareTexture(frame);
      });
    }
  }]);

  return TextureExtractor;
}();

module.exports = TextureExtractor;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var FullscreenApplication = __webpack_require__(/*! ./app */ "./lib/app.js");

var World = __webpack_require__(/*! ./world */ "./lib/world.js");

var TextureExtractor = __webpack_require__(/*! ./extract */ "./lib/extract.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

module.exports = {
  FullscreenApplication: FullscreenApplication,
  World: World,
  TextureExtractor: TextureExtractor,
  utils: utils
};
/* global window */

window.PIXI.Tiled = {
  FullscreenApplication: FullscreenApplication,
  World: World,
  TextureExtractor: TextureExtractor,
  utils: utils
};

/***/ }),

/***/ "./lib/tiled.js":
/*!**********************!*\
  !*** ./lib/tiled.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var PIXI = window.PIXI;

var TiledUtils = __webpack_require__(/*! tiled-utils */ "./node_modules/tiled-utils/es2015/index.js");

var tu = new TiledUtils(PIXI);
module.exports = tu;

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((module) => {



var PIXI = window.PIXI;
/**
 * inner utils, maybe useful for you too
 */

var utils = {
  /**
   * get texture from tiles
   * @param {number} frame
   * @param {inner} tiles
   * @returns PIXI.Texture
   */
  getTexture: function getTexture(frame, tiles) {
    if (tiles && typeof tiles.getFrame === "function") {
      return tiles.getFrame(frame);
    } else {
      console.warn("! tiles not set @ getTexture");
    }

    return PIXI.Texture.EMPTY;
  },

  /**
   * create sprite from frame, tileSizeConfig and tiles
   * @param {number} frame
   * @param {{ tilewidth, tileheight }} tileSizeConfig
   * @param {inner} tiles
   * @returns PIXI.Sprite | undefined
   */
  createSprite: function createSprite(frame, _ref) {
    var tilewidth = _ref.tilewidth,
        tileheight = _ref.tileheight;
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
      sprite.width = tilewidth;
      sprite.height = tileheight;

      if (sprite.texture) {
        sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
      }
    }

    return sprite;
  },

  /**
   * works like lodash.get
   * @param {any} source
   * @param {string} url
   * @returns any
   */
  getModel: function getModel(source, url) {
    var cursor = source;
    var propList = url.split(".");

    while (cursor && propList.length) {
      cursor = cursor[propList.shift()];
    }

    return cursor;
  },

  /**
   * checks does array contain keys starting with value
   * @param {any[]} array
   * @param {any} value
   * @returns boolean
   */
  contains: function contains(array, value) {
    return value && array.some(function (string) {
      return value.startsWith(string);
    });
  },

  /**
   * groups objects array into object
   * @param {any[]} array
   * @param {string} groupName
   * @returns object
   */
  groupObjects: function groupObjects(array) {
    var groupName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "group.name";
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

  /**
   * copies props like name, type from  another object
   * @param {object} target
   * @param {object} source
   * @param {string[]} props
   * @returns void
   */
  nameObject: function nameObject(target) {
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["name", "type"];
    if (!target) return;
    props.forEach(function (prop) {
      if (source[prop] && !target[prop]) {
        target[prop] = source[prop];
      }
    });
  },

  /**
   * adds object to array, also names it
   * @param {any} source
   * @param {any[]} target
   * @param {string[]} props
   * @returns void
   */
  pushObject: function pushObject(source, target, props) {
    if (target.indexOf(source) !== -1) return;

    if (Array.isArray(source.objects)) {
      source.objects.forEach(function (sprite) {
        utils.nameObject(sprite, source, props);
      });
    }

    target.push(source);
  },

  /**
   * gets bounds of object, fast
   * @param {any[]} array
   * @returns object
   */
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
module.exports = utils;

/***/ }),

/***/ "./lib/world.js":
/*!**********************!*\
  !*** ./lib/world.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PIXI = window.PIXI;

var TextureExtractor = __webpack_require__(/*! ./extract */ "./lib/extract.js");

var tu = __webpack_require__(/*! ./tiled */ "./lib/tiled.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/**
 * class World
 */


var World = /*#__PURE__*/function () {
  /**
   * step 1 - extract tiles
   * @param {object} config
   */
  function World(config) {
    _classCallCheck(this, World);

    if (config) {
      this.tiles = new TextureExtractor(config);
    } else {
      console.warn("Creating tile-less world");
    }
  }
  /**
   * step 2 - create world
   * @param {object | string} jsonTiledMap
   * @param {PIXI.Sprite} tileset
   * @param {object} [layersConfiguration]
   * @returns World
   */


  _createClass(World, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(jsonTiledMap, tileset) {
        var layersConfiguration,
            world,
            _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                layersConfiguration = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                this.world = tu.makeTiledWorld(jsonTiledMap, tileset);
                this.objects = this._createObjects(layersConfiguration);
                this.sprites = this._createSprites(layersConfiguration.clear);
                this.ground = this.world.children.filter(function (_ref) {
                  var type = _ref.type;
                  return type === "tilelayer";
                });
                world = new PIXI.Container();
                this.ground.length && world.addChild.apply(world, _toConsumableArray(this.ground));
                this.sprites.length && world.addChild.apply(world, _toConsumableArray(this.sprites));
                return _context.abrupt("return", world);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * private createObjects from config: { group = [], clear = [], pickable = [] }
     * @param {object} options
     * @returns object[]
     */

  }, {
    key: "_createObjects",
    value: function _createObjects(_ref2) {
      var _this = this;

      var _ref2$group = _ref2.group,
          group = _ref2$group === void 0 ? [] : _ref2$group,
          _ref2$clear = _ref2.clear,
          clear = _ref2$clear === void 0 ? [] : _ref2$clear,
          _ref2$pickable = _ref2.pickable,
          pickable = _ref2$pickable === void 0 ? [] : _ref2$pickable;
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
            type: "layer"
          });
          console.log("\u2523\u2501 add layer: ".concat(name));
        }

        if (Array.isArray(next)) {
          next.forEach(function (object) {
            if (object.gid) {
              var sprite = utils.createSprite(object.gid, _this.world, _this.tiles);

              if (sprite) {
                utils.nameObject(sprite, object, ["x", "y", "gid", "name"]);

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
    /**
     * private createSprites with string[] layers exceptions
     * @param {string[]} [clear]
     * @returns object[]
     */

  }, {
    key: "_createSprites",
    value: function _createSprites() {
      var _this2 = this;

      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this.objects.filter(function (sprite) {
        return !utils.contains(clear, sprite.name);
      }).map(function (sprite) {
        try {
          var x = Math.round((sprite.x || 0) + (sprite.offsetx || 0));
          var y = Math.round((sprite.y || 0) + (sprite.offsety || 0));
          var objects = sprite.children.length ? sprite.children : [sprite];
          var bounds = utils.getBounds(objects);
          sprite.x = sprite.basex = bounds.left + x;
          sprite.y = sprite.basey = bounds.down + y - _this2.world.tileheight;
          objects.forEach(function (child) {
            child.x -= bounds.left - child.width * 0.5;
            child.y -= bounds.down - _this2.world.tileheight;
            child.anchor.set(0.5, 1);
          });
          return sprite;
        } catch (err) {
          console.error(err.message, err.stack);
        }
      });
    }
  }]);

  return World;
}();

module.exports = World;

/***/ }),

/***/ "./node_modules/tiled-utils/es2015/index.js":
/*!**************************************************!*\
  !*** ./node_modules/tiled-utils/es2015/index.js ***!
  \**************************************************/
/***/ ((module) => {


/* global PIXI */

module.exports = module.exports["default"] = class TileUtilities {
  constructor(renderingEngine = PIXI) {
    if (renderingEngine === undefined) throw new Error('Please assign a rendering engine in the constructor before using bump.js') // Find out which rendering engine is being used (the default is Pixi)

    this.renderer = '' // If the `renderingEngine` is Pixi, set up Pixi object aliases

    if (renderingEngine.Container && renderingEngine.Sprite) {
      this.renderingEngine = renderingEngine
      this.renderer = 'pixi'
      this.Container = this.renderingEngine.Container
      this.TextureCache = this.renderingEngine.utils.TextureCache
      this.Texture = this.renderingEngine.Texture
      this.Sprite = this.renderingEngine.Sprite
      this.Rectangle = this.renderingEngine.Rectangle
      this.Graphics = this.renderingEngine.Graphics
      this.loader = this.renderingEngine.Loader.shared
      this.resources = this.loader.resources
    }
  } // Make a texture from a frame in another texture or image


  frame(source, x, y, width, height) {
    // for backend use (with pixi-shim)
    // return without frame retangle
    if (!source) {
      return this.Texture.EMPTY
    }

    let texture // If the source is a string, it's either a texture in the
    // cache or an image file

    if (typeof source === 'string') {
      if (this.TextureCache[source]) {
        texture = this.TextureCache[source].clone()
      }
    } // If the `source` is a texture, use it
    else if (typeof source.clone === 'function') {
      texture = source.clone()
    } else {
      texture = source
    }

    if (texture) {
      // Make a rectangle the size of the sub-image
      texture.frame = new this.Rectangle(x, y, width, height)
      return texture
    }
  } // #### getIndex
  // The `getIndex` helper method
  // converts a sprite's x and y position to an array index number.
  // It returns a single index value that tells you the map array
  // index number that the sprite is in


  getIndex(x, y, tilewidth, tileheight, mapWidthInTiles) {
    const index = {} // Convert pixel coordinates to map index coordinates

    index.x = Math.floor(x / tilewidth)
    index.y = Math.floor(y / tileheight) // Return the index number

    return index.x + index.y * mapWidthInTiles
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


  getTile(index, mapArray, world) {
    const tile = {}
    tile.gid = mapArray[index]
    tile.width = world.tilewidth
    tile.height = world.tileheight
    tile.halfWidth = world.tilewidth / 2
    tile.halfHeight = world.tileheight / 2
    tile.x = index % world.widthInTiles * world.tilewidth + world.x
    tile.y = Math.floor(index / world.widthInTiles) * world.tileheight + world.y
    tile.gx = tile.x
    tile.gy = tile.y
    tile.centerX = tile.x + world.tilewidth / 2
    tile.centery = tile.y + world.tileheight / 2 // Return the tile object

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


  surroundingCells(index, widthInTiles) {
    return [index - widthInTiles - 1, index - widthInTiles, index - widthInTiles + 1, index - 1, index, index + 1, index + widthInTiles - 1, index + widthInTiles, index + widthInTiles + 1]
  } // #### getPoints

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


  getPoints(s) {
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
  } // ### hitTestTile

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


  hitTestTile(sprite, mapArray, gidToCheck, world, pointsToCheck) {
    // The `checkPoints` helper function Loop through the sprite's corner points to
    // find out if they are inside an array cell that you're interested in.
    // Return `true` if they are
    const checkPoints = key => {
      // Get a reference to the current point to check.
      // (`topLeft`, `topRight`, `bottomLeft` or `bottomRight` )
      const point = sprite.collisionPoints[key] // Find the point's index number in the map array

      collision.index = this.getIndex(point.x, point.y, world.tilewidth, world.tileheight, world.widthInTiles) // Find out what the gid value is in the map position
      // that the point is currently over

      collision.gid = mapArray[collision.index] // If it matches the value of the gid that we're interested, in
      // then there's been a collision

      if (collision.gid === gidToCheck) {
        return true
      }

      return false
    } // Assign "some" as the default value for `pointsToCheck`


    pointsToCheck = pointsToCheck || 'some' // The collision object that will be returned by this function

    let collision = {} // Which points do you want to check?
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
    } // Return the collision object.
    // `collision.hit` will be true if a collision is detected.
    // `collision.index` tells you the map array index number where the
    // collision occured


    return collision
  } // ### updateMap

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


  updateMap(mapArray, spritesToUpdate, world) {
    // First create a map a new array filled with zeros.
    // The new map array will be exactly the same size as the original
    const newMapArray = mapArray.map(gid => {
      gid = 0
      return gid
    }) // Is `spriteToUpdate` an array of sprites?

    if (spritesToUpdate instanceof Array) {
      // Get the index number of each sprite in the `spritesToUpdate` array
      // and add the sprite's `gid` to the matching index on the map
      const self = this
      spritesToUpdate.forEach(sprite => {
        // Find the new index number
        sprite.index = self.getIndex(sprite.centerX, sprite.centerY, world.tilewidth, world.tileheight, world.widthInTiles) // Add the sprite's `gid` number to the correct index on the map

        newMapArray[sprite.index] = sprite.gid
      })
    } // Is `spritesToUpdate` just a single sprite?
    else {
      const sprite = spritesToUpdate // Find the new index number

      sprite.index = this.getIndex(sprite.centerX, sprite.centerY, world.tilewidth, world.tileheight, world.widthInTiles) // Add the sprite's `gid` number to the correct index on the map

      newMapArray[sprite.index] = sprite.gid
    } // Return the new map array to replace the previous one


    return newMapArray
  }
  /*
  ###makeTiledWorld
   `makeTiledWorld` is a quick and easy way to display a game world designed in
  Tiled Editor. Supply `makeTiledWorld` with 1 **string** argument for map json:
   1. A JSON file generated by Tiled Editor.
  2. A source image that represents the tile set you used to create the Tiled Editor world.
  ```js
  let world = makeTiledWorld("tiledEditorMapData.json");
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


  makeTiledWorld(jsonTiledMap) {
    // Create a group called `world` to contain all the layers, sprites
    // and objects from the `tiledMap`. The `world` object is going to be
    // returned to the main game program
    const tiledMap = typeof jsonTiledMap === 'string' ? this.resources[jsonTiledMap].data : jsonTiledMap
    const tilesets = tiledMap.tilesets.sort((a, b) => a.firstgid - b.firstgid).reverse()
    const tilesetsImages = tilesets.map(({
      image
    }) => Object.values(this.resources).find(({
      name
    }) => name === image).texture)
    const world = new this.Container()

    const getTilesetForGid = gid => {
      const index = tilesets.findIndex(({
        firstgid
      }) => gid >= firstgid)
      return {
        tileset: tilesets[index],
        image: tilesetsImages[index]
      }
    }

    world.tileheight = tiledMap.tileheight
    world.tilewidth = tiledMap.tilewidth // Calculate the `width` and `height` of the world, in pixels

    world.worldWidth = tiledMap.width * tiledMap.tilewidth
    world.worldHeight = tiledMap.height * tiledMap.tileheight // Get a reference to the world's height and width in
    // tiles, in case you need to know this later (you will!)

    world.widthInTiles = tiledMap.width
    world.heightInTiles = tiledMap.height // Create an `objects` array to store references to any
    // named objects in the map. Named objects all have
    // a `name` property that was assigned in Tiled Editor

    world.objects = [] // Loop through all the map layers

    tiledMap.layers.forEach(tiledLayer => {
      // Make a group for this layer and copy
      // all of the layer properties onto it.
      const layerGroup = new this.Container()
      Object.keys(tiledLayer).forEach(key => {
        // Add all the layer's properties to the group, except the
        // width and height (because the group will work those our for
        // itself based on its content).
        if (key !== 'width' && key !== 'height') {
          layerGroup[key] = tiledLayer[key]
        }
      }) // Set the width and height of the layer to
      // the `world`'s width and height
      // layerGroup.width = world.width;
      // layerGroup.height = world.height;
      // Translate `opacity` to `alpha`

      layerGroup.alpha = tiledLayer.opacity // Add the group to the `world`

      world.addChild(layerGroup) // Push the group into the world's `objects` array
      // So you can access it later

      world.objects.push(layerGroup) // Is this current layer a `tilelayer`?

      if (tiledLayer.type === 'tilelayer') {
        // Loop through the `data` array of this layer
        tiledLayer.data.forEach((gid, index) => {
          let tileSprite, texture, mapX, mapY, tilesetX, tilesetY, mapColumn, mapRow, tilesetColumn, tilesetRow // If the grid id number (`gid`) isn't zero, create a sprite

          if (gid !== 0) {
            const {
              tileset,
              image
            } = getTilesetForGid(gid) // The optional spacing (padding) around each tile
            // This is to account for spacing around tiles
            // that's commonly used with texture atlas tilesets. Set the
            // `spacing` property when you create a new map in Tiled Editor

            const spacing = tileset.spacing // Figure out how many columns there are on the tileset.
            // This is the width of the image, divided by the width
            // of each tile, plus any optional spacing thats around each tile

            const numberOfTilesetColumns = Math.floor(tileset.imagewidth / (tiledMap.tilewidth + spacing)) // Figure out the map column and row number that we're on, and then
            // calculate the grid cell's x and y pixel position.

            mapColumn = index % world.widthInTiles
            mapRow = Math.floor(index / world.widthInTiles)
            mapX = mapColumn * world.tilewidth
            mapY = mapRow * world.tileheight // Figure out the column and row number that the tileset
            // image is on, and then use those values to calculate
            // the x and y pixel position of the image on the tileset

            tilesetColumn = (gid - tileset.firstgid) % numberOfTilesetColumns
            tilesetRow = Math.floor((gid - tileset.firstgid) / numberOfTilesetColumns)
            tilesetX = tilesetColumn * world.tilewidth
            tilesetY = tilesetRow * world.tileheight // Compensate for any optional spacing (padding) around the tiles if
            // there is any. This bit of code accumlates the spacing offsets from the
            // left side of the tileset and adds them to the current tile's position

            if (spacing > 0) {
              tilesetX += spacing + spacing * ((gid - tileset.firstgid) % numberOfTilesetColumns)
              tilesetY += spacing + spacing * Math.floor((gid - tileset.firstgid) / numberOfTilesetColumns)
            } // Use the above values to create the sprite's image from
            // the tileset image


            texture = this.frame(image, tilesetX, tilesetY, world.tilewidth, world.tileheight) // I've dedcided that any tiles that have a `name` property are important
            // and should be accessible in the `world.objects` array.

            let tileproperties = tileset.tileproperties || {}
            let key = String(gid - tileset.firstgid) // If the JSON `tileproperties` object has a sub-object that
            // matches the current tile, and that sub-object has a `name` property,
            // then create a sprite and assign the tile properties onto
            // the sprite

            if (tileproperties[key] && tileproperties[key].name) {
              // Make a sprite
              tileSprite = new this.Sprite(texture) // Copy all of the tile's properties onto the sprite
              // (This includes the `name` property)

              Object.keys(tileproperties[key]).forEach(property => {
                // console.log(tileproperties[key][property])
                tileSprite[property] = tileproperties[key][property]
              }) // Push the sprite into the world's `objects` array
              // so that you can access it by `name` later

              world.objects.push(tileSprite)
            } // If the tile doesn't have a `name` property, just use it to
            // create an ordinary sprite (it will only need one texture)
            else {
              tileSprite = new this.Sprite(texture)
            } // Position the sprite on the map


            tileSprite.x = mapX
            tileSprite.y = mapY // Make a record of the sprite's index number in the array
            // (We'll use this for collision detection later)

            tileSprite.index = index // Make a record of the sprite's `gid` on the tileset.
            // This will also be useful for collision detection later

            tileSprite.gid = gid // Add the sprite to the current layer group

            layerGroup.addChild(tileSprite)
          }
        })
      } // Is this layer an `objectgroup`?


      if (tiledLayer.type === 'objectgroup') {
        tiledLayer.objects.forEach(object => {
          // We're just going to capture the object's properties
          // so that we can decide what to do with it later
          // Get a reference to the layer group the object is in
          object.group = layerGroup // Because this is an object layer, it doesn't contain any
          // sprites, just data object. That means it won't be able to
          // calucalte its own height and width. To help it out, give
          // the `layerGroup` the same `width` and `height` as the `world`
          // layerGroup.width = world.width;
          // layerGroup.height = world.height;
          // Push the object into the world's `objects` array

          world.objects.push(object)
        })
      }
    }) // Search functions
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
        world.objects.some(object => {
          if (object.name && object.name === objectName) {
            foundObject = object
            return true
          }
        })

        if (foundObject) {
          return foundObject
        }

        throw new Error(`There is no object with the property name: ${objectName}`)
      } // Return the search function


      return searchForObject()
    }

    world.getObjects = objectNames => {
      const foundObjects = []
      world.objects.forEach(object => {
        if (object.name && objectNames.indexOf(object.name) !== -1) {
          foundObjects.push(object)
        }
      })

      if (foundObjects.length > 0) {
        return foundObjects
      }

      throw new Error('I could not find those objects')
    } // That's it, we're done!
    // Finally, return the `world` object back to the game program


    return world
  }
  /* Isometric tile utilities */

  /*
  ### byDepth
  And array `sort` function that depth-sorts sprites according to
  their `z` properties
  */


  byDepth(a, b) {
    // Calculate the depths of `a` and `b`
    // (add `1` to `a.z` and `b.x` to avoid multiplying by 0)
    a.depth = (a.cartX + a.cartY) * (a.z + 1)
    b.depth = (b.cartX + b.cartY) * (b.z + 1) // Move sprites with a lower depth to a higher position in the array

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


  hitTestIsoTile(sprite, mapArray, gidToCheck, world, pointsToCheck) {
    // The `checkPoints` helper function Loop through the sprite's corner points to
    // find out if they are inside an array cell that you're interested in.
    // Return `true` if they are
    const checkPoints = key => {
      // Get a reference to the current point to check.
      // (`topLeft`, `topRight`, `bottomLeft` or `bottomRight` )
      const point = sprite.collisionPoints[key] // Find the point's index number in the map array

      collision.index = this.getIndex(point.x, point.y, world.cartTilewidth, world.cartTileheight, world.widthInTiles) // Find out what the gid value is in the map position
      // that the point is currently over

      collision.gid = mapArray[collision.index] // If it matches the value of the gid that we're interested, in
      // then there's been a collision

      if (collision.gid === gidToCheck) {
        return true
      }

      return false
    } // Assign "some" as the default value for `pointsToCheck`


    pointsToCheck = pointsToCheck || 'some' // The collision object that will be returned by this function

    let collision = {} // Which points do you want to check?
    // "every", "some" or "center"?

    switch (pointsToCheck) {
    case 'center':
      // `hit` will be true only if the center point is touching
      sprite.collisionPoints = {
        center: {
          x: sprite.centerX,
          y: sprite.centerY // x: s.cartX + ca.x + (ca.width / 2),
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
    } // Return the collision object.
    // `collision.hit` will be true if a collision is detected.
    // `collision.index` tells you the map array index number where the
    // collision occured


    return collision
  }
  /*
  ### getIsoPoints
  The isomertic version of `getPoints`
  */


  getIsoPoints(s) {
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


  makeIsoPointer(pointer, world) {
    Object.defineProperties(pointer, {
      // The isometric's world's Cartesian coordiantes
      cartX: {
        get() {
          const x = (2 * this.y + this.x - (2 * world.y + world.x)) / 2 - world.cartTilewidth / 2
          return x
        },

        enumerable: true,
        configurable: true
      },
      cartY: {
        get() {
          const y = (2 * this.y - this.x - (2 * world.y - world.x)) / 2 + world.cartTileheight / 2
          return y
        },

        enumerable: true,
        configurable: true
      },
      // The tile's column and row in the array
      column: {
        get() {
          return Math.floor(this.cartX / world.cartTilewidth)
        },

        enumerable: true,
        configurable: true
      },
      row: {
        get() {
          return Math.floor(this.cartY / world.cartTileheight)
        },

        enumerable: true,
        configurable: true
      },
      // The tile's index number in the array
      index: {
        get() {
          const index = {} // Convert pixel coordinates to map index coordinates

          index.x = Math.floor(this.cartX / world.cartTilewidth)
          index.y = Math.floor(this.cartY / world.cartTileheight) // Return the index number

          return index.x + index.y * world.widthInTiles
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


  isoRectangle(width, height, fillStyle) {
    // Figure out the `halfHeight` value
    const halfHeight = height / 2 // Draw the flattened and rotated square (diamond shape)

    const rectangle = new this.Graphics()
    rectangle.beginFill(fillStyle)
    rectangle.moveTo(0, 0)
    rectangle.lineTo(width, halfHeight)
    rectangle.lineTo(0, height)
    rectangle.lineTo(-width, halfHeight)
    rectangle.lineTo(0, 0)
    rectangle.endFill() // Generate a texture from the rectangle

    const texture = rectangle.generateTexture() // Use the texture to create a sprite

    const sprite = new this.Sprite(texture) // Return it to the main program

    return sprite
  }
  /*
  ### addIsoProperties
  Add properties to a sprite to help work between Cartesian
  and isometric properties: `isoX`, `isoY`, `cartX`,
  `cartWidth` and `cartHeight`.
  */


  addIsoProperties(sprite, x, y, width, height) {
    // Cartisian (flat 2D) properties
    sprite.cartX = x
    sprite.cartY = y
    sprite.cartWidth = width
    sprite.cartHeight = height // Add a getter/setter for the isometric properties

    Object.defineProperties(sprite, {
      isoX: {
        get() {
          return this.cartX - this.cartY
        },

        enumerable: true,
        configurable: true
      },
      isoY: {
        get() {
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


  makeIsoTiledWorld(jsonTiledMap, tileset) {
    // Create a group called `world` to contain all the layers, sprites
    // and objects from the `tiledMap`. The `world` object is going to be
    // returned to the main game program
    const tiledMap = typeof jsonTiledMap === 'string' ? this.resources[jsonTiledMap].data : jsonTiledMap // A. You need to add three custom properties to your Tiled Editor
    // map: `cartTilewidth`,`cartTileheight` and `tileDepth`. They define the Cartesian
    // dimesions of the tiles (32x32x64).
    // Check to make sure that these custom properties exist

    if (!tiledMap.properties.cartTilewidth && !tiledMap.properties.cartTileheight && !tiledMap.properties.tileDepth) {
      throw new Error('Set custom cartTilewidth, cartTileheight and tileDepth map properties in Tiled Editor')
    } // Create the `world` container


    const world = new this.Container() // B. Set the `tileHeight` to the `tiledMap`'s `tileDepth` property
    // so that it matches the pixel height of the sprite tile image

    world.tileheight = parseInt(tiledMap.properties.tileDepth)
    world.tilewidth = tiledMap.tilewidth // C. Define the Cartesian dimesions of each tile

    world.cartTileheight = parseInt(tiledMap.properties.cartTileheight)
    world.cartTilewidth = parseInt(tiledMap.properties.cartTilewidth) // D. Calculate the `width` and `height` of the world, in pixels
    // using the `world.cartTileHeight` and `world.cartTilewidth`
    // values

    world.worldWidth = tiledMap.width * world.cartTilewidth
    world.worldHeight = tiledMap.height * world.cartTileheight // Get a reference to the world's height and width in
    // tiles, in case you need to know this later (you will!)

    world.widthInTiles = tiledMap.width
    world.heightInTiles = tiledMap.height // Create an `objects` array to store references to any
    // named objects in the map. Named objects all have
    // a `name` property that was assigned in Tiled Editor

    world.objects = [] // The optional spacing (padding) around each tile
    // This is to account for spacing around tiles
    // that's commonly used with texture atlas tilesets. Set the
    // `spacing` property when you create a new map in Tiled Editor

    const spacing = tiledMap.tilesets[0].spacing // Figure out how many columns there are on the tileset.
    // This is the width of the image, divided by the width
    // of each tile, plus any optional spacing thats around each tile

    const numberOfTilesetColumns = Math.floor(tiledMap.tilesets[0].imagewidth / (tiledMap.tilewidth + spacing)) // E. A `z` property to help track which depth level the sprites are on

    let z = 0 // Loop through all the map layers

    tiledMap.layers.forEach(tiledLayer => {
      // Make a group for this layer and copy
      // all of the layer properties onto it.
      const layerGroup = new this.Container()
      Object.keys(tiledLayer).forEach(key => {
        // Add all the layer's properties to the group, except the
        // width and height (because the group will work those our for
        // itself based on its content).
        if (key !== 'width' && key !== 'height') {
          layerGroup[key] = tiledLayer[key]
        }
      }) // Translate `opacity` to `alpha`

      layerGroup.alpha = tiledLayer.opacity // Add the group to the `world`

      world.addChild(layerGroup) // Push the group into the world's `objects` array
      // So you can access it later

      world.objects.push(layerGroup) // Is this current layer a `tilelayer`?

      if (tiledLayer.type === 'tilelayer') {
        // Loop through the `data` array of this layer
        tiledLayer.data.forEach((gid, index) => {
          let tileSprite, texture, mapX, mapY, tilesetX, tilesetY, mapColumn, mapRow, tilesetColumn, tilesetRow // If the grid id number (`gid`) isn't zero, create a sprite

          if (gid !== 0) {
            // Figure out the map column and row number that we're on, and then
            // calculate the grid cell's x and y pixel position.
            mapColumn = index % world.widthInTiles
            mapRow = Math.floor(index / world.widthInTiles) // F. Use the Cartesian values to find the
            // `mapX` and `mapY` values

            mapX = mapColumn * world.cartTilewidth
            mapY = mapRow * world.cartTileheight // Figure out the column and row number that the tileset
            // image is on, and then use those values to calculate
            // the x and y pixel position of the image on the tileset

            tilesetColumn = (gid - 1) % numberOfTilesetColumns
            tilesetRow = Math.floor((gid - 1) / numberOfTilesetColumns)
            tilesetX = tilesetColumn * world.tilewidth
            tilesetY = tilesetRow * world.tileheight // Compensate for any optional spacing (padding) around the tiles if
            // there is any. This bit of code accumlates the spacing offsets from the
            // left side of the tileset and adds them to the current tile's position

            if (spacing > 0) {
              tilesetX += spacing + spacing * ((gid - 1) % numberOfTilesetColumns)
              tilesetY += spacing + spacing * Math.floor((gid - 1) / numberOfTilesetColumns)
            } // Use the above values to create the sprite's image from
            // the tileset image


            texture = this.frame(tileset, tilesetX, tilesetY, world.tilewidth, world.tileheight) // I've dedcided that any tiles that have a `name` property are important
            // and should be accessible in the `world.objects` array.

            let tileproperties = tiledMap.tilesets[0].tileproperties || {}
            let key = String(gid - 1) // If the JSON `tileproperties` object has a sub-object that
            // matches the current tile, and that sub-object has a `name` property,
            // then create a sprite and assign the tile properties onto
            // the sprite

            if (tileproperties[key] && tileproperties[key].name) {
              // Make a sprite
              tileSprite = new this.Sprite(texture) // Copy all of the tile's properties onto the sprite
              // (This includes the `name` property)

              Object.keys(tileproperties[key]).forEach(property => {
                // console.log(tileproperties[key][property])
                tileSprite[property] = tileproperties[key][property]
              }) // Push the sprite into the world's `objects` array
              // so that you can access it by `name` later

              world.objects.push(tileSprite)
            } // If the tile doesn't have a `name` property, just use it to
            // create an ordinary sprite (it will only need one texture)
            else {
              tileSprite = new this.Sprite(texture)
            } // G. Add isometric properties to the sprite


            this.addIsoProperties(tileSprite, mapX, mapY, world.cartTilewidth, world.cartTileheight) // H. Use the isometric position to add the sprite to the world

            tileSprite.x = tileSprite.isoX
            tileSprite.y = tileSprite.isoY
            tileSprite.z = z // Make a record of the sprite's index number in the array
            // (We'll use this for collision detection later)

            tileSprite.index = index // Make a record of the sprite's `gid` on the tileset.
            // This will also be useful for collision detection later

            tileSprite.gid = gid // Add the sprite to the current layer group

            layerGroup.addChild(tileSprite)
          }
        })
      } // Is this layer an `objectgroup`?


      if (tiledLayer.type === 'objectgroup') {
        tiledLayer.objects.forEach(object => {
          // We're just going to capture the object's properties
          // so that we can decide what to do with it later
          // Get a reference to the layer group the object is in
          object.group = layerGroup // Push the object into the world's `objects` array

          world.objects.push(object)
        })
      } // I. Add 1 to the z index (the first layer will have a z index of `1`)


      z += 1
    }) // Search functions
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
        world.objects.some(object => {
          if (object.name && object.name === objectName) {
            foundObject = object
            return true
          }
        })

        if (foundObject) {
          return foundObject
        }

        throw new Error(`There is no object with the property name: ${objectName}`)
      } // Return the search function


      return searchForObject()
    }

    world.getObjects = objectNames => {
      const foundObjects = []
      world.objects.forEach(object => {
        if (object.name && objectNames.indexOf(object.name) !== -1) {
          foundObjects.push(object)
        }
      })

      if (foundObjects.length > 0) {
        return foundObjects
      }

      throw new Error('I could not find those objects')
    } // That's it, we're done!
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


  shortestPath(startIndex, destinationIndex, mapArray, mapWidthInTiles, obstacleGids = [], heuristic = 'manhattan', useDiagonalNodes = true) {
    // The `nodes` function creates the array of node objects
    const nodes = (mapArray, mapWidthInTiles) => mapArray.map((cell, index) => {
      // Figure out the row and column of this cell
      const column = index % mapWidthInTiles
      const row = Math.floor(index / mapWidthInTiles) // The node object

      return {
        f: 0,
        g: 0,
        h: 0,
        parent: null,
        column,
        row,
        index
      }
    }) // Initialize theShortestPath array


    const theShortestPath = [] // Initialize the node map

    const nodeMap = nodes(mapArray, mapWidthInTiles) // Initialize the closed and open list arrays

    const closedList = []
    let openList = [] // Declare the "costs" of travelling in straight or
    // diagonal lines

    const straightCost = 10
    const diagonalCost = 14 // Get the start node

    const startNode = nodeMap[startIndex] // Get the current center node. The first one will
    // match the path's start position

    let centerNode = startNode // Push the `centerNode` into the `openList`, because
    // it's the first node that we're going to check

    openList.push(centerNode) // Get the current destination node. The first one will
    // match the path's end position

    const destinationNode = nodeMap[destinationIndex] // All the nodes that are surrounding the current map index number

    const surroundingNodes = (index, mapArray, mapWidthInTiles, useDiagonalNodes) => {
      // Find out what all the surrounding nodes are, including those that
      // might be beyond the borders of the map
      const allSurroundingNodes = [nodeMap[index - mapWidthInTiles - 1], nodeMap[index - mapWidthInTiles], nodeMap[index - mapWidthInTiles + 1], nodeMap[index - 1], nodeMap[index + 1], nodeMap[index + mapWidthInTiles - 1], nodeMap[index + mapWidthInTiles], nodeMap[index + mapWidthInTiles + 1]] // Optionaly exlude the diagonal nodes, which is often perferable
      // for 2D maze games

      const crossSurroundingNodes = [nodeMap[index - mapWidthInTiles], nodeMap[index - 1], nodeMap[index + 1], nodeMap[index + mapWidthInTiles]] // Use either `allSurroundingNodes` or `crossSurroundingNodes` depending
      // on the the value of `useDiagonalNodes`

      let nodesToCheck

      if (useDiagonalNodes) {
        nodesToCheck = allSurroundingNodes
      } else {
        nodesToCheck = crossSurroundingNodes
      } // Find the valid sourrounding nodes, which are ones inside
      // the map border that don't incldue obstacles. Change `allSurroundingNodes`
      // to `crossSurroundingNodes` to prevent the path from choosing diagonal routes


      const validSurroundingNodes = nodesToCheck.filter(node => {
        // The node will be beyond the top and bottom edges of the
        // map if it is `undefined`
        const nodeIsWithinTopAndBottomBounds = node !== undefined // Only return nodes that are within the top and bottom map bounds

        if (nodeIsWithinTopAndBottomBounds) {
          // Some Boolean values that tell us whether the current map index is on
          // the left or right border of the map, and whether any of the nodes
          // surrounding that index extend beyond the left and right borders
          const indexIsOnLeftBorder = index % mapWidthInTiles === 0
          const indexIsOnRightBorder = (index + 1) % mapWidthInTiles === 0
          const nodeIsBeyondLeftBorder = node.column % (mapWidthInTiles - 1) === 0 && node.column !== 0
          const nodeIsBeyondRightBorder = node.column % mapWidthInTiles === 0 // Find out whether of not the node contains an obstacle by looping
          // through the obstacle gids and and returning `true` if it
          // finds any at this node's location

          const nodeContainsAnObstacle = obstacleGids.some(obstacle => mapArray[node.index] === obstacle) // If the index is on the left border and any nodes surrounding it are beyond the
          // left border, don't return that node

          if (indexIsOnLeftBorder) {
            // console.log("left border")
            return !nodeIsBeyondLeftBorder
          } // If the index is on the right border and any nodes surrounding it are beyond the
          // right border, don't return that node
          else if (indexIsOnRightBorder) {
            // console.log("right border")
            return !nodeIsBeyondRightBorder
          } // Return `true` if the node doesn't contain any obstacles
          else if (nodeContainsAnObstacle) {
            return false
          } // The index must be inside the area defined by the left and right borders,
          // so return the node
          // console.log("map interior")


          return true
        }
      }) // console.log(validSurroundingNodes)
      // Return the array of `validSurroundingNodes`

      return validSurroundingNodes
    } // Diagnostic
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
    } // 2. Euclidean


    const euclidean = (testNode, destinationNode) => {
      let vx = destinationNode.column - testNode.column
      let vy = destinationNode.row - testNode.row
      let h = Math.floor(Math.sqrt(vx * vx + vy * vy) * straightCost)
      return h
    } // 3. Diagonal


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
    } // Loop through all the nodes until the current `centerNode` matches the
    // `destinationNode`. When they they're the same we know we've reached the
    // end of the path


    while (centerNode !== destinationNode) {
      // Find all the nodes surrounding the current `centerNode`
      const surroundingTestNodes = surroundingNodes(centerNode.index, mapArray, mapWidthInTiles, useDiagonalNodes) // Loop through all the `surroundingTestNodes` using a classic `for` loop
      // (A `for` loop gives us a marginal performance boost)

      for (let i = 0; i < surroundingTestNodes.length; i++) {
        // Get a reference to the current test node
        const testNode = surroundingTestNodes[i] // Find out whether the node is on a straight axis or
        // a diagonal axis, and assign the appropriate cost
        // A. Declare the cost variable

        let cost = 0 // B. Do they occupy the same row or column?

        if (centerNode.row === testNode.row || centerNode.column === testNode.column) {
          // If they do, assign a cost of "10"
          cost = straightCost
        } else {
          // Otherwise, assign a cost of "14"
          cost = diagonalCost
        } // C. Calculate the costs (g, h and f)
        // The node's current cost


        const g = centerNode.g + cost // The cost of travelling from this node to the
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
        } // The final cost


        const f = g + h // Find out if the testNode is in either
        // the openList or closedList array

        const isOnOpenList = openList.some(node => testNode === node)
        const isOnClosedList = closedList.some(node => testNode === node) // If it's on either of these lists, we can check
        // whether this route is a lower-cost alternative
        // to the previous cost calculation. The new G cost
        // will make the difference to the final F cost

        if (isOnOpenList || isOnClosedList) {
          if (testNode.f > f) {
            testNode.f = f
            testNode.g = g
            testNode.h = h // Only change the parent if the new cost is lower

            testNode.parent = centerNode
          }
        } // Otherwise, add the testNode to the open list
        else {
          testNode.f = f
          testNode.g = g
          testNode.h = h
          testNode.parent = centerNode
          openList.push(testNode)
        } // The `for` loop ends here

      } // Push the current centerNode into the closed list


      closedList.push(centerNode) // Quit the loop if there's nothing on the open list.
      // This means that there is no path to the destination or the
      // destination is invalid, like a wall tile

      if (openList.length === 0) {
        return theShortestPath
      } // Sort the open list according to final cost


      openList = openList.sort((a, b) => a.f - b.f) // Set the node with the lowest final cost as the new centerNode

      centerNode = openList.shift() // The `while` loop ends here
    } // Now that we have all the candidates, let's find the shortest path!


    if (openList.length !== 0) {
      // Start with the destination node
      let testNode = destinationNode
      theShortestPath.push(testNode) // Work backwards through the node parents
      // until the start node is found

      while (testNode !== startNode) {
        // Step through the parents of each node,
        // starting with the destination node and ending with the start node
        testNode = testNode.parent // Add the node to the beginning of the array

        theShortestPath.unshift(testNode) // ...and then loop again to the next node's parent till you
        // reach the end of the path
      }
    } // Return an array of nodes that link together to form
    // the shortest path


    return theShortestPath
  }
  /*
  ### tileBasedLineOfSight
   Use the `tileBasedLineOfSight` function to find out whether two sprites
  are visible to each other inside a tile based maze environment.
   */


  tileBasedLineOfSight(spriteOne, // The first sprite, with `centerX` and `centerY` properties
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
    let vy = spriteTwo.centerY - spriteOne.centerY // Find the vector's magnitude (its length in pixels)

    const magnitude = Math.sqrt(vx * vx + vy * vy) // How many points will we need to test?

    const numberOfPoints = magnitude / segment // Create an array of x/y points that
    // extends from `spriteOne` to `spriteTwo`

    const points = () => {
      // Initialize an array that is going to store all our points
      // along the vector
      const arrayOfPoints = [] // Create a point object for each segment of the vector and
      // store its x/y position as well as its index number on
      // the map array

      for (let i = 1; i <= numberOfPoints; i++) {
        // Calculate the new magnitude for this iteration of the loop
        const newMagnitude = segment * i // Find the unit vector

        let dx = vx / magnitude
        let dy = vy / magnitude // Use the unit vector and newMagnitude to figure out the x/y
        // position of the next point in this loop iteration

        let x = spriteOne.centerX + dx * newMagnitude
        let y = spriteOne.centerY + dy * newMagnitude // Find the map index number that this x and y point corresponds to

        const index = this.getIndex(x, y, world.tilewidth, world.tileheight, world.widthInTiles) // Push the point into the `arrayOfPoints`

        arrayOfPoints.push({
          x,
          y,
          index
        })
      } // Return the array


      return arrayOfPoints
    } // The tile-based collision test.
    // The `noObstacles` function will return `true` if all the tile
    // index numbers along the vector are `0`, which means they contain
    // no walls. If any of them aren't 0, then the function returns
    // `false` which means there's a wall in the way


    const noObstacles = points().every(point => mapArray[point.index] === emptyGid) // Restrict the line of sight to right angles only (we don't want to
    // use diagonals)

    const validAngle = () => {
      // Find the angle of the vector between the two sprites
      const angle = Math.atan2(vy, vx) * 180 / Math.PI // If the angle matches one of the valid angles, return
      // `true`, otherwise return `false`

      if (angles.length !== 0) {
        return angles.some(x => x === angle)
      }

      return true
    } // Return `true` if there are no obstacles and the line of sight
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


  surroundingCrossCells(index, widthInTiles) {
    return [index - widthInTiles, index - 1, index + 1, index + widthInTiles]
  }
  /*
  surroundingDiagonalCells
  ---------------------
   Returns an array of index numbers matching the cells that touch the
  4 corners of the center the center `index` cell
   */


  surroundingDiagonalCells(index, widthInTiles) {
    return [index - widthInTiles - 1, index - widthInTiles + 1, index + widthInTiles - 1, index + widthInTiles + 1]
  }
  /*
  validDirections
  ---------------
   Returns an array with the values "up", "down", "left" or "right"
  that represent all the valid directions in which a sprite can move
  The `validGid` is the grid index number for the "walkable" part of the world
  (such as, possibly, `0`.)
  */


  validDirections(sprite, mapArray, validGid, world) {
    // Get the sprite's current map index position number
    const index = this.getIndex(sprite.x, sprite.y, world.tilewidth, world.tileheight, world.widthInTiles) // An array containing the index numbers of tile cells
    // above, below and to the left and right of the sprite

    const surroundingCrossCells = (index, widthInTiles) => [index - widthInTiles, index - 1, index + 1, index + widthInTiles] // Get the index position numbers of the 4 cells to the top, right, left
    // and bottom of the sprite


    const surroundingIndexNumbers = surroundingCrossCells(index, world.widthInTiles) // Find all the tile gid numbers that match the surrounding index numbers

    const surroundingTileGids = surroundingIndexNumbers.map(index => mapArray[index]) // `directionList` is an array of 4 string values that can be either
    // "up", "left", "right", "down" or "none", depending on
    // whether there is a cell with a valid gid that matches that direction.

    const directionList = surroundingTileGids.map((gid, i) => {
      // The possible directions
      const possibleDirections = ['up', 'left', 'right', 'down'] // If the direction is valid, choose the matching string
      // identifier for that direction. Otherwise, return "none"

      if (gid === validGid) {
        return possibleDirections[i]
      }

      return 'none'
    }) // We don't need "none" in the list of directions
    // (it's just a placeholder), so let's filter it out

    const filteredDirectionList = directionList.filter(direction => direction !== 'none') // Return the filtered list of valid directions

    return filteredDirectionList
  }
  /*
  canChangeDirection
  ------------------
   Returns `true` or `false` depending on whether a sprite in at a map
  array location in which it able to change its direction
  */


  canChangeDirection(validDirections = []) {
    // Is the sprite in a dead-end (cul de sac.) This will be true if there's only
    // one element in the `validDirections` array
    const inCulDeSac = validDirections.length === 1 // Is the sprite trapped? This will be true if there are no elements in
    // the `validDirections` array

    const trapped = validDirections.length === 0 // Is the sprite in a passage? This will be `true` if the the sprite
    // is at a location that contain the values
    // “left” or “right” and “up” or “down”

    let up = validDirections.find(x => x === 'up')
    let down = validDirections.find(x => x === 'down')
    let left = validDirections.find(x => x === 'left')
    let right = validDirections.find(x => x === 'right')
    let atIntersection = (up || down) && (left || right) // Return `true` if the sprite can change direction or
    // `false` if it can't

    return trapped || atIntersection || inCulDeSac
  }
  /*
  randomDirection
  ---------------
   Randomly returns the values "up", "down", "left" or "right" based on
  valid directions supplied. If the are no valid directions, it returns "trapped"
   */


  randomDirection(sprite, validDirections = []) {
    // The `randomInt` helper function returns a random integer between a minimum
    // and maximum value
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min // Is the sprite trapped?


    const trapped = validDirections.length === 0 // If the sprite isn't trapped, randomly choose one of the valid
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


  closestDirection(spriteOne, spriteTwo) {
    // A helper function to find the closest direction
    // Plot a vector between spriteTwo and spriteOne
    let vx = spriteTwo.centerX - spriteOne.centerX
    let vy = spriteTwo.centerY - spriteOne.centerY // If the distance is greater on the X axis...

    if (Math.abs(vx) >= Math.abs(vy)) {
      // Try left and right
      if (vx <= 0) {
        return 'left'
      }

      return 'right'
    } // If the distance is greater on the Y axis...
    // Try up and down


    if (vy <= 0) {
      return 'up'
    }

    return 'down'
  }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map