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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: fetchCircuits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCircuits", function() { return fetchCircuits; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);


function fetchCircuits() {
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("http://ergast.com/api/f1/2018/circuits.json").then(function (res) {
        return res.json();
    }).then(function (res) {
        return res.MRData.CircuitTable.Circuits;
    });
}

/***/ }),

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Layout */ "./components/Layout.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./store.js");








var store = Object(_store__WEBPACK_IMPORTED_MODULE_5__["default"])(window.REDUX_DATA);

var jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"],
    { store: store },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    )
);

var app = document.getElementById("app");
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(jsx, app);

/***/ }),

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var About = function About() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "h2",
        null,
        "This is the about page"
    );
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);



var Contact = function Contact() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "h2",
            null,
            "This is the contact page"
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "title",
                null,
                "Contact Page"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", { name: "description", content: "This is a proof of concept for React SSR" })
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header(_ref) {
    var loggedIn = _ref.loggedIn;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
            { to: "/" },
            "Home"
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
            { to: "/about" },
            "About"
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
            { to: "/contact" },
            "Contact"
        ),
        loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
            { to: "/secret" },
            "Secret"
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.circuits.length <= 0) {
                this.props.fetchData();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var circuits = this.props.circuits;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    null,
                    "F1 2018 Season Calendar"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    circuits.map(function (_ref) {
                        var circuitId = _ref.circuitId,
                            circuitName = _ref.circuitName,
                            Location = _ref.Location;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { key: circuitId },
                            circuitName,
                            " - ",
                            Location.locality,
                            ", ",
                            Location.country
                        );
                    })
                )
            );
        }
    }]);

    return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Home.serverFetch = _store__WEBPACK_IMPORTED_MODULE_2__["fetchData"]; // static declaration of data requirements

var mapStateToProps = function mapStateToProps(state) {
    return {
        circuits: state.data
    };
};

var mapDispatchToProps = {
    fetchData: _store__WEBPACK_IMPORTED_MODULE_2__["fetchData"]
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            title: "Welcome stranger"
        };
        return _this;
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    null,
                    this.state.title
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                    null,
                    _routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({ key: route.path }, route));
                    })
                )
            );
        }
    }]);

    return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Secret.js":
/*!******************************!*\
  !*** ./components/Secret.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Secret = function Secret() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "h2",
        null,
        "This is the secret page"
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Secret);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/About */ "./components/About.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Secret */ "./components/Secret.js");





/* harmony default export */ __webpack_exports__["default"] = ([{
    path: "/",
    component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
    exact: true
}, {
    path: "/about",
    component: _components_About__WEBPACK_IMPORTED_MODULE_1__["default"],
    exact: true
}, {
    path: "/contact",
    component: _components_Contact__WEBPACK_IMPORTED_MODULE_2__["default"],
    exact: true
}, {
    path: "/secret",
    component: _components_Secret__WEBPACK_IMPORTED_MODULE_3__["default"],
    exact: true
}]);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeSession, fetchData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeSession", function() { return initializeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./api.js");




var initializeSession = function initializeSession() {
    return {
        type: "INITIALIZE_SESSION"
    };
};

var storeData = function storeData(data) {
    return {
        type: "STORE_DATA",
        data: data
    };
};

var fetchData = function fetchData() {
    return function (dispatch) {
        return Object(_api__WEBPACK_IMPORTED_MODULE_2__["fetchCircuits"])().then(function (res) {
            return dispatch(storeData(res));
        });
    };
};

var sessionReducer = function sessionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default:
            return state;
    }
};

var dataReducer = function dataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default:
            return state;
    }
};

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    loggedIn: sessionReducer,
    data: dataReducer
});

/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
});

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });