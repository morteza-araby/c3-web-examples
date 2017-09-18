(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cct"] = factory();
	else
		root["cct"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Log"] = Log;
/* harmony export (immutable) */ __webpack_exports__["setLog"] = setLog;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_argCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_utils__ = __webpack_require__(13);






var _logFunctions, _logColors;




/**
 * A log interface that is exposed via the singleton `cct.log`.
 *
 * Log messages are sent using one of the five log functions, one for each log level:
 * {@link Log#error}, {@link Log#warning}, {@link Log#info}, {@link Log#debug}, {@link Log#verbose}.
 *
 * Each message is sent to a log category, which is identified by a string. The log level
 * of each category can be set separately, allowing heigher or lower log levels to be
 * set for specific categories.
 *
 * The log messages that don't get filtered out because of their level are forwarded
 * to the log handler for that log level. The default log handlers will use the built-in
 * `console` functions to print the category in square brackets followed by the message.
 *
 * @example <caption>Show all messages and in color, except for own events</caption>
 * cct.log.setLogLevel('own-events', cct.log.NONE);
 * cct.log.setLogLevel(cct.log.VERBOSE);
 * cct.log.color = true;
 *
 * @example <caption>Logging an info message in the gizmo category</caption>
 * cct.log.info('gizmo', 'widget initialized');
 *
 * @abstract
 * @class Log
 */
function Log() {
  this._defaultLogLevel = this.WARNING;
  this._categoryLevels = {};
  this._logHandlers = {};
}

/**
 * @callback LogHandlerFunction
 *
 * @param {number} mask - The log level mask of the message.
 * @param {string} category - The message category.
 * @param {string} message - The log message.
 */

/**
 * Sets the log handler for one or more log levels. The handler will be called whenever
 * anything is logged that doesn't get filtered because of it's log level.
 *
 * Setting a log handler will replace the default log handler for that log level.
 *
 * @example <caption>Setting log handler for multiple levels</caption>
 * log.setLogHandler(log.ERROR|log.WARNING, function (mask, category, ...args) {
 *     ...
 * });
 *
 * @param {number} [levels=ALL] - A mask that describles which log levels the handler
 *  should be applied to. If omitted the handler will be used for all log levels.
 * @param {LogHandlerFunction} handler - The log handler that will be called.
 */
Log.prototype.setLogHandler = function (levels, handler) {
  if (arguments.length <= 1) {
    handler = levels;
    levels = this.ALL;
  }
  if (typeof levels !== 'number') {
    throw new TypeError('Log.setLogHandler: levels must be a number');
  }
  if (typeof handler !== 'function' && handler) {
    throw new TypeError('Log.setLogHandler: handler must be a function');
  }
  this.levels.forEach(function (level, index) {
    if (1 << index & levels) {
      this._logHandlers[level] = handler;
    }
  }.bind(this));
};

/**
 * Sets the log level either globally, or for a specific category.
 * The log handler will only be called for messages whose log level is
 * equal or lower than the log level for that category.
 *
 * The log level of any category is equal to the specific log level that has
 * been set for that category, and if none has been set, the gobal log level.
 *
 * @param {string} [category] - Optional log category to set the level of.
 *  If this is excluded, the global log level will be set instead.
 * @param {number} level - The new log level.
 */
Log.prototype.setLogLevel = function (category, level) {
  if (arguments.length <= 1) {
    level = category;
    if (typeof level !== 'number') {
      throw new TypeError('Log.setLogLevel: level must be a number');
    }
    this._defaultLogLevel = level;
  } else {
    if (typeof category !== 'string') {
      throw new TypeError('Log.setLogLevel: category must be a string');
    }
    if (typeof level !== 'number') {
      throw new TypeError('Log.setLogLevel: level must be a number');
    }
    this._categoryLevels[category] = level;
  }
};

function createLogFunction(level, mask) {
  return function (category, message) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].string('log.' + level, 'category', category);
    var logLevel = 0;
    if (typeof category !== 'string') {
      throw new TypeError('Log.' + level + ': category has to be a string');
    }
    if (category in this._categoryLevels) {
      logLevel = this._categoryLevels[category];
    } else {
      logLevel = this._defaultLogLevel;
    }
    if (logLevel < mask) {
      return;
    }
    if (typeof message === 'string') {
      __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].string('log.' + level, 'message', message);
    } else {
      var object = message;
      __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].object('log.' + level, 'object', object);

      var _args = args,
          _args2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_args),
          objectMessage = _args2[0],
          objectArgs = _args2.slice(1);

      __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].string('log.' + level, 'object message', objectMessage);

      message = object + ' ' + objectMessage;
      args = objectArgs;
    }
    var handler = this._logHandlers[level];
    if (handler) {
      handler.call.apply(handler, [this, mask, category, message].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(args)));
    }
  };
}

/**
 * An array of the names of all log levels, in lowercase.
 * @type {string[]}
 */
Log.prototype.levels = ['error', 'warning', 'info', 'debug', 'verbose'];

Log.prototype.levels.forEach(function (level, index) {
  var mask = 1 << index;
  Log.prototype[level.toUpperCase()] = mask;
  Log.prototype[level] = createLogFunction(level, mask);
});

/**
 * The error log function. Will call the error log handler if the log
 * level of the given category is set to error or higher.
 * @function Log#error
 * @param {string} category - The category of this log message
 * @param {...*} args - The rest of the arguments to pass to the log handler
 */
/**
 * The warning log function. Will call the warning log handler if the log
 * level of the given category is set to warning or higher.
 * @function Log#warning
 * @param {string} category - The category of this log message
 * @param {...*} args - The rest of the arguments to pass to the log handler
 */
/**
 * The info log function. Will call the info log handler if the log
 * level of the given category is set to info or higher.
 * @function Log#info
 * @param {string} category - The category of this log message
 * @param {...*} args - The rest of the arguments to pass to the log handler
 */
/**
 * The debug log function. Will call the debug log handler if the log
 * level of the given category is set to debug or higher.
 * @function Log#debug
 * @param {string} category - The category of this log message
 * @param {...*} args - The rest of the arguments to pass to the log handler
 */
/**
 * The verbose log function. Will call the verbose log handler if the log
 * level of the given category is set to verbose or higher.
 * @function Log#verbose
 * @param {string} category - The category of this log message
 * @param {...*} args - The rest of the arguments to pass to the log handler
 */

/**
 * Log level representing no logging at all.
 * @member {number} Log#NONE
 * @readonly
 */
/**
 * Error level.
 * @member {number} Log#ERROR
 * @readonly
 */
/**
 * Warning level.
 * @member {number} Log#WARNING
 * @readonly
 */
/**
 * Info level.
 * @member {number} Log#INFO
 * @readonly
 */
/**
 * Debug level.
 * @member {number} Log#DEBUG
 * @readonly
 */
/**
 * Verbose level.
 * @member {number} Log#VERBOSE
 * @readonly
 */
/**
 * Log level representing a mask of all log levels.
 * @member {number} Log#ALL
 * @readonly
 */

Log.prototype.NONE = 0;
Log.prototype.ALL = Log.prototype.levels.reduce(function (mask, ignored, index) {
  return mask | 1 << index;
}, 0);

var log = new Log();

/* harmony default export */ __webpack_exports__["default"] = (log);

function setLog(_log) {
  log = _log;
}

/**
 * Whether or not the default log handler should use color to represent log levels.
 * @member {boolean} Log#color
 */

var logFunctions = (_logFunctions = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logFunctions, log.ERROR, (console.error || console.log).bind(console)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logFunctions, log.WARNING, (console.warn || console.log).bind(console)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logFunctions, log.INFO, (console.info || console.log).bind(console)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logFunctions, log.DEBUG, (console.debug || console.log).bind(console)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logFunctions, log.VERBOSE, console.log.bind(console)), _logFunctions);
var logColors = (_logColors = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logColors, log.ERROR, '#F74333'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logColors, log.WARNING, '#F79743'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logColors, log.INFO, '#3343F7'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logColors, log.DEBUG, '#43C733'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_logColors, log.VERBOSE, '#F743F7'), _logColors);

function defaultLogHandler(level, category, message) {
  var _logFunctions$level;

  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  (_logFunctions$level = logFunctions[level]).call.apply(_logFunctions$level, [console, '[' + category + '] ' + message].concat(args));
}

function colorLogHandler(level, category, message) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  if (this.color) {
    var _logFunctions$level2;

    (_logFunctions$level2 = logFunctions[level]).call.apply(_logFunctions$level2, [console, '%c[' + category + ']%c ' + message].concat(['color: ' + logColors[level], 'color:'], args));
  } else {
    var _logFunctions$level3;

    (_logFunctions$level3 = logFunctions[level]).call.apply(_logFunctions$level3, [console, '[' + category + '] ' + message].concat(args));
  }
}

log.color = false;
log.colors = logColors;

var defaultHandler;

if (__WEBPACK_IMPORTED_MODULE_4_common_utils__["isChrome"] || __WEBPACK_IMPORTED_MODULE_4_common_utils__["isFirefox"]) {
  defaultHandler = colorLogHandler;
} else {
  defaultHandler = defaultLogHandler;
}

log.setLogHandler(log.ALL, defaultHandler);
log.defaultHandler = defaultHandler;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(53)('wks')
  , uid        = __webpack_require__(37)
  , Symbol     = __webpack_require__(5).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(18)
  , hide      = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(70)
  , toPrimitive    = __webpack_require__(55)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(96);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(62);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);



function optArgCheck(prop) {
  return function (context, name, value, extra) {
    if (value !== undefined && value !== null) {
      try {
        this[prop](context, name, value, extra);
      } catch (e) {
        e.message += ' if present';
        throw e;
      }
    }
    return value;
  };
}

var argCheck = {
  count: function count(context, requiredCount, actualCount) {
    if (requiredCount > actualCount) {
      throw new TypeError(context + ' requires at least' + requiredCount + ' arguments');
    }
  },
  error: function error(context, name, criteria) {
    if ((typeof context === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(context)) === 'object') {
      context = context.constructor && context.constructor.name || 'Unknown';
      context += ' constructor';
    }
    throw new TypeError(context + ': argument \'' + name + '\' must ' + criteria);
  },
  optObject: optArgCheck('object'),
  object: function object(context, name, value) {
    if ((typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) !== 'object') {
      this.error(context, name, 'be an object');
    } else if (value === null) {
      this.error(context, name, 'be an object, not null');
    } else if (Array.isArray(value)) {
      this.error(context, name, 'be an object, not an array');
    } else if (value instanceof RegExp) {
      this.error(context, name, 'be an object, not a RegExp instance');
    }
    return value;
  },
  optInstance: optArgCheck('instance'),
  instance: function instance(context, name, value, constructor) {
    if (!constructor) {
      throw new Error('Failed instance argument check for ' + name + ' in ' + context + ', constructor is ' + constructor + '.');
    }
    if (Array.isArray(constructor)) {
      var atLeastOneMatch = constructor.some(function (constructor) {
        return value instanceof constructor;
      });
      if (!atLeastOneMatch) {
        var names = constructor.map(function (constructor) {
          return constructor.name;
        }).join(', ');
        this.error(context, name, 'be an instance of any of ' + names);
      }
    } else if (!(value instanceof constructor)) {
      this.error(context, name, 'be an instance of ' + constructor.name);
    }
    return value;
  },

  optFunc: optArgCheck('func'),
  func: function func(context, name, value) {
    if (typeof value !== 'function') {
      this.error(context, name, 'be a function');
    }
    return value;
  },
  optArray: optArgCheck('array'),
  array: function array(context, name, value) {
    if (!Array.isArray(value)) {
      this.error(context, name, 'be an array');
    }
    return value;
  },
  optString: optArgCheck('string'),
  string: function string(context, name, value) {
    if (typeof value !== 'string') {
      this.error(context, name, 'be a string');
    } else if (value === '') {
      this.error(context, name, 'not be an empty string');
    }
    return value;
  },
  optStringOrEmpty: optArgCheck('string'),
  stringOrEmpty: function stringOrEmpty(context, name, value) {
    if (typeof value !== 'string') {
      this.error(context, name, 'be a string');
    }
    return value;
  },
  optValues: optArgCheck('values'),
  values: function values(context, name, value, _values) {
    if (_values.indexOf(value) === -1) {
      this.error(context, name, 'be one of ' + _values.join(', '));
    }
    return value;
  },
  optNumber: optArgCheck('number'),
  number: function number(context, name, value) {
    if (isNaN(value)) {
      this.error(context, name, 'not be NaN');
    } else if (!isFinite(value)) {
      this.error(context, name, 'not be Infinite');
    } else if (typeof value !== 'number') {
      this.error(context, name, 'be a number');
    }
    return value;
  },
  optBoolean: optArgCheck('boolean'),
  boolean: function boolean(context, name, value) {
    if (typeof value !== 'boolean') {
      this.error(context, name, 'be a boolean');
    }
    return value;
  },
  options: function options(context, name, value) {
    this.object(context, name, value);
    return new OptionsArgChecker(context, name, value);
  },
  optOptions: function optOptions(context, name, value) {
    if (value !== undefined) {
      try {
        return this.options(context, name, value);
      } catch (e) {
        e.message += ' if present';
        throw e;
      }
    }
    return new OptionsArgChecker(0, 0, 0, true);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (argCheck);

function OptionsArgChecker(context, name, value, empty) {
  this.context = context;
  this.name = name;
  this.value = value;
  this.empty = empty;
}

function optOptionsArgCheck(type) {
  return function (prop, extra) {
    if (!this.empty && prop in this.value) {
      if (this.value[prop] !== undefined && this.value[prop] !== null) {
        try {
          this[type](prop, extra);
        } catch (e) {
          e.message += ' if present';
          throw e;
        }
      }
    }
    return this;
  };
}

OptionsArgChecker.prototype = {
  optObject: optOptionsArgCheck('object'),
  object: function object(prop) {
    if (!this.empty) {
      argCheck.object(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optInstance: optOptionsArgCheck('instance'),
  instance: function instance(prop, constructor) {
    if (!this.empty) {
      argCheck.instance(this.context, this.name + '.' + prop, this.value[prop], constructor);
    }
    return this;
  },
  optFunc: optOptionsArgCheck('func'),
  func: function func(prop) {
    if (!this.empty) {
      argCheck.func(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optArray: optOptionsArgCheck('array'),
  array: function array(prop) {
    if (!this.empty) {
      argCheck.array(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optString: optOptionsArgCheck('string'),
  string: function string(prop) {
    if (!this.empty) {
      argCheck.string(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optStringOrEmpty: optOptionsArgCheck('stringOrEmpty'),
  stringOrEmpty: function stringOrEmpty(prop) {
    if (!this.empty) {
      argCheck.stringOrEmpty(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optValues: optOptionsArgCheck('values'),
  values: function values(prop, _values2) {
    if (!this.empty) {
      argCheck.values(this.context, this.name + '.' + prop, this.value[prop], _values2);
    }
    return this;
  },
  optNumber: optOptionsArgCheck('number'),
  number: function number(prop) {
    if (!this.empty) {
      argCheck.number(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  },
  optBoolean: optOptionsArgCheck('boolean'),
  boolean: function boolean(prop) {
    if (!this.empty) {
      argCheck.boolean(this.context, this.name + '.' + prop, this.value[prop]);
    }
    return this;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["find"] = find;
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;
/* harmony export (immutable) */ __webpack_exports__["filter"] = filter;
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["map"] = map;
/* harmony export (immutable) */ __webpack_exports__["mapValues"] = mapValues;
/* harmony export (immutable) */ __webpack_exports__["values"] = values;
/* harmony export (immutable) */ __webpack_exports__["diff"] = diff;
/* harmony export (immutable) */ __webpack_exports__["toArray"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["hiddenProp"] = hiddenProp;
/* harmony export (immutable) */ __webpack_exports__["prop"] = prop;
/* harmony export (immutable) */ __webpack_exports__["getter"] = getter;
/* harmony export (immutable) */ __webpack_exports__["range"] = range;
/* harmony export (immutable) */ __webpack_exports__["defer"] = defer;
/* harmony export (immutable) */ __webpack_exports__["shallowCopy"] = shallowCopy;
/* harmony export (immutable) */ __webpack_exports__["assign"] = assign;
/* harmony export (immutable) */ __webpack_exports__["wait"] = wait;
/* harmony export (immutable) */ __webpack_exports__["randomString"] = randomString;
/* harmony export (immutable) */ __webpack_exports__["arrayBufferSha1IfSupported"] = arrayBufferSha1IfSupported;
/* harmony export (immutable) */ __webpack_exports__["base64ToUtf8"] = base64ToUtf8;
/* harmony export (immutable) */ __webpack_exports__["utf8ToBase64"] = utf8ToBase64;
/* harmony export (immutable) */ __webpack_exports__["urlSafeBase64ToUtf8"] = urlSafeBase64ToUtf8;
/* harmony export (immutable) */ __webpack_exports__["utf8ToUrlSafeBase64"] = utf8ToUrlSafeBase64;
/* harmony export (immutable) */ __webpack_exports__["binaryStringToArrayBuffer"] = binaryStringToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["unicodeStringToArrayBuffer"] = unicodeStringToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["arrayBufferToBinaryString"] = arrayBufferToBinaryString;
/* harmony export (immutable) */ __webpack_exports__["arrayBufferToUnicodeString"] = arrayBufferToUnicodeString;
/* harmony export (immutable) */ __webpack_exports__["parseDataUri"] = parseDataUri;
/* harmony export (immutable) */ __webpack_exports__["blobToArrayBuffer"] = blobToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["bufferToFile"] = bufferToFile;
/* harmony export (immutable) */ __webpack_exports__["bufferToHex"] = bufferToHex;
/* harmony export (immutable) */ __webpack_exports__["hexToBuffer"] = hexToBuffer;
/* harmony export (immutable) */ __webpack_exports__["concatenateArrayBuffers"] = concatenateArrayBuffers;
/* harmony export (immutable) */ __webpack_exports__["noVendor"] = noVendor;
/* harmony export (immutable) */ __webpack_exports__["registerInstance"] = registerInstance;
/* harmony export (immutable) */ __webpack_exports__["unregisterInstance"] = unregisterInstance;
/* harmony export (immutable) */ __webpack_exports__["priv"] = priv;
/* harmony export (immutable) */ __webpack_exports__["assertPriv"] = assertPriv;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["notInNode"] = notInNode;
/* harmony export (immutable) */ __webpack_exports__["maybeConvertStringToNumber"] = maybeConvertStringToNumber;
/* harmony export (immutable) */ __webpack_exports__["getStringByteLength"] = getStringByteLength;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyMap", function() { return ReadOnlyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlySet", function() { return ReadOnlySet; });
/* harmony export (immutable) */ __webpack_exports__["createTimedBuffer"] = createTimedBuffer;
/* harmony export (immutable) */ __webpack_exports__["errorForwarder"] = errorForwarder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_create__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_object_keys__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_object_keys__);















function find(collection, func, thisArg) {
  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      if (func.call(thisArg, collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return null;
}

function fill(array) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var len = array.length | 0;

  for (var i = 0; i < len; i += 1) {
    array[i] = value;
  }

  return array;
}

function filter(collection, func, thisArg) {
  var arr = [];
  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      if (func.call(thisArg, collection[key], key, collection)) {
        arr.push(collection[key]);
      }
    }
  }
  return arr;
}

function forEach(collection, func, thisArg) {
  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      func.call(thisArg, collection[key], key, collection);
    }
  }
}

function map(collection, func, thisArg) {
  var arr = [];
  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      arr.push(func.call(thisArg, collection[key], key, collection));
    }
  }
  return arr;
}

function mapValues(collection, func, thisArg) {
  var obj = {};
  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      obj[key] = func.call(thisArg, collection[key], key, collection);
    }
  }
  return obj;
}

function values(collection) {
  if (!collection) {
    return [];
  }
  if (Array.isArray(collection)) {
    throw new TypeError('tried to call utils.values() on array');
  }
  return __WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_object_keys___default()(collection).map(function (key) {
    return collection[key];
  });
}

function diff(collection1, collection2) {
  var set1 = new __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set___default.a(collection1);
  var set2 = new __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set___default.a(collection2);
  var added = [];
  var removed = [];
  set1.forEach(function (element) {
    if (!set2.has(element)) {
      removed.push(element);
    }
  });
  set2.forEach(function (element) {
    if (!set1.has(element)) {
      added.push(element);
    }
  });
  return [added, removed];
}

function toArray(arrayLike) {
  var arr = [];
  for (var i = 0; i < arrayLike.length; i += 1) {
    arr[i] = arrayLike[i];
  }
  return arr;
}

function hiddenProp(obj, name, value) {
  __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property___default()(obj, name, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: value
  });
}

function prop(obj, name, func) {
  __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property___default()(obj, name, {
    enumerable: true,
    configurable: false,
    writable: false,
    value: func
  });
}

function getter(obj, name, func) {
  __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_define_property___default()(obj, name, {
    enumerable: true,
    configurable: false,
    get: func
  });
}

function range(from, to, step) {
  if (arguments.length === 1) {
    to = from;
    from = 0;
    step = 1;
  } else if (arguments.length === 2) {
    step = 1;
  }
  var arr = [];
  for (var i = from; i < to; i += step) {
    arr.push(i);
  }
  return arr;
}

function defer() {
  var deferred = {};
  deferred.promise = new __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

function shallowCopy(obj, keys) {
  if (!obj) {
    return null;
  }
  var result = {};
  var key;
  if (keys) {
    for (var index in keys) {
      key = keys[index];
      result[key] = obj[key];
    }
  } else {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

function assign(obj, other, keys) {
  if (!obj) {
    return null;
  }
  if (!other) {
    return obj;
  }
  var key;
  if (keys) {
    for (var index in keys) {
      key = keys[index];
      obj[key] = other[key];
    }
  } else {
    for (key in other) {
      if (other.hasOwnProperty(key)) {
        obj[key] = other[key];
      }
    }
  }
  return obj;
}

function wait(time) {
  return function () {
    var args = arguments;
    return new __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise___default.a(function (resolve) {
      setTimeout(function () {
        resolve.apply(null, args);
      }, time);
    });
  };
}

function randomString(size) {
  var array = null;
  var now;
  var i;
  var crypto = noVendor(globalObject, 'crypto');
  if (false) {
    array = require('crypto').randomBytes(size);
  } else if (crypto && window.Uint8Array) {
    array = new window.Uint8Array(size);
    crypto.getRandomValues(array);
  } else {
    now = new Date().getTime();
    array = [];
    for (i = 0; i < size; i += 1) {
      array[i] = Math.random() * now & 255;
    }
  }

  var rawString = String.fromCharCode.apply(null, array);
  var base64String = utf8ToBase64(rawString);
  return base64String.replace(/\-_/g, '').slice(0, size);
}

function arrayBufferSha1IfSupported(arrayBuffer) {
  var subtleCrypto = window.crypto && window.crypto.subtle;
  if (subtleCrypto && subtleCrypto.digest) {
    return subtleCrypto.digest('SHA-1', arrayBuffer);
  }
  return __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise___default.a.resolve(null);
}

function base64ToUtf8(base64) {
  if (false) {
    /* global global */
    return global.Buffer.from(base64, 'base64').toString('utf8');
  } else {
    return atob(base64);
  }
}

function utf8ToBase64(utf8) {
  if (false) {
    /* global global */
    return global.Buffer.from(utf8, 'utf8').toString('base64');
  } else {
    return btoa(utf8);
  }
}

function urlSafeBase64ToUtf8(urlSafeBase64) {
  return base64ToUtf8(urlSafeBase64.replace(/[-_]/g, charFromUrlSafeBase64));
}

function utf8ToUrlSafeBase64(utf8) {
  return utf8ToBase64(utf8).replace(/[+/=]/g, charToUrlSafeBase64);
}

function charToUrlSafeBase64(char) {
  switch (char) {
    case '+':
      return '-';
    case '/':
      return '_';
  }
  return '';
}

function charFromUrlSafeBase64(char) {
  switch (char) {
    case '-':
      return '+';
    case '_':
      return '/';
  }
  return '';
}

function binaryStringToArrayBuffer(binaryString) {
  var buffer = new ArrayBuffer(binaryString.length);
  var view = new Uint8Array(buffer);
  var length = binaryString.length;
  for (var i = 0; i < length; i += 1) {
    view[i] = binaryString.charCodeAt(i);
  }
  return buffer;
}

function unicodeStringToArrayBuffer(unicodeString) {
  var buffer = new ArrayBuffer(unicodeString.length * 2);
  var view = new Uint16Array(buffer);
  var length = unicodeString.length;
  for (var i = 0; i < length; i += 1) {
    view[i] = unicodeString.charCodeAt(i);
  }
  return buffer;
}

function bufferViewToString(view) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1000;

  var length = view.length;
  var result = '';
  for (var i = 0; i < length; i += chunkSize) {
    result += String.fromCharCode.apply(null, view.subarray(i, i + chunkSize));
  }
  return result;
}

function arrayBufferToBinaryString(buffer) {
  var view = new Uint8Array(buffer.buffer || buffer, buffer.byteOffset, buffer.byteLength);
  return bufferViewToString(view);
}

function arrayBufferToUnicodeString(buffer) {
  var view = new Uint16Array(buffer.buffer || buffer, buffer.byteOffset, buffer.byteLength >> 1);
  return bufferViewToString(view);
}

function parseDataUri(dataUri) {
  var split = dataUri.split(/:|;|,/g);
  if (split[0] !== 'data') {
    throw new Error('invalid data uri: ' + dataUri.slice(0, 100));
  }
  if (split[2] !== 'base64') {
    throw new Error('invalid data uri: ' + dataUri.slice(0, 100));
  }
  return {
    mimeType: split[1],
    binaryString: base64ToUtf8(split[3])
  };
}

function blobToArrayBuffer(blob) {
  var reader = new FileReader();
  return new __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}

function bufferToFile(buffer, fileName, mimeType) {
  var file = new Blob([buffer], {
    type: mimeType
  });
  file.name = fileName;
  file.lastModifiedDate = new Date();
  return file;
}

function bufferToHex(buffer) {
  var view = new Uint8Array(buffer);
  return Array.prototype.map.call(view, function (x) {
    return ('00' + x.toString(16)).slice(-2);
  }).join('');
}

function hexToBuffer(hex) {
  if (hex.length % 2 !== 0) {
    throw new TypeError('hexToBuffer: hex length must be even');
  }
  var buffer = new Uint8Array(hex.length / 2);
  for (var i = 0; hex.substr(i, 2); i += 2) {
    buffer[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return buffer;
}

function concatenateArrayBuffers(buffers) {
  var totalLength = 0;
  for (var index in buffers) {
    totalLength += buffers[index].byteLength;
  }

  var result = new Uint8Array(totalLength);
  var offset = 0;
  for (var _index in buffers) {
    var view = new Uint8Array(buffers[_index]);
    result.set(view, offset);
    offset += view.byteLength;
  }

  return result;
}

function noVendor(obj, name) {
  var upper = name[0].toUpperCase() + name.slice(1);
  var unprefixed = obj[name] || obj['moz' + upper] || obj['webkit' + upper] || obj['ms' + upper];
  if (!unprefixed) {
    return null;
  }
  if (typeof unprefixed === 'function') {
    return unprefixed.bind(obj);
  } else {
    return unprefixed;
  }
}

var globalObject;
if (false) {
  /* global global */
  globalObject = global;
} else {
  globalObject = window;
}

if (globalObject) {
  globalObject.__C3_SDK_INSTANCES__ = {
    listeners: new __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set___default.a(),
    addListener: function addListener(listener) {
      this.listeners.add(listener);
    },
    removeListener: function removeListener(listener) {
      this.listeners.delete(listener);
    }
  };
}

function registerInstance(collectionName, instance) {
  if (globalObject) {
    var collection = globalObject.__C3_SDK_INSTANCES__[collectionName];
    if (!collection) {
      globalObject.__C3_SDK_INSTANCES__[collectionName] = [instance];
    } else if (collection.indexOf(instance) === -1) {
      collection.push(instance);
    }
    globalObject.__C3_SDK_INSTANCES__.listeners.forEach(function (listener) {
      listener('added', collectionName, instance);
    });
  }
}

function unregisterInstance(collectionName, instance) {
  if (globalObject) {
    var collection = globalObject.__C3_SDK_INSTANCES__[collectionName];
    var index = collection.indexOf(instance);
    if (index !== -1) {
      collection.splice(index, 1);
    }
    globalObject.__C3_SDK_INSTANCES__.listeners.forEach(function (listener) {
      listener('removed', collectionName, instance);
    });
  }
}

function priv(constructor) {
  var args = [priv];
  var len = arguments.length;
  for (var i = 1; i < len; i += 1) {
    args[i] = arguments[i];
  }
  var instance = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_create___default()(constructor.prototype);
  constructor.apply(instance, args);
  return instance;
}

function assertPriv(name, providedPriv) {
  if (priv !== providedPriv) {
    throw new TypeError(name + ': cannot be used as a constructor');
  }
}

var isFirefox = /firefox/i.test(typeof navigator !== 'undefined' && navigator.userAgent);
var isGoogle = /google inc/i.test(typeof navigator !== 'undefined' && navigator.vendor);
var isChrome = isGoogle && /chrome/i.test(typeof navigator !== 'undefined' && navigator.userAgent);
var browser = isChrome ? 'chrome' : isFirefox ? 'firefox' : 'other';
// Internet Explorer 6-11
var isIE = /* @cc_on!@*/false || !!globalObject.document && !!globalObject.document.documentMode;

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_typeof___default()(obj)) === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp);
}

function notInNode(thing) {
  if (false) {
    throw new TypeError(thing + ' is not available in NodeJS');
  }
}

function maybeConvertStringToNumber(string) {
  if (!isNaN(string)) {
    if (Number(string) % 1 === 0) {
      return parseInt(string);
    }
    return parseFloat(string);
  }
  return string;
}

function getStringByteLength(string) {
  var bytes = string.length;
  for (var i = string.length - 1; i >= 0; i -= 1) {
    var charCode = string.charCodeAt(i);
    if (charCode > 0x7f && charCode <= 0x7ff) {
      bytes += 1;
    } else if (charCode > 0x7ff && charCode <= 0xffff) {
      bytes += 2;
    }if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
      // trailing surrogate
      i -= 1;
    }
  }
  return bytes;
}

/**
 * A read-only version of the built-in Map class.
 *
 * @class ReadOnlyMap
 */
var ReadOnlyMap = function (_Map) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ReadOnlyMap, _Map);

  function ReadOnlyMap() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ReadOnlyMap);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReadOnlyMap.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlyMap)).call(this));

    if (arguments.length) {
      throw new TypeError('ReadOnlyMap does not support constructor arguments');
    }
    return _this;
  }

  /**
   * The number of entries in the map.
   *
   * @member {number} ReadOnlyMap#size
   */

  /**
   * Provides a way to iterate through all the entries in this map. Each entry is represented
   * by an array with two elements, were the first element is the key and the second is the value.
   *
   * @function ReadOnlyMap#entries
   * @returns {Iterator<Array<*>>} - An iterator of all entries in this map.
   */

  /**
   * Provited a way to iterate though all the keys in this map.
   *
   * @function ReadOnlyMap#keys
   * @returns {Iterator<*>} - An iterator of all keys in this map.
   */

  /**
   * Provited a way to iterate though all the values in this map.
   *
   * @function ReadOnlyMap#values
   * @returns {Iterator<*>} - An iterator of all values in this map.
   */

  /**
   * Returns the value for the given key.
   *
   * @function ReadOnlyMap#get
   * @param {*} key - The key of the value to retreive.
   * @returns {*} The value, if it exists, `undefined` otherwise
   */

  /**
   * Returns true if the map has an entry for the given key.
   *
   * @function ReadOnlyMap#has
   * @param {*} key - The key to look for.
   */

  /**
   * Synchronously calls an interator function once for each entry in the map.
   *
   * Errors thrown inside the iterator function will cancel the iteration
   *
   * @function ReadOnlyMap#forEach
   * @param {ReadOnlyMapForEachCallback} func - The iterator function.
   * @param {*} [thisArg] - The value to use as `this` inside the iterator function.
   */

  /**
   * The iterator function passed to {@link ReadOnlyMap#forEach}.
   *
   * @callback ReadOnlyMapForEachCallback
   * @param {*} key - The key of the current entry.
   * @param {*} value - The value of the current entry.
   * @param {ReadOnlyMap} map - The map itself.
   */

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ReadOnlyMap, [{
    key: 'set',
    value: function set() {
      throw new TypeError('Map is read-only');
    }
  }, {
    key: 'delete',
    value: function _delete() {
      throw new TypeError('Map is read-only');
    }
  }, {
    key: 'clear',
    value: function clear() {
      throw new TypeError('Map is read-only');
    }

    /* private */

  }, {
    key: '_set',
    value: function _set(key, value) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlyMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlyMap.prototype), 'set', this).call(this, key, value);
    }
  }, {
    key: '_delete',
    value: function _delete(key) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlyMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlyMap.prototype), 'delete', this).call(this, key);
    }
  }, {
    key: '_clear',
    value: function _clear() {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlyMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlyMap.prototype), 'clear', this).call(this);
    }
  }]);

  return ReadOnlyMap;
}(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default.a);

var ReadOnlySet = function (_Set2) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ReadOnlySet, _Set2);

  function ReadOnlySet() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ReadOnlySet);

    var _this2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReadOnlySet.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlySet)).call(this));

    if (arguments.length) {
      throw new TypeError('ReadOnlySet does not support constructor arguments');
    }
    return _this2;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ReadOnlySet, [{
    key: 'add',
    value: function add() {
      throw new TypeError('Set is read-only');
    }
  }, {
    key: 'delete',
    value: function _delete() {
      throw new TypeError('Set is read-only');
    }
  }, {
    key: 'clear',
    value: function clear() {
      throw new TypeError('Set is read-only');
    }
  }, {
    key: '_add',
    value: function _add(value) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlySet.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlySet.prototype), 'add', this).call(this, value);
    }
  }, {
    key: '_delete',
    value: function _delete(value) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlySet.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlySet.prototype), 'delete', this).call(this, value);
    }
  }, {
    key: '_clear',
    value: function _clear() {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(ReadOnlySet.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReadOnlySet.prototype), 'clear', this).call(this);
    }
  }]);

  return ReadOnlySet;
}(__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_set___default.a);

function createTimedBuffer(time, callback) {
  var args = [];
  var timeout = 0;
  return function (arg) {
    args.push(arg);
    if (!timeout) {
      timeout = setTimeout(onTimeout, time);
    }
    function onTimeout() {
      timeout = 0;
      try {
        callback(args);
      } catch (error) {
        console.error('error in timed buffer callback: ' + error);
      }
      args = [];
    }
  };
}

function errorForwarder(handler, location) {
  return function (error) {
    if (!location) {
      handler(error);
    } else {
      var newError = new Error('Error in ' + location + ': ' + error.message);
      newError.reason = error;
      handler(newError);
    }
  };
}

/**
 * Types that can be serialized as JSON.
 *
 * This is identical to the parameters that can be passed to the built-in `JSON.stringify`.
 * Circular references are not allowed, and `toJSON` methods will be used.
 *
 * @typedef JsonTypes {string|number|boolean|null|Array<JsonTypes>|Object<JsonTypes>}
 */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(67)
  , defined = __webpack_require__(34);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(27);
module.exports = __webpack_require__(11) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(117)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(77)
  , enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f
  , has = __webpack_require__(19)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
var global        = __webpack_require__(5)
  , hide          = __webpack_require__(16)
  , Iterators     = __webpack_require__(24)
  , TO_STRING_TAG = __webpack_require__(4)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(79);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(94);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(87);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(14)
  , dPs         = __webpack_require__(95)
  , enumBugKeys = __webpack_require__(48)
  , IE_PROTO    = __webpack_require__(52)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(60)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(83).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(54)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_create__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_common_argCheck__ = __webpack_require__(12);
















var DEFAULT_LISTENER_LIMIT = 10;
function LEAK_MESSAGE(limit) {
  return 'Listener leak: added more than ' + limit + ' listeners for a single event.  This limit can be changed' + ' by setting the LISTENER_LIMIT property on the emitter object.';
}

/**
 * @mixin EventEmitter
 */
var emitterPrototype = function () {
  var Base = EmitterMixin(null);
  var emitter = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_create___default()(null);
  __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(Base.prototype).forEach(function (name) {
    if (name !== 'constructor') {
      emitter[name] = Base.prototype[name];
    }
  });
  return emitter;
}();

