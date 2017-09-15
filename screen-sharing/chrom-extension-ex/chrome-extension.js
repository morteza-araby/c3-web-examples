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
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
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

var _defineProperty = __webpack_require__(46);

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
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(51)('wks')
  , uid        = __webpack_require__(35)
  , Symbol     = __webpack_require__(5).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */,
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
  , hide      = __webpack_require__(15)
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
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(69)
  , toPrimitive    = __webpack_require__(55)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(27);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64)
  , defined = __webpack_require__(33);
module.exports = function(it){
  return IObject(defined(it));
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
var aFunction = __webpack_require__(54);
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
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(99)(true);

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(75)
  , enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
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
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var global        = __webpack_require__(5)
  , hide          = __webpack_require__(15)
  , Iterators     = __webpack_require__(22)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(14)
  , dPs         = __webpack_require__(90)
  , enumBugKeys = __webpack_require__(48)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(68).appendChild(iframe);
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
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(18)
  , call        = __webpack_require__(71)
  , isArrayIter = __webpack_require__(70)
  , anObject    = __webpack_require__(14)
  , toLength    = __webpack_require__(34)
  , getIterFn   = __webpack_require__(63)
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



/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(26)
  , TAG = __webpack_require__(3)('toStringTag')
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(51)('keys')
  , uid    = __webpack_require__(35);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

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

var LIBRARY        = __webpack_require__(37)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(76)
  , hide           = __webpack_require__(15)
  , has            = __webpack_require__(19)
  , Iterators      = __webpack_require__(22)
  , $iterCreate    = __webpack_require__(97)
  , setToStringTag = __webpack_require__(28)
  , getPrototypeOf = __webpack_require__(74)
  , ITERATOR       = __webpack_require__(3)('iterator')
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
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
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
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(43)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(22);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(22)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(19)
  , toObject    = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(19)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(96)(false)
  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(5)
  , core        = __webpack_require__(0)
  , dP          = __webpack_require__(8)
  , DESCRIPTORS = __webpack_require__(9)
  , SPECIES     = __webpack_require__(3)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(18)
  , invoke             = __webpack_require__(122)
  , html               = __webpack_require__(68)
  , cel                = __webpack_require__(47)
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
  if(__webpack_require__(26)(process) == 'process'){
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
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(14)
  , getKeys  = __webpack_require__(25);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(34)
  , toIndex   = __webpack_require__(100);
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(38)
  , descriptor     = __webpack_require__(27)
  , setToStringTag = __webpack_require__(28)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45)
  , defined   = __webpack_require__(33);
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95)
  , step             = __webpack_require__(72)
  , Iterators        = __webpack_require__(22)
  , toIObject        = __webpack_require__(16);

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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(23);
__webpack_require__(30);
__webpack_require__(132);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
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
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , macrotask = __webpack_require__(82).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(26)(process) == 'process';

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
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(14)
  , aFunction = __webpack_require__(54)
  , SPECIES   = __webpack_require__(3)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(37)
  , global             = __webpack_require__(5)
  , ctx                = __webpack_require__(18)
  , classof            = __webpack_require__(43)
  , $export            = __webpack_require__(6)
  , isObject           = __webpack_require__(17)
  , aFunction          = __webpack_require__(54)
  , anInstance         = __webpack_require__(56)
  , forOf              = __webpack_require__(40)
  , speciesConstructor = __webpack_require__(126)
  , task               = __webpack_require__(82).set
  , microtask          = __webpack_require__(124)()
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
      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
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
  Internal.prototype = __webpack_require__(58)($Promise.prototype, {
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
__webpack_require__(79)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(78)(function(iter){
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
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
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
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
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
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startTabSharing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);






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
    peerConnection.createOffer().then(function (offer) {
      if (currentPc === peerConnection) {
        return peerConnection.setLocalDescription(offer);
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
    peerConnection.oniceconnectionstatechange = function () {
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
    };
    peerConnection.onsignalingstatechange = function () {
      if (!peerConnection) {
        return;
      }
      console.log('changed signaling state:', peerConnection.signalingState);
      if (peerConnection.signalingState === 'closed') {
        endCall();
      }
    };
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
      peerConnection.setRemoteDescription(answer).then(function () {
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

  var EVENT_HANDLER_ERROR_TEMPLATE = 'peerConnection.onFUNC is not available, use addEventListener instead';

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

  var PeerConnectionProxy = function () {
    function PeerConnectionProxy(pcConfig, iceCandidateFilter) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PeerConnectionProxy);

      console.debug('peer-connection', 'creating peer connection with config:', pcConfig);
      this._pc = new window.webkitRTCPeerConnection(pcConfig);
      this._iceCandidateFilter = iceCandidateFilter;
      this._iceErrorDetector = new IceConfigErrorDetector(pcConfig.iceServers);

      this.addStream = this.addStream.bind(this);
      this.close = this.close.bind(this);
      this.createOffer = this.createOffer.bind(this);
      this.setLocalDescription = this.setLocalDescription.bind(this);
      this.setRemoteDescription = this.setRemoteDescription.bind(this);
      this.removeStream = this.removeStream.bind(this);

      var deferredIce = defer();
      this._initialIceComplete = deferredIce.promise;

      this._pc.onicecandidate = function (event) {
        var candidate = event.candidate;

        if (!candidate) {
          if (_this2._iceErrorDetector) {
            if (_this2._iceErrorDetector.end() === 'turn') {
              deferredIce.reject(new Error('No relay candidates received while turn server was configured'));
            }
            _this2._iceErrorDetector = null;
          }
          deferredIce.resolve();
          return;
        }

        var info = parseCandidateInfo(candidate.candidate, 'local');
        if (_this2._iceErrorDetector) {
          _this2._iceErrorDetector.observedCandidate(info);
        }

        if (_this2._iceCandidateFilter) {
          try {
            if (!_this2._iceCandidateFilter(info)) {
              console.debug('peer-connection', 'ignored candidate due to being filtered out: ' + candidate);
              return;
            }
            setTimeout(function () {
              deferredIce.resolve();
            }, 200);
          } catch (error) {
            console.error('peer-connection', 'ignoring candidate, error was thrown in candidate filter: ' + error);
            return;
          }
        }
      };
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PeerConnectionProxy, [{
      key: 'toString',
      value: function toString() {
        return 'peerConnection{}';
      }
    }, {
      key: 'waitForInitialIce',
      value: function waitForInitialIce() {
        return this._initialIceComplete;
      }
    }, {
      key: 'addStream',
      value: function addStream(stream) {
        return this._pc.addStream(stream);
      }
    }, {
      key: 'removeStream',
      value: function removeStream(stream) {
        return this._pc.removeStream(stream);
      }
    }, {
      key: 'close',
      value: function close() {
        return this._pc.close();
      }
    }, {
      key: 'setLocalDescription',
      value: function setLocalDescription(description) {
        var _this3 = this;

        filterSdpCandidates(description, this._iceCandidateFilter, 'local');
        if (!(description instanceof RTCSessionDescription)) {
          description = new RTCSessionDescription(description);
        }
        console.log('peer-connection', this + '.setLocalDescription', description.sdp);
        return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this3._pc.setLocalDescription(description, function () {
            var desc = _this3._pc.localDescription;
            workaroundChromeAptBug(desc);
            resolve(desc);
          }, function (error) {
            reject(makeError('setLocalDescription', 'failed to set local description', error));
          });
        });
      }
    }, {
      key: 'setRemoteDescription',
      value: function setRemoteDescription(description) {
        var _this4 = this;

        filterSdpCandidates(description, this._iceCandidateFilter, 'remote');
        if (!(description instanceof RTCSessionDescription)) {
          description = new RTCSessionDescription(description);
        }
        console.log('peer-connection', this + '.setRemoteDescription', description.sdp);
        return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this4._pc.setRemoteDescription(description, function () {
            resolve();
          }, function (error) {
            reject(makeError('setRemoteDescription', 'failed to set remote description', error));
          });
        });
      }
    }, {
      key: 'createOffer',
      value: function createOffer(constraints) {
        var _this5 = this;

        console.log('peer-connection', this + '.createOffer');
        return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this5._pc.createOffer(function (desc) {
            if (!desc) {
              return reject(new Error('failed to create offer, no offer generated'));
            }
            workaroundChromeAptBug(desc);
            filterSdpCandidates(desc, _this5._iceCandidateFilter, 'local');
            resolve(desc);
          }, function (error) {
            reject(makeError('createOffer', 'failed to create offer', error));
          }, constraints);
        });
      }
    }, {
      key: 'addIceCandidate',
      value: function addIceCandidate(candidate) {
        var _this6 = this;

        if (!(candidate instanceof RTCIceCandidate)) {
          candidate = new RTCIceCandidate(candidate);
        }
        try {
          var info = parseCandidateInfo(candidate.candidate, 'remote');
          if (!this._iceCandidateFilter(info)) {
            console.debug('peer-connection', 'ignored candidate due to being filtered out: ' + candidate);
            return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.resolve();
          }
        } catch (error) {
          console.error('peer-connection', 'ignoring candidate, error was thrown in candidate filter: ' + error);
          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.resolve();
        }
        return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this6._pc.addIceCandidate(candidate, resolve, function (error) {
            reject(makeError('addIceCandidate', 'failed add ice candidate', error));
          });
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
      key: 'localDescription',
      get: function get() {
        return this._pc.localDescription;
      }
    }, {
      key: 'remoteDescription',
      get: function get() {
        return this._pc.remoteDescription;
      }
    }, {
      key: 'onicecandidate',
      set: function set(value) {
        throw new Error("don't set this, use waitForInitialIce() instead");
      }
    }, {
      key: 'oniceconnectionstatechange',
      set: function set(value) {
        this._pc.oniceconnectionstatechange = value;
      }
    }, {
      key: 'onnegotiationneeded',
      set: function set(value) {
        this._pc.onnegotiationneeded = value;
      }
    }, {
      key: 'onsignalingstatechange',
      set: function set(value) {
        this._pc.onsignalingstatechange = value;
      }
    }]);

    return PeerConnectionProxy;
  }();

  function createRtcPeerConnection(config) {
    config = config || {};
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
    var pcConfig = { iceServers: iceServers, rtcpMuxPolicy: rtcpMuxPolicy, bundlePolicy: bundlePolicy, iceTransportPolicy: iceTransportPolicy };
    return new PeerConnectionProxy(pcConfig, iceCandidateFilter);
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
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["startScreenSharing"] = startScreenSharing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabSharing__ = __webpack_require__(237);
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