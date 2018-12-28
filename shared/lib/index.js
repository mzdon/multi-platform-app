(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "redux"], factory);
	else if(typeof exports === 'object')
		exports["shared-resources"] = factory(require("react"), require("react-redux"), require("redux"));
	else
		root["shared-resources"] = factory(root[undefined], root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.store = exports.reducer = exports.containers = exports.constants = exports.api = exports.actions = undefined;\n\nvar _containers = __webpack_require__(/*! ./src/containers */ \"./src/containers/index.js\");\n\nvar containers = _interopRequireWildcard(_containers);\n\nvar _actions = __webpack_require__(/*! ./src/actions */ \"./src/actions/index.js\");\n\nvar _api = __webpack_require__(/*! ./src/api */ \"./src/api/index.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _constants = __webpack_require__(/*! ./src/constants */ \"./src/constants/index.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _reducer = __webpack_require__(/*! ./src/reducer */ \"./src/reducer/index.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _store = __webpack_require__(/*! ./src/store */ \"./src/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.actions = _actions.actions;\nexports.api = _api2.default;\nexports.constants = _constants2.default;\nexports.containers = containers;\nexports.reducer = _reducer2.default;\nexports.store = _store2.default;\n\n//# sourceURL=webpack://shared-resources/./index.js?");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar compose = __webpack_require__(/*! redux */ \"redux\").compose;\n\nexports.__esModule = true;\nexports.composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {\n  if (arguments.length === 0) return undefined;\n  if (_typeof(arguments[0]) === 'object') return compose;\n  return compose.apply(null, arguments);\n};\n\nexports.devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {\n  return function (noop) {\n    return noop;\n  };\n};\n\n//# sourceURL=webpack://shared-resources/./node_modules/redux-devtools-extension/index.js?");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createThunkMiddleware(extraArgument) {\n  return function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        if (typeof action === 'function') {\n          return action(dispatch, getState, extraArgument);\n        }\n\n        return next(action);\n      };\n    };\n  };\n}\n\nvar thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexports.default = thunk;\n\n//# sourceURL=webpack://shared-resources/./node_modules/redux-thunk/es/index.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar ADD_POST = exports.ADD_POST = \"ADD_POST\";\nvar addPost = exports.addPost = function addPost() {\n    return {\n        type: ADD_POST\n    };\n};\n\nvar DISPLAY_ERROR = exports.DISPLAY_ERROR = \"DISPLAY_ERROR\";\nvar displayError = exports.displayError = function displayError(error) {\n    return {\n        type: DISPLAY_ERROR,\n        error: error\n    };\n};\n\nvar GET_POSTS__SUCCESS = exports.GET_POSTS__SUCCESS = \"GET_POSTS__SUCCESS\";\nvar getPosts = exports.getPosts = function getPosts(userId) {\n    return function (dispatch, getState, _ref) {\n        var api = _ref.api;\n\n        api.getPosts(userId).then(function (_ref2) {\n            var data = _ref2.data;\n\n            dispatch({\n                type: GET_POSTS__SUCCESS,\n                posts: data\n            });\n        }).catch(function (_ref3) {\n            var error = _ref3.error;\n\n            dispatch(displayError(error));\n        });\n    };\n};\n\nvar GET_FEED__SUCCESS = exports.GET_FEED__SUCCESS = \"GET_FEED__SUCCESS\";\nvar getFeed = exports.getFeed = function getFeed(userId) {\n    return function (dispatch, getState, _ref4) {\n        var api = _ref4.api;\n\n        api.getFeed(userId).then(function (_ref5) {\n            var data = _ref5.data;\n\n            dispatch({\n                type: GET_FEED__SUCCESS,\n                feed: data\n            });\n        }).catch(function (_ref6) {\n            var error = _ref6.error;\n\n            dispatch(displayError(error));\n        });\n    };\n};\n\nvar GO_HOME = exports.GO_HOME = \"GO_HOME\";\nvar goHome = exports.goHome = function goHome() {\n    return {\n        type: GO_HOME\n    };\n};\n\nvar LIKE_POST = exports.LIKE_POST = \"LIKE_POST\";\nvar likePost = exports.likePost = function likePost(postId) {\n    return function (dispatch, getState, _ref7) {\n        var api = _ref7.api;\n\n        var payload = {\n            type: LIKE_POST,\n            payload: {\n                postId: postId\n            }\n        };\n        api.likePost(getState().user.id, postId).catch(function (_ref8) {\n            var error = _ref8.error;\n\n            dispatch(displayError(error));\n            dispatch(payload);\n        });\n        return payload;\n    };\n};\n\nvar LOGIN__SUCCESS = exports.LOGIN__SUCCESS = \"LOGIN__SUCCESS\";\nvar login = exports.login = function login(userName, password) {\n    return function (dispatch, getState, _ref9) {\n        var api = _ref9.api;\n\n        api.login(userName, password).then(function (_ref10) {\n            var data = _ref10.data;\n\n            dispatch({\n                type: LOGIN__SUCCESS,\n                user: data\n            });\n        }).catch(function (_ref11) {\n            var error = _ref11.error;\n\n            dispatch(displayError(error));\n        });\n    };\n};\n\n//# sourceURL=webpack://shared-resources/./src/actions/index.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    getFeed: function getFeed() {},\n    login: function login() {},\n    getPosts: function getPosts() {}\n};\n\n//# sourceURL=webpack://shared-resources/./src/api/index.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    pages: {\n        HOME: \"Home\",\n        NEW_POST: \"New Post\"\n    }\n};\n\n//# sourceURL=webpack://shared-resources/./src/constants/index.js?");