function EmitterMixin() {
  var superclass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  if (arguments.length === 0) {
    return __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign___default()(this, emitterPrototype);
  }

  return function (_superclass) {
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(_class, _superclass);

    function _class() {
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, _class);

      return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_class.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(_class)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(_class, [{
      key: '_listeners',
      value: function _listeners() {
        if (!this.__listeners) {
          this.__listeners = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default.a();
        }
        return this.__listeners;
      }
      /**
       * Adds a new listener for an event. All listeners will be called in the order in
       * which they were added. Adding an already added listener is not an error and will
       * result in the listener being called multiple times.
       *
       * @function EventEmitter#on
       * @param {eventType} eventType - The event to listen for.
       * @param {Function} listener - A function that will be called whenever the event is emitted.
       * @returns {EventEmitter} Itself, to allow chained calls.
       */

    }, {
      key: 'on',
      value: function on(eventType, listener) {
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].count('EventEmitter.on', 2, arguments.length);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].string('EventEmitter.on', 'eventType', eventType);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].func('EventEmitter.on', 'listener', listener);
        var listeners = this._listeners().get(eventType);

        var deprecationMessage = this.constructor._deprecatedEvents && this.constructor._deprecatedEvents[eventType];
        if (deprecationMessage) {
          __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].warning('deprecated', deprecationMessage('on'));
        }

        if (!listeners) {
          listeners = [];
          this._listeners().set(eventType, listeners);
        }
        var element = {
          remaining: -1,
          func: listener
        };
        if (listeners.iterating) {
          if (!listeners.pending) {
            listeners.pending = [];
          }
          listeners.pending.push(element);
        } else {
          listeners.push(element);
        }
        var limit = this.LISTENER_LIMIT;
        limit = typeof limit === 'number' ? limit : DEFAULT_LISTENER_LIMIT;
        if (listeners.length > limit) {
          __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].warning('emitter', LEAK_MESSAGE(limit), this);
        }
        return this;
      }

      /**
       * Works like {@link EventEmitter#on on}, but the listener is at most called once, and then removed.
       * If no callback is passed, a promise will be returned instead.
       *
       * @function EventEmitter#once
       * @param {eventType} eventType - The event to listen for.
       * @param {Function} [listener=null] - A function that will be called whenever the event is emitted.
       * @returns {EventEmitter|Promise} Itself, or a promise if no callback was passed.
       */

    }, {
      key: 'once',
      value: function once(eventType, listener) {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].count('EventEmitter.once', 1, arguments.length);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].string('EventEmitter.once', 'eventType', eventType);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].optFunc('EventEmitter.once', 'listener', listener);

        var deprecationMessage = this.constructor._deprecatedEvents && this.constructor._deprecatedEvents[eventType];
        if (deprecationMessage) {
          __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].warning('deprecated', deprecationMessage('once'));
        }

        if (listener) {
          var newListeners = (this._listeners().get(eventType) || []).concat({
            remaining: 1,
            func: listener
          });
          this._listeners().set(eventType, newListeners);
          var listenerCount = this._listeners().get(eventType).length;
          var limit = this.LISTENER_LIMIT;
          limit = typeof limit === 'number' ? limit : DEFAULT_LISTENER_LIMIT;
          if (listenerCount > limit) {
            __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].warning('emitter', LEAK_MESSAGE(limit), this);
          }
          return this;
        } else {
          return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
            var newListeners = (_this2._listeners().get(eventType) || []).concat({
              remaining: 1,
              func: resolve
            });
            _this2._listeners().set(eventType, newListeners);
          });
        }
      }

      /**
       * Removes a listener associated with an event. At most one listener is removed, if the
       * same listener has been added multiple times, only the first listener is removed.
       *
       * @function EventEmitter#off
       * @param {eventType} eventType - The event type from which to remove the listener(s).
       * @param {Function} [listener] - The listener that should be removed. If omitted,
       * all listeners for the event type are removed.
       * @returns {EventEmitter} Itself, to allow chained calls.
       */

    }, {
      key: 'off',
      value: function off(eventType, listener) {
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].count('EventEmitter.off', 1, arguments.length);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].string('EventEmitter.off', 'eventType', eventType);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].func('EventEmitter.off', 'listener', listener);

        var deprecationMessage = this.constructor._deprecatedEvents && this.constructor._deprecatedEvents[eventType];
        if (deprecationMessage) {
          __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].warning('deprecated', deprecationMessage('off'));
        }

        var listeners;
        var i;
        listeners = this._listeners().get(eventType);
        if (listeners) {
          for (i = 0; i < listeners.length; i += 1) {
            if (listeners[i].func === listener) {
              if (listeners.iterating) {
                if (listeners[i].remaining === 0) {
                  continue;
                }
                listeners[i].remaining = 0;
              } else {
                listeners.splice(i, 1);
              }
              return this;
            }
          }
        }
        return this;
      }
    }, {
      key: '_clearListeners',
      value: function _clearListeners(eventType) {
        if (eventType) {
          this._listeners().delete(eventType);
        } else {
          this._listeners().clear();
        }
      }

      /**
       * @function EventEmitter#_getListeners
       * @private
       * @param {eventType} eventType - The event type to fetch the listeners for.
       * @returns {EventEmitter} All listeners for the given event type.
       */

    }, {
      key: '_getListeners',
      value: function _getListeners(eventType) {
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].count('EventEmitter.listeners', 1, arguments.length);
        __WEBPACK_IMPORTED_MODULE_12_common_argCheck__["a" /* default */].string('EventEmitter.listeners', 'eventType', eventType);
        return (this._listeners().get(eventType) || []).filter(function (obj) {
          return obj.remaining;
        }).map(function (obj) {
          return obj.func;
        });
      }

      // eventType, args...

    }, {
      key: '_emit',
      value: function _emit(arg) {
        var eventType = arg.eventType || arg;
        var defaultHandler = arg.defaultHandler;
        var listeners = this._listeners().get(eventType);
        if (!listeners && !defaultHandler) {
          return;
        }

        var args = [];
        var i;
        for (i = 1; i < arguments.length; i += 1) {
          args[i - 1] = arguments[i];
        }

        if (!listeners) {
          defaultHandler.apply(this, args);
          return;
        }
        var called = false;

        listeners.iterating = true;
        for (i = 0; i < listeners.length; i += 1) {
          var listener = listeners[i];
          if (listener.remaining !== 0) {
            if (listener.remaining > 0) {
              listener.remaining -= 1;
            }
            try {
              listener.func.apply(this, args);
              called = true;
            } catch (error) {
              __WEBPACK_IMPORTED_MODULE_11_common_log__["default"].error('emitter', 'Error in event listener, ' + error + ' ' + (error.stack ? error.stack + '\n' : ''));
            }
          }
        }
        listeners.iterating = false;

        for (i = listeners.length - 1; i >= 0; i -= 1) {
          if (listeners[i].remaining === 0) {
            listeners.splice(i, 1);
          }
        }

        if (listeners.pending) {
          listeners.push.apply(listeners, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(listeners.pending));
          delete listeners.pending;
        }

        if (!called && defaultHandler) {
          defaultHandler.apply(this, args);
        }
      }
    }]);

    return _class;
  }(superclass);
}

/* harmony default export */ __webpack_exports__["a"] = (EmitterMixin);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(154);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(151);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(18)
  , call        = __webpack_require__(73)
  , isArrayIter = __webpack_require__(71)
  , anObject    = __webpack_require__(14)
  , toLength    = __webpack_require__(36)
  , getIterFn   = __webpack_require__(65)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(21);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(41)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(78)
  , hide           = __webpack_require__(16)
  , has            = __webpack_require__(19)
  , Iterators      = __webpack_require__(24)
  , $iterCreate    = __webpack_require__(114)
  , setToStringTag = __webpack_require__(28)
  , getPrototypeOf = __webpack_require__(76)
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(37)('meta')
  , isObject = __webpack_require__(17)
  , has      = __webpack_require__(19)
  , setDesc  = __webpack_require__(8).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(21)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(43)
  , createDesc     = __webpack_require__(27)
  , toIObject      = __webpack_require__(15)
  , toPrimitive    = __webpack_require__(55)
  , has            = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(70)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(53)('keys')
  , uid    = __webpack_require__(37);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(5)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(41)
  , wksExt         = __webpack_require__(57)
  , defineProperty = __webpack_require__(8).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(44)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(24);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebRtcPlugin", function() { return isWebRtcPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStream", function() { return MediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContext", function() { return AudioContext; });
/* harmony export (immutable) */ __webpack_exports__["isMediaStream"] = isMediaStream;
/* harmony export (immutable) */ __webpack_exports__["webRtcReady"] = webRtcReady;
/* harmony export (immutable) */ __webpack_exports__["addPeerConnectionStream"] = addPeerConnectionStream;
/* harmony export (immutable) */ __webpack_exports__["removePeerConnectionStream"] = removePeerConnectionStream;
/* harmony export (immutable) */ __webpack_exports__["BinaryTree"] = BinaryTree;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioContextUtil", function() { return audioContextUtil; });
/* harmony export (immutable) */ __webpack_exports__["getMediaStreamId"] = getMediaStreamId;
/* harmony export (immutable) */ __webpack_exports__["streamDiff"] = streamDiff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "AdapterJS", function() { return __WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_utils__ = __webpack_require__(13);













/**
 * @typedef {'signaling'|'connecting'|'connected'|'reconnecting'|'closed'} PeerConnectionState
 *
 * A string representing the connection state of a peer connection.
 *
 * - `'signaling'` - The connection is in the signaling state, e.i. waiting for offer or answer.
 * - `'connecting'` - The signaling has been completed and the connection is being set up.
 * - `'connected'` - Connected to the peer.
 * - `'reconnecting'` - The connection has been temporarily lost but might recover.
 * - `'closed'` - The container of the connection has been closed, i.e. the conference, call, etc.
 */

var isWebRtcPlugin = window.webrtcDetectedType === 'plugin';

var MediaStream = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_common_utils__["noVendor"])(window, 'MediaStream');
var AudioContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_common_utils__["noVendor"])(window, 'AudioContext');

function isMediaStream(stream) {
  if (!stream) {
    return false;
  }
  if (MediaStream) {
    return stream instanceof MediaStream;
  } else {
    return stream.id && stream.addTrack && stream.getTracks;
  }
}

/**
 * A function that returns a promise that is resolved once WebRTC is ready to be used on the page.
 * The promise is always resolved to the first argument passed to the function, so it can
 * be transparently added to a promise `.then()` chain.
 *
 * It is only necessary to wait when using a browser plugin to enable WebRTC,
 * but it is good practice to call this function and make sure the promise is
 * resolved before doing anything WebRTC related, including creating media sources.
 *
 * @example
 * login()
 *   .then(cct.webRtcReady)
 *   .then(setupCall)
 *
 * @function cct.webRtcReady
 * @param {*} [ret] - The value that should be returned.
 * @returns {Promise} A promise that is resolved to the value of the
 *     ret argument once WebRTC is ready.
 */
function webRtcReady(ret) {
  return new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (resolve) {
    if (__WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs___default.a) {
      __WEBPACK_IMPORTED_MODULE_5_exports_loader_AdapterJS_adapterjs___default.a.webRTCReady(function () {
        resolve(ret);
      });
    } else {
      resolve(ret);
    }
  });
}

function addPeerConnectionStream(peerConnection, stream) {
  if (__WEBPACK_IMPORTED_MODULE_7_common_utils__["isFirefox"]) {
    var removeSet = peerConnection._streamsPendingRemoval;
    if (removeSet && removeSet.has(stream)) {
      removeSet.delete(stream);
    }
  }
  peerConnection.addStream(stream);
}

var ALLOWED_REMOVE_STATES = ['stable', 'closed'];

function waitForStableState(peerConnection, callback) {
  function onState() {
    var state = peerConnection.signalingState;
    if (ALLOWED_REMOVE_STATES.indexOf(state) !== -1) {
      peerConnection.removeEventListener('signalingstate', onState);
      callback();
    }
  }
  peerConnection.addEventListener('signalingstate', onState);
}

function removeAllTracks(peerConnection, tracks) {
  tracks.forEach(function (track) {
    var sender = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_common_utils__["find"])(peerConnection.getSenders(), function (sender) {
      return sender.track === track;
    });
    if (sender) {
      peerConnection.removeTrack(sender);
    } else {
      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].debug('webrtc-utils', 'Failed to remove track \'' + track + '\' form peer connection, no sender found.');
    }
  });
}

function removePeerConnectionStream(peerConnection, stream) {
  var state = peerConnection.signalingState;
  if (__WEBPACK_IMPORTED_MODULE_7_common_utils__["isFirefox"] && ALLOWED_REMOVE_STATES.indexOf(state) === -1) {
    __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].info('webrtc-utils', "delaying removeTrack since we're not in a stable state");
    var removeSet = peerConnection._streamsPendingRemoval;
    if (!removeSet) {
      removeSet = new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default.a();
      peerConnection._streamsPendingRemoval = removeSet;
      waitForStableState(peerConnection, function () {
        var removeSet = peerConnection._streamsPendingRemoval;
        __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].info('webrtc-utils', 'stable state reached, removing streams: ' + removeSet);
        removeSet.forEach(function (stream) {
          return removePeerConnectionStream(peerConnection, stream);
        });
      });
    }
    removeSet.add(stream);
    return;
  }
  if (peerConnection.removeStream) {
    try {
      peerConnection.removeStream(stream);
    } catch (error) {
      if (error.name === 'NotSupportedError') {
        // Workaround for FireFox
        removeAllTracks(peerConnection, stream.getTracks());
      } else {
        throw error;
      }
    }
  } else {
    removeAllTracks(peerConnection, stream.getTracks());
  }
}

function BinaryTree(nodes) {
  this.nodes = nodes || [];
}

BinaryTree.prototype = {
  constructor: BinaryTree,
  tag: 'binary-tree',
  toString: function toString() {
    return 'binaryTree{nodes=' + this.nodes + '}';
  },

  root: function root() {
    return this.nodes[0];
  },
  parent: function parent(child) {
    var childIndex = this.nodes.indexOf(child);
    var parentIndex = Math.floor((childIndex - 1) / 2);
    return this.nodes[parentIndex];
  },
  left: function left(parent) {
    var parentIndex = this.nodes.indexOf(parent);
    var childIndex = 2 * parentIndex + 1;
    return this.nodes[childIndex];
  },
  right: function right(parent) {
    var parentIndex = this.nodes.indexOf(parent);
    var childIndex = 2 * parentIndex + 2;
    return this.nodes[childIndex];
  }
};

AudioContextUtil.MAX_REFERENCES = 32;

function AudioContextUtil() {
  this._references = 0;
  this._context = null;
}

AudioContextUtil.prototype = {
  constructor: AudioContextUtil,
  tag: 'audio-context-util',
  toString: function toString() {
    return 'audio-context-util{references=' + this._references + ', context=' + this._context + '}';
  },
  get: function get() {
    this._references += 1;
    if (this._references > AudioContextUtil.MAX_REFERENCES) {
      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].warning(this.tag, 'Too many audioContext references, possible leak.');
    }
    if (!this._context) {
      this._context = new AudioContext();
    }
    return this._context;
  },
  release: function release() {
    if (this._references === 0) {
      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].error(this.tag, 'audioContext was dereferenced too many times.');
      return;
    } else if (this._references === 1) {
      this._context.close();
      this._context = null;
    }
    this._references -= 1;
  }
};

var audioContextUtil = new AudioContextUtil();

function getMediaStreamId(stream) {
  if (stream._blobId && stream._blobId.indexOf('MediaStream_') === 0) {
    // Only present in Cordova MediaStreams
    // MediaStreams in Cordova have a weird id where the first half is the same for
    // remote streams, while the second half is unique.
    // An example ID is '0E6CFB41-27A7-4028-9E06-02206E3C5118-6A849356-4C8F-4D93-A438-8329888D0E03'
    // Where '0E6CFB41-27A7-4028-9E06-02206E3C5118' is the bit we want to use
    // We've seen other formats as well though, like base64-uuid, as opposed to the above uuid-uuid
    // To protect agains changes to the Cordova plugin we handle a few different cases below
    var fullId = stream.id;
    var split = fullId.split('-');
    if (split.length === 2) {
      return split[0];
    } else if (split.length === 6) {
      return split[0];
    } else if (split.length === 10) {
      return split.slice(0, 5).join('-');
    } else {
      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].warning('media-stream–id', 'unexpected cordova media stream id: ' + stream.id);
      return stream.id;
    }
  } else {
    return stream.id;
  }
}

function collectStreams(streams, stream) {
  var id = getMediaStreamId(stream);
  streams[id] = stream;
  return streams;
}

function streamDiff(streams1, streams2) {
  var streamMap1 = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(streams1)).reduce(collectStreams, {});
  var streamMap2 = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(streams2)).reduce(collectStreams, {});
  var streamIds1 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(streamMap1);
  var streamIds2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(streamMap2);

  var _diff = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_common_utils__["diff"])(streamIds1, streamIds2),
      _diff2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_diff, 2),
      addedIds = _diff2[0],
      removedIds = _diff2[1];

  var addedStreams = addedIds.map(function (id) {
    return streamMap2[id];
  });
  var removedStreams = removedIds.map(function (id) {
    return streamMap1[id];
  });
  return [addedStreams, removedStreams];
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(93);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(60)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(24)
  , ITERATOR   = __webpack_require__(4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(14);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(77)
  , hiddenKeys = __webpack_require__(48).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(19)
  , toObject    = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(52)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(19)
  , toIObject    = __webpack_require__(15)
  , arrayIndexOf = __webpack_require__(108)(false)
  , IE_PROTO     = __webpack_require__(52)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(8).f
  , create      = __webpack_require__(35)
  , redefineAll = __webpack_require__(61)
  , ctx         = __webpack_require__(18)
  , anInstance  = __webpack_require__(59)
  , defined     = __webpack_require__(34)
  , forOf       = __webpack_require__(40)
  , $iterDefine = __webpack_require__(49)
  , step        = __webpack_require__(74)
  , setSpecies  = __webpack_require__(85)
  , DESCRIPTORS = __webpack_require__(11)
  , fastKey     = __webpack_require__(50).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(44)
  , from    = __webpack_require__(107);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(5)
  , $export        = __webpack_require__(6)
  , meta           = __webpack_require__(50)
  , fails          = __webpack_require__(21)
  , hide           = __webpack_require__(16)
  , redefineAll    = __webpack_require__(61)
  , forOf          = __webpack_require__(40)
  , anInstance     = __webpack_require__(59)
  , isObject       = __webpack_require__(17)
  , setToStringTag = __webpack_require__(28)
  , dP             = __webpack_require__(8).f
  , each           = __webpack_require__(109)(0)
  , DESCRIPTORS    = __webpack_require__(11);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(5)
  , core        = __webpack_require__(0)
  , dP          = __webpack_require__(8)
  , DESCRIPTORS = __webpack_require__(11)
  , SPECIES     = __webpack_require__(4)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OutputMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_argCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_common_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_media_mediaNodeInput__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_media_mediaNodeOutput__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_media_common__ = __webpack_require__(92);

















var TAG = 'media-node';

/**
 * @typedef {MediaNodeOutput|Object} MediaNodeConnectSource
 *
 * A set of types that a can connect to {@link MediaNode}s or {@link MediaNodeInput}s.
 *
 * The types are the same as the ones that can be passed to {@link MediaNodeOutput#resolve}.
 */

/**
 * @typedef {MediaNodeInput|external:HTMLMediaElement|Object} MediaNodeConnectTarget
 *
 * A set of types that a {@link MediaNode} or {@link MediaNodeOutput} can be connected to.
 *
 * The types are the same as the ones that can be passed to {@link MediaNodeInput#resolve},
 * with the addition of {@link external:HTMLMediaElement}.
 *
 * If an HTML element is passed when connecting, an {@link HtmlSink} will be created and used
 * as the target. When disconnecting, all targets that are {@link HtmlSink}s which are rendering
 * to the given HTML element will be disconnected. This way the same HTML element can be passed
 * to connect and disconnect without any hassle.
 */

/**
 * A base class that all pure media nodes inherit from.
 *
 * Classes inheriting from {@link MediaNode} are plain nodes with input and output ports directly attached.
 *
 * A media node has zero or more input and output ports, which can be connected to other nodes.
 * Media nodes are always connected from one output port to one input port, using the connect
 * method of either the output port or the media node.
 *
 * When using the connect method of a media node, the output port to be used is resolved by
 * recursively looking up the output property of the media node. The same method is used when
 * a media node is used as the target for a connection, but in that case an input port is looked
 * up via the input property.
 *
 * Because the input and output property lookups are recursive, it is easy to create simple container
 * nodes that have a number of internal media nodes, and then expose input and output ports as
 * properties.
 *
 * As an example, we might have `cameraSource` and `blurFilter`, which both inherit from
 * {@link MediaNode}. The source has one output port, while the filter has one input and one ouput.
 * We can connect these two together using `cameraSource.output.connect(blurFilter.input)`. This is
 * a bit verbose, but because the connect method will look up the input and output properties, we
 * can just use `cameraSource.connect(blurFilter)` instead. The connect method is made available
 * to the camera source class using {@link MediaSource.connectMixin}.
 *
 * Let's say we now want to create a `BlurredCameraSource` class, which reuses the nodes from the
 * above example. The ES6 class declaration would be
 * `class BlurredCameraSource extends MediaSource.connectMixin()`. The mixin adds the connect and
 * disconnect methods for convenience. In the constructor, we can now create our camera source and
 * blur filter, connect them together, and simply expose the ouput property of the `blurFilter`
 * using `this.output = blurFilter.output`. Since the output lookup is recursive, we can call the
 * connect method of our `blurredCameraSource` directly, but the output port of the blurFilter will
 * in the end be what is actually connected.
 *
 * @class MediaNode
 */

var MediaNode = function () {
  function MediaNode() {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, MediaNode);

    this[__WEBPACK_IMPORTED_MODULE_12_media_common__["a" /* inputs */]] = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default.a();
    this[__WEBPACK_IMPORTED_MODULE_12_media_common__["b" /* outputs */]] = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default.a();
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(MediaNode, [{
    key: 'toString',
    value: function toString() {
      var name = this.constructor.name;
      var camelName = void 0;
      if (!name) {
        camelName = '_mediaNode';
      } else {
        camelName = name[0].toLowerCase() + name.slice(1);
      }

      return camelName + '{io=' + this[__WEBPACK_IMPORTED_MODULE_12_media_common__["a" /* inputs */]].size + '/' + this[__WEBPACK_IMPORTED_MODULE_12_media_common__["b" /* outputs */]].size + '}';
    }

    // Public methods

    /**
     * Connect two media nodes or ports together. Both the input and the output will be resolved
     * using the respective resolve methods.
     *
     * Usually adding the {@link MediaNode.connectMixin} to the source class is more convenient and clearer than using
     * these methods.
     *
     * @example <caption>Connecting a DeviceSource to a MuteFilter.</caption>
     * // Passing in MediaNodes
     * MediaNode.connect(deviceSource, muteFilter)
     *
     * // Explicitly passing in inputs and outputs, will result in the same connection as above.
     * MediaNode.connect(deviceSource.output, muteFilter.input)
     *
     * @param  {MediaNodeConnectSource} output - The source ouput or node.
     * @param  {MediaNodeConnectTarget} input - The target input, node, or element.
     */

  }, {
    key: __WEBPACK_IMPORTED_MODULE_12_media_common__["c" /* mediaNodeSpecies */],


    // Private

    get: function get() {
      return true;
    }
  }], [{
    key: 'connect',
    value: function connect(output, input) {
      __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].object(output.constructor.name + '.connect', 'output', output);
      if (!(input instanceof HTMLElement)) {
        __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].object(output.constructor.name + '.connect', 'input', input);
      }
      output = __WEBPACK_IMPORTED_MODULE_11_media_mediaNodeOutput__["a" /* default */].resolve(output);
      output.connect(input);
    }

    /**
     * Disconnect two media nodes or ports. Both the input and the output will be resolved
     * using the respective resolve methods.
     *
     * @param  {MediaNodeConnectSource} output - The source ouput or node.
     * @param  {MediaNodeConnectTarget} input - The target input, node, or element.
     */

  }, {
    key: 'disconnect',
    value: function disconnect(output, input) {
      __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].object(output.constructor.name + '.connect', 'output', output);
      if (!(input instanceof HTMLElement)) {
        __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].optObject(output.constructor.name + '.connect', 'input', input);
      }
      output = __WEBPACK_IMPORTED_MODULE_11_media_mediaNodeOutput__["a" /* default */].resolve(output);
      output.disconnect(input);
    }

    /**
     * A mixin that adds the connect and disconnect methods from {@link MediaNode} as member methods.
     *
     * @mixin ConnectMixin
     */

    /**
     * Connect the node to a target. Each output can be connected to multiple targets.
     *
     * @function ConnectMixin#connect
     * @param  {MediaNodeConnectTarget} input - The target input, node, or element.
     */

    /**
     * Disconnect the node from a target.
     *
     * If no target is specified, all targets will be disconnected.
     *
     * @function ConnectMixin#disconnect
     * @param {MediaNodeConnectTarget} [target] - The target to disconnect from.
     */

    /**
     * A mixin that adds the connect and disconnect methods to a class.
     *
     * @example <caption>Usage with ES6 classes.</caption>
     * // Without superclass
     * class MyClass extends MediaNode.connectMixin() {
     * }
     *
     * // With a superclass
     * class MyClass extends MediaNode.connectMixin(MySuperClass) {
     * }
     *
     * @param {class} [superclass] - The superclass to extend, if no class is given a class with only the
     *   mixin applied is returned.
     * @returns {class} A new class extended with the connect and disconnect methods.
     */

  }, {
    key: 'connectMixin',
    value: function connectMixin() {
      var superclass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      return function (_superclass) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(ConnectableNode, _superclass);

        function ConnectableNode() {
          __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, ConnectableNode);

          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConnectableNode.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ConnectableNode)).apply(this, arguments));
        }

        __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(ConnectableNode, [{
          key: 'connect',
          value: function connect(target) {
            MediaNode.connect(this, target);
          }
        }, {
          key: 'disconnect',
          value: function disconnect(target) {
            MediaNode.disconnect(this, target);
          }
        }]);

        return ConnectableNode;
      }(superclass);
    }
  }]);

  return MediaNode;
}();

/**
 * A base class for input and output maps.
 *
 * @class PortMap
 * @abstract
 * @extends ReadOnlyMap
 */


/* harmony default export */ __webpack_exports__["a"] = (MediaNode);

var PortMap = function (_ReadOnlyMap) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PortMap, _ReadOnlyMap);

  function PortMap(_ref) {
    var parent = _ref.parent,
        portConstructor = _ref.portConstructor,
        onStream = _ref.onStream,
        onCreate = _ref.onCreate,
        onDetach = _ref.onDetach;

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, PortMap);

    var _this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PortMap.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap)).call(this));

    __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].object(_this2.constructor.name + ' constructor', 'parent', parent);
    __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].func(_this2.constructor.name + ' constructor', 'portConstructor', portConstructor);
    _this2._parent = parent;
    _this2._portConstructor = portConstructor;
    _this2._onStream = onStream;
    _this2._onCreate = onCreate;
    _this2._onDetach = onDetach;
    return _this2;
  }

  /**
   * Gets the input for the given key. If the input doesn't exist, it is created.
   *
   * @param {string} key - The name of the port.
   * @returns {MediaNodeInput|MediaNodeOutput} An existing or newly created port.
   */


  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(PortMap, [{
    key: 'get',
    value: function get(key) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].string(this.constructor.name + '.get', 'key', key);
      var port = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default()(PortMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap.prototype), 'get', this).call(this, key);
      if (!port) {
        try {
          var options = {
            name: key,
            parent: this._parent
          };
          if (this._onStream) {
            options.onStream = function (stream, oldStream) {
              return _this3._onStream(key, stream, oldStream);
            };
          }
          port = new this._portConstructor(options);
        } catch (constructorError) {
          var error = new Error('Error thrown in ' + this._portConstructor.name + ' constructor, ' + constructorError);
          error.reason = constructorError;
          throw error;
        }
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default()(PortMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap.prototype), '_set', this).call(this, key, port);
        if (this._onCreate) {
          try {
            this._onCreate(port);
          } catch (error) {
            __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].error(TAG, 'Error thrown in ' + this.constructor.name + '.onCreate: ' + error);
          }
        }
      }
      return port;
    }

    /**
     * Removes and detaches the input or output with the given name.
     *
     * @param {string} key - The name of the port.
     * @returns {boolean} True if the was a port to delete.
     */

  }, {
    key: 'delete',
    value: function _delete(key) {
      __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].string(this.constructor.name + '.delete', 'key', key);
      var port = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default()(PortMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap.prototype), 'get', this).call(this, key);
      if (port) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default()(PortMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap.prototype), '_delete', this).call(this, key);
        port.detach();
        if (this._onDetach) {
          try {
            this._onDetach(port);
          } catch (error) {
            __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].error(TAG, 'Error thrown in ' + this.constructor.name + '.onDetach: ' + error);
          }
        }
        return true;
      }
      return false;
    }

    /**
     * Removes and detaches all the ports in the map.
     */

  }, {
    key: 'clear',
    value: function clear() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_get___default()(PortMap.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PortMap.prototype), 'forEach', this).call(this, function (_, key) {
        _this4.delete(key);
      });
    }
  }]);

  return PortMap;
}(__WEBPACK_IMPORTED_MODULE_9_common_utils__["ReadOnlyMap"]);

/**
 * A callback that is called when the stream of any of the inputs is updated.
 *
 * @callback InputMap~OnStreamCallback
 * @param {string} key - The key for the input port of the updated stream.
 * @param {?MediaStream} stream - The new media stream.
 * @param {?MediaStream} oldStream - The old media stream.
 */

/**
 * A callback for when a new input is created.
 *
 * @callback InputMap~OnCreateCallback
 * @param {MediaNodeInput} input - The input that was created.
 */

/**
 * A callback for when an input is detached.
 *
 * @callback InputMap~OnDetachCallback
 * @param {MediaNodeInput} input - The input that was detached.
 */

/**
 * A map of inputs for a media node. This allows for a node to have multiple named inputs.
 *
 * @class InputMap
 * @extends PortMap
 * @param {Object} options - Options object.
 * @param {MediaNode} options.parent - The parent media node.
 * @param {class} [options.inputConstructor=MediaNodeInput] - The constructor of the inputs in this map.
 *   Must be `MediaNodeInput`, or a subclass.
 * @param {InputMap~OnStreamCallback} onStream - Callback for when any of the inputs streams are updated.
 * @param {InputMap~OnCreateCallback} onCreate - Callback for when a new port is created.
 * @param {InputMap~OnDetachCallback} onDetach - Callback for when a new port is detached and removed.
 */


var InputMap = function (_PortMap) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(InputMap, _PortMap);

  function InputMap(_ref2) {
    var _ref2$inputConstructo = _ref2.inputConstructor,
        inputConstructor = _ref2$inputConstructo === undefined ? __WEBPACK_IMPORTED_MODULE_10_media_mediaNodeInput__["a" /* default */] : _ref2$inputConstructo,
        parent = _ref2.parent,
        onStream = _ref2.onStream,
        onCreate = _ref2.onCreate,
        onDetach = _ref2.onDetach;

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, InputMap);

    __WEBPACK_IMPORTED_MODULE_8_common_argCheck__["a" /* default */].optFunc('InputMap constructor', 'onStream', onStream);
    if (!onStream) {
      onStream = function onStream() {
        return parent.onStream.apply(parent, arguments);
      };
    }
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InputMap.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(InputMap)).call(this, { portConstructor: inputConstructor, parent: parent, onStream: onStream, onCreate: onCreate, onDetach: onDetach }));
  }

  return InputMap;
}(PortMap);

/**
 * A callback for when a new output is created.
 *
 * @callback OutputMap~OnCreateCallback
 * @param {MediaNodeInput} output - The output that was created.
 */

/**
 * A callback for when an output is detached.
 *
 * @callback OutputMap~OnDetachCallback
 * @param {MediaNodeInput} output - The output that was detached.
 */

/**
 * A map of ouputs for a media node. This allows for a node to have multiple named ouputs.
 *
 * @class OutputMap
 * @extends PortMap
 * @param {Object} options - Options object.
 * @param {MediaNode} options.parent - The parent media node.
 * @param {class} [options.outputConstructor=MediaNodeOutput] - The constructor of the outputs in this map.
 *   Must be `MediaNodeOutput`, or a subclass.
 * @param {OutputMap~OnCreateCallback} onCreate - Callback for when a new port is created.
 * @param {OutputMap~OnDetachCallback} onDetach - Callback for when a new port is detached and removed.
 */
var OutputMap = function (_PortMap2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(OutputMap, _PortMap2);

  function OutputMap(_ref3) {
    var _ref3$outputConstruct = _ref3.outputConstructor,
        outputConstructor = _ref3$outputConstruct === undefined ? __WEBPACK_IMPORTED_MODULE_11_media_mediaNodeOutput__["a" /* default */] : _ref3$outputConstruct,
        parent = _ref3.parent,
        onCreate = _ref3.onCreate,
        onDetach = _ref3.onDetach;

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, OutputMap);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OutputMap.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(OutputMap)).call(this, { portConstructor: outputConstructor, parent: parent, onCreate: onCreate, onDetach: onDetach }));
  }

  return OutputMap;
}(PortMap);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(79);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(18)
  , invoke             = __webpack_require__(137)
  , html               = __webpack_require__(83)
  , cel                = __webpack_require__(60)
  , global             = __webpack_require__(5)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(30)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15)
  , gOPN      = __webpack_require__(75).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mediaNodeSpecies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return outputs; });
/* harmony export (immutable) */ __webpack_exports__["d"] = isMediaNode;
/* harmony export (immutable) */ __webpack_exports__["e"] = doesntSupportPlugin;
/* unused harmony export OverconstrainedError */
/* harmony export (immutable) */ __webpack_exports__["f"] = getUserMedia;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_queue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_errors__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_webrtc_utils__ = __webpack_require__(66);













var mediaNodeSpecies = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('media-node');
var inputs = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('inputs');
var outputs = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('outputs');

/**
 * Checks whether a given object is a media node.
 *
 * @param {Object} obj - An object to test.
 * @returns {boolean} True if the object is a media node, false otherwise.
 */
function isMediaNode(obj) {
  return !!(obj && obj[mediaNodeSpecies]);
}

function doesntSupportPlugin(instance) {
  if (__WEBPACK_IMPORTED_MODULE_8_webrtc_utils__["isWebRtcPlugin"]) {
    throw new Error(instance.constructor.name + ' is not supported when using a WebRTC plugin');
  }
}

/**
 * The constraints of the performed action could not be satisfied, e.g. the requested
 * video frame rate could not be delivered.
 *
 * @class OverconstrainedError
 * @extends CctError
 */
var OverconstrainedError = function (_CctError) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(OverconstrainedError, _CctError);

  function OverconstrainedError() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, OverconstrainedError);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OverconstrainedError.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(OverconstrainedError)).apply(this, arguments));
  }

  return OverconstrainedError;
}(__WEBPACK_IMPORTED_MODULE_7_common_errors__["a" /* default */]);
OverconstrainedError.errorName = 'OverconstrainedError';

var gumQueue = new __WEBPACK_IMPORTED_MODULE_6_common_queue__["a" /* default */]();

// Browsers are inconsistent in what errors are thrown when mic/camera access is denied.
// PermissionDeniedError is thrown by Chrome and the plugin
// SecurityError is from Firefox 48
// NotAllowedError is from Firefox 50 Developer edition and onward
var NOT_ALLOWED_ERRORS = ['SecurityError', 'NotAllowedError', 'PermissionDeniedError', 'PermissionDismissedError'];
var NOT_FOUND_ERRORS = ['NotFoundError', 'DevicesNotFoundError'];
var OVERCONSTRAINED_ERRORS = ['OverconstrainedError', 'ConstraintNotSatisfiedError'];

function getUserMedia(constraints) {
  if (!navigator.getUserMedia) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(new Error('no getUserMedia found'));
  }

  return gumQueue.push(function () {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      return navigator.getUserMedia(constraints, function (stream) {
        if (stream) {
          resolve(stream);
        } else {
          reject(new __WEBPACK_IMPORTED_MODULE_7_common_errors__["b" /* NotFoundError */]('Received a null media stream'));
        }
      }, function (gumError) {
        var error;
        if (NOT_ALLOWED_ERRORS.indexOf(gumError.name) !== -1) {
          // According to spec, denying the gum request should lead to a NotAllowedError
          error = new __WEBPACK_IMPORTED_MODULE_7_common_errors__["c" /* NotAllowedError */](gumError.message);
        } else if (OVERCONSTRAINED_ERRORS.indexOf(gumError.name) !== -1) {
          // According to spec, constraint errors should lead to an OverconstrainedError
          var message = gumError.message;
          if (!message) {
            if (gumError.constraint) {
              message = 'media constraint \'' + gumError.constraint + '\' could not be satisfied';
            } else {
              message = 'media constraints could not be satisfied';
            }
          }
          error = new OverconstrainedError(message);
        } else if (NOT_FOUND_ERRORS.indexOf(gumError.name) !== -1) {
          // According to spec, not found errors should lead to a NotFoundError
          error = new __WEBPACK_IMPORTED_MODULE_7_common_errors__["b" /* NotFoundError */](gumError.message);
        } else {
          error = new __WEBPACK_IMPORTED_MODULE_7_common_errors__["d" /* UnknownError */](gumError.message);
        }
        error.reason = gumError;
        reject(error);
      });
    });
  });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(14)
  , getKeys  = __webpack_require__(25);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(119);
