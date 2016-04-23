webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(90);

	var _reactRedux = __webpack_require__(95);

	var _reactDom = __webpack_require__(120);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(254);

	var _App2 = _interopRequireDefault(_App);

	var _store = __webpack_require__(383);

	var _store2 = _interopRequireDefault(_store);

	var _Sade = __webpack_require__(400);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	var root = document.getElementById('root');
	var spinner = document.getElementById('spinner');

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default })
	  )
	), root, (0, _Sade.smooth)(root, spinner, 1500));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
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
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(102);

	var _reactRedux = __webpack_require__(95);

	var _Header = __webpack_require__(337);

	var _Header2 = _interopRequireDefault(_Header);

	var _MsgsSection = __webpack_require__(348);

	var _MsgsSection2 = _interopRequireDefault(_MsgsSection);

	var _pubsub = __webpack_require__(365);

	var PubSubActions = _interopRequireWildcard(_pubsub);

	var _style = __webpack_require__(378);

	var _style2 = _interopRequireDefault(_style);

	var _api = __webpack_require__(380);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// NOTE: if user == 'chatbot' then set-up chatbot for testing
	var CHATBOT_NAME = 'chatbot';

	// TODO: support multiple pubsub topics
	var TOPIC = 'ReactJS';

	// how often to poll back-end server for new messages
	var POLL_INTERVAL = 1000;

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.intervals = [];
	    }
	  }, {
	    key: 'setInterval',
	    value: function (_setInterval) {
	      function setInterval() {
	        return _setInterval.apply(this, arguments);
	      }

	      setInterval.toString = function () {
	        return _setInterval.toString();
	      };

	      return setInterval;
	    }(function () {
	      this.intervals.push(setInterval.apply(null, arguments));
	    })
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.intervals.forEach(clearInterval);
	    }
	  }, {
	    key: 'poll',
	    value: function poll(actions, user) {
	      _api.api.retrieve(TOPIC, user, function (err, res, status, xhr) {
	        if (err) {
	          throw new Error("API.retrieve ERROR: " + res, err);
	        } else {
	          switch (status) {
	            case "nocontent":
	              // nothing to show
	              break;
	            case "notfound":
	              console.error("error: topic not found", TOPIC, user);
	              break;
	            case "success":
	              actions.addMsg(_api.api.getMsg(res));
	              break;
	            default:
	              console.error("dev error: no case for status in App.poll callback", status);
	              break;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'publish',
	    value: function publish(msg, next) {
	      _api.api.publish(TOPIC, msg, function (err, res, status, xhr) {
	        if (err) {
	          throw new Error("API.publish ERROR: " + res, err);
	        } else if (typeof next === 'function') {
	          next();
	        }
	      });
	    }
	  }, {
	    key: 'addName',
	    value: function addName(user) {
	      var self = this;
	      var actions = this.props.actions;

	      var next = function next() {
	        self.setInterval(function () {
	          return self.poll(actions, user);
	        }, POLL_INTERVAL);
	        // allow setting-up a chatbot for testing
	        if (user === CHATBOT_NAME) {
	          _api.api.chatbot.start(TOPIC);
	        }
	      };
	      _api.api.subscribe(TOPIC, user, function (err, res, status, xhr) {
	        if (err) {
	          throw new Error("API.subscribe ERROR: " + res, err);
	        } else {
	          // ok, we're signed-up for "ReactJS" topic, watch chat:
	          next();
	        }
	      });
	      // update name display
	      actions.addName(user);
	    }

	    // if user is scrolling, don't auto-scroll

	  }, {
	    key: 'scroll',
	    value: function scroll() {
	      _api.api.getEl("#msgs", function (msgs) {
	        if (msgs.length) {
	          (function () {
	            var inner = msgs.find("ul");
	            var height = inner.height();
	            var scroll = msgs.scrollTop();
	            var size = msgs.height();
	            var total = scroll + size;
	            if (height <= total) {
	              // auto-scroll to bottom after render:
	              setTimeout(function () {
	                msgs.animate({ scrollTop: inner.height() }, "slow");
	              }, 100);
	            }
	          })();
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: _style2.default.normal });
	    }
	  }, {
	    key: 'old_render',
	    value: function old_render() {
	      var _props = this.props;
	      var name = _props.name;
	      var topics = _props.topics;
	      var msgs = _props.msgs;
	      var actions = _props.actions;

	      // call this BEFORE we render to decide if we'll auto-scroll:
	      this.scroll();

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.normal },
	        _react2.default.createElement(_Header2.default, { name: name, addName: this.addName.bind(this) }),
	        _react2.default.createElement(_MsgsSection2.default, { topic: TOPIC, addMsg: this.publish.bind(this), name: name, topics: topics, msgs: msgs, actions: actions })
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    name: state.name,
	    topics: state.topics,
	    msgs: state.msgs
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(PubSubActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(257);
	module.exports = __webpack_require__(268).Object.getPrototypeOf;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(258)
	  , $getPrototypeOf = __webpack_require__(260);

	__webpack_require__(266)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(259);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(261)
	  , toObject    = __webpack_require__(258)
	  , IE_PROTO    = __webpack_require__(262)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(263)('keys')
	  , uid    = __webpack_require__(265);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(264)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 265 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(267)
	  , core    = __webpack_require__(268)
	  , fails   = __webpack_require__(277);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(264)
	  , core      = __webpack_require__(268)
	  , ctx       = __webpack_require__(269)
	  , hide      = __webpack_require__(271)
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

/***/ },
/* 268 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(270);
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

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(272)
	  , createDesc = __webpack_require__(280);
	module.exports = __webpack_require__(276) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(273)
	  , IE8_DOM_DEFINE = __webpack_require__(275)
	  , toPrimitive    = __webpack_require__(279)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(276) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(274);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(276) && !__webpack_require__(277)(function(){
	  return Object.defineProperty(__webpack_require__(278)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(277)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(274)
	  , document = __webpack_require__(264).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(274);
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

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 281 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(283);

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

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	var $Object = __webpack_require__(268).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(267);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(276), 'Object', {defineProperty: __webpack_require__(272).f});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(287);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(288);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(316);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(289), __esModule: true };

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(290);
	__webpack_require__(312);
	module.exports = __webpack_require__(311)('iterator');

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(291)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(293)(String, 'String', function(iterated){
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

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(292)
	  , defined   = __webpack_require__(259);
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

/***/ },
/* 292 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(294)
	  , $export        = __webpack_require__(267)
	  , redefine       = __webpack_require__(295)
	  , hide           = __webpack_require__(271)
	  , has            = __webpack_require__(261)
	  , Iterators      = __webpack_require__(296)
	  , $iterCreate    = __webpack_require__(297)
	  , setToStringTag = __webpack_require__(310)
	  , getPrototypeOf = __webpack_require__(260)
	  , ITERATOR       = __webpack_require__(311)('iterator')
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

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(271);

/***/ },
/* 296 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(298)
	  , descriptor     = __webpack_require__(280)
	  , setToStringTag = __webpack_require__(310)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(271)(IteratorPrototype, __webpack_require__(311)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(273)
	  , dPs         = __webpack_require__(299)
	  , enumBugKeys = __webpack_require__(308)
	  , IE_PROTO    = __webpack_require__(262)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(278)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(309).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(272)
	  , anObject = __webpack_require__(273)
	  , getKeys  = __webpack_require__(300);

	module.exports = __webpack_require__(276) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(301)
	  , enumBugKeys = __webpack_require__(308);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(261)
	  , toIObject    = __webpack_require__(302)
	  , arrayIndexOf = __webpack_require__(305)(false)
	  , IE_PROTO     = __webpack_require__(262)('IE_PROTO');

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

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(303)
	  , defined = __webpack_require__(259);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(304);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 304 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(302)
	  , toLength  = __webpack_require__(306)
	  , toIndex   = __webpack_require__(307);
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

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(292)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(292)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 308 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(264).document && document.documentElement;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(272).f
	  , has = __webpack_require__(261)
	  , TAG = __webpack_require__(311)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(263)('wks')
	  , uid        = __webpack_require__(265)
	  , Symbol     = __webpack_require__(264).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(313);
	var global        = __webpack_require__(264)
	  , hide          = __webpack_require__(271)
	  , Iterators     = __webpack_require__(296)
	  , TO_STRING_TAG = __webpack_require__(311)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(314)
	  , step             = __webpack_require__(315)
	  , Iterators        = __webpack_require__(296)
	  , toIObject        = __webpack_require__(302);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(293)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(317), __esModule: true };

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(318);
	__webpack_require__(328);
	module.exports = __webpack_require__(268).Symbol;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(264)
	  , core           = __webpack_require__(268)
	  , has            = __webpack_require__(261)
	  , DESCRIPTORS    = __webpack_require__(276)
	  , $export        = __webpack_require__(267)
	  , redefine       = __webpack_require__(295)
	  , META           = __webpack_require__(319).KEY
	  , $fails         = __webpack_require__(277)
	  , shared         = __webpack_require__(263)
	  , setToStringTag = __webpack_require__(310)
	  , uid            = __webpack_require__(265)
	  , wks            = __webpack_require__(311)
	  , keyOf          = __webpack_require__(320)
	  , enumKeys       = __webpack_require__(321)
	  , isArray        = __webpack_require__(324)
	  , anObject       = __webpack_require__(273)
	  , toIObject      = __webpack_require__(302)
	  , toPrimitive    = __webpack_require__(279)
	  , createDesc     = __webpack_require__(280)
	  , _create        = __webpack_require__(298)
	  , gOPNExt        = __webpack_require__(325)
	  , $GOPD          = __webpack_require__(327)
	  , $DP            = __webpack_require__(272)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

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
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
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
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
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
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(326).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(323).f  = $propertyIsEnumerable
	  __webpack_require__(322).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(294)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(271)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(265)('meta')
	  , isObject = __webpack_require__(274)
	  , has      = __webpack_require__(261)
	  , setDesc  = __webpack_require__(272).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(277)(function(){
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

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(300)
	  , toIObject = __webpack_require__(302);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(300)
	  , gOPS    = __webpack_require__(322)
	  , pIE     = __webpack_require__(323);
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

/***/ },
/* 322 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 323 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(304);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(302)
	  , gOPN      = __webpack_require__(326).f
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


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(301)
	  , hiddenKeys = __webpack_require__(308).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(323)
	  , createDesc     = __webpack_require__(280)
	  , toIObject      = __webpack_require__(302)
	  , toPrimitive    = __webpack_require__(279)
	  , has            = __webpack_require__(261)
	  , IE8_DOM_DEFINE = __webpack_require__(275)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(276) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(330);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(334);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(287);

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

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(331), __esModule: true };

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(332);
	module.exports = __webpack_require__(268).Object.setPrototypeOf;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(267);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(333).set});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(274)
	  , anObject = __webpack_require__(273);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(269)(Function.call, __webpack_require__(327).f(Object.prototype, '__proto__').set, 2);
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

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(335), __esModule: true };

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(336);
	var $Object = __webpack_require__(268).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(267)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(298)});

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _NameTextInput = __webpack_require__(338);

	var _NameTextInput2 = _interopRequireDefault(_NameTextInput);

	var _NameLabel = __webpack_require__(345);

	var _NameLabel2 = _interopRequireDefault(_NameLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'handleSave',
	    value: function handleSave(text) {
	      if (text.length) {
	        this.props.addName(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var NameDisplay = void 0;
	      if (this.props.name.text === '') {
	        NameDisplay = _react2.default.createElement(_NameTextInput2.default, {
	          newName: true,
	          onSave: this.handleSave.bind(this),
	          placeholder: 'What is your name?' });
	      } else {
	        NameDisplay = _react2.default.createElement(_NameLabel2.default, {
	          text: "Welcome " + this.props.name.text + " !" });
	      }
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'ClusterHQ PubSub Web Client'
	        ),
	        NameDisplay
	      );
	    }
	  }]);
	  return Header;
	}(_react.Component);

	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(339);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(340);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(341);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NameTextInput = function (_Component) {
	  (0, _inherits3.default)(NameTextInput, _Component);

	  function NameTextInput(props, context) {
	    (0, _classCallCheck3.default)(this, NameTextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NameTextInput).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(NameTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (e.which === 13) {
	        this.props.onSave(text);
	        if (this.props.newName) {
	          this.setState({ text: '' });
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      var text = e.target.value.trim();
	      if (!this.props.newName) {
	        this.props.onSave(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.edit, this.props.editing), (0, _defineProperty3.default)(_classnames, _style2.default.new, this.props.newName), _classnames), _style2.default.normal);

	      return _react2.default.createElement('input', { className: classes,
	        type: 'text',
	        autoFocus: 'true',
	        placeholder: this.props.placeholder,
	        value: this.state.text,
	        onBlur: this.handleBlur.bind(this),
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	  return NameTextInput;
	}(_react.Component);

	exports.default = NameTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(283);

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

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(342);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__new___2viDv,\r\n.style__edit___241ck {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.style__new___2viDv {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}", "", {"version":3,"sources":["/./components/NameTextInput/style.css"],"names":[],"mappings":";AACA;;EAEE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,kDAAkD;EAClD,uBAAuB;EACvB,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,aAAa;EACb,iCAAiC;EACjC,8CAA8C;CAC/C","file":"style.css","sourcesContent":["\r\n.new,\r\n.edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.new {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"new": "style__new___2viDv",
		"edit": "style__edit___241ck"
	};

/***/ },
/* 343 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(340);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(346);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NameLabel = function (_Component) {
	  (0, _inherits3.default)(NameLabel, _Component);

	  function NameLabel(props, context) {
	    (0, _classCallCheck3.default)(this, NameLabel);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NameLabel).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(NameLabel, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)(_style2.default.normal);
	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        this.state.text
	      );
	    }
	  }]);
	  return NameLabel;
	}(_react.Component);

	exports.default = NameLabel;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(347);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__normal___2jasx {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}", "", {"version":3,"sources":["/./components/NameLabel/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,iCAAiC;EACjC,8CAA8C;EAC9C,uBAAuB;EACvB,4BAA4B;CAC7B","file":"style.css","sourcesContent":["\r\n.normal {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___2jasx"
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(349);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _MsgItem = __webpack_require__(354);

	var _MsgItem2 = _interopRequireDefault(_MsgItem);

	var _Footer = __webpack_require__(357);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _MsgTextInput = __webpack_require__(360);

	var _MsgTextInput2 = _interopRequireDefault(_MsgTextInput);

	var _style = __webpack_require__(363);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MsgsSection = function (_Component) {
	  (0, _inherits3.default)(MsgsSection, _Component);

	  function MsgsSection(props, context) {
	    (0, _classCallCheck3.default)(this, MsgsSection);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MsgsSection).call(this, props, context));

	    _this.handleSaveMsg = _this.handleSaveMsg.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(MsgsSection, [{
	    key: 'handleSaveMsg',
	    value: function handleSaveMsg(msg) {
	      this.props.addMsg(msg);
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      var _props = this.props;
	      var msgs = _props.msgs;
	      var actions = _props.actions;


	      var msgCount = msgs.length;

	      return _react2.default.createElement(_Footer2.default, {
	        msgCount: msgCount,
	        onClearAll: actions.clearAll });
	    }
	  }, {
	    key: 'renderBlank',
	    value: function renderBlank() {
	      return _react2.default.createElement('div', null);
	    }
	  }, {
	    key: 'renderSection',
	    value: function renderSection(topic) {
	      var _props2 = this.props;
	      var topics = _props2.topics;
	      var msgs = _props2.msgs;
	      var actions = _props2.actions;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.topic },
	          'Topic: ',
	          topic
	        ),
	        _react2.default.createElement(
	          'section',
	          { id: 'msgs', className: _style2.default.main },
	          _react2.default.createElement(
	            'ul',
	            { className: _style2.default.normal },
	            msgs.map(function (msg) {
	              return _react2.default.createElement(_MsgItem2.default, (0, _extends3.default)({ key: msg.id, msg: msg }, actions));
	            })
	          )
	        ),
	        _react2.default.createElement(_MsgTextInput2.default, {
	          newMsg: true,
	          onSave: this.handleSaveMsg.bind(this),
	          placeholder: 'Enter a message...' }),
	        this.renderFooter()
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var topic = _props3.topic;


	      var output = name.text === '' ? this.renderBlank() : this.renderSection(topic);

	      return output;
	    }
	  }]);
	  return MsgsSection;
	}(_react.Component);

	exports.default = MsgsSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(350);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(351), __esModule: true };

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(352);
	module.exports = __webpack_require__(268).Object.assign;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(267);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(353)});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(300)
	  , gOPS     = __webpack_require__(322)
	  , pIE      = __webpack_require__(323)
	  , toObject = __webpack_require__(258)
	  , IObject  = __webpack_require__(303)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(277)(function(){
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

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(340);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(355);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TYPE_PIC = 0;
	var ITEM_VAL = 1;
	var ITEM_ID = 2;
	var REGEX_PICS = /^(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/i;

	var ids = 0;

	function transform(data) {
	  var result = [],
	      parts = data.text.split(" "),
	      len = parts.length,
	      temp = [],
	      addWords = function addWords() {
	    if (temp.length) {
	      result.push([false, temp.join(' '), ++ids]);
	      temp = [];
	    }
	  },
	      num,
	      part;
	  for (num = 0; num < len; num++) {
	    part = parts[num];
	    if (REGEX_PICS.test(part)) {
	      addWords();
	      result.push([true, part, ++ids]);
	    } else {
	      temp.push(part);
	    }
	  }
	  addWords();

	  return result;
	}

	var MsgItemWrapper = function (_Component) {
	  (0, _inherits3.default)(MsgItemWrapper, _Component);

	  function MsgItemWrapper(props, context) {
	    (0, _classCallCheck3.default)(this, MsgItemWrapper);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MsgItemWrapper).call(this, props, context));

	    _this.getText = _this.getText.bind(_this);
	    _this.getPic = _this.getPic.bind(_this);
	    _this.renderItem = _this.renderItem.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(MsgItemWrapper, [{
	    key: 'getPic',
	    value: function getPic(url) {
	      return _react2.default.createElement(
	        'figure',
	        { className: _style2.default.inline },
	        _react2.default.createElement(
	          'a',
	          { target: '_pic', href: url, title: 'Open full size in new tab' },
	          _react2.default.createElement('img', { src: url, className: _style2.default.mediaPic })
	        )
	      );
	    }
	  }, {
	    key: 'getText',
	    value: function getText(item) {
	      return _react2.default.createElement(
	        'span',
	        null,
	        item
	      );
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(item) {
	      var isPic = item[TYPE_PIC];
	      var value = item[ITEM_VAL];
	      return isPic ? this.getPic(value) : this.getText(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderItem(this.props.item);
	    }
	  }]);
	  return MsgItemWrapper;
	}(_react.Component);

	var MsgItem = function (_Component2) {
	  (0, _inherits3.default)(MsgItem, _Component2);

	  function MsgItem(props, context) {
	    (0, _classCallCheck3.default)(this, MsgItem);

	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MsgItem).call(this, props, context));

	    _this2.state = { items: transform(props.msg), id: props.msg.id };
	    return _this2;
	  }

	  (0, _createClass3.default)(MsgItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var deleteMsg = _props.deleteMsg;
	      var msg = _props.msg;

	      var items = this.state.items;

	      return _react2.default.createElement(
	        'li',
	        { className: _style2.default.normal },
	        _react2.default.createElement(
	          'div',
	          { className: [_style2.default.pad] },
	          items.map(function (item) {
	            return _react2.default.createElement(MsgItemWrapper, { key: "msg" + item[ITEM_ID], item: item });
	          }),
	          _react2.default.createElement('button', { className: _style2.default.destroy, onClick: function onClick() {
	              return deleteMsg(msg.id);
	            } })
	        )
	      );
	    }
	  }]);
	  return MsgItem;
	}(_react.Component);

	exports.default = MsgItem;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(356);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__normal___2pJpc .style__toggle___1oH-_ {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\n.style__normal___2pJpc .style__toggle___1oH-_:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.style__normal___2pJpc .style__toggle___1oH-_:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.style__normal___2pJpc label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  -webkit-transition: color 0.4s;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.style__normal___2pJpc .style__destroy___1OBCi {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 5px;\r\n  -webkit-transition: color 0.2s ease-out;\r\n  transition: color 0.2s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.style__normal___2pJpc .style__destroy___1OBCi:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.style__normal___2pJpc .style__destroy___1OBCi:after {\r\n  content: '\\D7';\r\n}\r\n\r\n.style__normal___2pJpc:hover .style__destroy___1OBCi {\r\n  display: block;\r\n}\r\n\r\n.style__normal___2pJpc .style__edit___vTaIi {\r\n  display: none;\r\n}\r\n\r\n.style__editing___dadlR {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.style__editing___dadlR:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.style__editing___dadlR .style__edit___vTaIi {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.style__editing___dadlR .style__view___3ldmS {\r\n  display: none;\r\n}\r\n\r\n.style__completed___UUoyv label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n.style__pad___3xH_8 {\r\n  padding: 10px;\r\n}\r\n\r\n.style__mediaPic___2oVsy {\r\n  width: 100px;\r\n}\r\n\r\n.style__inline___1r3l_ {\r\n  display: inline-block;\r\n  margin: 5px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Shine mouseover effect, adapted from: http://codepen.io/nxworld/pen/ZYNOBZ */\r\nfigure.style__inline___1r3l_ {\r\n\tposition: relative;\r\n  overflow: hidden;\r\n}\r\nfigure.style__inline___1r3l_::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: -75%;\r\n\tz-index: 2;\r\n\tdisplay: block;\r\n\tcontent: '';\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tbackground: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\r\n\tbackground: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\r\n\t-webkit-transform: skewX(-25deg);\r\n\ttransform: skewX(-25deg);\r\n}\r\nfigure.style__inline___1r3l_:hover::before {\r\n\t-webkit-animation: style__shine___1Vckb .75s;\r\n\tanimation: style__shine___1Vckb .75s;\r\n}\r\n@-webkit-keyframes style__shine___1Vckb {\r\n\t100% {\r\n\t\tleft: 125%;\r\n\t}\r\n}\r\n@keyframes style__shine___1Vckb {\r\n\t100% {\r\n\t\tleft: 125%;\r\n\t}\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .style__normal___2pJpc .style__toggle___1oH-_ {\r\n    background: none;\r\n  }\r\n\r\n  .style__normal___2pJpc .style__toggle___1oH-_ {\r\n    height: 40px;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/MsgItem/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,wCAAgC;EAAhC,gCAAgC;EAChC,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;EACpB,WAAW;CAEZ;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;;AAGD;EACE,cAAc;CACf;;AAED;EACE,aAAa;CACd;;AAED;EACE,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;CACvB;;AAED,gFAAgF;AAChF;CACC,mBAAmB;EAClB,iBAAiB;CAClB;AACD;CACC,mBAAmB;CACnB,OAAO;CACP,WAAW;CACX,WAAW;CACX,eAAe;CACf,YAAY;CACZ,WAAW;CACX,aAAa;CACb,6FAA6F;CAC7F,yFAAyF;CACzF,iCAAiC;CACjC,yBAAyB;CACzB;AACD;CACC,6CAA8B;CAC9B,qCAAsB;CACtB;AACD;CACC;EACC,WAAW;EACX;CACD;AACD;CACC;EACC,WAAW;EACX;CACD;;AAED;;;EAGE;AACF;EACE;IACE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\r\n.normal .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  appearance: none;\r\n}\r\n\r\n.normal .toggle:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.normal .toggle:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.normal label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.normal .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 5px;\r\n  transition: color 0.2s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.normal .destroy:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.normal .destroy:after {\r\n  content: '×';\r\n}\r\n\r\n.normal:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.normal .edit {\r\n  display: none;\r\n}\r\n\r\n.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n  composes: normal;\r\n}\r\n\r\n.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.editing .edit {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.editing .view {\r\n  display: none;\r\n}\r\n\r\n.completed label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n.pad {\r\n  padding: 10px;\r\n}\r\n\r\n.mediaPic {\r\n  width: 100px;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n  margin: 5px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Shine mouseover effect, adapted from: http://codepen.io/nxworld/pen/ZYNOBZ */\r\nfigure.inline {\r\n\tposition: relative;\r\n  overflow: hidden;\r\n}\r\nfigure.inline::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: -75%;\r\n\tz-index: 2;\r\n\tdisplay: block;\r\n\tcontent: '';\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tbackground: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\r\n\tbackground: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\r\n\t-webkit-transform: skewX(-25deg);\r\n\ttransform: skewX(-25deg);\r\n}\r\nfigure.inline:hover::before {\r\n\t-webkit-animation: shine .75s;\r\n\tanimation: shine .75s;\r\n}\r\n@-webkit-keyframes shine {\r\n\t100% {\r\n\t\tleft: 125%;\r\n\t}\r\n}\r\n@keyframes shine {\r\n\t100% {\r\n\t\tleft: 125%;\r\n\t}\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .normal .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .normal .toggle {\r\n    height: 40px;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___2pJpc",
		"toggle": "style__toggle___1oH-_",
		"destroy": "style__destroy___1OBCi",
		"edit": "style__edit___vTaIi",
		"editing": "style__editing___dadlR style__normal___2pJpc",
		"view": "style__view___3ldmS",
		"completed": "style__completed___UUoyv",
		"pad": "style__pad___3xH_8",
		"mediaPic": "style__mediaPic___2oVsy",
		"inline": "style__inline___1r3l_",
		"shine": "style__shine___1Vckb"
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(340);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(358);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function (_Component) {
	  (0, _inherits3.default)(Footer, _Component);

	  function Footer() {
	    (0, _classCallCheck3.default)(this, Footer);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Footer, [{
	    key: 'renderMsgCount',
	    value: function renderMsgCount() {
	      var msgCount = this.props.msgCount;

	      var itemWord = msgCount === 1 ? 'message' : 'messages';

	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.count },
	        _react2.default.createElement(
	          'strong',
	          null,
	          msgCount || 'No'
	        ),
	        ' ',
	        itemWord
	      );
	    }
	  }, {
	    key: 'renderAttributionLink',
	    value: function renderAttributionLink() {
	      var link = 'https://github.com/tj/frontend-boilerplate';
	      var title = 'Adapted from: TJ';

	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'a',
	          { className: _style2.default.attribution,
	            target: '_attribution',
	            href: link },
	          title
	        )
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      var onClearAll = this.props.onClearAll;


	      return _react2.default.createElement(
	        'button',
	        { className: _style2.default.clearCompleted, onClick: onClearAll },
	        'Clear All'
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'footer',
	        { className: _style2.default.normal },
	        this.renderMsgCount(),
	        this.renderAttributionLink(),
	        this.renderClearButton()
	      );
	    }
	  }]);
	  return Footer;
	}(_react.Component);

	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(359);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__normal___2NVjP {\r\n  color: #777;\r\n  padding: 10px 15px;\r\n  height: 20px;\r\n  text-align: center;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.style__attribution___1e1fD {\r\n  color: rgba(0, 111, 222, 0.5);\r\n  opacity: 0.42;\r\n}\r\n\r\n.style__attribution___1e1fD:hover {\r\n  color: rgba(0, 111, 222, 0.5);\r\n  opacity: 1.0;\r\n}\r\n\r\n.style__normal___2NVjP::before {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 15px;\r\n  overflow: visible;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 8px 0 -3px #f6f6f6,\r\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n    0 16px 0 -6px #f6f6f6,\r\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.style__filters___1XtyZ {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.style__filters___1XtyZ li {\r\n  display: inline;\r\n}\r\n\r\n.style__filters___1XtyZ li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.style__filters___1XtyZ li a.style__selected___1cVb1,\r\n.style__filters___1XtyZ li a:hover {\r\n  border-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.style__filters___1XtyZ li a.style__selected___1cVb1 {\r\n  border-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.style__count___14dCb {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.style__count___14dCb strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.style__clearCompleted___1teqF,\r\nhtml .style__clearCompleted___1teqF:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  position: relative;\r\n}\r\n\r\n.style__clearCompleted___1teqF::after {\r\n  visibility: visible;\r\n  content: 'Clear All';\r\n  position: absolute;\r\n  right: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.style__clearCompleted___1teqF:hover::after {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .style__normal___2NVjP {\r\n    height: 50px;\r\n  }\r\n\r\n  .style__filters___1XtyZ {\r\n    bottom: 10px;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/Footer/style.css"],"names":[],"mappings":";AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;EAC9B,cAAc;CACf;;AAED;EACE,8BAA8B;EAC9B,aAAa;CACd;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,QAAQ;EACR,aAAa;EACb,kBAAkB;EAClB;;;;uCAIqC;CACtC;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,QAAQ;CACT;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;CACpB;;AAED;;EAEE,qCAAqC;CACtC;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;;EAEE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;EACT,oBAAoB;CACrB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE;IACE,aAAa;GACd;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\r\n.normal {\r\n  color: #777;\r\n  padding: 10px 15px;\r\n  height: 20px;\r\n  text-align: center;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.attribution {\r\n  color: rgba(0, 111, 222, 0.5);\r\n  opacity: 0.42;\r\n}\r\n\r\n.attribution:hover {\r\n  color: rgba(0, 111, 222, 0.5);\r\n  opacity: 1.0;\r\n}\r\n\r\n.normal::before {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 15px;\r\n  overflow: visible;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 8px 0 -3px #f6f6f6,\r\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n    0 16px 0 -6px #f6f6f6,\r\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.filters {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.filters li {\r\n  display: inline;\r\n}\r\n\r\n.filters li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.filters li a.selected,\r\n.filters li a:hover {\r\n  border-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters li a.selected {\r\n  border-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.count {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.count strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.clearCompleted,\r\nhtml .clearCompleted:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  position: relative;\r\n}\r\n\r\n.clearCompleted::after {\r\n  visibility: visible;\r\n  content: 'Clear All';\r\n  position: absolute;\r\n  right: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clearCompleted:hover::after {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .normal {\r\n    height: 50px;\r\n  }\r\n\r\n  .filters {\r\n    bottom: 10px;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___2NVjP",
		"attribution": "style__attribution___1e1fD",
		"filters": "style__filters___1XtyZ",
		"selected": "style__selected___1cVb1",
		"count": "style__count___14dCb",
		"clearCompleted": "style__clearCompleted___1teqF"
	};

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(339);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(255);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(281);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(282);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(286);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(329);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(340);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(361);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MsgTextInput = function (_Component) {
	  (0, _inherits3.default)(MsgTextInput, _Component);

	  function MsgTextInput(props, context) {
	    (0, _classCallCheck3.default)(this, MsgTextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MsgTextInput).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(MsgTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (text != '' && e.which === 13) {
	        this.props.onSave(text);
	        this.setState({ text: '' });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var val = e.target.value;
	      this.setState({ text: val });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.edit, this.props.editing), (0, _defineProperty3.default)(_classnames, _style2.default.new, this.props.newMsg), _classnames), _style2.default.normal);

	      return _react2.default.createElement('input', { className: classes,
	        type: 'text',
	        autoFocus: 'true',
	        placeholder: this.props.placeholder,
	        value: this.state.text,
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	  return MsgTextInput;
	}(_react.Component);

	exports.default = MsgTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(362);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__new___18Yep,\r\n.style__edit___wNZLZ {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.style__new___18Yep {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}", "", {"version":3,"sources":["/./components/MsgTextInput/style.css"],"names":[],"mappings":";AACA;;EAEE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,kDAAkD;EAClD,uBAAuB;EACvB,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,aAAa;EACb,iCAAiC;EACjC,8CAA8C;CAC/C","file":"style.css","sourcesContent":["\r\n.new,\r\n.edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.new {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"new": "style__new___18Yep",
		"edit": "style__edit___wNZLZ"
	};

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(364);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__main___2CjmQ {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n  border-bottom: 1px solid #e6e6e6;\r\n  height: 400px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.style__topic___10rNt {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 5px;\r\n}\r\n\r\n.style__normal___3KqEx {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.style__normal___3KqEx li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n.style__normal___3KqEx li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.style__normal___3KqEx li.style__editing___3aYpN {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.style__normal___3KqEx li.style__editing___3aYpN .style__edit___2vwez {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.style__normal___3KqEx li.style__editing___3aYpN .style__view___2W4VZ {\r\n  display: none;\r\n}\r\n\r\n.style__normal___3KqEx li .style__toggle___1Bct- {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\n.style__normal___3KqEx li .style__toggle___1Bct-:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.style__normal___3KqEx li .style__toggle___1Bct-:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.style__normal___3KqEx li label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  -webkit-transition: color 0.4s;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.style__normal___3KqEx li.style__completed___b783a label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.style__normal___3KqEx li .style__destroy___d5kPH {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  -webkit-transition: color 0.2s ease-out;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.style__normal___3KqEx li .style__destroy___d5kPH:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.style__normal___3KqEx li .style__destroy___d5kPH:after {\r\n  content: '\\D7';\r\n}\r\n\r\n.style__normal___3KqEx li:hover .style__destroy___d5kPH {\r\n  display: block;\r\n}\r\n\r\n.style__normal___3KqEx li .style__edit___2vwez {\r\n  display: none;\r\n}\r\n\r\n.style__normal___3KqEx li.style__editing___3aYpN:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.style__toggleAll___1IfoU {\r\n  position: absolute;\r\n  top: -55px;\r\n  left: -12px;\r\n  width: 60px;\r\n  height: 34px;\r\n  text-align: center;\r\n  border: none; /* Mobile Safari */\r\n}\r\n\r\n.style__toggleAll___1IfoU:before {\r\n  content: '\\276F';\r\n  font-size: 22px;\r\n  color: #e6e6e6;\r\n  padding: 10px 27px 10px 27px;\r\n}\r\n\r\n.style__toggleAll___1IfoU:checked:before {\r\n  color: #737373;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .style__toggleAll___1IfoU,\r\n  .style__normal___3KqEx li .style__toggle___1Bct- {\r\n    background: none;\r\n  }\r\n\r\n  .style__normal___3KqEx li .style__toggle___1Bct- {\r\n    height: 40px;\r\n  }\r\n\r\n  .style__toggleAll___1IfoU {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/MsgsSection/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,WAAW;EACX,8BAA8B;EAC9B,iCAAiC;EACjC,cAAc;EACd,iBAAiB;CAClB;;AAED;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;CAClC;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wCAAgC;EAAhC,gCAAgC;CACjC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa,CAAC,mBAAmB;CAClC;;AAED;EACE,iBAAa;EACb,gBAAgB;EAChB,eAAe;EACf,6BAA6B;CAC9B;;AAED;EACE,eAAe;CAChB;;AAED;;;EAGE;AACF;EACE;;IAEE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;;EAED;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,yBAAiB;OAAjB,sBAAiB;YAAjB,iBAAiB;GAClB;CACF","file":"style.css","sourcesContent":["\r\n.main {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n  border-bottom: 1px solid #e6e6e6;\r\n  height: 400px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.topic {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 5px;\r\n}\r\n\r\n.normal {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.normal li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n.normal li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.normal li.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.normal li.editing .edit {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.normal li.editing .view {\r\n  display: none;\r\n}\r\n\r\n.normal li .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  appearance: none;\r\n}\r\n\r\n.normal li .toggle:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.normal li .toggle:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.normal li label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.normal li.completed label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.normal li .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.normal li .destroy:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.normal li .destroy:after {\r\n  content: '×';\r\n}\r\n\r\n.normal li:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.normal li .edit {\r\n  display: none;\r\n}\r\n\r\n.normal li.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.toggleAll {\r\n  position: absolute;\r\n  top: -55px;\r\n  left: -12px;\r\n  width: 60px;\r\n  height: 34px;\r\n  text-align: center;\r\n  border: none; /* Mobile Safari */\r\n}\r\n\r\n.toggleAll:before {\r\n  content: '❯';\r\n  font-size: 22px;\r\n  color: #e6e6e6;\r\n  padding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggleAll:checked:before {\r\n  color: #737373;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .toggleAll,\r\n  .normal li .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .normal li .toggle {\r\n    height: 40px;\r\n  }\r\n\r\n  .toggleAll {\r\n    transform: rotate(90deg);\r\n    appearance: none;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2CjmQ",
		"topic": "style__topic___10rNt",
		"normal": "style__normal___3KqEx",
		"editing": "style__editing___3aYpN",
		"edit": "style__edit___2vwez",
		"view": "style__view___2W4VZ",
		"toggle": "style__toggle___1Bct-",
		"completed": "style__completed___b783a",
		"destroy": "style__destroy___d5kPH",
		"toggleAll": "style__toggleAll___1IfoU"
	};

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearAll = exports.deleteMsg = exports.addMsg = exports.addName = exports.deleteTopic = exports.addTopic = undefined;

	var _reduxActions = __webpack_require__(366);

	var addTopic = exports.addTopic = (0, _reduxActions.createAction)('add topic');
	var deleteTopic = exports.deleteTopic = (0, _reduxActions.createAction)('delete topic');

	var addName = exports.addName = (0, _reduxActions.createAction)('add name');
	var addMsg = exports.addMsg = (0, _reduxActions.createAction)('add msg');
	var deleteMsg = exports.deleteMsg = (0, _reduxActions.createAction)('delete msg');

	var clearAll = exports.clearAll = (0, _reduxActions.createAction)('clear all');

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pubsub.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createAction = __webpack_require__(367);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(368);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(375);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 367 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };

	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }

	    return action;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleAction;

	var _fluxStandardAction = __webpack_require__(369);

	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;

	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsplainobject = __webpack_require__(370);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var validKeys = ['type', 'payload', 'error', 'meta'];

	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}

	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}

	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(371),
	    isArguments = __webpack_require__(372),
	    keysIn = __webpack_require__(373);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 371 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 372 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(372),
	    isArray = __webpack_require__(374);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 374 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleActions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handleAction = __webpack_require__(368);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(376);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(377);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });

	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}

	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = ownKeys;

	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(379);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(343)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  font-smoothing: antialiased;\r\n}\r\n/*\r\nbody {\r\n  background-image: url('public/media/art/site/jka-sunset-background-01.png');\r\n  background-repeat: repeat;\r\n  background-position: top left;\r\n  background-attachment: scroll;\r\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  line-height: 1.4em;\r\n  background: #f5f5f5;\r\n  color: #4d4d4d;\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-font-smoothing: antialiased;\r\n  -ms-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  font-weight: 300;\r\n}\r\n*/\r\nbutton,\r\ninput[type=\"checkbox\"] {\r\n  outline: none;\r\n}\r\n\r\n.style__normal___18F7v {\r\n  background: #fff;\r\n  margin: 100px 0 40px 0;\r\n  position: relative;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.style__normal___18F7v input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v h1 {\r\n  position: absolute;\r\n  top: -75px;\r\n  width: 100%;\r\n  font-size: 35px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  color: rgba(0, 111, 222, 0.5);\r\n  -webkit-text-rendering: optimizeLegibility;\r\n  -moz-text-rendering: optimizeLegibility;\r\n  -ms-text-rendering: optimizeLegibility;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n", "", {"version":3,"sources":["/./containers/App/style.css"],"names":[],"mappings":";;AAEA;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;EACjB,4BAA4B;CAC7B;AACD;;;;;;;;;;;;;;;;;;;EAmBE;AACF;;EAEE,cAAc;CACf;;AAED;EACE,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB;+CAC6C;CAC9C;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,2CAA2C;EAC3C,wCAAwC;EACxC,uCAAuC;EACvC,mCAAmC;CACpC","file":"style.css","sourcesContent":["\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  appearance: none;\r\n  font-smoothing: antialiased;\r\n}\r\n/*\r\nbody {\r\n  background-image: url('public/media/art/site/jka-sunset-background-01.png');\r\n  background-repeat: repeat;\r\n  background-position: top left;\r\n  background-attachment: scroll;\r\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  line-height: 1.4em;\r\n  background: #f5f5f5;\r\n  color: #4d4d4d;\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-font-smoothing: antialiased;\r\n  -ms-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  font-weight: 300;\r\n}\r\n*/\r\nbutton,\r\ninput[type=\"checkbox\"] {\r\n  outline: none;\r\n}\r\n\r\n.normal {\r\n  background: #fff;\r\n  margin: 100px 0 40px 0;\r\n  position: relative;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.normal input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal h1 {\r\n  position: absolute;\r\n  top: -75px;\r\n  width: 100%;\r\n  font-size: 35px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  color: rgba(0, 111, 222, 0.5);\r\n  -webkit-text-rendering: optimizeLegibility;\r\n  -moz-text-rendering: optimizeLegibility;\r\n  -ms-text-rendering: optimizeLegibility;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___18F7v"
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.api = undefined;

	var _jquery = __webpack_require__(381);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _robot = __webpack_require__(382);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var api = exports.api = {
	    "subscribe": function subscribe(topic, user, done) {
	        api.ajax("subscribe", api.url("http://$HOST:$PORT/$TOPIC/$USER", "localhost", "8000", topic, user), "POST", {}, done);
	    },
	    "unsubscribe": function unsubscribe(topic, user, done) {
	        api.ajax("unsubscribe", api.url("http://$HOST:$PORT/$TOPIC/$USER", "localhost", "8000", topic, user), "DELETE", {}, done);
	    },
	    "publish": function publish(topic, message, done) {
	        api.ajax("publish", api.url("http://$HOST:$PORT/$TOPIC", "localhost", "8000", topic, ""), "POST", { message: message }, done);
	    },
	    "retrieve": function retrieve(topic, user, done) {
	        api.ajax("retrieve", api.url("http://$HOST:$PORT/$TOPIC/$USER", "localhost", "8000", topic, user), "PATCH", {}, done);
	    },
	    "ajax": function ajax(action, url, method, data, next) {
	        var request = _jquery2.default.ajax({
	            url: url,
	            method: method,
	            data: data
	        });
	        if (_jquery2.default.type(next) === 'function') {
	            request.done(function (msg, status, xhr) {
	                next(null, msg, status, xhr);
	            });
	            request.fail(function (xhr, status, extra) {
	                next(xhr, null, status, extra);
	            });
	        }
	    },
	    "url": function url(template, host, port, topic, user) {
	        return template.replace("$HOST", host).replace("$PORT", port).replace("$TOPIC", topic).replace("$USER", user);
	    },
	    "getMsg": function getMsg(response) {
	        return decodeURIComponent(response.replace("message=", "")).replace(/\+/g, " ");
	    },
	    "getEl": function getEl(selector, next) {
	        return next((0, _jquery2.default)(selector));
	    },
	    "chatbot": {
	        "start": function start(topic) {
	            _robot.chatbot.start(api, topic);
	        },
	        "stop": function stop() {
	            _robot.chatbot.stop();
	        }
	    }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 381 */,
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// publish random chat msgs for testing

	var DEFAULT_DELAY = 5000;
	var MEDIA_PLACEHOLDER = "{{media}}";
	var messages = ["Hey! Take a look at this: " + MEDIA_PLACEHOLDER, "I found " + MEDIA_PLACEHOLDER + " on the internets!", MEDIA_PLACEHOLDER + " <-- It's what's for breakfast!", "Now for something completely different! " + MEDIA_PLACEHOLDER, "AFAIK it was this " + MEDIA_PLACEHOLDER + " that did it!"];
	var maxMessagesIndex = messages.length - 1;

	var media = ["http://41.media.tumblr.com/tumblr_ly7sersDjl1r025wro1_500.jpg", "http://41.media.tumblr.com/tumblr_m4tc8vuNMM1rx4p73o1_500.png", "http://41.media.tumblr.com/tumblr_m4taxucqBv1qglykro1_500.jpg", "http://41.media.tumblr.com/tumblr_m5314aV1Lk1rqrdhvo1_500.jpg", "http://40.media.tumblr.com/tumblr_m402dnsOsH1qgcnano1_500.png", "http://40.media.tumblr.com/tumblr_lya0toeh2w1qe9gxzo1_500.png"];
	var maxMediaIndex = media.length - 1;

	function rnd(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function getRndMsg() {
	  return messages[rnd(0, maxMessagesIndex)];
	}

	function getRndMedia() {
	  return media[rnd(0, maxMediaIndex)];
	}

	function getRandomMessage() {
	  var rndMsg = getRndMsg();
	  var rndMedia = getRndMedia();
	  return rndMsg.replace(MEDIA_PLACEHOLDER, rndMedia);
	}

	var chatbot = exports.chatbot = {
	  "interval": null,
	  "start": function start(api, topic, delay) {
	    var chat = function chat() {
	      return api.publish(topic, getRandomMessage());
	    };
	    chatbot.interval = setInterval(chat, delay || DEFAULT_DELAY);
	    chat();
	  },
	  "stop": function stop() {
	    clearInterval(chatbot.interval);
	  }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "robot.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(102);

	var _middleware = __webpack_require__(384);

	var _reducers = __webpack_require__(386);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_middleware.logger)(create);

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = undefined;

	var _logger = __webpack_require__(385);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.logger = _logger2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      console.log(action);
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(90);

	var _redux = __webpack_require__(102);

	var _name = __webpack_require__(387);

	var _name2 = _interopRequireDefault(_name);

	var _topics = __webpack_require__(388);

	var _topics2 = _interopRequireDefault(_topics);

	var _msgs = __webpack_require__(399);

	var _msgs2 = _interopRequireDefault(_msgs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  name: _name2.default,
	  topics: _topics2.default,
	  msgs: _msgs2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxActions = __webpack_require__(366);

	var initialState = {
	  text: ''
	};

	exports.default = (0, _reduxActions.handleActions)({
	  'add name': function addName(state, action) {
	    return {
	      text: action.payload
	    };
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "name.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(389);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _reduxActions = __webpack_require__(366);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = [];

	exports.default = (0, _reduxActions.handleActions)({
	  'add topic': function addTopic(state, action) {
	    return [{
	      id: state.reduce(function (maxId, topic) {
	        return Math.max(topic.id, maxId);
	      }, -1) + 1,
	      completed: false,
	      text: action.payload
	    }].concat((0, _toConsumableArray3.default)(state));
	  },
	  'delete topic': function deleteTopic(state, action) {
	    return state.filter(function (topic) {
	      return topic.id !== action.payload;
	    });
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "topics.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(390);

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

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(391), __esModule: true };

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(290);
	__webpack_require__(392);
	module.exports = __webpack_require__(268).Array.from;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(269)
	  , $export        = __webpack_require__(267)
	  , toObject       = __webpack_require__(258)
	  , call           = __webpack_require__(393)
	  , isArrayIter    = __webpack_require__(394)
	  , toLength       = __webpack_require__(306)
	  , createProperty = __webpack_require__(395)
	  , getIterFn      = __webpack_require__(396);

	$export($export.S + $export.F * !__webpack_require__(398)(function(iter){ Array.from(iter); }), 'Array', {
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


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(273);
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

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(296)
	  , ITERATOR   = __webpack_require__(311)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(272)
	  , createDesc      = __webpack_require__(280);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(397)
	  , ITERATOR  = __webpack_require__(311)('iterator')
	  , Iterators = __webpack_require__(296);
	module.exports = __webpack_require__(268).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(304)
	  , TAG = __webpack_require__(311)('toStringTag')
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

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(311)('iterator')
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

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(389);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _reduxActions = __webpack_require__(366);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var id = 0;

	var initialState = [];

	exports.default = (0, _reduxActions.handleActions)({
	  'add msg': function addMsg(state, action) {
	    return [].concat((0, _toConsumableArray3.default)(state), [{
	      id: ++id,
	      text: action.payload
	    }]);
	  },
	  'delete msg': function deleteMsg(state, action) {
	    return state.filter(function (msg) {
	      return msg.id !== action.payload;
	    });
	  },
	  'clear all': function clearAll(state, action) {
	    return state.filter(function (msg) {
	      return false;
	    });
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "msgs.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.smooth = undefined;

	var _jquery = __webpack_require__(381);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function smooth(on, off, delay) {
	    return function () {
	        (0, _jquery2.default)(on).animate({ opacity: 1 }, delay);
	        (0, _jquery2.default)(off).animate({ opacity: 0 }, delay);
	    };
	}

	exports.smooth = smooth;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Malachi\\git\\jillkayallen\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
]);