/***/ }),

/***/ "./src/containers/AppWrapper.jsx":
/*!***************************************!*\
  !*** ./src/containers/AppWrapper.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _api = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar store = (0, _store2.default)(_api2.default);\n\nvar App = function App(Wrapper) {\n\treturn function (_Component) {\n\t\t_inherits(_class, _Component);\n\n\t\tfunction _class() {\n\t\t\t_classCallCheck(this, _class);\n\n\t\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t\t}\n\n\t\t_createClass(_class, [{\n\t\t\tkey: \"render\",\n\t\t\tvalue: function render() {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t_reactRedux.Provider,\n\t\t\t\t\t{ store: store },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\tWrapper,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tthis.props.children\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t}]);\n\n\t\treturn _class;\n\t}(_react.Component);\n};\n\nexports.default = App;\n\n//# sourceURL=webpack://shared-resources/./src/containers/AppWrapper.jsx?");

/***/ }),

/***/ "./src/containers/index.js":
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AppWrapper = undefined;\n\nvar _AppWrapper = __webpack_require__(/*! ./AppWrapper.jsx */ \"./src/containers/AppWrapper.jsx\");\n\nvar _AppWrapper2 = _interopRequireDefault(_AppWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.AppWrapper = _AppWrapper2.default;\n\n//# sourceURL=webpack://shared-resources/./src/containers/index.js?");

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.initialState = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar pages = _constants2.default.pages;\nvar initialState = exports.initialState = {\n    user: null,\n    page: pages.HOME,\n    postsById: {},\n    likesByPostId: {}\n};\n\nvar reducer = function reducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n    var type = action.type,\n        payload = action.payload;\n\n    var arr = void 0,\n        idx = void 0;\n    switch (type) {\n        case _actions.ADD_POST:\n            return _extends({}, state, {\n                page: pages.NEW_POST\n            });\n\n        case _actions.GET_POSTS__SUCCESS:\n            return _extends({}, state, {\n                postsById: payload.posts.reduce(function (posts, post) {\n                    posts[post.id] = post;\n                    return posts;\n                }, {})\n            });\n\n        case _actions.GO_HOME:\n            return _extends({}, state, {\n                page: pages.HOME\n            });\n\n        case _actions.LIKE_POST:\n            arr = likesByPostId[payload.postId] || [];\n            idx = arr.indexOf(state.user.id);\n            if (idx > -1) {\n                return _extends({}, state, {\n                    likesByPostId: _extends({}, likesByPostId, _defineProperty({}, payload.postId, [].concat(_toConsumableArray(arr.slice(0, idx)), _toConsumableArray(arr.slice(idx + 1)))))\n                });\n            } else {\n                return _extends({}, state, {\n                    likesByPostId: _extends({}, likesByPostId, _defineProperty({}, payload.postId, arr.concat(state.user.id)))\n                });\n            }\n\n        case _actions.LOGIN__SUCCESS:\n            return _extends({}, state, {\n                user: payload.user\n            });\n\n        default:\n            return _extends({}, state);\n    }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack://shared-resources/./src/reducer/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.setupStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n\nvar _reducer = __webpack_require__(/*! ../reducer */ \"./src/reducer/index.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable */\nvar logger = function logger(store) {\n    return function (next) {\n        return function (action) {\n            console.log(\"action:\", action);\n            return next(action);\n        };\n    };\n};\n\nvar setupStore = exports.setupStore = function setupStore(api) {\n    var middlewares = [_reduxThunk2.default.withExtraArgument({\n        api: api\n    })];\n\n    if (true) {\n        middlewares.push(logger);\n    }\n\n    return (0, _redux.createStore)(_reducer2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middlewares)));\n};\n\nexports.default = setupStore;\n\n//# sourceURL=webpack://shared-resources/./src/store/index.js?");

/***/ }),

/***/ "react":
/*!***********************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://shared-resources/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "react-redux":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"react-redux","commonjs2":"react-redux","amd":"react-redux"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://shared-resources/external_%7B%22commonjs%22:%22react-redux%22,%22commonjs2%22:%22react-redux%22,%22amd%22:%22react-redux%22%7D?");

/***/ }),

/***/ "redux":
/*!***********************************************************************!*\
  !*** external {"commonjs":"redux","commonjs2":"redux","amd":"redux"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;\n\n//# sourceURL=webpack://shared-resources/external_%7B%22commonjs%22:%22redux%22,%22commonjs2%22:%22redux%22,%22amd%22:%22redux%22%7D?");

/***/ })

/******/ });
});