module.exports = __webpack_require__(0).Array.from;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(23);
__webpack_require__(29);
__webpack_require__(126);
__webpack_require__(128);
module.exports = __webpack_require__(0).Set;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
__webpack_require__(42);
__webpack_require__(129);
__webpack_require__(130);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(29);
module.exports = __webpack_require__(57).f('iterator');

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(40);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15)
  , toLength  = __webpack_require__(36)
  , toIndex   = __webpack_require__(118);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(18)
  , IObject  = __webpack_require__(67)
  , toObject = __webpack_require__(26)
  , toLength = __webpack_require__(36)
  , asc      = __webpack_require__(111);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17)
  , isArray  = __webpack_require__(72)
  , SPECIES  = __webpack_require__(4)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(110);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8)
  , createDesc      = __webpack_require__(27);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25)
  , gOPS    = __webpack_require__(68)
  , pIE     = __webpack_require__(43);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(27)
  , setToStringTag = __webpack_require__(28)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(25)
  , toIObject = __webpack_require__(15);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17)
  , anObject = __webpack_require__(14);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(18)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(54)
  , defined   = __webpack_require__(34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(54)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(18)
  , $export        = __webpack_require__(6)
  , toObject       = __webpack_require__(26)
  , call           = __webpack_require__(73)
  , isArrayIter    = __webpack_require__(71)
  , toLength       = __webpack_require__(36)
  , createProperty = __webpack_require__(112)
  , getIterFn      = __webpack_require__(65);

$export($export.S + $export.F * !__webpack_require__(84)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(106)
  , step             = __webpack_require__(74)
  , Iterators        = __webpack_require__(24)
  , toIObject        = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(35)});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(15)
  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

__webpack_require__(46)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(26)
  , $getPrototypeOf = __webpack_require__(76);

__webpack_require__(46)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(116).set});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(80);

// 23.2 Set Objects
module.exports = __webpack_require__(82)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(5)
  , has            = __webpack_require__(19)
  , DESCRIPTORS    = __webpack_require__(11)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(78)
  , META           = __webpack_require__(50).KEY
  , $fails         = __webpack_require__(21)
  , shared         = __webpack_require__(53)
  , setToStringTag = __webpack_require__(28)
  , uid            = __webpack_require__(37)
  , wks            = __webpack_require__(4)
  , wksExt         = __webpack_require__(57)
  , wksDefine      = __webpack_require__(56)
  , keyOf          = __webpack_require__(115)
  , enumKeys       = __webpack_require__(113)
  , isArray        = __webpack_require__(72)
  , anObject       = __webpack_require__(14)
  , toIObject      = __webpack_require__(15)
  , toPrimitive    = __webpack_require__(55)
  , createDesc     = __webpack_require__(27)
  , _create        = __webpack_require__(35)
  , gOPNExt        = __webpack_require__(91)
  , $GOPD          = __webpack_require__(51)
  , $DP            = __webpack_require__(8)
  , $keys          = __webpack_require__(25)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(43).f  = $propertyIsEnumerable;
  __webpack_require__(68).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(41)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(6);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(81)('Set')});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56)('asyncIterator');

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56)('observable');

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_argCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_media_common__ = __webpack_require__(92);










var TAG = 'media-node-input';

/**
 * @callback MediaNodeInput~OnStreamCallback
 * @param {?MediaStream} stream - The current media stream, or null.
 * @param {?MediaStream} oldStream - The previous media stream, or null.
 */

/**
 * A class which represents an input of a {@link MediaNode}. Outputs are connected to
 * inputs in order to forward media streams.
 *
 * This class should only be used within the implementation of {@link MediaNode}s. While it
 * is possible to attach inputs to an existing media node, it should be avoided. Use an additional
 * media node to implement the desired behaviour instead, such as a {@link Passthrough}.
 *
 * @class MediaNodeInput
 * @param {Object} options - Options object.
 * @param {string} options.name - The name of the output, should be 'default' for single inputs.
 * @param {MediaNode} options.parent - The parent media node.
 * @param {MediaNodeInput~OnStreamCallback} options.parent - A callback that will be called whenever
 * the stream of this media node changes.
 */

var MediaNodeInput = function () {
  function MediaNodeInput(_ref) {
    var name = _ref.name,
        parent = _ref.parent,
        onStream = _ref.onStream;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MediaNodeInput);

    __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].string('MediaNodeInput constructor', 'name', name);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_media_common__["d" /* isMediaNode */])(parent)) {
      __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].error('MediaNodeInput constructor', 'parent', 'be a MediaNode');
    }
    __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].func('MediaNodeInput constructor', 'onStream', onStream);
    this._name = name;
    this._parent = parent;
    this._onStream = onStream;
    this._output = null;
    this._stream = null;

    this._parent[__WEBPACK_IMPORTED_MODULE_5_media_common__["a" /* inputs */]].add(this);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MediaNodeInput, [{
    key: 'toString',
    value: function toString() {
      return 'mediaNodeInput{name=' + this.name + ',parent=' + this._parent + '}';
    }

    /**
     * Resolves the input of a target. If the lookup fails, an error will be thrown.
     *
     * Inputs are resolved as follows, starting with a target:
     *   1. If the current target is a {@link MediaNodeInput} instance, stop and return the target.
     *   2. If the target is an object, set the new target to the `input` property of the target, and start over.
     *   3. Throw error.
     *
     * If a circular input object structure is encountered, an error will be thrown.
     *
     * @param {MediaNodeInput|Object} target - The target to resolve the input of.
     * @returns {MediaNodeInput} The resolved input.
     */

  }, {
    key: 'detach',


    /**
     * Detaches the input from it's parent and removes any connection. Use this to clean up inputs
     * in media nodes with dynamic inputs, such as a media mixer. After this method has been called
     * the input can no longer be used.
     *
     * This method is internal and should only be called by the implementation of the parent media node.
     */
    value: function detach() {
      if (this._target) {
        this._target.disconnect(this);
      }
      this._parent[__WEBPACK_IMPORTED_MODULE_5_media_common__["a" /* inputs */]].delete(this);
      this._parent = null;
    }
  }, {
    key: '_disconnect',
    value: function _disconnect(target) {
      if (this.target !== target) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'invalid input disconnect state, expected target ' + target + ' but was ' + this.target);
      }
      this._target = null;
      this._setStream(null);
    }
  }, {
    key: '_setStream',
    value: function _setStream(stream) {
      if (this._stream === stream) {
        return;
      }
      var oldStream = this._stream;
      this._stream = stream;
      try {
        this._onStream(stream, oldStream);
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'Error thrown in onStream: ' + error);
      }
    }
  }, {
    key: 'name',


    /**
     * The name of this input. This is only meaningful for inputs that belong to media nodes with
     * multiple inputs.
     *
     * Any input that belong to one of the base media node implementations, such as {@link MediaSink},
     * will have the name `'default'`.
     *
     * @readonly
     * @member {string} MediaNodeInput#name
     */
    get: function get() {
      return this._name;
    }

    /**
     * The current target of this input.
     *
     * The input will always be set to the {@link MediaNodeOutput} that the input is connected to,
     * and not the media node that the connect might have been called on.
     *
     * @readonly
     * @member {ReadOnlySet<MediaNodeInput>} MediaNodeInput#target
     */

  }, {
    key: 'target',
    get: function get() {
      return this._target;
    }

    /**
     * The inputs's current media stream, or null.
     *
     * @readonly
     * @member {MediaStream} MediaNodeInput#stream
     */

  }, {
    key: 'stream',
    get: function get() {
      return this._stream;
    }
  }], [{
    key: 'resolve',
    value: function resolve(target) {
      var chain = [target];
      for (;;) {
        if (target instanceof MediaNodeInput) {
          return target;
        } else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_common_utils__["isObject"])(target)) {
          throw new TypeError('failed to resolve input of ' + (chain[0] && chain[0].constructor.name) + ', ' + 'input must be a MediaNodeInput or have an input property');
        } else if ('input' in target) {
          try {
            target = target.input;
          } catch (error) {
            throw new TypeError('failed to resolve input of ' + chain[0].constructor.name + ', ' + ('getting input property of ' + target + ' threw error: ' + error.message));
          }
          if (chain.indexOf(target) !== -1) {
            throw new TypeError('failed to resolve input of ' + chain[0].constructor.name + ', ' + 'encountered loop in input property chain');
          }
          chain.push(target);
        } else {
          throw new TypeError('failed to resolve input of ' + chain[0].constructor.name + ', ' + (target.constructor.name + ' does not have an input property'));
        }
      }
    }
  }]);

  return MediaNodeInput;
}();

/* harmony default export */ __webpack_exports__["a"] = (MediaNodeInput);

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(23);
__webpack_require__(29);
__webpack_require__(140);
__webpack_require__(143);
module.exports = __webpack_require__(0).Map;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(23);
__webpack_require__(29);
__webpack_require__(142);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , macrotask = __webpack_require__(90).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(30)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(14)
  , aFunction = __webpack_require__(63)
  , SPECIES   = __webpack_require__(4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(80);

// 23.1 Map Objects
module.exports = __webpack_require__(82)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(26)
  , $keys    = __webpack_require__(25);

__webpack_require__(46)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(41)
  , global             = __webpack_require__(5)
  , ctx                = __webpack_require__(18)
  , classof            = __webpack_require__(44)
  , $export            = __webpack_require__(6)
  , isObject           = __webpack_require__(17)
  , aFunction          = __webpack_require__(63)
  , anInstance         = __webpack_require__(59)
  , forOf              = __webpack_require__(40)
  , speciesConstructor = __webpack_require__(139)
  , task               = __webpack_require__(90).set
  , microtask          = __webpack_require__(138)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(61)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(28)($Promise, PROMISE);
__webpack_require__(85)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(84)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(6);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(81)('Map')});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_media_mediaNode__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_media_mediaNodeOutput__ = __webpack_require__(149);










/**
 * A base class for media nodes with a single output and no input. Typically used to represent nodes
 * that generate streams, or as a base for nodes with multiple inputs.
 *
 * The subclass should call the `setStream` method to update the output stream.
 *
 * @class MediaSource
 * @extends MediaNode
 * @extends ConnectMixin
 */

var MediaSource = function (_MediaNode$connectMix) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MediaSource, _MediaNode$connectMix);

  function MediaSource() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MediaSource);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MediaSource.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MediaSource)).call(this));

    _this._output = new __WEBPACK_IMPORTED_MODULE_6_media_mediaNodeOutput__["a" /* default */]({
      name: 'default',
      parent: _this
    });
    return _this;
  }

  /**
   * The current output stream.
   *
   * @readonly
   * @member {MediaStream} MediaSource#stream
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MediaSource, [{
    key: 'setStream',


    /**
     * Sets the current output stream.
     *
     * This should only be called by the subclass implementation, not from outside the media node.
     *
     * @param {?MediaStream} stream - The new output stream, or null.
     */
    value: function setStream(stream) {
      this._output.setStream(stream);
    }
  }, {
    key: 'stream',
    get: function get() {
      return this._output.stream;
    }

    /**
     * The output.
     *
     * @readonly
     * @member {MediaNodeOutput} MediaSource#output
     */

  }, {
    key: 'output',
    get: function get() {
      return this._output;
    }
  }]);

  return MediaSource;
}(__WEBPACK_IMPORTED_MODULE_5_media_mediaNode__["a" /* default */].connectMixin(__WEBPACK_IMPORTED_MODULE_5_media_mediaNode__["a" /* default */]));

/* harmony default export */ __webpack_exports__["a"] = (MediaSource);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CctError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotAllowedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UnknownError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_create__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_properties__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_argCheck__ = __webpack_require__(12);










/**
 * Base class for all custom errors in the library.
 *
 * The main purpose of this class is to provide a cross-browser way to
 * subclass errors and have proper stack traces.
 *
 * It is safe to subclass this error in a babel environment, as opposed
 * to subclassing the `Error` builtin.
 *
 * The static `errorName` property is used to determine the default name
 * for instances of each subclass. The property is used to avoid problems
 * minification and should be set by all subclasses.
 *
 * @class CctError
 * @extends Error
 *
 * @example
 * class MyError extends CctError {
 *   constructor() {
 *     super('This is my error')
 *   }
 * }
 * MyError.errorName = 'MyError'
 */

// Need to do some trickery here to allow subclassing later on
// http://stackoverflow.com/questions/33870684
function CctError(message) {
  __WEBPACK_IMPORTED_MODULE_6_common_argCheck__["a" /* default */].stringOrEmpty('CctError constructor', 'message', message);
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_properties___default()(this, {
    message: {
      configurable: true,
      enumerable: true,
      value: message
    }
  });
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    var stack = new Error(message).stack;
    // IE11 does not initialize 'Error.stack' until the object is thrown.
    if (!stack) {
      try {
        throw new Error();
      } catch (e) {
        stack = e.stack;
      }
    }
    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: stack
    });
  }
}
CctError.errorName = 'CctError';

CctError.prototype = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_create___default()(Error.prototype, {
  constructor: { value: CctError },

  /**
   * The name of the error. Will always be set to the name of the class
   * unless something else is indicated.
   *
   * @readonly
   * @member {string} CctError#name
   */
  name: {
    get: function get() {
      return this.constructor.errorName;
    }
  },

  /**
   * Error objects are by default JSON serialized as `{"name":<name>,"message":<message>}`
   *
   * @method CctError#toJson
   * @returns {Object} - JSON representation of the error.
   */
  toJSON: {
    value: function value() {
      return {
        name: this.name,
        message: this.message
      };
    }
  },
  toString: {
    value: function value() {
      return this.name + ': ' + this.message;
    }
  }
});

/**
 * The requested action could not be performed because it is not allowed, e.g. the
 * authenticated user doesn't have enough power level, or a user media request was denied.
 *
 * Actions that are not allowed because the user has a guest account result in a
 * {@link GuestAccessError} instead of this.
 *
 * @class NotAllowedError
 * @extends CctError
 */
var NotAllowedError = function (_CctError) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(NotAllowedError, _CctError);

  function NotAllowedError() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, NotAllowedError);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NotAllowedError.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(NotAllowedError)).apply(this, arguments));
  }

  return NotAllowedError;
}(CctError);
NotAllowedError.errorName = 'NotAllowedError';

/**
 * The requested resource could not be found, e.g. when looking up a room by alias
 * or requesting a media source.
 *
 * @class NotFoundError
 * @extends CctError
 */
var NotFoundError = function (_CctError2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(NotFoundError, _CctError2);

  function NotFoundError() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, NotFoundError);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NotFoundError.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(NotFoundError)).apply(this, arguments));
  }

  return NotFoundError;
}(CctError);
NotFoundError.errorName = 'NotFoundError';

/**
 * The cause of the error could not be determined. Seeing this error is in itself an error
 * because the real error reason should always be possible to determine.
 *
 * @class UnknownError
 * @extends CctError
 */
var UnknownError = function (_CctError3) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(UnknownError, _CctError3);

  function UnknownError() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, UnknownError);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UnknownError.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UnknownError)).apply(this, arguments));
  }

  return UnknownError;
}(CctError);
UnknownError.errorName = 'UnknownError';

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_media_mediaSink__ = __webpack_require__(153);













var TAG = 'html-sink';

var replacement = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol___default()('sink-replacement');

/**
 * A media sink that renders to a target HTML media element, either `<audio>` or `<video>`.
 *
 * @class HtmlSink
 * @extends MediaSink
 * @param {Object} [options] - Optional options object.
 * @param {external:HTMLMediaElement} target - The target HTML element.
 */

var HtmlSink = function (_MediaSink) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(HtmlSink, _MediaSink);

  function HtmlSink() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$target = _ref.target,
        target = _ref$target === undefined ? null : _ref$target;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, HtmlSink);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HtmlSink.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(HtmlSink)).call(this));

    var bail = 0;
    while (target && target[replacement] && bail < 5) {
      target = target[replacement];
      bail += 1;
    }
    if (bail >= 5) {
      __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].error(TAG, 'HtmlSink got stuck in element replacement loop');
    }
    _this._target = target;
    _this._refreshSink = _this._refreshSink.bind(_this);
    _this._refreshTick = null;
    return _this;
  }

  /**
   * The target HTML element to render to.
   *
   * This can be updated at any time.
   *
   * @member {external:HTMLMediaElement} HtmlSink#target
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(HtmlSink, [{
    key: '_hasTarget',
    value: function _hasTarget(target) {
      if (this._target === target) {
        return true;
      } else if (this._target === target[replacement]) {
        return true;
      }
      return false;
    }

    // eslint-disable-next-line
    /**
     * @private
     */

  }, {
    key: 'onStream',
    value: function onStream(stream, oldStream) {
      var _this2 = this;

      if (oldStream) {
        if (oldStream.removeEventListener) {
          oldStream.removeEventListener('addtrack', this._refreshSink);
          oldStream.removeEventListener('removetrack', this._refreshSink);
        } else {
          oldStream.detachEvent('addtrack', this._refreshSink);
          oldStream.detachEvent('removetrack', this._refreshSink);
        }
      }
      if (stream) {
        if (stream.addEventListener) {
          stream.addEventListener('addtrack', this._refreshSink);
          stream.addEventListener('removetrack', this._refreshSink);
        } else {
          stream.attachEvent('addtrack', this._refreshSink);
          stream.attachEvent('removetrack', this._refreshSink);
        }
      }
      if (!this._refreshTick) {
        this._refreshTick = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject().catch(function () {
          _this2._refreshTick = null;
          if (_this2.stream !== oldStream) {
            _this2._refreshSink();
          }
        });
      }
    }
  }, {
    key: '_cleanup',
    value: function _cleanup() {
      if (this._target && this._target instanceof HTMLMediaElement) {
        if (this._target.srcObject) {
          this._target.srcObject = null;
        } else if (this._target.src) {
          this._target.src = '';
        }
      } else {
        this._target = window.attachMediaStream(this._target, null);
      }
    }
  }, {
    key: '_assign',
    value: function _assign() {
      if (this.stream) {
        try {
          var originalElement = this._target;
          this._target = window.attachMediaStream(this._target, this.stream);
          if (originalElement instanceof HTMLMediaElement) {
            originalElement[replacement] = this._target;
          }
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].info(TAG, 'Error when assigning html sink stream: ' + error);
        }
        try {
          var result = this._target.play();
          if (result && result.catch) {
            result.catch(function (error) {
              __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].debug(TAG, 'Failed to play stream, ' + error);
            });
          }
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_7_common_log__["default"].info(TAG, 'Error when playing html sink stream: ' + error);
        }
      }
    }
  }, {
    key: '_refreshSink',
    value: function _refreshSink() {
      if (this._target) {
        this._cleanup();
        this._assign();
      }
    }
  }, {
    key: 'target',
    get: function get() {
      return this._target;
    },
    set: function set(target) {
      if (this._target) {
        this._cleanup();
      }
      this._target = target || null;
      if (target) {
        this._assign();
      }
    }
  }]);

  return HtmlSink;
}(__WEBPACK_IMPORTED_MODULE_8_media_mediaSink__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (HtmlSink);

/***/ }),
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_argCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_webrtc_utils__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_media_common__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_media_mediaNodeInput__ = __webpack_require__(131);













var TAG = 'media-node-output';

/**
 * A class which represents an output of a {@link MediaNode}. Outputs are connected to
 * inputs in order to forward media streams.
 *
 * This class should only be used within the implementation of {@link MediaNode}s. While it
 * is possible to attach outputs to an existing media node, it should be avoided. Use an additional
 * media node to implement the desired behaviour instead, such as a {@link Passthrough}.
 *
 * @class MediaNodeOutput
 * @param {Object} options - Options object.
 * @param {string} options.name - The name of the output, should be 'default' for single outputs.
 * @param {MediaNode} options.parent - The parent media node.
 */

var MediaNodeOutput = function () {
  function MediaNodeOutput(_ref) {
    var name = _ref.name,
        parent = _ref.parent;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MediaNodeOutput);

    __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].string('MediaNodeInput constructor', 'name', name);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_media_common__["d" /* isMediaNode */])(parent)) {
      __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].error('MediaNodeInput constructor', 'parent', 'be a MediaNode');
    }
    this._name = name;
    this._parent = parent;
    this._targets = new __WEBPACK_IMPORTED_MODULE_4_common_utils__["ReadOnlySet"]();
    this._stream = null;

    this._parent[__WEBPACK_IMPORTED_MODULE_6_media_common__["b" /* outputs */]].add(this);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MediaNodeOutput, [{
    key: 'toString',
    value: function toString() {
      return 'mediaNodeOutput{name=' + this.name + ',parent=' + this._parent + ',targets=' + this._targets.size + '}}';
    }

    /**
     * Resolves the output of a target. If the lookup fails, an error will be thrown.
     *
     * Outputs are resolved as follows, starting with a target:
     *   1. If the current target is a {@link MediaNodeOutput} instance, stop and return the target.
     *   2. If the target is an object, set the new target to the `output` property of the target, and start over.
     *   3. Throw error.
     *
     * If a circular output object structure is encountered, an error will be thrown.
     *
     * @param {MediaNodeOutput|Object} target - The target to resolve the output of.
     * @returns {MediaNodeOutput} The resolved output.
     */

  }, {
    key: 'connect',


    /**
     * Connect this output to a target. Each output can be connected to multiple targets.
     *
     * @param {MediaNodeConnectTarget} target - The target to connect the output to.
     */
    value: function connect(target) {
      if (!this._parent) {
        return __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'tried to connect a detached ouput');
      }

      if (target instanceof HTMLElement) {
        // require here to avoid circular dependency
        var HtmlSink = __webpack_require__(146).default;
        var sink = new HtmlSink({ target: target });
        this.connect(sink);
        return;
      }

      target = __WEBPACK_IMPORTED_MODULE_7_media_mediaNodeInput__["a" /* default */].resolve(target);
      __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].info(TAG, 'connecting ' + this + ' to ' + target);
      if (this._targets.has(target)) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].verbose(TAG, 'ignored connect with same target');
        return;
      }
      if (!target._parent) {
        return __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'tried to connect to a detached input');
      }
      if (target._target) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].debug(TAG, 'disconnecting target\'s existing target: ' + target._target);
        target._target.disconnect(target);
      }
      __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].debug(TAG, 'connecting to new target: ' + target);
      this._targets._add(target);
      target._target = this;
      target._setStream(this._stream);
    }

    /**
     * Disconnect this output from a target.
     *
     * If no target is specified, all targets will be disconnected.
     *
     * @param {MediaNodeConnectTarget} [target] - The target to disconnect from.
     */

  }, {
    key: 'disconnect',
    value: function disconnect(target) {
      var _this = this;

      if (!this._parent) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'tried to disconnect a detached ouput');
        return;
      }
      if (this._targets.size === 0) {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].warning(TAG, 'tried to disconnect ' + this + ', but it is not connected to anything');
        return;
      }

      if (target instanceof HTMLElement) {
        // Iterate through the targets and find html sinks with the input as target
        this._targets.forEach(function (possibleSinkInput) {
          // require here to avoid circular dependency
          var HtmlSink = __webpack_require__(146).default;
          var isHtmlSink = possibleSinkInput._parent instanceof HtmlSink;
          var sinkHasTargetAsTarget = possibleSinkInput._parent._hasTarget(target);
          if (isHtmlSink && sinkHasTargetAsTarget) {
            _this.disconnect(possibleSinkInput);
          }
        });
      } else if (target) {
        target = __WEBPACK_IMPORTED_MODULE_7_media_mediaNodeInput__["a" /* default */].resolve(target);
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].info(TAG, 'disconnecting ' + this + ' from ' + target);
        if (this._targets._delete(target)) {
          target._target = null;
          target._setStream(null);
        } else {
          throw new Error('failed to disconnect ' + this + ' from ' + target + ', not connected');
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].info(TAG, 'disconnecting ' + this + ' from all ' + this._targets.size + ' targets');
        this._targets.forEach(function (target) {
          __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].info(TAG, 'disconnecting ' + _this + ' from ' + target);
          target._target = null;
          target._setStream(null);
        });
        this._targets._clear();
      }
    }

    /**
     * Sets the current stream of this output.
     *
     * This method is internal and should only be called by the implementation of the parent media node.
     *
     * @param {MediaStream} stream - A media stream, or null.
     */

  }, {
    key: 'setStream',
    value: function setStream(stream) {
      if (!this._parent) {
        return __WEBPACK_IMPORTED_MODULE_2_common_log__["default"].error(TAG, 'tried to setStream of a detached ouput');
      }
      if (stream === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_webrtc_utils__["isMediaStream"])(stream)) {
        this._stream = stream;
        this._targets.forEach(function (target) {
          return target._setStream(stream);
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_3_common_argCheck__["a" /* default */].error('MediaNodeOutput.setStream', 'stream', 'be a MediaStream or null');
      }
    }

    /**
     * Detaches the output from it's parent and removes any connections. Use this to clean up outputs
     * in media nodes with dynamic outputs, such as a media demultiplexer. After this method has been called
     * the input can no longer be used.
     *
     * This method is internal and should only be called by the implementation of the parent media node.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.disconnect();
      this._parent[__WEBPACK_IMPORTED_MODULE_6_media_common__["b" /* outputs */]].delete(this);
      this._parent = null;
    }
  }, {
    key: 'name',


    /**
     * The name of this output. This is only meaningful for outputs that belong to media nodes with
     * multiple outputs.
     *
     * Any output that belong to one of the base media node implementations, such as {@link MediaSource},
     * will have the name `'default'`.
     *
     * @readonly
     * @member {string} MediaNodeOutput#name
     */
    get: function get() {
      return this._name;
    }

    /**
     * A read-only set of all the current targets of the output.
     *
     * The set will only contain resolved inputs, and not the original targets given to the connect method.
     *
     * @readonly
     * @member {ReadOnlySet<MediaNodeInput>} MediaNodeOutput#targets
     */

  }, {
    key: 'targets',
    get: function get() {
      return this._targets;
    }

    /**
     * The output's current media stream, or null.
     *
     * @readonly
     * @member {MediaStream} MediaNodeOutput#stream
     */

  }, {
    key: 'stream',
    get: function get() {
      return this._stream;
    }
  }], [{
    key: 'resolve',
    value: function resolve(target) {
      var chain = [target];
      for (;;) {
        if (target instanceof MediaNodeOutput) {
          return target;
        } else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_common_utils__["isObject"])(target)) {
          throw new TypeError('failed to resolve output of ' + (chain[0] && chain[0].constructor.name) + ', ' + 'output must be a MediaNodeOutput or have an output property');
        } else if ('output' in target) {
          try {
            target = target.output;
          } catch (error) {
            throw new TypeError('failed to resolve output of ' + chain[0].constructor.name + ', ' + ('getting output property of ' + target + ' threw error: ' + error.message));
          }
          if (chain.indexOf(target) !== -1) {
            throw new TypeError('failed to resolve output of ' + chain[0].constructor.name + ', ' + 'encountered loop in output property chain');
          }
          chain.push(target);
        } else {
          throw new TypeError('failed to resolve output of ' + chain[0].constructor.name + ', ' + (target.constructor.name + ' does not have an output property'));
        }
      }
    }
  }]);

  return MediaNodeOutput;
}();

/* harmony default export */ __webpack_exports__["a"] = (MediaNodeOutput);

/***/ }),
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 152 */,
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_media_mediaNode__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_media_mediaNodeInput__ = __webpack_require__(131);












var TAG = 'media-input';

/**
 * A base class for media nodes with a single input and no output. Typically used to render
 * the stream, or as a base for nodes with multiple outputs.
 *
 * The subclass should override the `onStream` method.
 *
 * @class MediaSink
 * @extends MediaNode
 */

var MediaSink = function (_MediaNode) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MediaSink, _MediaNode);

  function MediaSink() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MediaSink);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MediaSink.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MediaSink)).call(this));

    _this._input = new __WEBPACK_IMPORTED_MODULE_7_media_mediaNodeInput__["a" /* default */]({
      name: 'default',
      parent: _this,
      onStream: function onStream(stream, oldStream) {
        return _this.onStream(stream, oldStream);
      }
    });
    return _this;
  }

  /**
   * The current input stream.
   *
   * @readonly
   * @member {MediaStream} MediaSink#stream
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MediaSink, [{
    key: 'onStream',


    /**
     * Abstract method that is called whenever the input stream is updated, this should
     * be overridden by the subclass.
     *
     * This will only ever be called if the stream has changed, been added, or removed,
     * i.e. stream and oldStream will never be equal.
     *
     * The `onStream` method will not be called when the backing tracks of a stream is changed.
     * If the subclass needs to be notified of track updates this has to be done manually using
     * the MediaStream listeners.
     *
     * @abstract
     * @param {?MediaStream} stream - The new media stream, or null.
     * @param {?MediaStream} oldStream - The old media stream, or null.
     */
    value: function onStream(stream, oldStream) {
      __WEBPACK_IMPORTED_MODULE_5_common_log__["default"].warning(TAG, this.constructor.name + '.onStream should be overridden');
    }
  }, {
    key: 'stream',
    get: function get() {
      return this._input.stream;
    }

    /**
     * The input.
     *
     * @readonly
     * @member {MediaNodeInput} MediaSink#input
     */

  }, {
    key: 'input',
    get: function get() {
      return this._input;
    }
  }]);

  return MediaSink;
}(__WEBPACK_IMPORTED_MODULE_6_media_mediaNode__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MediaSink);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(23);
module.exports = __webpack_require__(157);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(23);
module.exports = __webpack_require__(158);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14)
  , get      = __webpack_require__(65);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(44)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(24);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AsyncPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_utils__ = __webpack_require__(13);









var AsyncQueue = function () {
  function AsyncQueue() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AsyncQueue);

    this._queue = [];
    this._currentTask = null;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AsyncQueue, [{
    key: 'toString',
    value: function toString() {
      return 'AsyncQueue{executing=' + !!this._currentTask + 'queued=' + this._queue.length + '}';
    }
  }, {
    key: 'push',
    value: function push(factory) {
      var task = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_common_utils__["defer"])();
      task.factory = factory;
      this._queue.push(task);
      if (!this._currentTask) {
        this._poll();
      }
      return task.promise;
    }
  }, {
    key: 'clear',
    value: function clear() {
      if (this._currentTask) {
        this._currentTask.cancelled = true;
        this._currentTask = null;
      }
      this._queue.length = 0;
    }
  }, {
    key: '_poll',
    value: function _poll() {
      if (this._currentTask || !this._queue.length) {
        return;
      }
      var self = this;
      var task = this._currentTask = this._queue.shift();
      if (!task) {
        return;
      }

      var promise = null;
      try {
        promise = task.factory();
      } catch (e) {
        __WEBPACK_IMPORTED_MODULE_3_common_log__["default"].error(this.tag, 'AsyncQueue.process: factory threw error', e, e.stack);
      }
      if (promise) {
        promise.then(function (result) {
          if (task.cancelled) {
            throw new Error('task was cancelled');
          }
          task.resolve(result);
        }).catch(task.reject).then(function () {
          self._currentTask = null;
          self._poll();
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_3_common_log__["default"].error(self.tag, 'error calling poll after task completion: ', error);
        });
      } else {
        this._currentTask = null;
        this._poll();
      }
    }
  }]);

  return AsyncQueue;
}();

/* harmony default export */ __webpack_exports__["a"] = (AsyncQueue);


AsyncQueue.tag = 'async-queue';

var AsyncPipe = function () {
  function AsyncPipe() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AsyncPipe);

    this._queue = [];
    this._deferredRead = null;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AsyncPipe, [{
    key: 'read',
    value: function read() {
      if (!this._queue) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject();
      } else if (this._deferredRead) {
        return this._deferredRead.promise;
      } else if (this._queue.length) {
        var item = this._queue.pop();
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(item);
      } else {
        this._deferredRead = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_common_utils__["defer"])();
        return this._deferredRead.promise;
      }
    }
  }, {
    key: 'write',
    value: function write(message) {
      if (!this._queue) {
        throw new Error('AsyncPipe is closed');
      } else if (!this._deferredRead) {
        this._queue.unshift(message);
      } else {
        this._deferredRead.resolve(message);
        this._deferredRead = null;
      }
    }
  }, {
    key: 'close',
    value: function close() {
      if (!this._queue) {
        throw new Error('AsyncPipe has already been closed');
      }
      if (this._deferredRead) {
        this._deferredRead.reject();
        this._deferredRead = null;
      }
      this._queue.length = 0;
      this._queue = null;
    }
  }]);

  return AsyncPipe;
}();

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sdp_interop__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sdp_interop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sdp_interop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_emitter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_webrtc_peerConnectionMonitor__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_media_dummySource__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_webrtc_utils__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__ = __webpack_require__(199);

















var TAG = 'peer-connection';

var EVENT_HANDLER_ERROR_TEMPLATE = 'onFUNC is not available, use addEventListener instead';

var IceConfigErrorDetector = function () {
  function IceConfigErrorDetector(iceServers) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, IceConfigErrorDetector);

    this._haveTurn = false;
    this._haveStun = false;
    if (iceServers) {
      iceServers.forEach(function (server) {
        var url = server.urls || server.url;
        if (!url) {
          __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].error('peer-connection', 'ice server has no url: ' + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(server));
        }
        if (url.indexOf('stun:') === 0) {
          _this._haveStun = true;
        }
        if (url.indexOf('turn:') === 0) {
          _this._haveStun = true;
          _this._haveTurn = true;
        }
      });
    }
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(IceConfigErrorDetector, [{
    key: 'observedCandidate',
    value: function observedCandidate(info) {
      if (info.type !== 'host') {
        this._gotStun = true;
      }
      if (info.type === 'relay') {
        this._gotTurn = true;
      }
    }
  }, {
    key: 'end',
    value: function end(iceConnectionState) {
      // We might not bother gathering candidates with lower priority if we find a good connection
      // early. But if that happens we will have moved on from iceConnectionState 'new'.
      // So we only want to continue the check if we're still in 'new' state.
      if (iceConnectionState !== 'new') {
        return null;
      }
      if (this._haveTurn && !this._gotTurn) {
        var msg = "'iceServers' contained a turn server, but no relay candidates were received." + ' Check the turn server configuration and availability.';
        __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].warning('peer-connection', msg);
        return 'turn';
      } else if (this._haveStun && !this._gotStun) {
        var _msg = "'iceServers' contained a stun server, but no stun candidates were received." + ' Check the stun server configuration and availability.';
        __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].warning('peer-connection', _msg);
        return 'stun';
      }
      return null;
    }
  }]);

  return IceConfigErrorDetector;
}();

var PeerConnectionProxy = function () {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(PeerConnectionProxy, null, [{
    key: 'create',
    value: function create(config) {
      config = config || {};
      var statsFormatter = config.statsFormatter;
      var rtcpMuxPolicy = config.rtcpMuxPolicy || 'require';
      var bundlePolicy = config.bundlePolicy || 'max-bundle';
      var iceServers = config.iceServers;
      var iceCandidateFilter = config.iceCandidateFilter;
      if (typeof iceServers === 'string') {
        iceServers = [iceServers];
      } else if (!Array.isArray(iceServers)) {
        iceServers = [];
      }
      iceServers = iceServers.map(function (server) {
        if (typeof server === 'string') {
          return {
            urls: server
          };
        } else {
          return server;
        }
      });
      var pcConfig = { iceServers: iceServers, rtcpMuxPolicy: rtcpMuxPolicy, bundlePolicy: bundlePolicy };
      return new PeerConnectionProxy(pcConfig, statsFormatter, iceCandidateFilter);
    }
  }]);

  function PeerConnectionProxy(pcConfig, statsFormatter, iceCandidateFilter) {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, PeerConnectionProxy);

    __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].debug(TAG, 'creating peer connection with config:', pcConfig);
    this._pc = new RTCPeerConnection(pcConfig);
    this._iceCandidateFilter = iceCandidateFilter;
    this._eventTarget = new __WEBPACK_IMPORTED_MODULE_7_common_emitter__["a" /* default */]();
    this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_common_utils__["randomString"])(30);
    this._interop = new __WEBPACK_IMPORTED_MODULE_5_sdp_interop__["Interop"]();
    this._iceErrorDetector = new IceConfigErrorDetector(pcConfig.iceServers);
    this._firstMid = null;

    this.addEventListener = this.addEventListener.bind(this);
    this.addStream = this.addStream.bind(this);
    this.close = this.close.bind(this);
    this.getLocalStreams = this.getLocalStreams.bind(this);
    this.getRemoteStreams = this.getRemoteStreams.bind(this);
    this.addIceCandidate = this.addIceCandidate.bind(this);
    this._createAnswer = this._createAnswer.bind(this);
    this._createOffer = this._createOffer.bind(this);
    this.getStats = this.getStats.bind(this);
    this._setLocalDescription = this._setLocalDescription.bind(this);
    this._setRemoteDescription = this._setRemoteDescription.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.removeStream = this.removeStream.bind(this);
    this.waitForInitialIce = this.waitForInitialIce.bind(this);

    this._pc.oniceconnectionstatechange = function (event) {
      _this2._eventTarget._emit('iceconnectionstatechange', { target: _this2 });
    };

    this._pc.onnegotiationneeded = function (event) {
      _this2._eventTarget._emit('negotiationneeded', { target: _this2 });
    };

    this._pc.onsignalingstatechange = function (event) {
      _this2._eventTarget._emit('signalingstatechange', { target: _this2 });
    };

    this._pc.onaddstream = function (event) {
      _this2._eventTarget._emit('addstream', { target: _this2, stream: event.stream });
    };

    this._pc.onremovestream = function (event) {
      _this2._eventTarget._emit('removestream', { target: _this2, stream: event.stream });
    };

    this._pc.ondatachannel = function (event) {
      var channel = event.channel;

      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].warning('data-channel', "received data channel, which shouldn't happen");
      _this2._eventTarget._emit('datachannel', { target: _this2, channel: channel });
    };

    var deferredIce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_common_utils__["defer"])();
    this._initialIceComplete = deferredIce.promise;

    this._pc.onicecandidate = function (event) {
      var candidate = event.candidate;

      if (!candidate) {
        _this2._eventTarget._emit('icecandidate', { target: _this2, candidate: candidate });
        if (_this2._iceErrorDetector) {
          if (_this2._iceErrorDetector.end(_this2._pc.iceConnectionState) === 'turn') {
            deferredIce.reject(new Error('No relay candidates received while turn server was configured'));
          }
          _this2._iceErrorDetector = null;
        }
        deferredIce.resolve();
        return;
      }

      var info = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["a" /* parseCandidateInfo */])(candidate.candidate, 'local');
      if (_this2._iceErrorDetector) {
        _this2._iceErrorDetector.observedCandidate(info);
      }

      if (_this2._iceCandidateFilter) {
        try {
          if (!_this2._iceCandidateFilter(info)) {
            __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].debug(TAG, 'ignored candidate due to being filtered out: ' + candidate);
            return;
          }
          setTimeout(function () {
            deferredIce.resolve();
          }, 200);
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].error(TAG, 'ignoring candidate, error was thrown in candidate filter: ' + error);
          return;
        }
      }

      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"]) {
        var _ref = candidate.sdpMid.match(/^(audio|video)-[0-9]+$/) || [],
            _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            simpleMid = _ref2[1];

        if (simpleMid) {
          candidate.sdpMid = simpleMid;
        }
      }

      _this2._eventTarget._emit('icecandidate', { target: _this2, candidate: candidate });
    };

    if (statsFormatter) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_webrtc_peerConnectionMonitor__["a" /* default */])(this, statsFormatter);
    }
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(PeerConnectionProxy, [{
    key: 'toString',
    value: function toString() {
      return 'peerConnection{id=' + this._id + '}';
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(event, listener) {
      return this._eventTarget.on(event, listener);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(event, listener) {
      return this._eventTarget.off(event, listener);
    }
  }, {
    key: 'addStream',
    value: function addStream(stream) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_webrtc_utils__["addPeerConnectionStream"])(this._pc, stream);
    }
  }, {
    key: 'removeStream',
    value: function removeStream(stream) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_webrtc_utils__["removePeerConnectionStream"])(this._pc, stream);
    }
  }, {
    key: 'getLocalStreams',
    value: function getLocalStreams() {
      var _this3 = this;

      return this._pc.getLocalStreams().filter(function (stream) {
        return stream !== _this3._dummyStream;
      });
    }
  }, {
    key: 'getRemoteStreams',
    value: function getRemoteStreams() {
      return this._pc.getRemoteStreams();
    }
  }, {
    key: 'close',
    value: function close() {
      return this._pc.close();
    }
  }, {
    key: 'waitForInitialIce',
    value: function waitForInitialIce() {
      return this._initialIceComplete;
    }
  }, {
    key: 'performOffer',

    // performOffer, performAnswer, and handleAnswer are high-level versions
    // of the setLocal/RemoteDescription and createOffer/Answer dance.
    // We use higher-level constructs because that allows us to make some assuptions
    // that makes sdp transformations easier and cheaper to do. e.g. we don't need
    // to support using both the description received from setLocalDescription and
    // createOffer/Answer, as well as the localDescription property, and instead just
    // munge the SDP once.
    value: function performOffer(_ref3) {
      var _this4 = this;

      var _ref3$constraints = _ref3.constraints,
          constraints = _ref3$constraints === undefined ? null : _ref3$constraints,
          _ref3$bandwidth = _ref3.bandwidth,
          bandwidth = _ref3$bandwidth === undefined ? null : _ref3$bandwidth,
          _ref3$waitForIce = _ref3.waitForIce,
          waitForIce = _ref3$waitForIce === undefined ? false : _ref3$waitForIce;

      // Chrome 57 introduced a bug that breaks renegotiation of additional media
      // blocks if the initial connection only included data channels. We work around
      // this by adding a dummy stream that forces a video block to be added.
      // Simply setting OfferToCreateVideo/Audio constraints does not work.
      //
      // We used to remove the dummy stream once a real stream is added, but this
      // seems to now break sendonly connections towards Firefox. If the dummy
      // stream is replaced without any incoming connection, all communication seems
      // to break, including data channels.
      // So for now we just keep the dummy stream around until we find a better solution.
      //
      // TODO: A possible workaround is to use constructed MediaStream instances as the
      // streams that are added to the RTCPeerConnections. When adding streams we instead
      // just take the tracks and add those to the existing streams. More importantly
      // we never remove streams from the RTCPeerConnection, just remove the tracks
      // from the stream.
      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isChrome"] && this._pc.getLocalStreams().length === 0) {
        var dummy = new __WEBPACK_IMPORTED_MODULE_10_media_dummySource__["a" /* default */]({ video: true, audio: true });
        this.addStream(dummy.stream);
        this._dummyStream = dummy.stream;
      }

      return this._createOffer(constraints).then(function (desc) {
        return _this4._rewriteLocalInputDescription(desc, { bandwidth: bandwidth });
      }).then(function (desc) {
        return _this4._setLocalDescription(desc);
      }).then(function (offer) {
        if (waitForIce) {
          return _this4._initialIceComplete.then(function () {
            return _this4._pc._localDescription;
          });
        } else {
          return offer;
        }
      }).then(function (desc) {
        return _this4._rewriteLocalOutputDescription(desc);
      });
    }
  }, {
    key: 'performAnswer',
    value: function performAnswer(_ref4) {
      var _this5 = this;

      var offer = _ref4.offer,
          _ref4$constraints = _ref4.constraints,
          constraints = _ref4$constraints === undefined ? null : _ref4$constraints,
          _ref4$bandwidth = _ref4.bandwidth,
          bandwidth = _ref4$bandwidth === undefined ? null : _ref4$bandwidth;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(offer).then(function (desc) {
        return _this5._rewriteRemoteInputDescription(desc);
      }).then(function (desc) {
        return _this5._setRemoteDescription(desc);
      }).then(function () {
        return _this5._createAnswer(constraints);
      }).then(function (desc) {
        return _this5._rewriteLocalInputDescription(desc, { bandwidth: bandwidth });
      }).then(function (desc) {
        return _this5._setLocalDescription(desc);
      }).then(function (desc) {
        return _this5._rewriteLocalOutputDescription(desc);
      });
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(_ref5) {
      var _this6 = this;

      var answer = _ref5.answer;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(answer).then(function (desc) {
        return _this6._rewriteRemoteInputDescription(desc);
      }).then(function (desc) {
        return _this6._setRemoteDescription(desc);
      });
    }
  }, {
    key: '_rewriteLocalInputDescription',
    value: function _rewriteLocalInputDescription(desc, _ref6) {
      var bandwidth = _ref6.bandwidth;
      var sdp = desc.sdp,
          type = desc.type;


      if (bandwidth) {
        sdp = sdp.replace(/^b=AS:[0-9]+$/gm, 'b=AS:' + bandwidth);
      }

      // TODO: only do this in Chrome 58 & 59
      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isChrome"]) {
        sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["b" /* disableSendBandwidthEstimation */])(sdp);
      }

      if (this._iceCandidateFilter) {
        sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["c" /* filterSdpCandidates */])(sdp, this._iceCandidateFilter, 'local');
      }

      sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["d" /* workaroundSdpBundleBug */])(sdp);

      return new RTCSessionDescription({ sdp: sdp, type: type });
    }
  }, {
    key: '_rewriteLocalOutputDescription',
    value: function _rewriteLocalOutputDescription(desc) {
      var sdp = desc.sdp,
          type = desc.type;

      var unifiedPlanSdp;

      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"] && !this._firstMid) {
        // Start off by grabbing the mid for the first media block. This has to be
        // done straight away and stored, since future renegotiatons may inactivate the
        // block and remove the mid from the SDP.
        // We need this in order to add ICE candidates, since we will be receiving candidates
        // that have translated mIds.
        var _ref7 = desc.sdp.match(/^a=mid:(.+)$/m) || [],
            _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
            mid = _ref8[1];

        if (mid) {
          this._firstMid = mid;
        }
      }

      if (this._iceCandidateFilter) {
        sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["c" /* filterSdpCandidates */])(sdp, this._iceCandidateFilter, 'local');
      }

      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"]) {
        unifiedPlanSdp = desc.sdp;

        var _extractApplicationBl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["e" /* extractApplicationBlock */])(desc.sdp),
            _extractApplicationBl2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_extractApplicationBl, 2),
            extractedSdp = _extractApplicationBl2[0],
            extracted = _extractApplicationBl2[1];

        sdp = extractedSdp;
        if (extracted && extracted.needsInteropTranslation) {
          // Firefox uses the unified SDP format, which adds multiple media blocks,
          // one block for each track. Each block has an individual mode describing if it's
          // inactive, sending, receiving, or both (inactive, sendonly, recvonly, sendrecv).
          // When that SDP is converted to plan B format, which has a single media block
          // for each media type, only the last mode mentioned in the SDP will
          // be used, which will often break the connection.
          // readMediaModeUnions() reads the modes of the different media types
          // in the initial SDP and creates a union for each media type, e.g.
          // sendonly | recvonly = sendrecv, inactive | sendonly = sendonly, etc.
          // overrideMediaModes() then injects those union modes to the plan B SDP.
          var mediaModeUnions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["f" /* readMediaModeUnions */])(desc.sdp);
          sdp = this._interop.toPlanB({ type: desc.type, sdp: sdp }).sdp;
          sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["g" /* overrideMediaModes */])(sdp, mediaModeUnions);

          // The interop SDP transform doesn't always rewrite the bundle
          // attribute properly, so we recreate it just in case
          sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["h" /* rewriteBundleAttribute */])(sdp);
        }
        sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["i" /* injectApplicationBlock */])(sdp, extracted);
        __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, 'converted local ' + desc.type + ' SDP from unified plan ' + unifiedPlanSdp + '\n\nto\n\n' + sdp);
      }

      return {
        sdp: sdp,
        type: type,
        unifiedPlanSdp: unifiedPlanSdp
      };
    }
  }, {
    key: '_rewriteRemoteInputDescription',
    value: function _rewriteRemoteInputDescription(desc) {
      var sdp = desc.sdp,
          type = desc.type,
          unifiedPlanSdp = desc.unifiedPlanSdp;


      if (this._iceCandidateFilter) {
        sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["c" /* filterSdpCandidates */])(sdp, this._iceCandidateFilter, 'remote');
      }

      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"]) {
        // When we receive a description it might already contain a unified plan SDP
        // if it was sent by Firefox, use it directly in that case
        if (unifiedPlanSdp) {
          sdp = unifiedPlanSdp;
        } else {
          // Otherwise we need to convert the SDP from plan B to unified plan
          var oldSdp = desc.sdp;

          var _extractApplicationBl3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["e" /* extractApplicationBlock */])(desc.sdp),
              _extractApplicationBl4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_extractApplicationBl3, 2),
              extractedSdp = _extractApplicationBl4[0],
              extracted = _extractApplicationBl4[1];

          sdp = extractedSdp;
          sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["j" /* removeChromeRetransmission */])(sdp);
          if (extracted && extracted.needsInteropTranslation) {
            sdp = this._interop.toUnifiedPlan({ type: desc.type, sdp: sdp }).sdp;
          }
          sdp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["i" /* injectApplicationBlock */])(sdp, extracted);
          __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, 'converted remote ' + desc.type + ' SDP from plan b ' + oldSdp + '\n\nto\n\n' + sdp);
        }
      }

      return new RTCSessionDescription({
        sdp: sdp,
        type: type
      });
    }
  }, {
    key: '_setLocalDescription',
    value: function _setLocalDescription(desc) {
      var _this7 = this;

      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, this + '.setLocalDescription', desc.sdp);
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this7._pc.setLocalDescription(desc, function () {
          resolve(desc);
        }, function (error) {
          reject(makeError('setLocalDescription', 'failed to set local description', error));
        });
      });
    }
  }, {
    key: '_setRemoteDescription',
    value: function _setRemoteDescription(desc) {
      var _this8 = this;

      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, this + '.setRemoteDescription', desc.sdp);
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this8._pc.setRemoteDescription(desc, function () {
          resolve();
        }, function (error) {
          reject(makeError('setRemoteDescription', 'failed to set remote description', error));
        });
      });
    }
  }, {
    key: '_createOffer',
    value: function _createOffer(constraints) {
      var _this9 = this;

      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, this + '.createOffer');
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this9._pc.createOffer(function (desc) {
          if (!desc) {
            reject(new Error('failed to create offer, no offer generated'));
          } else {
            resolve(desc);
          }
        }, function (error) {
          reject(makeError('createOffer', 'failed to create offer', error));
        }, constraints);
      });
    }
  }, {
    key: '_createAnswer',
    value: function _createAnswer(constraints) {
      var _this10 = this;

      __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].verbose(TAG, this + '.createAnswer');
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this10._pc.createAnswer(function (desc) {
          if (!desc) {
            return reject(new Error('failed to create answer, no answer generated'));
          }
          resolve(desc);
        }, function (error) {
          reject(makeError('createAnswer', 'failed to create answer', error));
        }, constraints);
      });
    }
  }, {
    key: 'addIceCandidate',
    value: function addIceCandidate(candidate) {
      var _this11 = this;

      if (candidate.sdpMLineIndex !== 0) {
        __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].debug(TAG, 'ignored candidate with sdpMLineIndex != 0, ' + candidate.sdpMLineIndex);
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();
      }
      if (!(candidate instanceof RTCIceCandidate)) {
        candidate = new RTCIceCandidate(candidate);
      }
      if (this._iceCandidateFilter) {
        try {
          var info = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_webrtc_sdpTransform__["a" /* parseCandidateInfo */])(candidate.candidate, 'remote');
          if (!this._iceCandidateFilter(info)) {
            __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].debug(TAG, 'ignored candidate due to being filtered out: ' + candidate);
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();
          }
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_6_common_log__["default"].error(TAG, 'ignoring candidate, error was thrown in candidate filter: ' + error);
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();
        }
      }
      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"]) {
        if (!this._firstMid) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(new Error('Tried to add ice candidate before local description was set'));
        }
        candidate.sdpMid = this._firstMid;
      }
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this11._pc.addIceCandidate(candidate, resolve, function (error) {
          reject(makeError('addIceCandidate', 'failed add ice candidate', error));
        });
      });
    }
  }, {
    key: 'createDataChannel',
    value: function createDataChannel(label, config) {
      return this._pc.createDataChannel(label, config);
    }
  }, {
    key: 'getStats',
    value: function getStats(selector) {
      var _this12 = this;

      if (__WEBPACK_IMPORTED_MODULE_8_common_utils__["isFirefox"]) {
        return this._pc.getStats(selector);
      }
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this12._pc.getStats(function (response) {
          var standardReport = {};
          response.result().forEach(function (report) {
            var standardStats = {
              id: report.id,
              type: report.type
            };
            report.names().forEach(function (name) {
              standardStats[name] = report.stat(name);
            });
            standardReport[standardStats.id] = standardStats;
          });
          resolve(standardReport);
        }, selector, reject);
      });
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }
  }, {
    key: 'signalingState',
    get: function get() {
      return this._pc.signalingState;
    }
  }, {
    key: 'iceConnectionState',
    get: function get() {
      return this._pc.iceConnectionState;
    }
  }, {
    key: 'iceGatheringState',
    get: function get() {
      return this._pc.iceGatheringState;
    }
  }, {
    key: 'hasRemoteDescription',
    get: function get() {
      var remoteDescription = this._pc.remoteDescription;

      return !!remoteDescription && !!remoteDescription.type;
    }
  }, {
    key: 'onaddstream',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'addstream'));
    }
  }, {
    key: 'ondatachannel',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'datachannel'));
    }
  }, {
    key: 'onicecandidate',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'icecandidate'));
    }
  }, {
    key: 'oniceconnectionstatechange',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'iceconnectionstatechange'));
    }
  }, {
    key: 'onnegotiationneeded',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'negotiationneeded'));
    }
  }, {
    key: 'onremovestream',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'removestream'));
    }
  }, {
    key: 'onsignalingstatechange',
    set: function set(value) {
      throw new Error(EVENT_HANDLER_ERROR_TEMPLATE.replace('FUNC', 'signalingstatechange'));
    }
  }, {
    key: 'localDescription',
    get: function get() {
      return this._pc.localDescription;
    }
  }]);

  return PeerConnectionProxy;
}();

/* harmony default export */ __webpack_exports__["a"] = (PeerConnectionProxy);


function makeError(funcName, message, reason) {
  var msg = 'Error in ' + funcName + ', ' + message;
  try {
    var error = new Error(msg + ': ' + reason);
    error.reason = reason;
    error.stack = reason.stack;
    return error;
  } catch (error) {
    return new Error(msg + ' and failed to serialize root cause: ' + error);
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it){
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(25)
  , gOPS     = __webpack_require__(68)
  , pIE      = __webpack_require__(43)
  , toObject = __webpack_require__(26)
  , IObject  = __webpack_require__(67)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(172)});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(46)('getOwnPropertyNames', function(){
  return __webpack_require__(91).f;
});

/***/ }),
/* 175 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
      name: 'version',
      reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: "%s %s %d %s IP%d %s"
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: "%d %d"
  }],
  c: [{ //c=IN IP4 10.47.197.26
      name: 'connection',
      reg: /^IN IP(\d) (\S*)/,
      names: ['version', 'ip'],
      format: "IN IP%d %s"
  }],
  b: [{ //b=AS:4000
      push: 'bandwidth',
      reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
      names: ['type', 'limit'],
      format: "%s:%s"
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
      // NB: special - pushes to session
      // TODO: rtp/fmtp should be filtered by the payloads found here?
      reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
      names: ['type', 'port', 'protocol', 'payloads'],
      format: "%s %d %s %s"
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          "rtpmap:%d %s/%s/%s":
          o.rate ?
          "rtpmap:%d %s/%s":
          "rtpmap:%d %s";
      }
    },
    {
      //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: "fmtp:%d %s"
    },
    { //a=control:streamid=0
        name: 'control',
        reg: /^control:(.*)/,
        format: "control:%s"
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          "rtcp:%d %s IP%d %s":
          "rtcp:%d";
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: "rtcp-fb:%d trr-int %d"
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          "rtcp-fb:%s %s %s":
          "rtcp-fb:%s %s";
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['value', 'uri', 'config'], // value may include "/direction" suffix
      format: function (o) {
        return (o.config != null) ?
          "extmap:%s %s %s":
          "extmap:%s %s";
      }
    },
    {
      //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          "crypto:%d %s %s %s":
          "crypto:%d %s %s";
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: "setup:%s"
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: "mid:%s"
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: "msid:%s"
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: "ptime:%d"
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: "maxptime:%d"
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: "ice-ufrag:%s"
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: "ice-pwd:%s"
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: "fingerprint:%s %s"
    },
    {
      //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation'],
      format: function (o) {
        var str = "candidate:%s %d %s %d %s %d typ %s";

        str += (o.raddr != null) ? " raddr %s rport %d" : "%v%v";

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? " tcptype %s" : "%v";

        if (o.generation != null) {
          str += " generation %d";
        }
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: "remote-candidates:%s"
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: "ice-options:%s"
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: "ssrcs",
      reg: /^ssrc:(\d*) ([\w_]*):(.*)/,
      names: ['id', 'attribute', 'value'],
      format: "ssrc:%d %s:%s"
    },
    { //a=ssrc-group:FEC 1 2
      push: "ssrcGroups",
      reg: /^ssrc-group:(\w*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: "ssrc-group:%s %s"
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: "msidSemantic",
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: "msid-semantic: %s %s" // space after ":" is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: "group:%s %s"
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ["value"]
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = "%s";
    }
  });
});


/***/ }),
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_media_mediaSource__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_webrtc_utils__ = __webpack_require__(66);











/**
 * A dummy source that can generate a silent audio stream and a 1x1 black video stream.
 *
 * Useful for testing and working around browser bugs where streams have to be present.
 *
 * @class DummySource
 * @extends MediaSource
 * @param {Object} [options] - Optional options object
 * @param {boolean} [options.video=true] - Whether to generate dummy video.
 * @param {boolean} [options.audio=true] - Whether to generate dummy audio.
 */

var DummySource = function (_MediaSource) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DummySource, _MediaSource);

  function DummySource() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { audio: true, video: true },
        audio = _ref.audio,
        video = _ref.video;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DummySource);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DummySource.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DummySource)).call(this));

    var tracks = [];
    if (audio) {
      _this._audioContext = __WEBPACK_IMPORTED_MODULE_7_webrtc_utils__["audioContextUtil"].get();
      _this._destination = _this._audioContext.createMediaStreamDestination();

      var _this$_destination$st = _this._destination.stream.getTracks(),
          _this$_destination$st2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_this$_destination$st, 1),
          track = _this$_destination$st2[0];
      // track.enabled = false


      tracks.push(track);

      _this._silence = _this._audioContext.createBufferSource();
      _this._silence.connect(_this._destination, 0, 0);
    }
    if (video) {
      _this._canvas = document.createElement('canvas');
      _this._canvas.style.width = '1px';
      _this._canvas.style.height = '1px';
      _this._canvas.width = 1;
      _this._canvas.height = 1;

      // Otherwise Firefox will complain about the canvas not being initialized
      _this._canvas.getContext('2d');

      var stream = _this._canvas.captureStream(1);

      var _stream$getTracks = stream.getTracks(),
          _stream$getTracks2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_stream$getTracks, 1),
          _track = _stream$getTracks2[0];
      // track.enabled = false


      tracks.push(_track);
    }
    _this._stream = new MediaStream(tracks);
    _this.setStream(_this._stream);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DummySource, [{
    key: 'stop',


    /**
     * Stops the source and cleans up all resources. This has to be called once the source
     * is no longer used in order to clean up resources.
     *
     * Calling this method multiple times has no effect.
     */
    value: function stop() {
      if (this._stream) {
        this.setStream(null);
        this._stream.getTracks().forEach(function (track) {
          return track.stop();
        });
        this._stream = null;
        this._canvas = null;
        if (this._audioContext) {
          __WEBPACK_IMPORTED_MODULE_7_webrtc_utils__["audioContextUtil"].release();
          this._audioContext = null;
          this._destination = null;
          this._silence.stop();
          this._silence = null;
        }
      }
    }

    /**
     * @private
     * @function DummySource#setStream
     */

  }, {
    key: 'output',
    get: function get() {
      return this._output;
    }
  }]);

  return DummySource;
}(__WEBPACK_IMPORTED_MODULE_6_media_mediaSource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (DummySource);

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(202), __esModule: true };

/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attachPeerConnectionMonitor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webrtc_statsNormalizer__ = __webpack_require__(201);








// function MediaStreamTrackMonitor(pc, mst) {
//     this.pc = pc;
//     this.mst = mst;
//     mst.addEventListener('started', function () {
//         log.verbose('stats-monitor', 'mst: onstarted');
//     });
//     mst.addEventListener('mute', function () {
//         log.verbose('stats-monitor', 'mst: onmute');
//     });
//     mst.addEventListener('unmute', function () {
//         log.verbose('stats-monitor', 'mst: onunmute');
//     });
//     mst.addEventListener('overconstrained', function () {
//         log.verbose('stats-monitor', 'mst: onoverconstrained: ' + JSON.stringify(mst.getConstraints()));
//     });
//     mst.addEventListener('ended', function () {
//         log.verbose('stats-monitor', 'mst: onended');
//     });
// }
//
// function MediaStreamMonitor(pc, ms) {
//     var self = this;
//     this.pc = pc;
//     this.ms = ms;
//     this.mediaStreamTracks = {};
//     ms.addEventListener('active', function () {
//         log.verbose('stats-monitor', 'ms: onactive');
//     });
//     ms.addEventListener('addtrack', function (e) {
//         log.verbose('stats-monitor', 'ms: onaddtrack: ' + e.track.id);
//         self.mediaStreamTracks[e.track.id] = new MediaStreamTrackMonitor(self, e.track);
//     });
//     ms.addEventListener('ended', function () {
//         log.verbose('stats-monitor', 'ms: onended');
//     });
//     ms.addEventListener('inactive', function () {
//         log.verbose('stats-monitor', 'ms: oninactive');
//     });
//     ms.addEventListener('removetrack', function (e) {
//         log.verbose('stats-monitor', 'ms: onremovetrack: ' + e.track.id);
//         delete self.mediaStreamTracks[e.track.id];
//     });
// }

var WEBRTC_MONITOR_REGEX_MSID_CHROME = /^a=ssrc:(\d+) msid:([-a-zA-Z0-9]+) ([-a-zA-Z0-9]+)$/;
var WEBRTC_MONITOR_REGEX_MSID_FIREFOX = /^a=msid:{([-a-zA-Z0-9]+)} {([-a-zA-Z0-9]+)}$/;
var WEBRTC_MONITOR_REGEX_MSLABEL = /^a=ssrc:(\d+) mslabel:([-a-zA-Z0-9]+)$/;
var WEBRTC_MONITOR_REGEX_LABEL = /^a=ssrc:(\d+) label:(?:{)([-a-zA-Z0-9]+)(?:})$/;
var WEBRTC_MONITOR_REGEX_CNAME = /^a=ssrc:(\d+) cname:(?:{)([-a-zA-Z0-9]+)(?:})$/;

function parseIdentities(sdp, identities) {
  var ids = {};
  ids.ssrcs = [];
  var blocks = sdp.split(/(?=^m=)/mig);
  for (var block in blocks) {
    var lines = blocks[block].split(/\r?\n/);
    var msidTemp = {};
    for (var line = 0; line < lines.length; line += 1) {
      var sdpMsIdC = lines[line].match(WEBRTC_MONITOR_REGEX_MSID_CHROME);
      if (sdpMsIdC) {
        if (!(sdpMsIdC[1] in ids.ssrcs)) {
          ids.ssrcs.push(sdpMsIdC[1]);
        }
        ids.msid = sdpMsIdC[2];
        ids.mstid = sdpMsIdC[3];
      }
      var sdpMsIdF = lines[line].match(WEBRTC_MONITOR_REGEX_MSID_FIREFOX);
      if (sdpMsIdF) {
        if (ids.ssrc) {
          ids.msid = sdpMsIdF[1];
          ids.mstid = sdpMsIdF[2];
        } else {
          msidTemp.msid = sdpMsIdF[1];
          msidTemp.mstid = sdpMsIdF[2];
        }
      }
      var sdpMsLabel = lines[line].match(WEBRTC_MONITOR_REGEX_MSLABEL);
      if (sdpMsLabel) {
        if (!(sdpMsLabel[1] in ids.ssrcs)) {
          ids.ssrcs.push(sdpMsLabel[1]);
        }
        ids.msid = sdpMsLabel[2];
      }
      var sdpLabel = lines[line].match(WEBRTC_MONITOR_REGEX_LABEL);
      if (sdpLabel) {
        if (!(sdpLabel[1] in ids.ssrcs)) {
          ids.ssrcs.push(sdpLabel[1]);
        }
        ids.mstid = sdpLabel[2];
      }
      var sdpCname = lines[line].match(WEBRTC_MONITOR_REGEX_CNAME);
      if (sdpCname) {
        if (!(sdpCname[1] in ids.ssrcs)) {
          ids.ssrcs.push(sdpCname[1]);
        }
        ids.cname = sdpCname[2];
        if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(msidTemp).length) {
          ids.msid = msidTemp.msid;
          ids.mstid = msidTemp.mstid;
          msidTemp = {};
        }
      }
    }
    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(ids.ssrcs).length) {
      for (var ssrc in ids.ssrcs) {
        identities[ids.ssrcs[ssrc]] = {};
        for (var id in ids) {
          if (id === 'ssrcs') {
            continue;
          }
          identities[ids.ssrcs[ssrc]][id] = ids[id];
        }
      }
    }
    ids = {};
    ids.ssrcs = [];
  }
  return identities;
}

function reportGenericStat(formatter, identities, stat) {
  var sample = {
    timestamp: Date.now(),
    pcId: identities.pcId
  };

  sample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_common_utils__["assign"])(sample, stat);

  formatter.handleStats([sample]);
}

var PEER_CONNECTION_MONITOR_CANDIDATE_RE = new RegExp('' + '^candidate:(\\d+) (\\d) (UDP|TCP) ([\\d\\.]*) ([\\d\\.a-f\\:]*) (\\d*) ' + 'typ ([a-z]*)( raddr ([\\d\\.a-f\\:]*) rport (\\d*))?( tcptype (active|passive|so))?.*$', 'mi');

function parseCandidateString(candidateString) {
  var candidate = null;
  var candidateMatches = candidateString.match(PEER_CONNECTION_MONITOR_CANDIDATE_RE);
  if (candidateMatches) {
    candidate = {
      'foundation': candidateMatches[1],
      'componentId': parseInt(candidateMatches[2]),
      'transport': candidateMatches[3].toUpperCase(),
      'priority': parseInt(candidateMatches[4]),
      'address': candidateMatches[5],
      'port': parseInt(candidateMatches[6]),
      'type': candidateMatches[7]
    };
    if (candidateMatches[9]) {
      candidate.relatedAddress = candidateMatches[9];
    }
    if (!isNaN(candidateMatches[10])) {
      candidate.relatedPort = parseInt(candidateMatches[10]);
    }
    if (candidateMatches[12]) {
      candidate.tcpType = candidateMatches[12];
    } else if (candidate.transport === 'TCP') {
      if (candidate.port === 0 || candidate.port === 9) {
        candidate.tcpType = 'active';
        candidate.port = 9;
      } else {
        return;
      }
    }
  }
  return candidate;
}

function reportCandidate(formatter, identities, rtcicecandidate, localOrRemote) {
  var candidate = parseCandidateString(rtcicecandidate.candidate);
  if (!candidate) {
    return;
  }
  var report = {
    sourceId: 'candidates',
    localOrRemote: localOrRemote
  };
  report = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_common_utils__["assign"])(report, candidate);
  reportGenericStat(formatter, identities, report);
}

var PEER_CONNECTION_MONITOR_INTERNAL_MS = 1000;
var PEER_CONNECTION_MONITOR_ICE_CHECKING_TIMEOUT_MS = 15000;

function attachPeerConnectionMonitor(pc, formatter, reportIntervalMs) {
  var tag = 'stats-monitor';
  var callSucceeded = null;

  var reportInterval = 0;
  reportIntervalMs = reportIntervalMs || PEER_CONNECTION_MONITOR_INTERNAL_MS;

  var identities = {
    isRelay: false,
    pcId: pc.id
  };

  pc.addEventListener('signalingstatechange', function () {
    if (pc.signalingState === 'closed') {
      __WEBPACK_IMPORTED_MODULE_1_common_log__["default"].debug(tag, 'stopped gather stats for ' + pc.id);
      return clearInterval(reportInterval);
    }

    if (pc._pc.localDescription) {
      identities = parseIdentities(pc._pc.localDescription.sdp, identities);
    }
    if (pc._pc.remoteDescription) {
      identities = parseIdentities(pc._pc.remoteDescription.sdp, identities);
    }
  });

  var normalizePeerConnectionStats = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_webrtc_statsNormalizer__["a" /* default */])();
  var iceCheckingTimeout;

  pc.addEventListener('iceconnectionstatechange', function () {
    var iceConnectionState = pc.iceConnectionState;
    reportGenericStat(formatter, identities, {
      sourceId: 'iceConnectionState',
      iceConnectionState: iceConnectionState
    });
    if (iceCheckingTimeout) {
      clearTimeout(iceCheckingTimeout);
      iceCheckingTimeout = null;
    }
    if (callSucceeded === null) {
      if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
        callSucceeded = true;
        reportGenericStat(formatter, identities, {
          sourceId: 'events',
          eventType: 'callSetupResult',
          callSucceeded: true
        });

        pc.getStats(null).then(function (stats) {
          var normalizedStats = normalizePeerConnectionStats(stats, identities);
          for (var i in normalizedStats) {
            var stat = normalizedStats[i];
            if ('localIpAddress' in stat) {
              reportGenericStat(formatter, identities, stat);
              if ('localCandidateType' in stat) {
                identities.isRelay = stat.localCandidateType === 'relayed';
              }
            }
          }
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_1_common_log__["default"].warning(tag, 'getStats error:', error);
        });
      }
      if (iceConnectionState === 'failed') {
        callSucceeded = false;
        reportGenericStat(formatter, identities, {
          sourceId: 'events',
          eventType: 'callSetupResult',
          callSucceeded: false
        });
      }
      if (iceConnectionState === 'checking' && !iceCheckingTimeout) {
        iceCheckingTimeout = setTimeout(function () {
          callSucceeded = false;
          reportGenericStat(formatter, identities, {
            sourceId: 'events',
            eventType: 'callSetupResult',
            callSucceeded: false
          });
        }, PEER_CONNECTION_MONITOR_ICE_CHECKING_TIMEOUT_MS);
      }
    }
  });

  pc.addEventListener('icecandidate', function (event) {
    if (!event.candidate) {
      return;
    }
    reportCandidate(formatter, identities, event.candidate, 'local');
  });

  var realAddIceCandidate = pc.addIceCandidate;
  function addIceCandidate(candidate) {
    reportCandidate(formatter, identities, candidate, 'remote');
    return realAddIceCandidate.call(pc, candidate);
  }
  pc.addIceCandidate = addIceCandidate;

  reportInterval = setInterval(function () {
    pc.getStats(null).then(function (stats) {
      var normalizedStats = normalizePeerConnectionStats(stats, identities);
      formatter.handleStats(normalizedStats);
    }).catch(function (error) {
      __WEBPACK_IMPORTED_MODULE_1_common_log__["default"].warning(tag, 'getStats error:', error);
    });
  }, reportIntervalMs);
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCandidateInfo;
/* harmony export (immutable) */ __webpack_exports__["c"] = filterSdpCandidates;
/* harmony export (immutable) */ __webpack_exports__["d"] = workaroundSdpBundleBug;
/* harmony export (immutable) */ __webpack_exports__["e"] = extractApplicationBlock;
/* harmony export (immutable) */ __webpack_exports__["i"] = injectApplicationBlock;
/* harmony export (immutable) */ __webpack_exports__["f"] = readMediaModeUnions;
/* harmony export (immutable) */ __webpack_exports__["g"] = overrideMediaModes;
/* harmony export (immutable) */ __webpack_exports__["h"] = rewriteBundleAttribute;
/* harmony export (immutable) */ __webpack_exports__["b"] = disableSendBandwidthEstimation;
/* harmony export (immutable) */ __webpack_exports__["j"] = removeChromeRetransmission;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_log__ = __webpack_require__(3);






var TAG = 'peer-connection';

var candidateRegExp = new RegExp('^candidate:(\\d+) (\\d) (UDP|TCP) ([\\d\\.]*) ([\\d\\.a-f\\:]*) (\\d*)' + ' typ ([a-z]*)( raddr ([\\d\\.a-f\\:]*) rport (\\d*))?' + '( tcptype (active|passive|so))?(.*)$', 'i');
var bundleAttributeRegExp = new RegExp('^a=group:BUNDLE (.*)$', 'mi');

/**
 * @typedef IceCandidateInfo
 *
 * An object containing information about an ICE candidate.
 *
 * More information can be found in [RFC 5245](https://tools.ietf.org/html/rfc5245) and
 * [RFC 6544](https://tools.ietf.org/html/rfc6544).
 *
 * @property {string} foundation - The candidate foundation.
 * @property {number} componentId - The candidate component id, will almost always be 1 because of RTCP multiplexing.
 * @property {string} transport - The transport used, `'TCP'` or `'UDP'`.
 * @property {number} priority - The candidate priority.
 * @property {string} address - The candidate address.
 * @property {number} port - The candidate port.
 * @property {string} type - The candidate type, `'host'`, `'srflx'`, `'prflx'`, or `'relay'`.
 * @property {string} candidate - The original candidate line, always without attribute prefix (`a=`).
 * @property {string} origin - The origin of the candidate, `'local'` or `'remote'`.
 * @property {string} [relatedAddress] - The candidate related address, not used in host candidates.
 * @property {number} [relatedPort] - The candidate related port, not used in host candidates.
 * @property {string} [tcpType] - The candidate tcp type, `'active'`, `'passive'`, simultaneous-open, `'so'`.
 */

function parseCandidateInfo(line, origin) {
  var match = line.match(candidateRegExp);
  if (!match) {
    throw new Error('Could not parse ' + origin + ' ice candidate: ' + line);
  }
  var info = {
    foundation: match[1],
    componentId: parseInt(match[2]),
    transport: match[3].toUpperCase(),
    priority: parseInt(match[4]),
    address: match[5],
    port: parseInt(match[6]),
    type: match[7],
    candidate: line,
    origin: origin
  };
  if (match[9]) {
    info.relatedAddress = match[9];
  }
  if (!isNaN(match[10])) {
    info.relatedPort = parseInt(match[10]);
  }
  if (match[12]) {
    info.tcpType = match[12];
  } else if (info.transport === 'TCP') {
    if (info.port === 0 || info.port === 9) {
      info.tcpType = 'active';
      info.port = 9;
    } else {
      return;
    }
  }
  return info;
}

function filterSdpCandidates(sdp, filter, origin) {
  if (!sdp) {
    return sdp;
  }
  return sdp.split(/\r\n/).filter(function (line) {
    if (line.indexOf('a=candidate:') === 0) {
      try {
        var candidate = line.slice(2);
        var info = parseCandidateInfo(candidate, origin);
        if (!filter(info)) {
          __WEBPACK_IMPORTED_MODULE_3_common_log__["default"].verbose(TAG, 'ignored candidate due to being filtered out: ' + candidate);
          return false;
        }
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_3_common_log__["default"].error(TAG, 'ignoring candidate, error was thrown in candidate filter: ' + error);
        return false;
      }
    }
    return true;
  }).join('\r\n');
}

function workaroundSdpBundleBug(sdp) {
  if (sdp.match(bundleAttributeRegExp)) {
    // If the SDP already has a group attribute, we don't need to do anything
    return sdp;
  }
  return rewriteBundleAttribute(sdp);
}

function extractApplicationBlock(sdp) {
  var _sdp$split = sdp.split(blockSplitRegExp),
      _sdp$split2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split),
      sessionBlock = _sdp$split2[0],
      mediaBlocks = _sdp$split2.slice(1);

  var applicationMBlockIndex = -1;
  for (var index in mediaBlocks) {
    if (mediaBlocks[index].indexOf('m=application') === 0) {
      applicationMBlockIndex = +index;
      break;
    }
  }

  if (applicationMBlockIndex === -1) {
    return [sdp, null];
  }

  var _ref = mediaBlocks[applicationMBlockIndex].match(/a=mid:(.*)/mi) || [],
      _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
      applicationMId = _ref2[1];

  if (!applicationMId) {
    throw new Error('sdp application block does not have an mId');
  }

  var newSessionBlock = sessionBlock.replace(bundleAttributeRegExp, function (_, mIdsStr) {
    var mIds = mIdsStr.split(' ');
    var index = mIds.indexOf(applicationMId);
    if (index === -1) {
      throw new Error('sdp group:BUNDLE attribute did not contain application block mId');
    }
    mIds.splice(index, 1);
    return 'a=group:BUNDLE ' + mIds.join(' ');
  });

  var applicationMBlock = mediaBlocks.splice(applicationMBlockIndex, 1)[0];
  var newSdp = newSessionBlock + mediaBlocks.join('');
  return [newSdp, {
    block: applicationMBlock,
    index: applicationMBlockIndex,
    applicationMId: applicationMId,
    needsInteropTranslation: !!mediaBlocks.length
  }];
}

function injectApplicationBlock(sdp, extractedBlock) {
  if (!extractedBlock) {
    return sdp;
  }

  var _sdp$split3 = sdp.split(blockSplitRegExp),
      _sdp$split4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split3),
      sessionBlock = _sdp$split4[0],
      mediaBlocks = _sdp$split4.slice(1);

  var newSessionBlock = sessionBlock.replace(bundleAttributeRegExp, function (_, mIdsStr) {
    var mIds = mIdsStr ? mIdsStr.split(' ') : [];
    mIds.splice(extractedBlock.index, 0, extractedBlock.applicationMId);
    return 'a=group:BUNDLE ' + mIds.join(' ');
  });

  mediaBlocks.splice(extractedBlock.index, 0, extractedBlock.block);
  return newSessionBlock + mediaBlocks.join('');
}

var modeRegExp = new RegExp('^a=(inactive|recvonly|sendonly|sendrecv)$', 'mi');
var blockSplitRegExp = new RegExp('(?=m=(?:audio|video|application))', 'i');
var mediaTypeRegExp = new RegExp('^m=(audio|video|application)', 'i');

var modeValues = {
  inactive: 0,
  sendonly: 1,
  recvonly: 2,
  sendrecv: 3
};
var modeNames = {
  0: 'inactive',
  1: 'sendonly',
  2: 'recvonly',
  3: 'sendrecv'
};

function readMediaModeUnions(sdp) {
  var _sdp$split5 = sdp.split(blockSplitRegExp),
      _sdp$split6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split5),
      sessionBlock = _sdp$split6[0],
      mediaBlocks = _sdp$split6.slice(1);
  // the mode above the media blocks is used if a media block doesn't have it's own mode


  var _ref3 = sessionBlock.match(modeRegExp) || [],
      _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
      _ref4$ = _ref4[1],
      defaultModeName = _ref4$ === undefined ? 'sendrecv' : _ref4$;

  var audioModeValue = modeValues.inactive;
  var videoModeValue = modeValues.inactive;
  var applicationModeValue = modeValues.inactive;

  mediaBlocks.forEach(function (mediaBlock) {
    var _mediaBlock$match = mediaBlock.match(mediaTypeRegExp),
        _mediaBlock$match2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_mediaBlock$match, 2),
        mediaType = _mediaBlock$match2[1];

    var _ref5 = mediaBlock.match(modeRegExp) || [],
        _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
        _ref6$ = _ref6[1],
        modeName = _ref6$ === undefined ? defaultModeName : _ref6$;

    var modeValue = modeValues[modeName];
    if (mediaType === 'audio') {
      audioModeValue |= modeValue;
    } else if (mediaType === 'video') {
      videoModeValue |= modeValue;
    } else if (mediaType === 'application') {
      applicationModeValue |= modeValue;
    }
  });

  return {
    audio: modeNames[audioModeValue],
    video: modeNames[videoModeValue],
    application: modeNames[applicationModeValue]
  };
}

function overrideMediaModes(sdp, mediaModes) {
  var _sdp$split7 = sdp.split(blockSplitRegExp),
      _sdp$split8 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split7),
      sessionBlock = _sdp$split8[0],
      mediaBlocks = _sdp$split8.slice(1);

  mediaBlocks = mediaBlocks.map(function (mediaBlock) {
    var _mediaBlock$match3 = mediaBlock.match(mediaTypeRegExp),
        _mediaBlock$match4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_mediaBlock$match3, 2),
        mediaType = _mediaBlock$match4[1];

    var modeName = mediaModes[mediaType] || modeNames[3]; // default to sendrecv
    return mediaBlock.replace(modeRegExp, 'a=' + modeName);
  });

  return [sessionBlock].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(mediaBlocks)).join('');
}

// This rewrites the bundle attribute according to the actual media blocks in the sdp
function rewriteBundleAttribute(sdp) {
  var _sdp$split9 = sdp.split(blockSplitRegExp),
      _sdp$split10 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split9),
      sessionBlock = _sdp$split10[0],
      mediaBlocks = _sdp$split10.slice(1);

  var mIds = mediaBlocks.map(function (mediaBlock) {
    var _ref7 = mediaBlock.match(/^a=mid:(.+)$/mi) || [],
        _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
        mId = _ref8[1];

    if (!mId) {
      var _mediaBlock$match5 = mediaBlock.match(mediaTypeRegExp),
          _mediaBlock$match6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_mediaBlock$match5, 2),
          mediaType = _mediaBlock$match6[1];

      throw new Error('media block of type ' + mediaType + ' did not contain mid attribute');
    }
    return mId;
  });

  mIds.unshift(''); // conditional padding weith space after BUNDLE
  var bundleAttribute = 'a=group:BUNDLE' + mIds.join(' ');

  if (sessionBlock.match(bundleAttributeRegExp)) {
    sessionBlock = sessionBlock.replace(bundleAttributeRegExp, bundleAttribute);
  } else {
    sessionBlock += bundleAttribute + '\r\n';
  }
  return [sessionBlock].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(mediaBlocks)).join('');
}

var bweRegExp = new RegExp('a=extmap:5 ' + 'http://www\\.ietf\\.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' + '\r\n', 'gi');

// Chrome 58 and 59 has a broken bandwidth estimation implementation that
// doesn't detect when packets are sent using TURN/TCP. This results in
// the estimated bandwidth to always end up at 10kbps.
// The fix we use is to always disable the new bandwidth estimation algorithm
// for all connections.
function disableSendBandwidthEstimation(sdp) {
  return sdp.replace(bweRegExp, '');
}

var ssrcGroupRegExp = new RegExp('a=ssrc-group:.+\\s\\d+\\s(\\d+)' + '\r\n', 'gi');
var rtxPayloadTypeRegExp = new RegExp('a=(?:fmtp:\\d+\\sapt=\\d+|rtpmap:\\d+\\srtx/\\d+)' + '\r\n', 'gi');

// Removes retransmission information from a Chrome-style (Plan B) SDPs.
// This includes rtpmap and fmtp attributes with rtx/apt values, ssrc-group
// attributes, and the ssrc attributes for the ssrcs used for retransmission.
function removeChromeRetransmission(sdp) {
  var _sdp$split11 = sdp.split(blockSplitRegExp),
      _sdp$split12 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toArray___default()(_sdp$split11),
      sessionBlock = _sdp$split12[0],
      mediaBlocks = _sdp$split12.slice(1);

  var modifiedMediaBlocks = mediaBlocks.map(function (mediaBlock) {
    var _mediaBlock$match7 = mediaBlock.match(mediaTypeRegExp),
        _mediaBlock$match8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_mediaBlock$match7, 2),
        mediaType = _mediaBlock$match8[1];

    if (mediaType !== 'video') {
      return mediaBlock;
    }
    var removedSsrcs = [];

    var withoutSsrcGroups = mediaBlock.replace(ssrcGroupRegExp, function (_, ssrc) {
      // We assume the second SSRC is used for retransmission
      removedSsrcs.push(ssrc);
      return '';
    });
    var ssrcRegExp = new RegExp('a=ssrc:(?:' + removedSsrcs.join('|') + ')\\s.*\r\n', 'gi');
    var withoutSsrcs = withoutSsrcGroups.replace(ssrcRegExp, '');
    var withoutRtxPayloadTypes = withoutSsrcs.replace(rtxPayloadTypeRegExp, '');
    return withoutRtxPayloadTypes;
  });

  return [sessionBlock].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(modifiedMediaBlocks)).join('');
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = StatsFormatter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_utils__ = __webpack_require__(13);




function StatsFormatter(context, reporter) {
  this.context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_utils__["assign"])({}, context);
  this.context.contextId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_utils__["randomString"])(16);
  this.context.userAgent = navigator.userAgent;
  this.reporter = reporter;
  this.tag = 'stats-formatter';
}

StatsFormatter.prototype.setPeerId = function (peerId) {
  this.context.peerId = peerId;
};

StatsFormatter.prototype.handleStats = function (stats) {
  for (var i in stats) {
    stats[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_utils__["assign"])(stats[i], this.context);
  }
  this.reporter.handleStats(stats);
};

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPeerConnectionStatNormalizer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_utils__ = __webpack_require__(13);





var STATS_OBJ_REGEX_FIREFOX = /(in|out)bound_(rtp|rtcp)_(audio|video)_(\d+)/;
var STATS_KEY_BLACKLIST_FIREFOX = ['id', 'type', 'isRemote', 'remoteId'];

var STATS_OBJ_REGEX_CHROME = /(ssrc)_(\d+)_(recv|send)/;
var STATS_KEY_BLACKLIST_CHROME = ['id', 'type', 'googTrackId', 'transportId'];

function normalizeStatsMatchFirefox(statKey, stat) {
  var sample = {};
  var matchFirefox = statKey.match(STATS_OBJ_REGEX_FIREFOX);
  if (matchFirefox) {
    switch (matchFirefox[1]) {
      case 'in':
        sample.role = 'receiver';
        break;
      case 'out':
        sample.role = 'sender';
        break;
      default:
        __WEBPACK_IMPORTED_MODULE_0_common_log__["default"].warning('stats-normalizer', 'No role match!');
        return null;
    }
    switch (matchFirefox[2]) {
      case 'rtp':
        sample.reportType = sample.role === 'receiver' ? 'receiver' : 'sender';
        break;
      case 'rtcp':
        sample.reportType = sample.role === 'receiver' ? 'sender' : 'receiver';
        break;
      default:
        __WEBPACK_IMPORTED_MODULE_0_common_log__["default"].warning('stats-normalizer', 'No reportType match!');
        return null;
    }

    for (var k in stat) {
      if (STATS_KEY_BLACKLIST_FIREFOX.indexOf(k) >= 0) {
        continue;
      }
      sample[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_utils__["maybeConvertStringToNumber"])(stat[k].toString());
    }
    return sample;
  }
}

function normalizeStatsMatchChrome(statKey, stat) {
  var sample = {};
  var matchChrome = statKey.match(STATS_OBJ_REGEX_CHROME);
  if (matchChrome) {
    switch (matchChrome[3]) {
      case 'recv':
        sample.role = 'receiver';
        sample.reportType = 'receiver';
        break;
      case 'send':
        sample.role = 'sender';
        sample.reportType = 'sender';
        break;
      default:
        __WEBPACK_IMPORTED_MODULE_0_common_log__["default"].warning('stats-normalizer', 'No role match!');
        return null;
    }

    for (var k in stat) {
      if (STATS_KEY_BLACKLIST_CHROME.indexOf(k) >= 0) {
        continue;
      }
      sample[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_utils__["maybeConvertStringToNumber"])(stat[k].toString());
      // FIXME - set the mediaType from an ssrc lookup after parsing the sdp
      if (k === 'audioInputLevel' || k === 'audioOutputLevel') {
        sample.mediaType = 'audio';
      } else if (k === 'googFrameHeightReceived' || k === 'googFrameHeightSent') {
        sample.mediaType = 'video';
      } else {
        continue;
      }
    }
    return sample;
  }
}

var candidatePairKeys = ['portNumber', 'ipAddress', 'transport', 'candidateType'];
function assignCandidatePairValues(stat, localOrRemote, sample) {
  for (var i in candidatePairKeys) {
    var key = candidatePairKeys[i];
    if (key in stat) {
      var destKey = localOrRemote + key.charAt(0).toUpperCase() + key.slice(1);
      sample[destKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_utils__["maybeConvertStringToNumber"])(stat[key]);
    }
  }
  return sample;
}

function getSelectedPairSampleFromStats(stats, stat, browser) {
  var localCandidateId = stat.localCandidateId;
  var remoteCandidateId = stat.remoteCandidateId;
  var localStat = stats[localCandidateId];
  var remoteStat = stats[remoteCandidateId];

  var sample = {};

  sample.sourceId = 'selectedPair';

  sample = assignCandidatePairValues(localStat, 'local', sample);
  sample = assignCandidatePairValues(remoteStat, 'remote', sample);
  if (browser === 'chrome') {
    sample.localPriority = +localStat.priority;
    sample.remotePriority = +remoteStat.priority;
  }
  if (browser === 'firefox') {
    sample.localPriority = +stat.priority;
    sample.remotePriority = +stat.priority;
  }

  return sample;
}

function createPeerConnectionStatNormalizer() {
  var selectedPairs = {};

  function normalizeSsrcStats(stats, identities) {
    var samples = [];
    var sampleTsMs = Date.now();

    for (var i in stats) {
      var stat = stats[i];
      var sample = null;
      var ssrc = stat.ssrc;
      if (!ssrc) {
        continue;
      }
      var identity = identities[ssrc];
      if (!identity) {
        __WEBPACK_IMPORTED_MODULE_0_common_log__["default"].warning('stat-normalizer', 'got stat without identity:', stat);
        continue;
      }

      if (__WEBPACK_IMPORTED_MODULE_1_common_utils__["isFirefox"]) {
        sample = normalizeStatsMatchFirefox(i, stat);
      }
      if (__WEBPACK_IMPORTED_MODULE_1_common_utils__["isChrome"]) {
        sample = normalizeStatsMatchChrome(i, stat);
      }
      if (!sample) {
        continue;
      }

      if (sample.timestamp) {
        sample.getStatsTs = sample.timestamp;
        delete sample.timestamp;
      }

      sample.timestamp = sampleTsMs;
      sample.pcId = identities.pcId;
      sample.isRelay = identities.isRelay;

      sample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_utils__["assign"])(sample, identity);
      sample.sourceId = 'ssrc-' + ssrc;

      samples.push(sample);
    }

    return samples;
  }

  function normalizeSelectedPairStats(stats, identities) {
    var samples = [];
    var sampleTsMs = Date.now();
    var newSelectedPairs = {};

    for (var i in stats) {
      var stat = stats[i];
      var sample = null;

      if (stat.type === 'candidatepair' && stat.selected === true && stat.state === 'succeeded') {
        sample = getSelectedPairSampleFromStats(stats, stat, 'firefox');
      }
      if (stat.type === 'googCandidatePair' && stat.googActiveConnection === 'true') {
        sample = getSelectedPairSampleFromStats(stats, stat, 'chrome');
      }

      if (!sample) {
        continue;
      }

      sample.timestamp = sampleTsMs;
      sample.pcId = identities.pcId;
      sample.isRelay = identities.isRelay;

      var newSelectedPair = stat.localCandidateId + stat.remoteCandidateId;
      if (!(newSelectedPair in newSelectedPairs)) {
        newSelectedPairs[newSelectedPair] = [];
      }
      newSelectedPairs[newSelectedPair].push(sample);
    }

    for (var oldPair in selectedPairs) {
      if (!(oldPair in newSelectedPairs)) {
        delete selectedPairs[oldPair];
      }
    }
    for (var newPair in newSelectedPairs) {
      if (!(newPair in selectedPairs)) {
        selectedPairs[newPair] = true;
        [].push.apply(samples, newSelectedPairs[newPair]);
      }
    }

    return samples;
  }

  return function normalizePeerConnectionStats(stats, identities) {
    var samples = [];

    samples = normalizeSsrcStats(stats, identities);
    [].push.apply(samples, normalizeSelectedPairStats(stats, identities));

    return samples;
  };
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(203);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperties: __webpack_require__(95)});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*! adapterjs - v0.14.3-6d236da - 2017-05-24 */
var AdapterJS=AdapterJS||{};AdapterJS.options=AdapterJS.options||{},AdapterJS.VERSION="0.14.3-6d236da",AdapterJS.onwebrtcready=AdapterJS.onwebrtcready||function(isUsingPlugin){},AdapterJS._onwebrtcreadies=[],AdapterJS.webRTCReady=function(baseCallback){if("function"!=typeof baseCallback)throw new Error("Callback provided is not a function");var callback=function(){"function"==typeof window.require&&"function"==typeof AdapterJS._defineMediaSourcePolyfill&&AdapterJS._defineMediaSourcePolyfill(),baseCallback(null!==AdapterJS.WebRTCPlugin.plugin)};!0===AdapterJS.onwebrtcreadyDone?callback():AdapterJS._onwebrtcreadies.push(callback)},AdapterJS.WebRTCPlugin=AdapterJS.WebRTCPlugin||{},AdapterJS.WebRTCPlugin.pluginInfo=AdapterJS.WebRTCPlugin.pluginInfo||{prefix:"Tem",plugName:"TemWebRTCPlugin",pluginId:"plugin0",type:"application/x-temwebrtcplugin",onload:"__TemWebRTCReady0",portalLink:"https://skylink.io/plugin/",downloadLink:null,companyName:"Temasys",downloadLinks:{mac:"https://bit.ly/webrtcpluginpkg",win:"https://bit.ly/webrtcpluginmsi"}},"undefined"!=typeof AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks&&null!==AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks&&(navigator.platform.match(/^Mac/i)?AdapterJS.WebRTCPlugin.pluginInfo.downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks.mac:navigator.platform.match(/^Win/i)&&(AdapterJS.WebRTCPlugin.pluginInfo.downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks.win)),AdapterJS.WebRTCPlugin.TAGS={NONE:"none",AUDIO:"audio",VIDEO:"video"},AdapterJS.WebRTCPlugin.pageId=Math.random().toString(36).slice(2),AdapterJS.WebRTCPlugin.plugin=null,AdapterJS.WebRTCPlugin.setLogLevel=null,AdapterJS.WebRTCPlugin.defineWebRTCInterface=null,AdapterJS.WebRTCPlugin.isPluginInstalled=null,AdapterJS.WebRTCPlugin.pluginInjectionInterval=null,AdapterJS.WebRTCPlugin.injectPlugin=null,AdapterJS.WebRTCPlugin.PLUGIN_STATES={NONE:0,INITIALIZING:1,INJECTING:2,INJECTED:3,READY:4},AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.NONE,AdapterJS.onwebrtcreadyDone=!1,AdapterJS.WebRTCPlugin.PLUGIN_LOG_LEVELS={NONE:"NONE",ERROR:"ERROR",WARNING:"WARNING",INFO:"INFO",VERBOSE:"VERBOSE",SENSITIVE:"SENSITIVE"},AdapterJS.WebRTCPlugin.WaitForPluginReady=null,AdapterJS.WebRTCPlugin.callWhenPluginReady=null,__TemWebRTCReady0=function(){if("complete"===document.readyState)AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY,AdapterJS.maybeThroughWebRTCReady();else var timer=setInterval(function(){"complete"===document.readyState&&(clearInterval(timer),AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY,AdapterJS.maybeThroughWebRTCReady())},100)},AdapterJS.maybeThroughWebRTCReady=function(){AdapterJS.onwebrtcreadyDone||(AdapterJS.onwebrtcreadyDone=!0,AdapterJS._onwebrtcreadies.length?AdapterJS._onwebrtcreadies.forEach(function(callback){"function"==typeof callback&&callback(null!==AdapterJS.WebRTCPlugin.plugin)}):"function"==typeof AdapterJS.onwebrtcready&&AdapterJS.onwebrtcready(null!==AdapterJS.WebRTCPlugin.plugin))},AdapterJS.TEXT={PLUGIN:{REQUIRE_INSTALLATION:"This website requires you to install a WebRTC-enabling plugin to work on this browser.",NOT_SUPPORTED:"Your browser does not support WebRTC.",BUTTON:"Install Now"},REFRESH:{REQUIRE_REFRESH:"Please refresh page",BUTTON:"Refresh Page"}},AdapterJS._iceConnectionStates={starting:"starting",checking:"checking",connected:"connected",completed:"connected",done:"completed",disconnected:"disconnected",failed:"failed",closed:"closed"},AdapterJS._iceConnectionFiredStates=[],AdapterJS.isDefined=null,AdapterJS.parseWebrtcDetectedBrowser=function(){var hasMatch=null;if(window.opr&&opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0)hasMatch=navigator.userAgent.match(/OPR\/(\d+)/i)||[],webrtcDetectedBrowser="opera",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=26,webrtcDetectedType="webkit",webrtcDetectedDCSupport="SCTP";else if(navigator.userAgent.match(/Bowser\/[0-9.]*/g)){hasMatch=navigator.userAgent.match(/Bowser\/[0-9.]*/g)||[];var chromiumVersion=parseInt((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./i)||[])[2]||"0",10);webrtcDetectedBrowser="bowser",webrtcDetectedVersion=parseFloat((hasMatch[0]||"0/0").split("/")[1],10),webrtcMinimumVersion=0,webrtcDetectedType="webkit",webrtcDetectedDCSupport=chromiumVersion>30?"SCTP":"RTP"}else if(navigator.userAgent.indexOf("OPiOS")>0)hasMatch=navigator.userAgent.match(/OPiOS\/([0-9]+)\./),webrtcDetectedBrowser="opera",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=0,webrtcDetectedType=null,webrtcDetectedDCSupport=null;else if(navigator.userAgent.indexOf("CriOS")>0)hasMatch=navigator.userAgent.match(/CriOS\/([0-9]+)\./)||[],webrtcDetectedBrowser="chrome",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=0,webrtcDetectedType=null,webrtcDetectedDCSupport=null;else if(navigator.userAgent.indexOf("FxiOS")>0)hasMatch=navigator.userAgent.match(/FxiOS\/([0-9]+)\./)||[],webrtcDetectedBrowser="firefox",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=0,webrtcDetectedType=null,webrtcDetectedDCSupport=null;else if(document.documentMode)hasMatch=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)||[],webrtcDetectedBrowser="IE",webrtcDetectedVersion=parseInt(hasMatch[1],10),webrtcMinimumVersion=9,webrtcDetectedType="plugin",webrtcDetectedDCSupport="SCTP",webrtcDetectedVersion||(hasMatch=/\bMSIE[ :]+(\d+)/g.exec(navigator.userAgent)||[],webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10));else if(window.StyleMedia||navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))hasMatch=navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)||[],webrtcDetectedBrowser="edge",webrtcDetectedVersion=parseFloat((hasMatch[0]||"0/0").split("/")[1],10),webrtcMinimumVersion=13.10547,webrtcDetectedType="ms",webrtcDetectedDCSupport=null;else if("undefined"!=typeof InstallTrigger||navigator.userAgent.indexOf("irefox")>0)hasMatch=navigator.userAgent.match(/Firefox\/([0-9]+)\./)||[],webrtcDetectedBrowser="firefox",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=33,webrtcDetectedType="moz",webrtcDetectedDCSupport="SCTP";else if(window.chrome&&window.chrome.webstore||navigator.userAgent.indexOf("Chrom")>0)hasMatch=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./i)||[],webrtcDetectedBrowser="chrome",webrtcDetectedVersion=parseInt(hasMatch[2]||"0",10),webrtcMinimumVersion=38,webrtcDetectedType="webkit",webrtcDetectedDCSupport=webrtcDetectedVersion>30?"SCTP":"RTP";else if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){hasMatch=navigator.userAgent.match(/version\/(\d+)/i)||[];var isMobile=navigator.userAgent.match(/(iPhone|iPad)/gi)||[];webrtcDetectedBrowser="safari",webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),webrtcMinimumVersion=7,webrtcDetectedType=0===isMobile.length?"plugin":null,webrtcDetectedDCSupport=0===isMobile.length?"SCTP":null}window.webrtcDetectedBrowser=webrtcDetectedBrowser,window.webrtcDetectedVersion=webrtcDetectedVersion,window.webrtcMinimumVersion=webrtcMinimumVersion,window.webrtcDetectedType=webrtcDetectedType,window.webrtcDetectedDCSupport=webrtcDetectedDCSupport},AdapterJS.addEvent=function(elem,evnt,func){elem.addEventListener?elem.addEventListener(evnt,func,!1):elem.attachEvent?elem.attachEvent("on"+evnt,func):elem[evnt]=func},AdapterJS.renderNotificationBar=function(message,buttonText,buttonCallback){if("complete"===document.readyState){var w=window,i=document.createElement("iframe");i.name="adapterjs-alert",i.style.position="fixed",i.style.top="-41px",i.style.left=0,i.style.right=0,i.style.width="100%",i.style.height="40px",i.style.backgroundColor="#ffffe1",i.style.border="none",i.style.borderBottom="1px solid #888888",i.style.zIndex="9999999","string"==typeof i.style.webkitTransition?i.style.webkitTransition="all .5s ease-out":"string"==typeof i.style.transition&&(i.style.transition="all .5s ease-out"),document.body.appendChild(i);var c=i.contentWindow?i.contentWindow:i.contentDocument.document?i.contentDocument.document:i.contentDocument;c.document.open(),c.document.write('<span style="display: inline-block; font-family: Helvetica, Arial,sans-serif; font-size: .9rem; padding: 4px; vertical-align: middle; cursor: default;">'+message+"</span>"),buttonText&&"function"==typeof buttonCallback?(c.document.write('<button id="okay">'+buttonText+'</button><button id="cancel">Cancel</button>'),c.document.close(),AdapterJS.addEvent(c.document.getElementById("okay"),"click",function(e){e.preventDefault();try{e.cancelBubble=!0}catch(error){}buttonCallback(e)}),AdapterJS.addEvent(c.document.getElementById("cancel"),"click",function(e){w.document.body.removeChild(i)})):c.document.close(),setTimeout(function(){"string"==typeof i.style.webkitTransform?i.style.webkitTransform="translateY(40px)":"string"==typeof i.style.transform?i.style.transform="translateY(40px)":i.style.top="0px"},300)}},webrtcDetectedType=null,checkMediaDataChannelSettings=function(peerBrowserAgent,peerBrowserVersion,callback,constraints){if("function"==typeof callback){var beOfferer=!0,isLocalFirefox="firefox"===webrtcDetectedBrowser,isLocalFirefoxInterop="moz"===webrtcDetectedType&&webrtcDetectedVersion>30,isPeerFirefox="firefox"===peerBrowserAgent;if(isLocalFirefox&&isPeerFirefox||isLocalFirefoxInterop)try{delete constraints.mandatory.MozDontOfferDataChannel}catch(error){}else isLocalFirefox&&!isPeerFirefox&&(constraints.mandatory.MozDontOfferDataChannel=!0);if(!isLocalFirefox)for(var prop in constraints.mandatory)constraints.mandatory.hasOwnProperty(prop)&&prop.indexOf("Moz")!==-1&&delete constraints.mandatory[prop];!isLocalFirefox||isPeerFirefox||isLocalFirefoxInterop||(beOfferer=!1),callback(beOfferer,constraints)}},checkIceConnectionState=function(peerId,iceConnectionState,callback){"function"==typeof callback&&(peerId=peerId?peerId:"peer",AdapterJS._iceConnectionFiredStates[peerId]&&iceConnectionState!==AdapterJS._iceConnectionStates.disconnected&&iceConnectionState!==AdapterJS._iceConnectionStates.failed&&iceConnectionState!==AdapterJS._iceConnectionStates.closed||(AdapterJS._iceConnectionFiredStates[peerId]=[]),iceConnectionState=AdapterJS._iceConnectionStates[iceConnectionState],AdapterJS._iceConnectionFiredStates[peerId].indexOf(iceConnectionState)<0&&(AdapterJS._iceConnectionFiredStates[peerId].push(iceConnectionState),iceConnectionState===AdapterJS._iceConnectionStates.connected&&setTimeout(function(){AdapterJS._iceConnectionFiredStates[peerId].push(AdapterJS._iceConnectionStates.done),callback(AdapterJS._iceConnectionStates.done)},1e3),callback(iceConnectionState)))},createIceServer=null,createIceServers=null,MediaStream="function"==typeof MediaStream?MediaStream:null,RTCPeerConnection="function"==typeof RTCPeerConnection?RTCPeerConnection:null,RTCSessionDescription="function"==typeof RTCSessionDescription?RTCSessionDescription:null,RTCIceCandidate="function"==typeof RTCIceCandidate?RTCIceCandidate:null,getUserMedia=null,attachMediaStream=null,reattachMediaStream=null,webrtcDetectedBrowser=null,webrtcDetectedVersion=null,webrtcMinimumVersion=null,!(navigator.mozGetUserMedia||navigator.webkitGetUserMedia||navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))||0===(navigator.userAgent.match(/android/gi)||[]).length&&0===(navigator.userAgent.match(/chrome/gi)||[]).length&&navigator.userAgent.indexOf("Safari/")>0?("object"==typeof console&&"function"==typeof console.log||(console={}||console,console.log=function(arg){},console.info=function(arg){},console.error=function(arg){},console.dir=function(arg){},console.exception=function(arg){},console.trace=function(arg){},console.warn=function(arg){},console.count=function(arg){},console.debug=function(arg){},console.count=function(arg){},console.time=function(arg){},console.timeEnd=function(arg){},console.group=function(arg){},console.groupCollapsed=function(arg){},console.groupEnd=function(arg){}),AdapterJS.parseWebrtcDetectedBrowser(),isIE="IE"===webrtcDetectedBrowser,AdapterJS.WebRTCPlugin.WaitForPluginReady=function(){for(;AdapterJS.WebRTCPlugin.pluginState!==AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY;);},AdapterJS.WebRTCPlugin.callWhenPluginReady=function(callback){if(AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY)callback();else var checkPluginReadyState=setInterval(function(){AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY&&(clearInterval(checkPluginReadyState),callback())},100)},AdapterJS.WebRTCPlugin.setLogLevel=function(logLevel){AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.setLogLevel(logLevel)})},AdapterJS.WebRTCPlugin.injectPlugin=function(){if("complete"===document.readyState&&AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.INITIALIZING){if(AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INJECTING,"IE"===webrtcDetectedBrowser&&webrtcDetectedVersion<=10){var frag=document.createDocumentFragment();for(AdapterJS.WebRTCPlugin.plugin=document.createElement("div"),AdapterJS.WebRTCPlugin.plugin.innerHTML='<object id="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'" type="'+AdapterJS.WebRTCPlugin.pluginInfo.type+'" width="1" height="1"><param name="pluginId" value="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'" /> <param name="windowless" value="false" /> <param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'" /> <param name="onload" value="'+AdapterJS.WebRTCPlugin.pluginInfo.onload+'" /><param name="tag" value="'+AdapterJS.WebRTCPlugin.TAGS.NONE+'" />'+(AdapterJS.options.getAllCams?'<param name="forceGetAllCams" value="True" />':"")+"</object>";AdapterJS.WebRTCPlugin.plugin.firstChild;)frag.appendChild(AdapterJS.WebRTCPlugin.plugin.firstChild);document.body.appendChild(frag),AdapterJS.WebRTCPlugin.plugin=document.getElementById(AdapterJS.WebRTCPlugin.pluginInfo.pluginId)}else AdapterJS.WebRTCPlugin.plugin=document.createElement("object"),AdapterJS.WebRTCPlugin.plugin.id=AdapterJS.WebRTCPlugin.pluginInfo.pluginId,isIE?(AdapterJS.WebRTCPlugin.plugin.width="1px",AdapterJS.WebRTCPlugin.plugin.height="1px"):(AdapterJS.WebRTCPlugin.plugin.width="0px",AdapterJS.WebRTCPlugin.plugin.height="0px"),AdapterJS.WebRTCPlugin.plugin.type=AdapterJS.WebRTCPlugin.pluginInfo.type,AdapterJS.WebRTCPlugin.plugin.innerHTML='<param name="onload" value="'+AdapterJS.WebRTCPlugin.pluginInfo.onload+'"><param name="pluginId" value="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'"><param name="windowless" value="false" /> '+(AdapterJS.options.getAllCams?'<param name="forceGetAllCams" value="True" />':"")+'<param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'"><param name="tag" value="'+AdapterJS.WebRTCPlugin.TAGS.NONE+'" />',document.body.appendChild(AdapterJS.WebRTCPlugin.plugin);AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INJECTED}},AdapterJS.WebRTCPlugin.isPluginInstalled=function(comName,plugName,plugType,installedCb,notInstalledCb){if(isIE){try{new ActiveXObject(comName+"."+plugName)}catch(e){return void notInstalledCb()}installedCb()}else{for(var pluginArray=navigator.mimeTypes,i=0;i<pluginArray.length;i++)if(pluginArray[i].type.indexOf(plugType)>=0)return void installedCb();notInstalledCb()}},AdapterJS.WebRTCPlugin.defineWebRTCInterface=function(){if(AdapterJS.WebRTCPlugin.pluginState!==AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY){AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INITIALIZING,AdapterJS.isDefined=function(variable){return null!==variable&&void 0!==variable},createIceServer=function(url,username,password){var iceServer=null,urlParts=url.split(":");return 0===urlParts[0].indexOf("stun")?iceServer={url:url,hasCredentials:!1}:0===urlParts[0].indexOf("turn")&&(iceServer={url:url,hasCredentials:!0,credential:password,username:username}),iceServer},createIceServers=function(urls,username,password){for(var iceServers=[],i=0;i<urls.length;++i)iceServers.push(createIceServer(urls[i],username,password));return iceServers},RTCSessionDescription=function(info){return AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.ConstructSessionDescription(info.type,info.sdp)},MediaStream=function(mediaStreamOrTracks){return AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.MediaStream(mediaStreamOrTracks)},RTCPeerConnection=function(servers,constraints){if(void 0!==servers&&null!==servers&&!Array.isArray(servers.iceServers))throw new Error("Failed to construct 'RTCPeerConnection': Malformed RTCConfiguration");if("undefined"!=typeof constraints&&null!==constraints){var invalidConstraits=!1;if(invalidConstraits|="object"!=typeof constraints,invalidConstraits|=constraints.hasOwnProperty("mandatory")&&void 0!==constraints.mandatory&&null!==constraints.mandatory&&constraints.mandatory.constructor!==Object,invalidConstraits|=constraints.hasOwnProperty("optional")&&void 0!==constraints.optional&&null!==constraints.optional&&!Array.isArray(constraints.optional))throw new Error("Failed to construct 'RTCPeerConnection': Malformed constraints object")}AdapterJS.WebRTCPlugin.WaitForPluginReady();var iceServers=null;if(servers&&Array.isArray(servers.iceServers)){iceServers=servers.iceServers;for(var i=0;i<iceServers.length;i++)iceServers[i].urls&&!iceServers[i].url&&(iceServers[i].url=iceServers[i].urls),iceServers[i].hasCredentials=AdapterJS.isDefined(iceServers[i].username)&&AdapterJS.isDefined(iceServers[i].credential)}if(AdapterJS.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION&&AdapterJS.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION>1)return iceServers&&(servers.iceServers=iceServers),AdapterJS.WebRTCPlugin.plugin.PeerConnection(servers);var mandatory=constraints&&constraints.mandatory?constraints.mandatory:null,optional=constraints&&constraints.optional?constraints.optional:null;return AdapterJS.WebRTCPlugin.plugin.PeerConnection(AdapterJS.WebRTCPlugin.pageId,iceServers,mandatory,optional)},MediaStreamTrack=function(){},MediaStreamTrack.getSources=function(callback){AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.GetSources(callback)})};var constraintsToPlugin=function(c){if("object"!=typeof c||c.mandatory||c.optional)return c;var cc={};return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key){if("string"==typeof c[key])return void(cc[key]=c[key]);var r="object"==typeof c[key]?c[key]:{ideal:c[key]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var oldname=function(prefix,name){return prefix?prefix+name.charAt(0).toUpperCase()+name.slice(1):"deviceId"===name?"sourceId":name};if("sourceId"===oldname("",key)&&void 0!==r.exact&&(r.ideal=r.exact,r.exact=void 0),void 0!==r.ideal){cc.optional=cc.optional||[];var oc={};"number"==typeof r.ideal?(oc[oldname("min",key)]=r.ideal,cc.optional.push(oc),oc={},oc[oldname("max",key)]=r.ideal,cc.optional.push(oc)):(oc[oldname("",key)]=r.ideal,cc.optional.push(oc))}void 0!==r.exact&&"number"!=typeof r.exact?(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname("",key)]=r.exact):["min","max"].forEach(function(mix){void 0!==r[mix]&&(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname(mix,key)]=r[mix])})}}),c.advanced&&(cc.optional=(cc.optional||[]).concat(c.advanced)),cc};getUserMedia=function(constraints,successCallback,failureCallback){var cc={};cc.audio=!!constraints.audio&&constraintsToPlugin(constraints.audio),cc.video=!!constraints.video&&constraintsToPlugin(constraints.video),AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.getUserMedia(cc,successCallback,failureCallback)})},window.navigator.getUserMedia=getUserMedia,navigator.mediaDevices||"undefined"==typeof Promise||(requestUserMedia=function(constraints){return new Promise(function(resolve,reject){try{getUserMedia(constraints,resolve,reject)}catch(error){reject(error)}})},navigator.mediaDevices={getUserMedia:requestUserMedia,enumerateDevices:function(){return new Promise(function(resolve){var kinds={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],id:device.id,deviceId:device.id,groupId:""}}))})})}}),attachMediaStream=function(element,stream){if(element&&element.parentNode){var streamId;null===stream?streamId="":("undefined"!=typeof stream.enableSoundTracks&&stream.enableSoundTracks(!0),streamId=stream.id);var elementId=0===element.id.length?Math.random().toString(36).slice(2):element.id,nodeName=element.nodeName.toLowerCase();if("object"!==nodeName){var tag;switch(nodeName){case"audio":tag=AdapterJS.WebRTCPlugin.TAGS.AUDIO;break;case"video":tag=AdapterJS.WebRTCPlugin.TAGS.VIDEO;break;default:tag=AdapterJS.WebRTCPlugin.TAGS.NONE}var frag=document.createDocumentFragment(),temp=document.createElement("div"),classHTML="";for(element.className?classHTML='class="'+element.className+'" ':element.attributes&&element.attributes.class&&(classHTML='class="'+element.attributes.class.value+'" '),temp.innerHTML='<object id="'+elementId+'" '+classHTML+'type="'+AdapterJS.WebRTCPlugin.pluginInfo.type+'"><param name="pluginId" value="'+elementId+'" /> <param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'" /> <param name="windowless" value="true" /> <param name="streamId" value="'+streamId+'" /> <param name="tag" value="'+tag+'" /> </object>';temp.firstChild;)frag.appendChild(temp.firstChild);var height="",width="";element.clientWidth||element.clientHeight?(width=element.clientWidth,height=element.clientHeight):(element.width||element.height)&&(width=element.width,height=element.height),element.parentNode.insertBefore(frag,element),frag=document.getElementById(elementId),frag.width=width,frag.height=height,element.parentNode.removeChild(element)}else{for(var children=element.children,i=0;i!==children.length;++i)if("streamId"===children[i].name){children[i].value=streamId;break}element.setStreamId(streamId)}var newElement=document.getElementById(elementId);return AdapterJS.forwardEventHandlers(newElement,element,Object.getPrototypeOf(element)),newElement}},reattachMediaStream=function(to,from){for(var stream=null,children=from.children,i=0;i!==children.length;++i)if("streamId"===children[i].name){AdapterJS.WebRTCPlugin.WaitForPluginReady(),stream=AdapterJS.WebRTCPlugin.plugin.getStreamWithId(AdapterJS.WebRTCPlugin.pageId,children[i].value);break}if(null!==stream)return attachMediaStream(to,stream)},window.attachMediaStream=attachMediaStream,window.reattachMediaStream=reattachMediaStream,window.getUserMedia=getUserMedia,AdapterJS.attachMediaStream=attachMediaStream,AdapterJS.reattachMediaStream=reattachMediaStream,AdapterJS.getUserMedia=getUserMedia,AdapterJS.forwardEventHandlers=function(destElem,srcElem,prototype){var properties=Object.getOwnPropertyNames(prototype);for(var prop in properties)if(prop){var propName=properties[prop];"function"==typeof propName.slice&&"on"===propName.slice(0,2)&&"function"==typeof srcElem[propName]&&AdapterJS.addEvent(destElem,propName.slice(2),srcElem[propName])}var subPrototype=Object.getPrototypeOf(prototype);subPrototype&&AdapterJS.forwardEventHandlers(destElem,srcElem,subPrototype)},RTCIceCandidate=function(candidate){return candidate.sdpMid||(candidate.sdpMid=""),AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.ConstructIceCandidate(candidate.sdpMid,candidate.sdpMLineIndex,candidate.candidate)},AdapterJS.addEvent(document,"readystatechange",AdapterJS.WebRTCPlugin.injectPlugin),AdapterJS.WebRTCPlugin.injectPlugin()}},AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb=AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb||function(){AdapterJS.addEvent(document,"readystatechange",AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv),AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv()},AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv=function(){if(!AdapterJS.options.hidePluginInstallPrompt){var downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLink;if(downloadLink){var popupString;popupString=AdapterJS.WebRTCPlugin.pluginInfo.portalLink?'This website requires you to install the  <a href="'+AdapterJS.WebRTCPlugin.pluginInfo.portalLink+'" target="_blank">'+AdapterJS.WebRTCPlugin.pluginInfo.companyName+" WebRTC Plugin</a> to work on this browser.":AdapterJS.TEXT.PLUGIN.REQUIRE_INSTALLATION,AdapterJS.renderNotificationBar(popupString,AdapterJS.TEXT.PLUGIN.BUTTON,function(){window.open(downloadLink,"_top");var pluginInstallInterval=setInterval(function(){isIE||navigator.plugins.refresh(!1),AdapterJS.WebRTCPlugin.isPluginInstalled(AdapterJS.WebRTCPlugin.pluginInfo.prefix,AdapterJS.WebRTCPlugin.pluginInfo.plugName,AdapterJS.WebRTCPlugin.pluginInfo.type,function(){clearInterval(pluginInstallInterval),AdapterJS.WebRTCPlugin.defineWebRTCInterface()},function(){})},500)})}else AdapterJS.renderNotificationBar(AdapterJS.TEXT.PLUGIN.NOT_SUPPORTED)}},AdapterJS.WebRTCPlugin.isPluginInstalled(AdapterJS.WebRTCPlugin.pluginInfo.prefix,AdapterJS.WebRTCPlugin.pluginInfo.plugName,AdapterJS.WebRTCPlugin.pluginInfo.type,AdapterJS.WebRTCPlugin.defineWebRTCInterface,AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb)):(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)&&window.RTCPeerConnection&&(window.msRTCPeerConnection=window.RTCPeerConnection),function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.adapter=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return require(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(requirecopy,module,exports){"use strict";var SDPUtils={};SDPUtils.generateIdentifier=function(){return Math.random().toString(36).substr(2,10)},SDPUtils.localCName=SDPUtils.generateIdentifier(),SDPUtils.splitLines=function(blob){return blob.trim().split("\n").map(function(line){return line.trim()})},SDPUtils.splitSections=function(blob){var parts=blob.split("\nm=");return parts.map(function(part,index){return(index>0?"m="+part:part).trim()+"\r\n"})},SDPUtils.matchPrefix=function(blob,prefix){return SDPUtils.splitLines(blob).filter(function(line){return 0===line.indexOf(prefix)})},SDPUtils.parseCandidate=function(line){var parts;parts=0===line.indexOf("a=candidate:")?line.substring(12).split(" "):line.substring(10).split(" ");for(var candidate={foundation:parts[0],component:parts[1],protocol:parts[2].toLowerCase(),priority:parseInt(parts[3],10),ip:parts[4],port:parseInt(parts[5],10),type:parts[7]},i=8;i<parts.length;i+=2)switch(parts[i]){case"raddr":candidate.relatedAddress=parts[i+1];break;case"rport":candidate.relatedPort=parseInt(parts[i+1],10);break;case"tcptype":candidate.tcpType=parts[i+1]}return candidate},SDPUtils.writeCandidate=function(candidate){var sdp=[];sdp.push(candidate.foundation),sdp.push(candidate.component),sdp.push(candidate.protocol.toUpperCase()),sdp.push(candidate.priority),sdp.push(candidate.ip),sdp.push(candidate.port);var type=candidate.type;return sdp.push("typ"),sdp.push(type),"host"!==type&&candidate.relatedAddress&&candidate.relatedPort&&(sdp.push("raddr"),sdp.push(candidate.relatedAddress),sdp.push("rport"),sdp.push(candidate.relatedPort)),candidate.tcpType&&"tcp"===candidate.protocol.toLowerCase()&&(sdp.push("tcptype"),sdp.push(candidate.tcpType)),"candidate:"+sdp.join(" ")},SDPUtils.parseRtpMap=function(line){var parts=line.substr(9).split(" "),parsed={payloadType:parseInt(parts.shift(),10)};return parts=parts[0].split("/"),parsed.name=parts[0],parsed.clockRate=parseInt(parts[1],10),parsed.numChannels=3===parts.length?parseInt(parts[2],10):1,parsed},SDPUtils.writeRtpMap=function(codec){var pt=codec.payloadType;return void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType),"a=rtpmap:"+pt+" "+codec.name+"/"+codec.clockRate+(1!==codec.numChannels?"/"+codec.numChannels:"")+"\r\n"},SDPUtils.parseExtmap=function(line){var parts=line.substr(9).split(" ");return{id:parseInt(parts[0],10),uri:parts[1]}},SDPUtils.writeExtmap=function(headerExtension){return"a=extmap:"+(headerExtension.id||headerExtension.preferredId)+" "+headerExtension.uri+"\r\n"},SDPUtils.parseFmtp=function(line){for(var kv,parsed={},parts=line.substr(line.indexOf(" ")+1).split(";"),j=0;j<parts.length;j++)kv=parts[j].trim().split("="),parsed[kv[0].trim()]=kv[1];return parsed},SDPUtils.writeFmtp=function(codec){var line="",pt=codec.payloadType;if(void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType),codec.parameters&&Object.keys(codec.parameters).length){var params=[];Object.keys(codec.parameters).forEach(function(param){params.push(param+"="+codec.parameters[param])}),line+="a=fmtp:"+pt+" "+params.join(";")+"\r\n"}return line},SDPUtils.parseRtcpFb=function(line){var parts=line.substr(line.indexOf(" ")+1).split(" ");return{type:parts.shift(),parameter:parts.join(" ")}},SDPUtils.writeRtcpFb=function(codec){var lines="",pt=codec.payloadType;return void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType),codec.rtcpFeedback&&codec.rtcpFeedback.length&&codec.rtcpFeedback.forEach(function(fb){lines+="a=rtcp-fb:"+pt+" "+fb.type+(fb.parameter&&fb.parameter.length?" "+fb.parameter:"")+"\r\n"}),lines},SDPUtils.parseSsrcMedia=function(line){var sp=line.indexOf(" "),parts={ssrc:parseInt(line.substr(7,sp-7),10)},colon=line.indexOf(":",sp);return colon>-1?(parts.attribute=line.substr(sp+1,colon-sp-1),parts.value=line.substr(colon+1)):parts.attribute=line.substr(sp+1),parts},SDPUtils.getMid=function(mediaSection){var mid=SDPUtils.matchPrefix(mediaSection,"a=mid:")[0];if(mid)return mid.substr(6)},SDPUtils.getDtlsParameters=function(mediaSection,sessionpart){var lines=SDPUtils.splitLines(mediaSection);lines=lines.concat(SDPUtils.splitLines(sessionpart));var fpLine=lines.filter(function(line){return 0===line.indexOf("a=fingerprint:")})[0].substr(14),dtlsParameters={role:"auto",fingerprints:[{algorithm:fpLine.split(" ")[0].toLowerCase(),value:fpLine.split(" ")[1]}]};return dtlsParameters},SDPUtils.writeDtlsParameters=function(params,setupType){var sdp="a=setup:"+setupType+"\r\n";return params.fingerprints.forEach(function(fp){sdp+="a=fingerprint:"+fp.algorithm+" "+fp.value+"\r\n"}),sdp},SDPUtils.getIceParameters=function(mediaSection,sessionpart){var lines=SDPUtils.splitLines(mediaSection);lines=lines.concat(SDPUtils.splitLines(sessionpart));var iceParameters={usernameFragment:lines.filter(function(line){return 0===line.indexOf("a=ice-ufrag:")})[0].substr(12),password:lines.filter(function(line){return 0===line.indexOf("a=ice-pwd:")})[0].substr(10)};return iceParameters},SDPUtils.writeIceParameters=function(params){return"a=ice-ufrag:"+params.usernameFragment+"\r\na=ice-pwd:"+params.password+"\r\n"},SDPUtils.parseRtpParameters=function(mediaSection){for(var description={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},lines=SDPUtils.splitLines(mediaSection),mline=lines[0].split(" "),i=3;i<mline.length;i++){var pt=mline[i],rtpmapline=SDPUtils.matchPrefix(mediaSection,"a=rtpmap:"+pt+" ")[0];if(rtpmapline){var codec=SDPUtils.parseRtpMap(rtpmapline),fmtps=SDPUtils.matchPrefix(mediaSection,"a=fmtp:"+pt+" ");switch(codec.parameters=fmtps.length?SDPUtils.parseFmtp(fmtps[0]):{},codec.rtcpFeedback=SDPUtils.matchPrefix(mediaSection,"a=rtcp-fb:"+pt+" ").map(SDPUtils.parseRtcpFb),description.codecs.push(codec),codec.name.toUpperCase()){case"RED":case"ULPFEC":description.fecMechanisms.push(codec.name.toUpperCase())}}}return SDPUtils.matchPrefix(mediaSection,"a=extmap:").forEach(function(line){
description.headerExtensions.push(SDPUtils.parseExtmap(line))}),description},SDPUtils.writeRtpDescription=function(kind,caps){var sdp="";sdp+="m="+kind+" ",sdp+=caps.codecs.length>0?"9":"0",sdp+=" UDP/TLS/RTP/SAVPF ",sdp+=caps.codecs.map(function(codec){return void 0!==codec.preferredPayloadType?codec.preferredPayloadType:codec.payloadType}).join(" ")+"\r\n",sdp+="c=IN IP4 0.0.0.0\r\n",sdp+="a=rtcp:9 IN IP4 0.0.0.0\r\n",caps.codecs.forEach(function(codec){sdp+=SDPUtils.writeRtpMap(codec),sdp+=SDPUtils.writeFmtp(codec),sdp+=SDPUtils.writeRtcpFb(codec)});var maxptime=0;return caps.codecs.forEach(function(codec){codec.maxptime>maxptime&&(maxptime=codec.maxptime)}),maxptime>0&&(sdp+="a=maxptime:"+maxptime+"\r\n"),sdp+="a=rtcp-mux\r\n",caps.headerExtensions.forEach(function(extension){sdp+=SDPUtils.writeExtmap(extension)}),sdp},SDPUtils.parseRtpEncodingParameters=function(mediaSection){var secondarySsrc,encodingParameters=[],description=SDPUtils.parseRtpParameters(mediaSection),hasRed=description.fecMechanisms.indexOf("RED")!==-1,hasUlpfec=description.fecMechanisms.indexOf("ULPFEC")!==-1,ssrcs=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(parts){return"cname"===parts.attribute}),primarySsrc=ssrcs.length>0&&ssrcs[0].ssrc,flows=SDPUtils.matchPrefix(mediaSection,"a=ssrc-group:FID").map(function(line){var parts=line.split(" ");return parts.shift(),parts.map(function(part){return parseInt(part,10)})});flows.length>0&&flows[0].length>1&&flows[0][0]===primarySsrc&&(secondarySsrc=flows[0][1]),description.codecs.forEach(function(codec){if("RTX"===codec.name.toUpperCase()&&codec.parameters.apt){var encParam={ssrc:primarySsrc,codecPayloadType:parseInt(codec.parameters.apt,10),rtx:{ssrc:secondarySsrc}};encodingParameters.push(encParam),hasRed&&(encParam=JSON.parse(JSON.stringify(encParam)),encParam.fec={ssrc:secondarySsrc,mechanism:hasUlpfec?"red+ulpfec":"red"},encodingParameters.push(encParam))}}),0===encodingParameters.length&&primarySsrc&&encodingParameters.push({ssrc:primarySsrc});var bandwidth=SDPUtils.matchPrefix(mediaSection,"b=");return bandwidth.length&&(0===bandwidth[0].indexOf("b=TIAS:")?bandwidth=parseInt(bandwidth[0].substr(7),10):0===bandwidth[0].indexOf("b=AS:")&&(bandwidth=parseInt(bandwidth[0].substr(5),10)),encodingParameters.forEach(function(params){params.maxBitrate=bandwidth})),encodingParameters},SDPUtils.parseRtcpParameters=function(mediaSection){var rtcpParameters={},remoteSsrc=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(obj){return"cname"===obj.attribute})[0];remoteSsrc&&(rtcpParameters.cname=remoteSsrc.value,rtcpParameters.ssrc=remoteSsrc.ssrc);var rsize=SDPUtils.matchPrefix(mediaSection,"a=rtcp-rsize");rtcpParameters.reducedSize=rsize.length>0,rtcpParameters.compound=0===rsize.length;var mux=SDPUtils.matchPrefix(mediaSection,"a=rtcp-mux");return rtcpParameters.mux=mux.length>0,rtcpParameters},SDPUtils.parseMsid=function(mediaSection){var parts,spec=SDPUtils.matchPrefix(mediaSection,"a=msid:");if(1===spec.length)return parts=spec[0].substr(7).split(" "),{stream:parts[0],track:parts[1]};var planB=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(parts){return"msid"===parts.attribute});return planB.length>0?(parts=planB[0].value.split(" "),{stream:parts[0],track:parts[1]}):void 0},SDPUtils.writeSessionBoilerplate=function(){return"v=0\r\no=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},SDPUtils.writeMediaSection=function(transceiver,caps,type,stream){var sdp=SDPUtils.writeRtpDescription(transceiver.kind,caps);if(sdp+=SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()),sdp+=SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(),"offer"===type?"actpass":"active"),sdp+="a=mid:"+transceiver.mid+"\r\n",sdp+=transceiver.rtpSender&&transceiver.rtpReceiver?"a=sendrecv\r\n":transceiver.rtpSender?"a=sendonly\r\n":transceiver.rtpReceiver?"a=recvonly\r\n":"a=inactive\r\n",transceiver.rtpSender){var msid="msid:"+stream.id+" "+transceiver.rtpSender.track.id+"\r\n";sdp+="a="+msid,sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" "+msid,transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" "+msid,sdp+="a=ssrc-group:FID "+transceiver.sendEncodingParameters[0].ssrc+" "+transceiver.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" cname:"+SDPUtils.localCName+"\r\n",transceiver.rtpSender&&transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" cname:"+SDPUtils.localCName+"\r\n"),sdp},SDPUtils.getDirection=function(mediaSection,sessionpart){for(var lines=SDPUtils.splitLines(mediaSection),i=0;i<lines.length;i++)switch(lines[i]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return lines[i].substr(2)}return sessionpart?SDPUtils.getDirection(sessionpart):"sendrecv"},SDPUtils.getKind=function(mediaSection){var lines=SDPUtils.splitLines(mediaSection),mline=lines[0].split(" ");return mline[0].substr(2)},SDPUtils.isRejected=function(mediaSection){return"0"===mediaSection.split(" ",2)[1]},module.exports=SDPUtils},{}],2:[function(requirecopy,module,exports){"use strict";!function(){var logging=requirecopy("./utils").log,browserDetails=requirecopy("./utils").browserDetails;module.exports.browserDetails=browserDetails,module.exports.extractVersion=requirecopy("./utils").extractVersion,module.exports.disableLog=requirecopy("./utils").disableLog;var chromeShim=requirecopy("./chrome/chrome_shim")||null,edgeShim=requirecopy("./edge/edge_shim")||null,firefoxShim=requirecopy("./firefox/firefox_shim")||null,safariShim=requirecopy("./safari/safari_shim")||null;switch(browserDetails.browser){case"opera":case"chrome":if(!chromeShim||!chromeShim.shimPeerConnection)return void logging("Chrome shim is not included in this adapter release.");logging("adapter.js shimming chrome."),module.exports.browserShim=chromeShim,chromeShim.shimGetUserMedia(),chromeShim.shimMediaStream(),chromeShim.shimSourceObject(),chromeShim.shimPeerConnection(),chromeShim.shimOnTrack();break;case"firefox":if(!firefoxShim||!firefoxShim.shimPeerConnection)return void logging("Firefox shim is not included in this adapter release.");logging("adapter.js shimming firefox."),module.exports.browserShim=firefoxShim,firefoxShim.shimGetUserMedia(),firefoxShim.shimSourceObject(),firefoxShim.shimPeerConnection(),firefoxShim.shimOnTrack();break;case"edge":if(!edgeShim||!edgeShim.shimPeerConnection)return void logging("MS edge shim is not included in this adapter release.");logging("adapter.js shimming edge."),module.exports.browserShim=edgeShim,edgeShim.shimGetUserMedia(),edgeShim.shimPeerConnection();break;case"safari":if(!safariShim)return void logging("Safari shim is not included in this adapter release.");logging("adapter.js shimming safari."),module.exports.browserShim=safariShim,safariShim.shimGetUserMedia();break;default:logging("Unsupported browser!")}}()},{"./chrome/chrome_shim":3,"./edge/edge_shim":5,"./firefox/firefox_shim":7,"./safari/safari_shim":9,"./utils":10}],3:[function(requirecopy,module,exports){"use strict";var logging=requirecopy("../utils.js").log,browserDetails=requirecopy("../utils.js").browserDetails,chromeShim={shimMediaStream:function(){window.MediaStream=window.MediaStream||window.webkitMediaStream},shimOnTrack:function(){"object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(f){var self=this;this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=f),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.addEventListener("addtrack",function(te){var event=new Event("track");event.track=te.track,event.receiver={track:te.track},event.streams=[e.stream],self.dispatchEvent(event)}),e.stream.getTracks().forEach(function(track){var event=new Event("track");event.track=track,event.receiver={track:track},event.streams=[e.stream],this.dispatchEvent(event)}.bind(this))}.bind(this))}})},shimSourceObject:function(){"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this._srcObject},set:function(stream){var self=this;return this._srcObject=stream,this.src&&URL.revokeObjectURL(this.src),stream?(this.src=URL.createObjectURL(stream),stream.addEventListener("addtrack",function(){self.src&&URL.revokeObjectURL(self.src),self.src=URL.createObjectURL(stream)}),void stream.addEventListener("removetrack",function(){self.src&&URL.revokeObjectURL(self.src),self.src=URL.createObjectURL(stream)})):void(this.src="")}}))},shimPeerConnection:function(){window.RTCPeerConnection=function(pcConfig,pcConstraints){logging("PeerConnection"),pcConfig&&pcConfig.iceTransportPolicy&&(pcConfig.iceTransports=pcConfig.iceTransportPolicy);var pc=new webkitRTCPeerConnection(pcConfig,pcConstraints),origGetStats=pc.getStats.bind(pc);return pc.getStats=function(selector,successCallback,errorCallback){var self=this,args=arguments;if(arguments.length>0&&"function"==typeof selector)return origGetStats(selector,successCallback);var fixChromeStats_=function(response){var standardReport={},reports=response.result();return reports.forEach(function(report){var standardStats={id:report.id,timestamp:report.timestamp,type:report.type};report.names().forEach(function(name){standardStats[name]=report.stat(name)}),standardReport[standardStats.id]=standardStats}),standardReport},makeMapStats=function(stats,legacyStats){var map=new Map(Object.keys(stats).map(function(key){return[key,stats[key]]}));return legacyStats=legacyStats||stats,Object.keys(legacyStats).forEach(function(key){map[key]=legacyStats[key]}),map};if(arguments.length>=2){var successCallbackWrapper_=function(response){args[1](makeMapStats(fixChromeStats_(response)))};return origGetStats.apply(this,[successCallbackWrapper_,arguments[0]])}return new Promise(function(resolve,reject){1===args.length&&"object"==typeof selector?origGetStats.apply(self,[function(response){resolve(makeMapStats(fixChromeStats_(response)))},reject]):origGetStats.apply(self,[function(response){resolve(makeMapStats(fixChromeStats_(response),response.result()))},reject])}).then(successCallback,errorCallback)},pc},window.RTCPeerConnection.prototype=webkitRTCPeerConnection.prototype,webkitRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return webkitRTCPeerConnection.generateCertificate}}),["createOffer","createAnswer"].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){var self=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var opts=1===arguments.length?arguments[0]:void 0;return new Promise(function(resolve,reject){nativeMethod.apply(self,[resolve,reject,opts])})}return nativeMethod.apply(this,arguments)}}),browserDetails.version<51&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){var args=arguments,self=this,promise=new Promise(function(resolve,reject){nativeMethod.apply(self,[args[0],resolve,reject])});return args.length<2?promise:promise.then(function(){args[1].apply(null,[])},function(err){args.length>=3&&args[2].apply(null,[err])})}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){return arguments[0]=new("addIceCandidate"===method?RTCIceCandidate:RTCSessionDescription)(arguments[0]),nativeMethod.apply(this,arguments)}});var nativeAddIceCandidate=RTCPeerConnection.prototype.addIceCandidate;RTCPeerConnection.prototype.addIceCandidate=function(){return null===arguments[0]?Promise.resolve():nativeAddIceCandidate.apply(this,arguments)}}};module.exports={shimMediaStream:chromeShim.shimMediaStream,shimOnTrack:chromeShim.shimOnTrack,shimSourceObject:chromeShim.shimSourceObject,shimPeerConnection:chromeShim.shimPeerConnection,shimGetUserMedia:requirecopy("./getusermedia")}},{"../utils.js":10,"./getusermedia":4}],4:[function(requirecopy,module,exports){"use strict";var logging=requirecopy("../utils.js").log;module.exports=function(){var constraintsToChrome_=function(c){if("object"!=typeof c||c.mandatory||c.optional)return c;var cc={};return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key&&"mediaSource"!==key){var r="object"==typeof c[key]?c[key]:{ideal:c[key]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var oldname_=function(prefix,name){return prefix?prefix+name.charAt(0).toUpperCase()+name.slice(1):"deviceId"===name?"sourceId":name};if(void 0!==r.ideal){cc.optional=cc.optional||[];var oc={};"number"==typeof r.ideal?(oc[oldname_("min",key)]=r.ideal,cc.optional.push(oc),oc={},oc[oldname_("max",key)]=r.ideal,cc.optional.push(oc)):(oc[oldname_("",key)]=r.ideal,cc.optional.push(oc))}void 0!==r.exact&&"number"!=typeof r.exact?(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname_("",key)]=r.exact):["min","max"].forEach(function(mix){void 0!==r[mix]&&(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname_(mix,key)]=r[mix])})}}),c.advanced&&(cc.optional=(cc.optional||[]).concat(c.advanced)),cc},shimConstraints_=function(constraints,func){if(constraints=JSON.parse(JSON.stringify(constraints)),constraints&&constraints.audio&&(constraints.audio=constraintsToChrome_(constraints.audio)),constraints&&"object"==typeof constraints.video){var face=constraints.video.facingMode;if(face=face&&("object"==typeof face?face:{ideal:face}),face&&("user"===face.exact||"environment"===face.exact||"user"===face.ideal||"environment"===face.ideal)&&(!navigator.mediaDevices.getSupportedConstraints||!navigator.mediaDevices.getSupportedConstraints().facingMode)&&(delete constraints.video.facingMode,"environment"===face.exact||"environment"===face.ideal))return navigator.mediaDevices.enumerateDevices().then(function(devices){devices=devices.filter(function(d){return"videoinput"===d.kind});var back=devices.find(function(d){return d.label.toLowerCase().indexOf("back")!==-1})||devices.length&&devices[devices.length-1];return back&&(constraints.video.deviceId=face.exact?{exact:back.deviceId}:{ideal:back.deviceId}),constraints.video=constraintsToChrome_(constraints.video),logging("chrome: "+JSON.stringify(constraints)),func(constraints)});constraints.video=constraintsToChrome_(constraints.video)}return logging("chrome: "+JSON.stringify(constraints)),func(constraints)},shimError_=function(e){return{name:{PermissionDeniedError:"NotAllowedError",ConstraintNotSatisfiedError:"OverconstrainedError"}[e.name]||e.name,message:e.message,constraint:e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},getUserMedia_=function(constraints,onSuccess,onError){shimConstraints_(constraints,function(c){navigator.webkitGetUserMedia(c,onSuccess,function(e){onError(shimError_(e))})})};navigator.getUserMedia=getUserMedia_;var getUserMediaPromise_=function(constraints){return new Promise(function(resolve,reject){navigator.getUserMedia(constraints,resolve,reject)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:getUserMediaPromise_,enumerateDevices:function(){return new Promise(function(resolve){var kinds={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],deviceId:device.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(cs){return shimConstraints_(cs,function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e))})})}}else navigator.mediaDevices.getUserMedia=function(constraints){return getUserMediaPromise_(constraints)};"undefined"==typeof navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){logging("Dummy mediaDevices.addEventListener called.")}),"undefined"==typeof navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){logging("Dummy mediaDevices.removeEventListener called.")})}},{"../utils.js":10}],5:[function(requirecopy,module,exports){"use strict";var SDPUtils=requirecopy("sdp"),browserDetails=requirecopy("../utils").browserDetails,edgeShim={shimPeerConnection:function(){window.RTCIceGatherer&&(window.RTCIceCandidate||(window.RTCIceCandidate=function(args){return args}),window.RTCSessionDescription||(window.RTCSessionDescription=function(args){return args})),window.RTCPeerConnection=function(config){var self=this,_eventTarget=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(method){self[method]=_eventTarget[method].bind(_eventTarget)}),this.onicecandidate=null,this.onaddstream=null,this.ontrack=null,this.onremovestream=null,this.onsignalingstatechange=null,this.oniceconnectionstatechange=null,this.onnegotiationneeded=null,this.ondatachannel=null,this.localStreams=[],this.remoteStreams=[],this.getLocalStreams=function(){return self.localStreams},this.getRemoteStreams=function(){return self.remoteStreams},this.localDescription=new RTCSessionDescription({type:"",sdp:""}),this.remoteDescription=new RTCSessionDescription({type:"",sdp:""}),this.signalingState="stable",this.iceConnectionState="new",this.iceGatheringState="new",this.iceOptions={gatherPolicy:"all",iceServers:[]},config&&config.iceTransportPolicy)switch(config.iceTransportPolicy){case"all":case"relay":this.iceOptions.gatherPolicy=config.iceTransportPolicy;break;case"none":throw new TypeError('iceTransportPolicy "none" not supported')}if(this.usingBundle=config&&"max-bundle"===config.bundlePolicy,config&&config.iceServers){var iceServers=JSON.parse(JSON.stringify(config.iceServers));this.iceOptions.iceServers=iceServers.filter(function(server){if(server&&server.urls){var urls=server.urls;return"string"==typeof urls&&(urls=[urls]),urls=urls.filter(function(url){return 0===url.indexOf("turn:")&&url.indexOf("transport=udp")!==-1&&url.indexOf("turn:[")===-1||0===url.indexOf("stun:")&&browserDetails.version>=14393})[0],!!urls}return!1})}this.transceivers=[],this._localIceCandidatesBuffer=[]},window.RTCPeerConnection.prototype._emitBufferedCandidates=function(){var self=this,sections=SDPUtils.splitSections(self.localDescription.sdp);this._localIceCandidatesBuffer.forEach(function(event){var end=!event.candidate||0===Object.keys(event.candidate).length;if(end)for(var j=1;j<sections.length;j++)sections[j].indexOf("\r\na=end-of-candidates\r\n")===-1&&(sections[j]+="a=end-of-candidates\r\n");else event.candidate.candidate.indexOf("typ endOfCandidates")===-1&&(sections[event.candidate.sdpMLineIndex+1]+="a="+event.candidate.candidate+"\r\n");if(self.localDescription.sdp=sections.join(""),self.dispatchEvent(event),null!==self.onicecandidate&&self.onicecandidate(event),!event.candidate&&"complete"!==self.iceGatheringState){var complete=self.transceivers.every(function(transceiver){return transceiver.iceGatherer&&"completed"===transceiver.iceGatherer.state});complete&&(self.iceGatheringState="complete")}}),this._localIceCandidatesBuffer=[]},window.RTCPeerConnection.prototype.addStream=function(stream){this.localStreams.push(stream.clone()),this._maybeFireNegotiationNeeded()},window.RTCPeerConnection.prototype.removeStream=function(stream){var idx=this.localStreams.indexOf(stream);idx>-1&&(this.localStreams.splice(idx,1),this._maybeFireNegotiationNeeded())},window.RTCPeerConnection.prototype.getSenders=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpSender}).map(function(transceiver){return transceiver.rtpSender})},window.RTCPeerConnection.prototype.getReceivers=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpReceiver}).map(function(transceiver){return transceiver.rtpReceiver})},window.RTCPeerConnection.prototype._getCommonCapabilities=function(localCapabilities,remoteCapabilities){var commonCapabilities={codecs:[],headerExtensions:[],fecMechanisms:[]};return localCapabilities.codecs.forEach(function(lCodec){for(var i=0;i<remoteCapabilities.codecs.length;i++){var rCodec=remoteCapabilities.codecs[i];if(lCodec.name.toLowerCase()===rCodec.name.toLowerCase()&&lCodec.clockRate===rCodec.clockRate&&lCodec.numChannels===rCodec.numChannels){commonCapabilities.codecs.push(rCodec),rCodec.rtcpFeedback=rCodec.rtcpFeedback.filter(function(fb){for(var j=0;j<lCodec.rtcpFeedback.length;j++)if(lCodec.rtcpFeedback[j].type===fb.type&&lCodec.rtcpFeedback[j].parameter===fb.parameter)return!0;return!1});break}}}),localCapabilities.headerExtensions.forEach(function(lHeaderExtension){for(var i=0;i<remoteCapabilities.headerExtensions.length;i++){var rHeaderExtension=remoteCapabilities.headerExtensions[i];if(lHeaderExtension.uri===rHeaderExtension.uri){commonCapabilities.headerExtensions.push(rHeaderExtension);break}}}),commonCapabilities},window.RTCPeerConnection.prototype._createIceAndDtlsTransports=function(mid,sdpMLineIndex){var self=this,iceGatherer=new RTCIceGatherer(self.iceOptions),iceTransport=new RTCIceTransport(iceGatherer);iceGatherer.onlocalcandidate=function(evt){var event=new Event("icecandidate");event.candidate={sdpMid:mid,sdpMLineIndex:sdpMLineIndex};var cand=evt.candidate,end=!cand||0===Object.keys(cand).length;end?(void 0===iceGatherer.state&&(iceGatherer.state="completed"),event.candidate.candidate="candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates"):(cand.component="RTCP"===iceTransport.component?2:1,event.candidate.candidate=SDPUtils.writeCandidate(cand));var sections=SDPUtils.splitSections(self.localDescription.sdp);event.candidate.candidate.indexOf("typ endOfCandidates")===-1?sections[event.candidate.sdpMLineIndex+1]+="a="+event.candidate.candidate+"\r\n":sections[event.candidate.sdpMLineIndex+1]+="a=end-of-candidates\r\n",self.localDescription.sdp=sections.join("");var complete=self.transceivers.every(function(transceiver){return transceiver.iceGatherer&&"completed"===transceiver.iceGatherer.state});switch(self.iceGatheringState){case"new":self._localIceCandidatesBuffer.push(event),end&&complete&&self._localIceCandidatesBuffer.push(new Event("icecandidate"));break;case"gathering":self._emitBufferedCandidates(),self.dispatchEvent(event),null!==self.onicecandidate&&self.onicecandidate(event),complete&&(self.dispatchEvent(new Event("icecandidate")),null!==self.onicecandidate&&self.onicecandidate(new Event("icecandidate")),self.iceGatheringState="complete");break;case"complete":}},iceTransport.onicestatechange=function(){self._updateConnectionState()};var dtlsTransport=new RTCDtlsTransport(iceTransport);return dtlsTransport.ondtlsstatechange=function(){self._updateConnectionState()},dtlsTransport.onerror=function(){dtlsTransport.state="failed",self._updateConnectionState()},{iceGatherer:iceGatherer,iceTransport:iceTransport,dtlsTransport:dtlsTransport}},window.RTCPeerConnection.prototype._transceive=function(transceiver,send,recv){var params=this._getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);send&&transceiver.rtpSender&&(params.encodings=transceiver.sendEncodingParameters,params.rtcp={cname:SDPUtils.localCName},transceiver.recvEncodingParameters.length&&(params.rtcp.ssrc=transceiver.recvEncodingParameters[0].ssrc),transceiver.rtpSender.send(params)),recv&&transceiver.rtpReceiver&&(params.encodings=transceiver.recvEncodingParameters,params.rtcp={cname:transceiver.cname},transceiver.sendEncodingParameters.length&&(params.rtcp.ssrc=transceiver.sendEncodingParameters[0].ssrc),transceiver.rtpReceiver.receive(params))},window.RTCPeerConnection.prototype.setLocalDescription=function(description){var sections,sessionpart,self=this;if("offer"===description.type)this._pendingOffer&&(sections=SDPUtils.splitSections(description.sdp),sessionpart=sections.shift(),sections.forEach(function(mediaSection,sdpMLineIndex){var caps=SDPUtils.parseRtpParameters(mediaSection);self._pendingOffer[sdpMLineIndex].localCapabilities=caps}),this.transceivers=this._pendingOffer,delete this._pendingOffer);else if("answer"===description.type){sections=SDPUtils.splitSections(self.remoteDescription.sdp),sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,"a=ice-lite").length>0;sections.forEach(function(mediaSection,sdpMLineIndex){var transceiver=self.transceivers[sdpMLineIndex],iceGatherer=transceiver.iceGatherer,iceTransport=transceiver.iceTransport,dtlsTransport=transceiver.dtlsTransport,localCapabilities=transceiver.localCapabilities,remoteCapabilities=transceiver.remoteCapabilities,rejected="0"===mediaSection.split("\n",1)[0].split(" ",2)[1];if(!rejected&&!transceiver.isDatachannel){var remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart);if(isIceLite){var cands=SDPUtils.matchPrefix(mediaSection,"a=candidate:").map(function(cand){return SDPUtils.parseCandidate(cand)}).filter(function(cand){return"1"===cand.component});cands.length&&iceTransport.setRemoteCandidates(cands)}var remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);isIceLite&&(remoteDtlsParameters.role="server"),self.usingBundle&&0!==sdpMLineIndex||(iceTransport.start(iceGatherer,remoteIceParameters,isIceLite?"controlling":"controlled"),dtlsTransport.start(remoteDtlsParameters));var params=self._getCommonCapabilities(localCapabilities,remoteCapabilities);self._transceive(transceiver,params.codecs.length>0,!1)}})}switch(this.localDescription={type:description.type,sdp:description.sdp},description.type){case"offer":this._updateSignalingState("have-local-offer");break;case"answer":this._updateSignalingState("stable");break;default:throw new TypeError('unsupported type "'+description.type+'"')}var hasCallback=arguments.length>1&&"function"==typeof arguments[1];if(hasCallback){var cb=arguments[1];window.setTimeout(function(){cb(),"new"===self.iceGatheringState&&(self.iceGatheringState="gathering"),self._emitBufferedCandidates()},0)}var p=Promise.resolve();return p.then(function(){hasCallback||("new"===self.iceGatheringState&&(self.iceGatheringState="gathering"),window.setTimeout(self._emitBufferedCandidates.bind(self),500))}),p},window.RTCPeerConnection.prototype.setRemoteDescription=function(description){var self=this,stream=new MediaStream,receiverList=[],sections=SDPUtils.splitSections(description.sdp),sessionpart=sections.shift(),isIceLite=SDPUtils.matchPrefix(sessionpart,"a=ice-lite").length>0;switch(this.usingBundle=SDPUtils.matchPrefix(sessionpart,"a=group:BUNDLE ").length>0,sections.forEach(function(mediaSection,sdpMLineIndex){var lines=SDPUtils.splitLines(mediaSection),mline=lines[0].substr(2).split(" "),kind=mline[0],rejected="0"===mline[1],direction=SDPUtils.getDirection(mediaSection,sessionpart),mid=SDPUtils.matchPrefix(mediaSection,"a=mid:");if(mid=mid.length?mid[0].substr(6):SDPUtils.generateIdentifier(),"application"===kind&&"DTLS/SCTP"===mline[2])return void(self.transceivers[sdpMLineIndex]={mid:mid,isDatachannel:!0});var transceiver,iceGatherer,iceTransport,dtlsTransport,rtpSender,rtpReceiver,sendEncodingParameters,recvEncodingParameters,localCapabilities,track,remoteIceParameters,remoteDtlsParameters,remoteCapabilities=SDPUtils.parseRtpParameters(mediaSection);rejected||(remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart),remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart),remoteDtlsParameters.role="client"),recvEncodingParameters=SDPUtils.parseRtpEncodingParameters(mediaSection);var cname,remoteSsrc=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(obj){return"cname"===obj.attribute})[0];remoteSsrc&&(cname=remoteSsrc.value);var isComplete=SDPUtils.matchPrefix(mediaSection,"a=end-of-candidates",sessionpart).length>0,cands=SDPUtils.matchPrefix(mediaSection,"a=candidate:").map(function(cand){return SDPUtils.parseCandidate(cand)}).filter(function(cand){return"1"===cand.component});if("offer"!==description.type||rejected)"answer"!==description.type||rejected||(transceiver=self.transceivers[sdpMLineIndex],iceGatherer=transceiver.iceGatherer,iceTransport=transceiver.iceTransport,dtlsTransport=transceiver.dtlsTransport,rtpSender=transceiver.rtpSender,rtpReceiver=transceiver.rtpReceiver,sendEncodingParameters=transceiver.sendEncodingParameters,localCapabilities=transceiver.localCapabilities,self.transceivers[sdpMLineIndex].recvEncodingParameters=recvEncodingParameters,self.transceivers[sdpMLineIndex].remoteCapabilities=remoteCapabilities,self.transceivers[sdpMLineIndex].cname=cname,(isIceLite||isComplete)&&cands.length&&iceTransport.setRemoteCandidates(cands),self.usingBundle&&0!==sdpMLineIndex||(iceTransport.start(iceGatherer,remoteIceParameters,"controlling"),dtlsTransport.start(remoteDtlsParameters)),self._transceive(transceiver,"sendrecv"===direction||"recvonly"===direction,"sendrecv"===direction||"sendonly"===direction),!rtpReceiver||"sendrecv"!==direction&&"sendonly"!==direction?delete transceiver.rtpReceiver:(track=rtpReceiver.track,receiverList.push([track,rtpReceiver]),stream.addTrack(track)));else{var transports=self.usingBundle&&sdpMLineIndex>0?{iceGatherer:self.transceivers[0].iceGatherer,iceTransport:self.transceivers[0].iceTransport,dtlsTransport:self.transceivers[0].dtlsTransport}:self._createIceAndDtlsTransports(mid,sdpMLineIndex);if(isComplete&&transports.iceTransport.setRemoteCandidates(cands),localCapabilities=RTCRtpReceiver.getCapabilities(kind),sendEncodingParameters=[{ssrc:1001*(2*sdpMLineIndex+2)}],rtpReceiver=new RTCRtpReceiver(transports.dtlsTransport,kind),track=rtpReceiver.track,receiverList.push([track,rtpReceiver]),stream.addTrack(track),self.localStreams.length>0&&self.localStreams[0].getTracks().length>=sdpMLineIndex){var localTrack;"audio"===kind?localTrack=self.localStreams[0].getAudioTracks()[0]:"video"===kind&&(localTrack=self.localStreams[0].getVideoTracks()[0]),localTrack&&(rtpSender=new RTCRtpSender(localTrack,transports.dtlsTransport))}self.transceivers[sdpMLineIndex]={iceGatherer:transports.iceGatherer,iceTransport:transports.iceTransport,dtlsTransport:transports.dtlsTransport,localCapabilities:localCapabilities,remoteCapabilities:remoteCapabilities,rtpSender:rtpSender,rtpReceiver:rtpReceiver,kind:kind,mid:mid,cname:cname,sendEncodingParameters:sendEncodingParameters,recvEncodingParameters:recvEncodingParameters},self._transceive(self.transceivers[sdpMLineIndex],!1,"sendrecv"===direction||"sendonly"===direction)}}),this.remoteDescription={type:description.type,sdp:description.sdp},description.type){case"offer":this._updateSignalingState("have-remote-offer");break;case"answer":this._updateSignalingState("stable");break;default:throw new TypeError('unsupported type "'+description.type+'"')}return stream.getTracks().length&&(self.remoteStreams.push(stream),window.setTimeout(function(){var event=new Event("addstream");event.stream=stream,self.dispatchEvent(event),null!==self.onaddstream&&window.setTimeout(function(){self.onaddstream(event)},0),receiverList.forEach(function(item){var track=item[0],receiver=item[1],trackEvent=new Event("track");trackEvent.track=track,trackEvent.receiver=receiver,
trackEvent.streams=[stream],self.dispatchEvent(event),null!==self.ontrack&&window.setTimeout(function(){self.ontrack(trackEvent)},0)})},0)),arguments.length>1&&"function"==typeof arguments[1]&&window.setTimeout(arguments[1],0),Promise.resolve()},window.RTCPeerConnection.prototype.close=function(){this.transceivers.forEach(function(transceiver){transceiver.iceTransport&&transceiver.iceTransport.stop(),transceiver.dtlsTransport&&transceiver.dtlsTransport.stop(),transceiver.rtpSender&&transceiver.rtpSender.stop(),transceiver.rtpReceiver&&transceiver.rtpReceiver.stop()}),this._updateSignalingState("closed")},window.RTCPeerConnection.prototype._updateSignalingState=function(newState){this.signalingState=newState;var event=new Event("signalingstatechange");this.dispatchEvent(event),null!==this.onsignalingstatechange&&this.onsignalingstatechange(event)},window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded=function(){var event=new Event("negotiationneeded");this.dispatchEvent(event),null!==this.onnegotiationneeded&&this.onnegotiationneeded(event)},window.RTCPeerConnection.prototype._updateConnectionState=function(){var newState,self=this,states={new:0,closed:0,connecting:0,checking:0,connected:0,completed:0,failed:0};if(this.transceivers.forEach(function(transceiver){states[transceiver.iceTransport.state]++,states[transceiver.dtlsTransport.state]++}),states.connected+=states.completed,newState="new",states.failed>0?newState="failed":states.connecting>0||states.checking>0?newState="connecting":states.disconnected>0?newState="disconnected":states.new>0?newState="new":(states.connected>0||states.completed>0)&&(newState="connected"),newState!==self.iceConnectionState){self.iceConnectionState=newState;var event=new Event("iceconnectionstatechange");this.dispatchEvent(event),null!==this.oniceconnectionstatechange&&this.oniceconnectionstatechange(event)}},window.RTCPeerConnection.prototype.createOffer=function(){var self=this;if(this._pendingOffer)throw new Error("createOffer called while there is a pending offer.");var offerOptions;1===arguments.length&&"function"!=typeof arguments[0]?offerOptions=arguments[0]:3===arguments.length&&(offerOptions=arguments[2]);var tracks=[],numAudioTracks=0,numVideoTracks=0;if(this.localStreams.length&&(numAudioTracks=this.localStreams[0].getAudioTracks().length,numVideoTracks=this.localStreams[0].getVideoTracks().length),offerOptions){if(offerOptions.mandatory||offerOptions.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==offerOptions.offerToReceiveAudio&&(numAudioTracks=offerOptions.offerToReceiveAudio),void 0!==offerOptions.offerToReceiveVideo&&(numVideoTracks=offerOptions.offerToReceiveVideo)}for(this.localStreams.length&&this.localStreams[0].getTracks().forEach(function(track){tracks.push({kind:track.kind,track:track,wantReceive:"audio"===track.kind?numAudioTracks>0:numVideoTracks>0}),"audio"===track.kind?numAudioTracks--:"video"===track.kind&&numVideoTracks--});numAudioTracks>0||numVideoTracks>0;)numAudioTracks>0&&(tracks.push({kind:"audio",wantReceive:!0}),numAudioTracks--),numVideoTracks>0&&(tracks.push({kind:"video",wantReceive:!0}),numVideoTracks--);var sdp=SDPUtils.writeSessionBoilerplate(),transceivers=[];tracks.forEach(function(mline,sdpMLineIndex){var rtpSender,rtpReceiver,track=mline.track,kind=mline.kind,mid=SDPUtils.generateIdentifier(),transports=self.usingBundle&&sdpMLineIndex>0?{iceGatherer:transceivers[0].iceGatherer,iceTransport:transceivers[0].iceTransport,dtlsTransport:transceivers[0].dtlsTransport}:self._createIceAndDtlsTransports(mid,sdpMLineIndex),localCapabilities=RTCRtpSender.getCapabilities(kind),sendEncodingParameters=[{ssrc:1001*(2*sdpMLineIndex+1)}];track&&(rtpSender=new RTCRtpSender(track,transports.dtlsTransport)),mline.wantReceive&&(rtpReceiver=new RTCRtpReceiver(transports.dtlsTransport,kind)),transceivers[sdpMLineIndex]={iceGatherer:transports.iceGatherer,iceTransport:transports.iceTransport,dtlsTransport:transports.dtlsTransport,localCapabilities:localCapabilities,remoteCapabilities:null,rtpSender:rtpSender,rtpReceiver:rtpReceiver,kind:kind,mid:mid,sendEncodingParameters:sendEncodingParameters,recvEncodingParameters:null}}),this.usingBundle&&(sdp+="a=group:BUNDLE "+transceivers.map(function(t){return t.mid}).join(" ")+"\r\n"),tracks.forEach(function(mline,sdpMLineIndex){var transceiver=transceivers[sdpMLineIndex];sdp+=SDPUtils.writeMediaSection(transceiver,transceiver.localCapabilities,"offer",self.localStreams[0])}),this._pendingOffer=transceivers;var desc=new RTCSessionDescription({type:"offer",sdp:sdp});return arguments.length&&"function"==typeof arguments[0]&&window.setTimeout(arguments[0],0,desc),Promise.resolve(desc)},window.RTCPeerConnection.prototype.createAnswer=function(){var self=this,sdp=SDPUtils.writeSessionBoilerplate();this.usingBundle&&(sdp+="a=group:BUNDLE "+this.transceivers.map(function(t){return t.mid}).join(" ")+"\r\n"),this.transceivers.forEach(function(transceiver){if(transceiver.isDatachannel)return void(sdp+="m=application 0 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=mid:"+transceiver.mid+"\r\n");var commonCapabilities=self._getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);sdp+=SDPUtils.writeMediaSection(transceiver,commonCapabilities,"answer",self.localStreams[0])});var desc=new RTCSessionDescription({type:"answer",sdp:sdp});return arguments.length&&"function"==typeof arguments[0]&&window.setTimeout(arguments[0],0,desc),Promise.resolve(desc)},window.RTCPeerConnection.prototype.addIceCandidate=function(candidate){if(null===candidate)this.transceivers.forEach(function(transceiver){transceiver.iceTransport.addRemoteCandidate({})});else{var mLineIndex=candidate.sdpMLineIndex;if(candidate.sdpMid)for(var i=0;i<this.transceivers.length;i++)if(this.transceivers[i].mid===candidate.sdpMid){mLineIndex=i;break}var transceiver=this.transceivers[mLineIndex];if(transceiver){var cand=Object.keys(candidate.candidate).length>0?SDPUtils.parseCandidate(candidate.candidate):{};if("tcp"===cand.protocol&&(0===cand.port||9===cand.port))return;if("1"!==cand.component)return;"endOfCandidates"===cand.type&&(cand={}),transceiver.iceTransport.addRemoteCandidate(cand);var sections=SDPUtils.splitSections(this.remoteDescription.sdp);sections[mLineIndex+1]+=(cand.type?candidate.candidate.trim():"a=end-of-candidates")+"\r\n",this.remoteDescription.sdp=sections.join("")}}return arguments.length>1&&"function"==typeof arguments[1]&&window.setTimeout(arguments[1],0),Promise.resolve()},window.RTCPeerConnection.prototype.getStats=function(){var promises=[];this.transceivers.forEach(function(transceiver){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(method){transceiver[method]&&promises.push(transceiver[method].getStats())})});var cb=arguments.length>1&&"function"==typeof arguments[1]&&arguments[1];return new Promise(function(resolve){var results=new Map;Promise.all(promises).then(function(res){res.forEach(function(result){Object.keys(result).forEach(function(id){results.set(id,result[id]),results[id]=result[id]})}),cb&&window.setTimeout(cb,0,results),resolve(results)})})}}};module.exports={shimPeerConnection:edgeShim.shimPeerConnection,shimGetUserMedia:requirecopy("./getusermedia")}},{"../utils":10,"./getusermedia":6,sdp:1}],6:[function(requirecopy,module,exports){"use strict";module.exports=function(){var shimError_=function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}},origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e))})}}},{}],7:[function(requirecopy,module,exports){"use strict";var browserDetails=requirecopy("../utils").browserDetails,firefoxShim={shimOnTrack:function(){"object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(f){this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=f),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(track){var event=new Event("track");event.track=track,event.receiver={track:track},event.streams=[e.stream],this.dispatchEvent(event)}.bind(this))}.bind(this))}})},shimSourceObject:function(){"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this.mozSrcObject},set:function(stream){this.mozSrcObject=stream}}))},shimPeerConnection:function(){if("object"==typeof window&&(window.RTCPeerConnection||window.mozRTCPeerConnection)){window.RTCPeerConnection||(window.RTCPeerConnection=function(pcConfig,pcConstraints){if(browserDetails.version<38&&pcConfig&&pcConfig.iceServers){for(var newIceServers=[],i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];if(server.hasOwnProperty("urls"))for(var j=0;j<server.urls.length;j++){var newServer={url:server.urls[j]};0===server.urls[j].indexOf("turn")&&(newServer.username=server.username,newServer.credential=server.credential),newIceServers.push(newServer)}else newIceServers.push(pcConfig.iceServers[i])}pcConfig.iceServers=newIceServers}return new mozRTCPeerConnection(pcConfig,pcConstraints)},window.RTCPeerConnection.prototype=mozRTCPeerConnection.prototype,mozRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return mozRTCPeerConnection.generateCertificate}}),window.RTCSessionDescription=mozRTCSessionDescription,window.RTCIceCandidate=mozRTCIceCandidate),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=RTCPeerConnection.prototype[method];RTCPeerConnection.prototype[method]=function(){return arguments[0]=new("addIceCandidate"===method?RTCIceCandidate:RTCSessionDescription)(arguments[0]),nativeMethod.apply(this,arguments)}});var nativeAddIceCandidate=RTCPeerConnection.prototype.addIceCandidate;RTCPeerConnection.prototype.addIceCandidate=function(){return null===arguments[0]?Promise.resolve():nativeAddIceCandidate.apply(this,arguments)};var makeMapStats=function(stats){var map=new Map;return Object.keys(stats).forEach(function(key){map.set(key,stats[key]),map[key]=stats[key]}),map},nativeGetStats=RTCPeerConnection.prototype.getStats;RTCPeerConnection.prototype.getStats=function(selector,onSucc,onErr){return nativeGetStats.apply(this,[selector||null]).then(function(stats){return makeMapStats(stats)}).then(onSucc,onErr)}}}};module.exports={shimOnTrack:firefoxShim.shimOnTrack,shimSourceObject:firefoxShim.shimSourceObject,shimPeerConnection:firefoxShim.shimPeerConnection,shimGetUserMedia:requirecopy("./getusermedia")}},{"../utils":10,"./getusermedia":8}],8:[function(requirecopy,module,exports){"use strict";var logging=requirecopy("../utils").log,browserDetails=requirecopy("../utils").browserDetails;module.exports=function(){var shimError_=function(e){return{name:{SecurityError:"NotAllowedError",PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:{"The operation is insecure.":"The request is not allowed by the user agent or the platform in the current context."}[e.message]||e.message,constraint:e.constraint,toString:function(){return this.name+(this.message&&": ")+this.message}}},getUserMedia_=function(constraints,onSuccess,onError){var constraintsToFF37_=function(c){if("object"!=typeof c||c.require)return c;var require=[];return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key&&"mediaSource"!==key){var r=c[key]="object"==typeof c[key]?c[key]:{ideal:c[key]};if(void 0===r.min&&void 0===r.max&&void 0===r.exact||require.push(key),void 0!==r.exact&&("number"==typeof r.exact?r.min=r.max=r.exact:c[key]=r.exact,delete r.exact),void 0!==r.ideal){c.advanced=c.advanced||[];var oc={};"number"==typeof r.ideal?oc[key]={min:r.ideal,max:r.ideal}:oc[key]=r.ideal,c.advanced.push(oc),delete r.ideal,Object.keys(r).length||delete c[key]}}}),require.length&&(c.require=require),c};return constraints=JSON.parse(JSON.stringify(constraints)),browserDetails.version<38&&(logging("spec: "+JSON.stringify(constraints)),constraints.audio&&(constraints.audio=constraintsToFF37_(constraints.audio)),constraints.video&&(constraints.video=constraintsToFF37_(constraints.video)),logging("ff37: "+JSON.stringify(constraints))),navigator.mozGetUserMedia(constraints,onSuccess,function(e){onError(shimError_(e))})},getUserMediaPromise_=function(constraints){return new Promise(function(resolve,reject){getUserMedia_(constraints,resolve,reject)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:getUserMediaPromise_,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(resolve){var infos=[{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}];resolve(infos)})},browserDetails.version<41){var orgEnumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return orgEnumerateDevices().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}if(browserDetails.version<49){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e))})}}navigator.getUserMedia=function(constraints,onSuccess,onError){return browserDetails.version<44?getUserMedia_(constraints,onSuccess,onError):void navigator.mediaDevices.getUserMedia(constraints).then(onSuccess,onError)}}},{"../utils":10}],9:[function(requirecopy,module,exports){"use strict";var safariShim={shimGetUserMedia:function(){navigator.getUserMedia=navigator.webkitGetUserMedia}};module.exports={shimGetUserMedia:safariShim.shimGetUserMedia}},{}],10:[function(requirecopy,module,exports){"use strict";var logDisabled_=!0,utils={disableLog:function(bool){return"boolean"!=typeof bool?new Error("Argument type: "+typeof bool+". Please use a boolean."):(logDisabled_=bool,bool?"adapter.js logging disabled":"adapter.js logging enabled")},log:function(){if("object"==typeof window){if(logDisabled_)return;"undefined"!=typeof console&&"function"==typeof console.log}},extractVersion:function(uastring,expr,pos){var match=uastring.match(expr);return match&&match.length>=pos&&parseInt(match[pos],10)},detectBrowser:function(){var result={};if(result.browser=null,result.version=null,"undefined"==typeof window||!window.navigator)return result.browser="Not a browser.",result;if(navigator.mozGetUserMedia)result.browser="firefox",result.version=this.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1);else if(navigator.webkitGetUserMedia)if(window.webkitRTCPeerConnection)result.browser="chrome",result.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2);else{if(!navigator.userAgent.match(/Version\/(\d+).(\d+)/))return result.browser="Unsupported webkit-based browser with GUM support but no WebRTC support.",result;result.browser="safari",result.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/([0-9]+)\./,1)}else{if(!navigator.mediaDevices||!navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))return result.browser="Not a supported browser.",result;result.browser="edge",result.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2)}return result}};module.exports={log:utils.log,disableLog:utils.disableLog,browserDetails:utils.detectBrowser(),extractVersion:utils.extractVersion}},{}]},{},[2])(2)}),AdapterJS.parseWebrtcDetectedBrowser(),navigator.mozGetUserMedia?(MediaStreamTrack.getSources=function(successCb){setTimeout(function(){var infos=[{kind:"audio",id:"default",label:"",facing:""},{kind:"video",id:"default",label:"",facing:""}];successCb(infos)},0)},attachMediaStream=function(element,stream){return element.srcObject=stream,element},reattachMediaStream=function(to,from){return to.srcObject=from.srcObject,to},createIceServer=function(url,username,password){var iceServer=null,urlParts=url.split(":");if(0===urlParts[0].indexOf("stun"))iceServer={urls:[url]};else if(0===urlParts[0].indexOf("turn"))if(webrtcDetectedVersion<27){var turnUrlParts=url.split("?");1!==turnUrlParts.length&&0!==turnUrlParts[1].indexOf("transport=udp")||(iceServer={urls:[turnUrlParts[0]],credential:password,username:username})}else iceServer={urls:[url],credential:password,username:username};return iceServer},createIceServers=function(urls,username,password){var iceServers=[];for(i=0;i<urls.length;i++){var iceServer=createIceServer(urls[i],username,password);null!==iceServer&&iceServers.push(iceServer)}return iceServers}):navigator.webkitGetUserMedia?(attachMediaStream=function(element,stream){return webrtcDetectedVersion>=43?element.srcObject=stream:"undefined"!=typeof element.src&&(element.src=URL.createObjectURL(stream)),element},reattachMediaStream=function(to,from){return webrtcDetectedVersion>=43?to.srcObject=from.srcObject:to.src=from.src,to},createIceServer=function(url,username,password){var iceServer=null,urlParts=url.split(":");return 0===urlParts[0].indexOf("stun")?iceServer={url:url}:0===urlParts[0].indexOf("turn")&&(iceServer={url:url,credential:password,username:username}),iceServer},createIceServers=function(urls,username,password){var iceServers=[];if(webrtcDetectedVersion>=34)iceServers={urls:urls,credential:password,username:username};else for(i=0;i<urls.length;i++){var iceServer=createIceServer(urls[i],username,password);null!==iceServer&&iceServers.push(iceServer)}return iceServers}):navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)&&(attachMediaStream=function(element,stream){return element.srcObject=stream,element},reattachMediaStream=function(to,from){return to.srcObject=from.srcObject,to}),attachMediaStream_base=attachMediaStream,"opera"===webrtcDetectedBrowser&&(attachMediaStream_base=function(element,stream){webrtcDetectedVersion>38?element.srcObject=stream:"undefined"!=typeof element.src&&(element.src=URL.createObjectURL(stream))}),attachMediaStream=function(element,stream){return"chrome"!==webrtcDetectedBrowser&&"opera"!==webrtcDetectedBrowser||stream?attachMediaStream_base(element,stream):element.src="",element},reattachMediaStream_base=reattachMediaStream,reattachMediaStream=function(to,from){return reattachMediaStream_base(to,from),to},window.attachMediaStream=attachMediaStream,window.reattachMediaStream=reattachMediaStream,window.getUserMedia=function(constraints,onSuccess,onFailure){navigator.getUserMedia(constraints,onSuccess,onFailure)},AdapterJS.attachMediaStream=attachMediaStream,AdapterJS.reattachMediaStream=reattachMediaStream,AdapterJS.getUserMedia=getUserMedia,"undefined"==typeof Promise&&(requestUserMedia=null),AdapterJS.maybeThroughWebRTCReady()),"undefined"!=typeof exports&&(module.exports=AdapterJS);

/*** EXPORTS FROM exports-loader ***/
module.exports = AdapterJS;

/***/ }),
/* 205 */
/***/ (function(module, exports) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function arrayEquals(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arrayEquals.apply(this[i], [array[i]]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal:
            // {x:20} != {x:20}
            return false;
        }
    }
    return true;
};



/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.Interop = __webpack_require__(207);


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global RTCSessionDescription */
/* jshint -W097 */


var transform = __webpack_require__(208);
var arrayEquals = __webpack_require__(205);

function Interop() {

    /**
     * This map holds the most recent Unified Plan offer/answer SDP that was
     * converted to Plan B, with the SDP type ('offer' or 'answer') as keys and
     * the SDP string as values.
     *
     * @type {{}}
     */
    this.cache = {};
}

module.exports = Interop;

/**
 * Returns the index of the first m-line with the given media type and with a
 * direction which allows sending, in the last Unified Plan description with
 * type "answer" converted to Plan B. Returns {null} if there is no saved
 * answer, or if none of its m-lines with the given type allow sending.
 * @param type the media type ("audio" or "video").
 * @returns {*}
 */
Interop.prototype.getFirstSendingIndexFromAnswer = function(type) {
    if (!this.cache.answer) {
        return null;
    }

    var session = transform.parse(this.cache.answer);
    if (session && session.media && Array.isArray(session.media)){
        for (var i = 0; i < session.media.length; i++) {
            if (session.media[i].type == type &&
                (!session.media[i].direction /* default to sendrecv */ ||
                    session.media[i].direction === 'sendrecv' ||
                    session.media[i].direction === 'sendonly')){
                return i;
            }
        }
    }

    return null;
};

/**
 * This method transforms a Unified Plan SDP to an equivalent Plan B SDP. A
 * PeerConnection wrapper transforms the SDP to Plan B before passing it to the
 * application.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toPlanB = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    // Objectify the SDP for easier manipulation.
    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Unified Plan SDP. Plan B
    // SDP has a video, an audio and a data "channel" at most.
    if (session.media.length <= 3 && session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Unified Plan.');
        return desc;
    }

    //#endregion

    // HACK https://bugzilla.mozilla.org/show_bug.cgi?id=1113443
    var sdp = desc.sdp;
    var rewrite = false;
    for (var i = 0; i < session.media.length; i++) {
        var uLine = session.media[i];
        uLine.rtp.forEach(function(rtp) {
            if (rtp.codec === 'NULL')
            {
                rewrite = true;
                var offer = transform.parse(self.cache['offer']);
                rtp.codec = offer.media[i].rtp[0].codec;
            }
        });
    };
    if (rewrite) {
        sdp = transform.write(session);
    }

    // Unified Plan SDP is our "precious". Cache it for later use in the Plan B
    // -> Unified Plan transformation.
    this.cache[desc.type] = sdp;

    //#region Convert from Unified Plan to Plan B.

    // We rebuild the session.media array.
    var media = session.media;
    session.media = [];

    // Associative array that maps channel types to channel objects for fast
    // access to channel objects by their type, e.g. type2bl['audio']->channel
    // obj.
    var type2bl = {};

    // Used to build the group:BUNDLE value after the channels construction
    // loop.
    var types = [];

    // Implode the Unified Plan m-lines/tracks into Plan B channels.
    media.forEach(function(uLine) {

        // rtcp-mux is required in the Plan B SDP.
        if ((typeof uLine.rtcpMux !== 'string' ||
            uLine.rtcpMux !== 'rtcp-mux') &&
            uLine.direction !== 'inactive') {
            throw new Error('Cannot convert to Plan B because m-lines ' +
                'without the rtcp-mux attribute were found.');
        }

        if (uLine.type === 'application') {
            session.media.push(uLine);
            types.push(uLine.mid);
            return;
        }

        // If we don't have a channel for this uLine.type, then use this
        // uLine as the channel basis.
        if (typeof type2bl[uLine.type] === 'undefined') {
            type2bl[uLine.type] = uLine;
        }

        // Add sources to the channel and handle a=msid.
        if (typeof uLine.sources === 'object') {
            Object.keys(uLine.sources).forEach(function(ssrc) {
                if (typeof type2bl[uLine.type].sources !== 'object')
                    type2bl[uLine.type].sources = {};

                // Assign the sources to the channel.
                type2bl[uLine.type].sources[ssrc] =
                    uLine.sources[ssrc];

                if (typeof uLine.msid !== 'undefined') {
                    // In Plan B the msid is an SSRC attribute. Also, we don't
                    // care about the obsolete label and mslabel attributes.
                    //
                    // Note that it is not guaranteed that the uLine will
                    // have an msid. recvonly channels in particular don't have
                    // one.
                    type2bl[uLine.type].sources[ssrc].msid =
                        uLine.msid;
                }
                // NOTE ssrcs in ssrc groups will share msids, as
                // draft-uberti-rtcweb-plan-00 mandates.
            });
        }

        // Add ssrc groups to the channel.
        if (typeof uLine.ssrcGroups !== 'undefined' &&
                Array.isArray(uLine.ssrcGroups)) {

            // Create the ssrcGroups array, if it's not defined.
            if (typeof type2bl[uLine.type].ssrcGroups === 'undefined' ||
                    !Array.isArray(type2bl[uLine.type].ssrcGroups)) {
                type2bl[uLine.type].ssrcGroups = [];
            }

            type2bl[uLine.type].ssrcGroups =
                type2bl[uLine.type].ssrcGroups.concat(
                    uLine.ssrcGroups);
        }

        if (type2bl[uLine.type] === uLine) {
            // Copy ICE related stuff from the principal media line.
            uLine.candidates = media[0].candidates;
            uLine.iceUfrag = media[0].iceUfrag;
            uLine.icePwd = media[0].icePwd;
            uLine.fingerprint = media[0].fingerprint;

            // Plan B mids are in ['audio', 'video', 'data']
            uLine.mid = uLine.type;

            // Plan B doesn't support/need the bundle-only attribute.
            delete uLine.bundleOnly;

            // In Plan B the msid is an SSRC attribute.
            delete uLine.msid;

            // Used to build the group:BUNDLE value after this loop.
            types.push(uLine.type);

            // Add the channel to the new media array.
            session.media.push(uLine);
        }
    });

    // We regenerate the BUNDLE group with the new mids.
    session.groups.some(function(group) {
        if (group.type === 'BUNDLE') {
            group.mids = types.join(' ');
            return true;
        }
    });

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};

/**
 * This method transforms a Plan B SDP to an equivalent Unified Plan SDP. A
 * PeerConnection wrapper transforms the SDP to Unified Plan before passing it
 * to FF.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toUnifiedPlan = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Plan B SDP. Plan B SDP has
    // a video, an audio and a data "channel" at most.
    if (session.media.length > 3 || !session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Plan B.');
        return desc;
    }

    // Make sure this Plan B SDP can be converted to a Unified Plan SDP.
    var mids = [];
    session.media.forEach(function(m) {
        mids.push(m.mid);
    });

    var hasBundle = false;
    if (typeof session.groups !== 'undefined' &&
        Array.isArray(session.groups)) {
        hasBundle = session.groups.every(function(g) {
            return g.type !== 'BUNDLE' ||
                arrayEquals.apply(g.mids.sort(), [mids.sort()]);
        });
    }

    if (!hasBundle) {
        throw new Error("Cannot convert to Unified Plan because m-lines that" +
            " are not bundled were found.");
    }

    //#endregion


    //#region Convert from Plan B to Unified Plan.

    // Unfortunately, a Plan B offer/answer doesn't have enough information to
    // rebuild an equivalent Unified Plan offer/answer.
    //
    // For example, if this is a local answer (in Unified Plan style) that we
    // convert to Plan B prior to handing it over to the application (the
    // PeerConnection wrapper called us, for instance, after a successful
    // createAnswer), we want to remember the m-line at which we've seen the
    // (local) SSRC. That's because when the application wants to do call the
    // SLD method, forcing us to do the inverse transformation (from Plan B to
    // Unified Plan), we need to know to which m-line to assign the (local)
    // SSRC. We also need to know all the other m-lines that the original
    // answer had and include them in the transformed answer as well.
    //
    // Another example is if this is a remote offer that we convert to Plan B
    // prior to giving it to the application, we want to remember the mid at
    // which we've seen the (remote) SSRC.
    //
    // In the iteration that follows, we use the cached Unified Plan (if it
    // exists) to assign mids to ssrcs.

    var cached;
    if (typeof this.cache[desc.type] !== 'undefined') {
        cached = transform.parse(this.cache[desc.type]);
    }

    var recvonlySsrcs = {
        audio: {},
        video: {}
    };

    // A helper map that sends mids to m-line objects. We use it later to
    // rebuild the Unified Plan style session.media array.
    var mid2ul = {};
    session.media.forEach(function(bLine) {
        if ((typeof bLine.rtcpMux !== 'string' ||
            bLine.rtcpMux !== 'rtcp-mux') &&
            bLine.direction !== 'inactive') {
            throw new Error("Cannot convert to Unified Plan because m-lines " +
                "without the rtcp-mux attribute were found.");
        }

        if (bLine.type === 'application') {
            mid2ul[bLine.mid] = bLine;
            return;
        }

        // With rtcp-mux and bundle all the channels should have the same ICE
        // stuff.
        var sources = bLine.sources;
        var ssrcGroups = bLine.ssrcGroups;
        var candidates = bLine.candidates;
        var iceUfrag = bLine.iceUfrag;
        var icePwd = bLine.icePwd;
        var fingerprint = bLine.fingerprint;
        var port = bLine.port;

        // We'll use the "bLine" object as a prototype for each new "mLine"
        // that we create, but first we need to clean it up a bit.
        delete bLine.sources;
        delete bLine.ssrcGroups;
        delete bLine.candidates;
        delete bLine.iceUfrag;
        delete bLine.icePwd;
        delete bLine.fingerprint;
        delete bLine.port;
        delete bLine.mid;

        // inverted ssrc group map
        var ssrc2group = {};
        if (typeof ssrcGroups !== 'undefined' && Array.isArray(ssrcGroups)) {
            ssrcGroups.forEach(function (ssrcGroup) {

                // TODO(gp) find out how to receive simulcast with FF. For the
                // time being, hide it.
                if (ssrcGroup.semantics === 'SIM') {
                    return;
                }

                // XXX This might brake if an SSRC is in more than one group
                // for some reason.
                if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                    Array.isArray(ssrcGroup.ssrcs)) {
                    ssrcGroup.ssrcs.forEach(function (ssrc) {
                        if (typeof ssrc2group[ssrc] === 'undefined') {
                            ssrc2group[ssrc] = [];
                        }

                        ssrc2group[ssrc].push(ssrcGroup);
                    });
                }
            });
        }

        // ssrc to m-line index.
        var ssrc2ml = {};

        if (typeof sources === 'object') {

            // Explode the Plan B channel sources with one m-line per source.
            Object.keys(sources).forEach(function(ssrc) {

                // The (unified) m-line for this SSRC. We either create it from
                // scratch or, if it's a grouped SSRC, we re-use a related
                // mline. In other words, if the source is grouped with another
                // source, put the two together in the same m-line.
                var uLine;

                // We assume here that we are the answerer in the O/A, so any
                // offers which we translate come from the remote side, while
                // answers are local. So the check below is to make that we
                // handle receive-only SSRCs in a special way only if they come
                // from the remote side.
                if (desc.type==='offer') {
                    // We want to detect SSRCs which are used by a remote peer
                    // in an m-line with direction=recvonly (i.e. they are
                    // being used for RTCP only).
                    // This information would have gotten lost if the remote
                    // peer used Unified Plan and their local description was
                    // translated to Plan B. So we use the lack of an MSID
                    // attribute to deduce a "receive only" SSRC.
                    if (!sources[ssrc].msid) {
                        recvonlySsrcs[bLine.type][ssrc] = sources[ssrc];
                        // Receive-only SSRCs must not create new m-lines. We
                        // will assign them to an existing m-line later.
                        return;
                    }
                }

                if (typeof ssrc2group[ssrc] !== 'undefined' &&
                    Array.isArray(ssrc2group[ssrc])) {
                    ssrc2group[ssrc].some(function (ssrcGroup) {
                        // ssrcGroup.ssrcs *is* an Array, no need to check
                        // again here.
                        return ssrcGroup.ssrcs.some(function (related) {
                            if (typeof ssrc2ml[related] === 'object') {
                                uLine = ssrc2ml[related];
                                return true;
                            }
                        });
                    });
                }

                if (typeof uLine === 'object') {
                    // the m-line already exists. Just add the source.
                    uLine.sources[ssrc] = sources[ssrc];
                    delete sources[ssrc].msid;
                } else {
                    // Use the "bLine" as a prototype for the "uLine".
                    uLine = Object.create(bLine);
                    ssrc2ml[ssrc] = uLine;

                    if (typeof sources[ssrc].msid !== 'undefined') {
                        // Assign the msid of the source to the m-line. Note
                        // that it is not guaranteed that the source will have
                        // msid. In particular "recvonly" sources don't have an
                        // msid. Note that "recvonly" is a term only defined
                        // for m-lines.
                        uLine.msid = sources[ssrc].msid;
                        uLine.direction = 'sendrecv';
                        delete sources[ssrc].msid;
                    }

                    // We assign one SSRC per media line.
                    uLine.sources = {};
                    uLine.sources[ssrc] = sources[ssrc];
                    uLine.ssrcGroups = ssrc2group[ssrc];

                    // Use the cached Unified Plan SDP (if it exists) to assign
                    // SSRCs to mids.
                    if (typeof cached !== 'undefined' &&
                        typeof cached.media !== 'undefined' &&
                        Array.isArray(cached.media)) {

                        cached.media.forEach(function (m) {
                            if (typeof m.sources === 'object') {
                                Object.keys(m.sources).forEach(function (s) {
                                    if (s === ssrc) {
                                        uLine.mid = m.mid;
                                    }
                                });
                            }
                        });
                    }

                    if (typeof uLine.mid === 'undefined') {

                        // If this is an SSRC that we see for the first time
                        // assign it a new mid. This is typically the case when
                        // this method is called to transform a remote
                        // description for the first time or when there is a
                        // new SSRC in the remote description because a new
                        // peer has joined the conference. Local SSRCs should
                        // have already been added to the map in the toPlanB
                        // method.
                        //
                        // Because FF generates answers in Unified Plan style,
                        // we MUST already have a cached answer with all the
                        // local SSRCs mapped to some m-line/mid.

                        if (desc.type === 'answer') {
                            throw new Error("An unmapped SSRC was found.");
                        }

                        uLine.mid = [bLine.type, '-', ssrc].join('');
                    }

                    // Include the candidates in the 1st media line.
                    uLine.candidates = candidates;
                    uLine.iceUfrag = iceUfrag;
                    uLine.icePwd = icePwd;
                    uLine.fingerprint = fingerprint;
                    uLine.port = port;

                    mid2ul[uLine.mid] = uLine;
                }
            });
        }
    });

    // Rebuild the media array in the right order and add the missing mLines
    // (missing from the Plan B SDP).
    session.media = [];
    mids = []; // reuse

    if (desc.type === 'answer') {

        // The media lines in the answer must match the media lines in the
        // offer. The order is important too. Here we assume that Firefox is
        // the answerer, so we merely have to use the reconstructed (unified)
        // answer to update the cached (unified) answer accordingly.
        //
        // In the general case, one would have to use the cached (unified)
        // offer to find the m-lines that are missing from the reconstructed
        // answer, potentially grabbing them from the cached (unified) answer.
        // One has to be careful with this approach because inactive m-lines do
        // not always have an mid, making it tricky (impossible?) to find where
        // exactly and which m-lines are missing from the reconstructed answer.

        for (var i = 0; i < cached.media.length; i++) {
            var uLine = cached.media[i];

            if (typeof mid2ul[uLine.mid] === 'undefined') {

                // The mid isn't in the reconstructed (unified) answer.
                // This is either a (unified) m-line containing a remote
                // track only, or a (unified) m-line containing a remote
                // track and a local track that has been removed.
                // In either case, it MUST exist in the cached
                // (unified) answer.
                //
                // In case this is a removed local track, clean-up
                // the (unified) m-line and make sure it's 'recvonly' or
                // 'inactive'.

                delete uLine.msid;
                delete uLine.sources;
                delete uLine.ssrcGroups;
                if (!uLine.direction
                    || uLine.direction === 'sendrecv')
                    uLine.direction = 'recvonly';
                else if (uLine.direction === 'sendonly')
                    uLine.direction = 'inactive';
            } else {
                // This is an (unified) m-line/channel that contains a local
                // track (sendrecv or sendonly channel) or it's a unified
                // recvonly m-line/channel. In either case, since we're
                // going from PlanB -> Unified Plan this m-line MUST
                // exist in the cached answer.
            }

            session.media.push(uLine);

            if (typeof uLine.mid === 'string') {
                // inactive lines don't/may not have an mid.
                mids.push(uLine.mid);
            }
        }
    } else {

        // SDP offer/answer (and the JSEP spec) forbids removing an m-section
        // under any circumstances. If we are no longer interested in sending a
        // track, we just remove the msid and ssrc attributes and set it to
        // either a=recvonly (as the reofferer, we must use recvonly if the
        // other side was previously sending on the m-section, but we can also
        // leave the possibility open if it wasn't previously in use), or
        // a=inactive.

        if (typeof cached !== 'undefined' &&
            typeof cached.media !== 'undefined' &&
            Array.isArray(cached.media)) {
            cached.media.forEach(function(uLine) {
                mids.push(uLine.mid);
                if (typeof mid2ul[uLine.mid] !== 'undefined') {
                    session.media.push(mid2ul[uLine.mid]);
                } else {
                    delete uLine.msid;
                    delete uLine.sources;
                    delete uLine.ssrcGroups;
                    if (!uLine.direction
                        || uLine.direction === 'sendrecv')
                        uLine.direction = 'recvonly';
                    if (!uLine.direction
                        || uLine.direction === 'sendonly')
                        uLine.direction = 'inactive';
                    session.media.push(uLine);
                }
            });
        }

        // Add all the remaining (new) m-lines of the transformed SDP.
        Object.keys(mid2ul).forEach(function(mid) {
            if (mids.indexOf(mid) === -1) {
                mids.push(mid);
                if (mid2ul[mid].direction === 'recvonly') {
                    // This is a remote recvonly channel. Add its SSRC to the
                    // appropriate sendrecv or sendonly channel.
                    // TODO(gp) what if we don't have sendrecv/sendonly
                    // channel?

                    session.media.some(function (uLine) {
                        if ((uLine.direction === 'sendrecv' ||
                            uLine.direction === 'sendonly') &&
                            uLine.type === mid2ul[mid].type) {

                            // mid2ul[mid] shouldn't have any ssrc-groups
                            Object.keys(mid2ul[mid].sources).forEach(
                                function (ssrc) {
                                uLine.sources[ssrc] =
                                    mid2ul[mid].sources[ssrc];
                            });

                            return true;
                        }
                    });
                } else {
                    session.media.push(mid2ul[mid]);
                }
            }
        });
    }

    // After we have constructed the Plan Unified m-lines we can figure out
    // where (in which m-line) to place the 'recvonly SSRCs'.
    // Note: we assume here that we are the answerer in the O/A, so any offers
    // which we translate come from the remote side, while answers are local
    // (and so our last local description is cached as an 'answer').
    ["audio", "video"].forEach(function (type) {
        if (!session || !session.media || !Array.isArray(session.media))
            return;

        var idx = null;
        if (Object.keys(recvonlySsrcs[type]).length > 0) {
            idx = self.getFirstSendingIndexFromAnswer(type);
            if (idx === null){
                // If this is the first offer we receive, we don't have a
                // cached answer. Assume that we will be sending media using
                // the first m-line for each media type.

                for (var i = 0; i < session.media.length; i++) {
                    if (session.media[i].type === type) {
                        idx = i;
                        break;
                    }
                }
            }
        }

        if (idx && session.media.length > idx) {
            var mLine = session.media[idx];
            Object.keys(recvonlySsrcs[type]).forEach(function(ssrc) {
                if (mLine.sources && mLine.sources[ssrc]) {
                    console.warn("Replacing an existing SSRC.");
                }
                if (!mLine.sources) {
                    mLine.sources = {};
                }

                mLine.sources[ssrc] = recvonlySsrcs[type][ssrc];
            });
        }
    });

    // We regenerate the BUNDLE group (since we regenerated the mids)
    session.groups.some(function(group) {
        if (group.type === 'BUNDLE') {
            group.mids = mids.join(' ');
            return true;
        }
    });

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    // Cache the transformed SDP (Unified Plan) for later re-use in this
    // function.
    this.cache[desc.type] = resStr;

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var transform = __webpack_require__(209);

exports.write = function(session, opts) {

  if (typeof session !== 'undefined' &&
      typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // expand sources to ssrcs
      if (typeof mLine.sources !== 'undefined' &&
        Object.keys(mLine.sources).length !== 0) {
          mLine.ssrcs = [];
          Object.keys(mLine.sources).forEach(function (ssrc) {
            var source = mLine.sources[ssrc];
            Object.keys(source).forEach(function (attribute) {
              mLine.ssrcs.push({
                id: ssrc,
                attribute: attribute,
                value: source[attribute]
              });
            });
          });
          delete mLine.sources;
        }

      // join ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                Array.isArray(ssrcGroup.ssrcs)) {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(' ');
            }
          });
        }
    });
  }

  // join group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids !== 'undefined' && Array.isArray(g.mids)) {
        g.mids = g.mids.join(' ');
      }
    });
  }

  return transform.write(session, opts);
};

exports.parse = function(sdp) {
  var session = transform.parse(sdp);

  if (typeof session !== 'undefined' && typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // group sources attributes by ssrc
      if (typeof mLine.ssrcs !== 'undefined' && Array.isArray(mLine.ssrcs)) {
        mLine.sources = {};
        mLine.ssrcs.forEach(function (ssrc) {
          if (!mLine.sources[ssrc.id])
          mLine.sources[ssrc.id] = {};
        mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
        });

        delete mLine.ssrcs;
      }

      // split ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs === 'string') {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(' ');
            }
          });
        }
    });
  }
  // split group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids === 'string') {
        g.mids = g.mids.split(' ');
      }
    });
  }

  return session;
};



/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(210);
var writer = __webpack_require__(211);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(175);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var fmtpReducer = function (acc, expr) {
  var s = expr.split('=');
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseFmtpConfig = function (str) {
  return str.split(/\;\s?/).reduce(fmtpReducer, {});
};

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(175);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
      case '%%':
        return '%';
      case '%s':
        return String(arg);
      case '%d':
        return Number(arg);
      case '%v':
        return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // "v=0" must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = " "; // "s= " must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = "";
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startTabSharing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_webrtc_peerConnectionProxy__ = __webpack_require__(162);






var activePort = null;
var activeTab = null;
var peerConnection = null;

var DOMAIN_REGEX = /^[a-z]+:\/\/(?:[^@]+@)?([^:\/]+)/i;
var DEFAULT_SCREEN_SOURCE_TYPES = ['screen', 'window'];



function startTabSharing() {
  window.chrome.runtime.onInstalled.addListener(function (details) {
    window.chrome.declarativeContent.onPageChanged.removeRules();
  });

  window.chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    var type = request && request.type;
    console.log('got external message:', request);
    if (type === 'version') {
      var version = window.chrome.runtime.getManifest().version;
      sendResponse({ version: version });
    } else if (type === 'uninstall') {
      window.chrome.management.uninstallSelf();
    } else if (type === 'requestMediaSourceId') {
      var sourceTypes = request.sourceTypes || DEFAULT_SCREEN_SOURCE_TYPES;
      window.chrome.desktopCapture.chooseDesktopMedia(sourceTypes, sender.tab, function (sourceId) {
        sendResponse({ sourceId: sourceId || null });
      });
    }

    return true;
  });

  window.chrome.runtime.onConnectExternal.addListener(function (port) {
    console.log('##### Port is: ', port);
    var portOptions = null;
    if (port.name && port.name.startsWith('options:')) {
      portOptions = JSON.parse(port.name.slice('options:'.length));
    }

    console.log('external connection:', port.sender.url.slice(0, 50));

    var oldActivePort = activePort;
    activePort = port;

    if (oldActivePort) {
      console.log('disconnecting old port to:', oldActivePort.sender.url.slice(0, 50));
      endCall();
      oldActivePort.disconnect();
    }

    console.log('portOptions: ', __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(portOptions, 0, 4));

    if (!portOptions || portOptions.showOwnTabAction) {
      var tabId = port.sender.tab.id;
      window.chrome.pageAction.show(tabId);
    }

    if (portOptions && portOptions.pageActionConditions) {
      var conditions = portOptions.pageActionConditions.map(function (condition) {
        return new window.chrome.declarativeContent.PageStateMatcher(condition);
      });
      var actions = [new window.chrome.declarativeContent.ShowPageAction()];

      console.log('removing old page actions rules and installing new');
      window.chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        window.chrome.declarativeContent.onPageChanged.addRules([{ conditions: conditions, actions: actions }]);
      });
    }

    if (activeTab && activeTab.stream) {
      send('haveStream');
    }

    port.onMessage.addListener(function (msg) {
      if (msg.type === 'startCall') {
        startCall(msg.content);
      } else if (msg.type === 'candidate') {
        addCandidate(msg.content);
      } else if (msg.type === 'answer') {
        setAnswer(msg.content);
      } else if (msg.type === 'endCall') {
        endCall();
      } else if (msg.type === 'scrollBy') {
        scrollBy(msg.content.x, msg.content.y);
      }
    });

    port.onDisconnect.addListener(function () {
      console.log('port disconnected: ', port.sender.url.slice(0, 50));
      if (!portOptions || portOptions.showOwnTabAction) {
        window.chrome.pageAction.hide(tabId);
      }
      if (activePort === port) {
        activePort = null;
      }
      endCall();
      inactivateCurrentTab();

      if (!activePort) {
        console.log('removing old page actions rules after disconnect');
        window.chrome.declarativeContent.onPageChanged.removeRules();
      }
    });
  });

  window.chrome.pageAction.onClicked.addListener(function (tab) {
    if (activeTab && tab.id === activeTab.id) {
      inactivateCurrentTab();
    } else {
      inactivateCurrentTab();
      setActiveTab(tab);
    }
  });

  window.chrome.tabs.onRemoved.addListener(function (tabId) {
    if (activeTab && tabId === activeTab.id) {
      inactivateCurrentTab();
    }
  });

  window.chrome.tabs.onUpdated.addListener(function (tabId, update, tab) {
    if (!activeTab || tabId !== activeTab.id) {
      return;
    }
    if (update.status === 'loading') {
      if (activeTab && tabId === activeTab.id) {
        activatePageAction(tab);
      }
      if (tab.url) {
        console.log('active tab navigating to ' + tab.url + ' from domain ' + activeTab.domain);
        var newDomain = tab.url.match(DOMAIN_REGEX)[1];
        if (newDomain !== activeTab.domain) {
          console.log('active tab left domain, inactivating');
          inactivateCurrentTab();
        }
      } else {
        console.log('active tab left navigated to unknown domain, inactivating');
        inactivateCurrentTab();
      }
    }
  });

  function restorePageAction(tab) {
    window.chrome.pageAction.setTitle({
      tabId: tab.id,
      title: 'Start sharing this tab'
    });
    window.chrome.pageAction.setIcon({
      tabId: tab.id,
      path: 'icon128.png'
    });
  }

  function activatePageAction(tab) {
    window.chrome.pageAction.setTitle({
      tabId: tab.id,
      title: 'Stop sharing this tab'
    });
    window.chrome.pageAction.setIcon({
      tabId: tab.id,
      path: 'icon128_off.png'
    });
  }

  function setActiveTab(tab) {
    var domain = tab.url ? tab.url.match(DOMAIN_REGEX)[1] : null;
    activeTab = {
      id: tab.id,
      domain: domain
    };
    activatePageAction(tab);
    console.log('activated tab', tab);

    window.chrome.tabCapture.capture({
      video: true,
      videoConstraints: {
        mandatory: {
          maxWidth: tab.width,
          maxHeight: tab.height,
          maxFrameRate: 5
        }
      }
    }, function (stream) {
      if (!stream) {
        return inactivateCurrentTab();
      }
      if (activeTab) {
        activeTab.stream = stream;
        console.log('got stream', stream);
        send('haveStream');
      } else {
        stream.getVideoTracks()[0].stop();
      }
    });

    // forwards window size information from the content script
    window.chrome.tabs.executeScript(tab.id, {
      file: 'window-sizer.js'
    }, function () {
      var port = window.chrome.tabs.connect(tab.id);
      port.onMessage.addListener(function (message) {
        send(message.type, message.content);
      });
    });
  }

  function inactivateCurrentTab() {
    if (!activeTab) {
      return;
    }
    console.log('inactivating', activeTab);
    restorePageAction(activeTab);
    if (activeTab.stream) {
      send('lostStream');
      if (peerConnection) {
        console.log('had ongoing call, ending');
        closePeerConnection();
      }
      activeTab.stream.getVideoTracks()[0].stop();
      if (activeTab.stream.active) {
        console.error('failed to stop media stream:', activeTab.stream);
      }
      activeTab.stream = null;
    }
    activeTab = null;
  }

  function startCall(iceServers) {
    console.log('iceServers: ', __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(iceServers, 0, 4));
    if (!activeTab) {
      return console.warn('tried to start call without active tab');
    }
    if (!activeTab.stream) {
      return console.warn('tried to start call without active stream');
    }
    if (peerConnection) {
      closePeerConnection();
    }
    peerConnection = createRtcPeerConnection({
      iceServers: iceServers,
      iceCandidateFilter: function iceCandidateFilter(info) {
        return info.type === 'relay';
      }
    });

    console.log('adding stream', activeTab.stream);
    var currentPc = peerConnection;
    peerConnection.addStream(activeTab.stream);
    peerConnection._createOffer().then(function (offer) {
      if (currentPc === peerConnection) {
        return peerConnection._setLocalDescription(offer);
      }
    }).catch(function (error) {
      throw new Error(error);
    });
    peerConnection.waitForInitialIce().then(function () {
      if (currentPc === peerConnection) {
        send('offer', peerConnection.localDescription);
      }
    }).catch(function (error) {
      throw new Error(error);
    });
    var disconnectTimeoutId = 0;
    //   peerConnection.oniceconnectionstatechange = function () {
    peerConnection.addEventListener('iceconnectionstatechange', function () {
      if (!peerConnection) {
        return;
      }
      var connectionState = peerConnection.iceConnectionState;
      console.log('connectionState: ', connectionState);
      if (connectionState === 'failed') {
        endCall();
      }
      if (connectionState === 'disconnected') {
        disconnectTimeoutId = setTimeout(function () {
          endCall();
          disconnectTimeoutId = 0;
        }, 5000);
      } else {
        clearTimeout(disconnectTimeoutId);
        disconnectTimeoutId = 0;
      }
      // }
    });
    // peerConnection.onsignalingstatechange = function () {
    peerConnection.addEventListener('signalingstatechange', function () {
      if (!peerConnection) {
        return;
      }
      console.log('changed signaling state:', peerConnection.signalingState);
      if (peerConnection.signalingState === 'closed') {
        endCall();
      }
      // }
    });
  }

  function addCandidate(candidate) {
    if (peerConnection && candidate) {
      candidate = new RTCIceCandidate(candidate);
      peerConnection.addIceCandidate(candidate);
    }
  }

  function setAnswer(answer) {
    if (peerConnection && !peerConnection.hasAnswer) {
      answer = new RTCSessionDescription(answer);
      peerConnection._setRemoteDescription(answer).then(function () {
        peerConnection.hasAnswer = true;
        console.log('answer', answer);
      }).catch(function (error) {
        throw new Error(error);
      });
    }
  }

  function scrollBy(x, y) {
    if (activeTab) {
      if (typeof x === 'number' && typeof y === 'number') {
        window.chrome.tabs.executeScript(activeTab.id, {
          code: 'window.scrollBy(' + x + ', ' + y + ')',
          allFrames: true
        });
      }
    }
  }

  function closePeerConnection() {
    try {
      if (peerConnection) {
        peerConnection.close();
      }
    } catch (error) {
      console.error('failed to close peer connection:', error);
    }
    peerConnection = null;
  }

  function endCall() {
    closePeerConnection();
    inactivateCurrentTab();
  }

  function send(type, content) {
    if (!activePort) {
      return console.warn('could not send ' + type + ', no active port');
    }
    activePort.postMessage({
      type: type,
      content: content
    });
  }

  function defer() {
    var deferred = {};
    deferred.promise = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  }

  function makeError(funcName, message, reason) {
    var error = new Error('Error in ' + funcName + ', ' + message + ': ' + reason);
    error.reason = reason;
    error.stack = reason.stack;
    return error;
  }

  var IceConfigErrorDetector = function () {
    function IceConfigErrorDetector(iceServers) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, IceConfigErrorDetector);

      this._haveTurn = false;
      this._haveStun = false;
      if (iceServers) {
        iceServers.forEach(function (server) {
          var url = server.urls || server.url;
          if (!url) {
            console.error('peer-connection', 'ice server has no url: ' + __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(server));
          }
          if (url.indexOf('stun:') === 0) {
            _this._haveStun = true;
          }
          if (url.indexOf('turn:') === 0) {
            _this._haveStun = true;
            _this._haveTurn = true;
          }
        });
      }
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(IceConfigErrorDetector, [{
      key: 'observedCandidate',
      value: function observedCandidate(info) {
        if (info.type !== 'host') {
          this._gotStun = true;
        }
        if (info.type === 'relay') {
          this._gotTurn = true;
        }
      }
    }, {
      key: 'end',
      value: function end() {
        if (this._haveTurn && !this._gotTurn) {
          var msg = "'iceServers' contained a turn server, but no relay candidates were received." + ' Check the turn server configuration and availability.';
          console.error('peer-connection', msg);
          return 'turn';
        } else if (this._haveStun && !this._gotStun) {
          var _msg = "'iceServers' contained a stun server, but no stun candidates were received." + ' Check the stun server configuration and availability.';
          console.error('peer-connection', _msg);
          return 'stun';
        }
        return null;
      }
    }]);

    return IceConfigErrorDetector;
  }();

  // class PeerConnectionProxy {
  //   constructor(pcConfig, iceCandidateFilter) {
  //     console.debug('peer-connection', 'creating peer connection with config:', pcConfig)
  //     this._pc = new window.webkitRTCPeerConnection(pcConfig)
  //     this._iceCandidateFilter = iceCandidateFilter
  //     this._iceErrorDetector = new IceConfigErrorDetector(pcConfig.iceServers)

  //     this.addStream = this.addStream.bind(this)
  //     this.close = this.close.bind(this)
  //     this._createOffer = this._createOffer.bind(this)
  //     this._setLocalDescription = this._setLocalDescription.bind(this)
  //     this.setRemoteDescription = this.setRemoteDescription.bind(this)
  //     this.removeStream = this.removeStream.bind(this)

  //     let deferredIce = defer()
  //     this._initialIceComplete = deferredIce.promise

  //     this._pc.onicecandidate = event => {
  //       let {candidate} = event
  //       if (!candidate) {
  //         if (this._iceErrorDetector) {
  //           if (this._iceErrorDetector.end() === 'turn') {
  //             deferredIce.reject(new Error('No relay candidates received while turn server was configured'))
  //           }
  //           this._iceErrorDetector = null
  //         }
  //         deferredIce.resolve()
  //         return
  //       }

  //       let info = parseCandidateInfo(candidate.candidate, 'local')
  //       if (this._iceErrorDetector) {
  //         this._iceErrorDetector.observedCandidate(info)
  //       }

  //       if (this._iceCandidateFilter) {
  //         try {
  //           if (!this._iceCandidateFilter(info)) {
  //             console.debug('peer-connection', `ignored candidate due to being filtered out: ${candidate}`)
  //             return
  //           }
  //           setTimeout(() => {
  //             deferredIce.resolve()
  //           }, 200)
  //         } catch (error) {
  //           console.error('peer-connection', `ignoring candidate, error was thrown in candidate filter: ${error}`)
  //           return
  //         }
  //       }
  //     }
  //   }

  //   get id() {
  //     return this._id
  //   }

  //   get signalingState() {
  //     return this._pc.signalingState
  //   }

  //   get iceConnectionState() {
  //     return this._pc.iceConnectionState
  //   }

  //   get localDescription() {
  //     return this._pc.localDescription
  //   }

  //   get remoteDescription() {
  //     return this._pc.remoteDescription
  //   }

  //   set onicecandidate(value) {
  //     throw new Error("don't set this, use waitForInitialIce() instead")
  //   }

  //   set oniceconnectionstatechange(value) {
  //     this._pc.oniceconnectionstatechange = value
  //   }

  //   set onnegotiationneeded(value) {
  //     this._pc.onnegotiationneeded = value
  //   }

  //   set onsignalingstatechange(value) {
  //     this._pc.onsignalingstatechange = value
  //   }

  //   toString() {
  //     return 'peerConnection{}'
  //   }

  //   waitForInitialIce() {
  //     return this._initialIceComplete
  //   }

  //   addStream(stream) {
  //     return this._pc.addStream(stream)
  //   }

  //   removeStream(stream) {
  //     return this._pc.removeStream(stream)
  //   }

  //   close() {
  //     return this._pc.close()
  //   }

  //   _setLocalDescription(description) {
  //     filterSdpCandidates(description, this._iceCandidateFilter, 'local')
  //     if (!(description instanceof RTCSessionDescription)) {
  //       description = new RTCSessionDescription(description)
  //     }
  //     console.log('peer-connection', this + '.setLocalDescription', description.sdp)
  //     return new Promise((resolve, reject) => {
  //       this._pc.setLocalDescription(description, () => {
  //         var desc = this._pc.localDescription
  //         workaroundChromeAptBug(desc)
  //         resolve(desc)
  //       }, error => {
  //         reject(makeError('setLocalDescription', 'failed to set local description', error))
  //       })
  //     })
  //   }

  //   setRemoteDescription(description) {
  //     filterSdpCandidates(description, this._iceCandidateFilter, 'remote')
  //     if (!(description instanceof RTCSessionDescription)) {
  //       description = new RTCSessionDescription(description)
  //     }
  //     console.log('peer-connection', this + '.setRemoteDescription', description.sdp)
  //     return new Promise((resolve, reject) => {
  //       this._pc.setRemoteDescription(description, () => {
  //         resolve()
  //       }, error => {
  //         reject(makeError('setRemoteDescription', 'failed to set remote description', error))
  //       })
  //     })
  //   }

  //   _createOffer(constraints) {
  //     console.log('peer-connection', this + '._createOffer')
  //     return new Promise((resolve, reject) => {
  //       this._pc.createOffer(desc => {
  //         if (!desc) {
  //           return reject(new Error('failed to create offer, no offer generated'))
  //         }
  //         workaroundChromeAptBug(desc)
  //         filterSdpCandidates(desc, this._iceCandidateFilter, 'local')
  //         resolve(desc)
  //       }, error => {
  //         reject(makeError('createOffer', 'failed to create offer', error))
  //       }, constraints)
  //     })
  //   }

  //   addIceCandidate(candidate) {
  //     if (!(candidate instanceof RTCIceCandidate)) {
  //       candidate = new RTCIceCandidate(candidate)
  //     }
  //     try {
  //       let info = parseCandidateInfo(candidate.candidate, 'remote')
  //       if (!this._iceCandidateFilter(info)) {
  //         console.debug('peer-connection', `ignored candidate due to being filtered out: ${candidate}`)
  //         return Promise.resolve()
  //       }
  //     } catch (error) {
  //       console.error('peer-connection', `ignoring candidate, error was thrown in candidate filter: ${error}`)
  //       return Promise.resolve()
  //     }
  //     return new Promise((resolve, reject) => {
  //       this._pc.addIceCandidate(candidate, resolve, error => {
  //         reject(makeError('addIceCandidate', 'failed add ice candidate', error))
  //       })
  //     })
  //   }
  // }

  function createRtcPeerConnection(config) {
    config = config || {};
    var StatsFormatter = __webpack_require__(200).default;
    var rtcpMuxPolicy = config.rtcpMuxPolicy || 'require';
    var bundlePolicy = config.bundlePolicy || 'max-bundle';
    var iceServers = config.iceServers;
    var iceCandidateFilter = config.iceCandidateFilter;
    var iceTransportPolicy = config.iceTransportPolicy;
    if (typeof iceServers === 'string') {
      iceServers = [iceServers];
    } else if (!Array.isArray(iceServers)) {
      iceServers = [];
    }
    iceServers = iceServers.map(function (server) {
      if (typeof server === 'string') {
        return {
          urls: server
        };
      } else {
        return server;
      }
    });

    StatsFormatter.handleStats = function () {
      return null;
    };

    var pcConfig = { iceServers: iceServers, rtcpMuxPolicy: rtcpMuxPolicy, bundlePolicy: bundlePolicy, iceTransportPolicy: iceTransportPolicy };
    return new __WEBPACK_IMPORTED_MODULE_4_webrtc_peerConnectionProxy__["a" /* default */](pcConfig, StatsFormatter, iceCandidateFilter);
    // return new PeerConnectionProxy(pcConfig, iceCandidateFilter)
  }

  var candidateRegExp = new RegExp('^candidate:(\\d+) (\\d) (UDP|TCP) ([\\d\\.]*) ([\\d\\.a-f\\:]*) (\\d*)' + ' typ ([a-z]*)( raddr ([\\d\\.a-f\\:]*) rport (\\d*))?' + '( tcptype (active|passive|so))?(.*)$', 'i');

  /**
   * @typedef IceCandidateInfo
   *
   * An object containing information about an ICE candidate.
   *
   * More information can be found in [RFC 5245](https://tools.ietf.org/html/rfc5245) and
   * [RFC 6544](https://tools.ietf.org/html/rfc6544).
   *
   * @property {string} foundation - The candidate foundation.
   * @property {number} componentId - The candidate component id, will almost always be 1 because of RTCP multiplexing.
   * @property {string} transport - The transport used, `'TCP'` or `'UDP'`.
   * @property {number} priority - The candidate priority.
   * @property {string} address - The candidate address.
   * @property {number} port - The candidate port.
   * @property {string} type - The candidate type, `'host'`, `'srflx'`, `'prflx'`, or `'relay'`.
   * @property {string} candidate - The original candidate line, always without attribute prefix (`a=`).
   * @property {string} origin - The origin of the candidate, `'local'` or `'remote'`.
   * @property {string} [relatedAddress] - The candidate related address, not used in host candidates.
   * @property {number} [relatedPort] - The candidate related port, not used in host candidates.
   * @property {string} [tcpType] - The candidate tcp type, `'active'`, `'passive'`, simultaneous-open, `'so'`.
   */

  function parseCandidateInfo(line, origin) {
    var match = line.match(candidateRegExp);
    if (!match) {
      throw new Error('Could not parse ' + origin + ' ice candidate: ' + line);
    }
    var info = {
      foundation: match[1],
      componentId: parseInt(match[2]),
      transport: match[3].toUpperCase(),
      priority: parseInt(match[4]),
      address: match[5],
      port: parseInt(match[6]),
      type: match[7],
      candidate: line,
      origin: origin
    };
    if (match[9]) {
      info.relatedAddress = match[9];
    }
    if (!isNaN(match[10])) {
      info.relatedPort = parseInt(match[10]);
    }
    if (match[12]) {
      info.tcpType = match[12];
    } else if (info.transport === 'TCP') {
      if (info.port === 0 || info.port === 9) {
        info.tcpType = 'active';
        info.port = 9;
      } else {
        return;
      }
    }
    return info;
  }

  function filterSdpCandidates(desc, filter, origin) {
    var sdp = desc && desc.sdp;
    if (sdp) {
      var ending = sdp.match(/.*?(\r?\n)/)[1];
      if (!(ending.length === 1 || ending.length === 2)) {
        throw new Error('Failed to identify SDP line endings, got one with length ' + ending.length);
      }
      desc.sdp = sdp.split(ending).filter(function (line) {
        if (line.indexOf('a=candidate:') === 0) {
          try {
            var candidate = line.slice(2);
            var info = parseCandidateInfo(candidate, origin);
            if (!filter(info)) {
              console.log('peer-connection', 'ignored candidate due to being filtered out: ' + candidate);
              return false;
            }
          } catch (error) {
            console.error('peer-connection', 'ignoring candidate, error was thrown in candidate filter: ' + error);
            return false;
          }
        }
        return true;
      }).join(ending);
    }
    return desc;
  }

  function workaroundChromeAptBug(description) {
    var sdp = description.sdp;
    var vp8Regex = /^a=rtpmap:(\d+)\s+VP8\/90000$/mi;
    var rtxRegex = /^a=rtpmap:(\d+)\s+RTX\/90000$/mi;
    sdp = sdp.replace(/(m=.*\r?\n(?:[^m]=.+\r?\n)*)/g, function (mblock) {
      vp8Regex.lastIndex = 0;
      rtxRegex.lastIndex = 0;
      var vp8Match = vp8Regex.exec(mblock);
      var rtxMatch = rtxRegex.exec(mblock);
      if (vp8Match && rtxMatch) {
        var pt = parseInt(vp8Match[1], 10);
        var rtxPt = parseInt(rtxMatch[1], 10);
        var wrongPtRegex = new RegExp('^a=fmtp:' + rtxPt + '\\s+apt=(?!' + pt + ')$', 'mi');
        var wrongPtMatch = mblock.match(wrongPtRegex);
        if (wrongPtMatch) {
          mblock = mblock.replace(wrongPtRegex, 'a=fmtp:' + rtxPt + ' apt=' + pt);
          console.debug('webrtc-utils', 'fixed incorrect apt in', mblock);
        }
      }
      return mblock;
    });
    return description;
  }
}

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["startScreenSharing"] = startScreenSharing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabSharing__ = __webpack_require__(251);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startTabSharing", function() { return __WEBPACK_IMPORTED_MODULE_0__tabSharing__["a"]; });


function startScreenSharing() {
  var DEFAULT_SOURCE_TYPES = ['screen', 'window'];

  function isInstalled(sendResponse) {
    sendResponse({
      extensionId: window.chrome.runtime.id,
      message: 'extensionIsInstalled'
    });
  }

  function requestScreenSharing(request, sender, sendResponse) {
    var sourceTypes = request.message.sourceTypes || DEFAULT_SOURCE_TYPES;
    window.chrome.desktopCapture.chooseDesktopMedia(sourceTypes, sender.tab, function (sourceId) {
      sendResponse({
        extensionId: window.chrome.runtime.id,
        message: 'chromeMediaSourceId',
        content: sourceId || null
      });
    });
  }

  window.chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    console.log('got external message:', request);
    if (request.message === 'version') {
      var version = window.chrome.runtime.getManifest().version;
      sendResponse({ version: version });
    } else if (request.message === 'uninstall') {
      window.chrome.management.uninstallSelf();
    } else if (request.message === 'getInstalledStatus') {
      isInstalled(sendResponse);
    } else if (request.message === 'requestChromeMediaSourceId') {
      requestScreenSharing(request, sender, sendResponse);
    }
    // IMPORTANT to return true, to indicate
    // async return from extention to application
    return true;
  });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=chrome-extension.js.map