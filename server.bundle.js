/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.app = undefined;

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _htmlMinifier = __webpack_require__(4);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(6);

	var _reactRouter = __webpack_require__(7);

	var _routes = __webpack_require__(8);

	var _routes2 = _interopRequireDefault(_routes);

	var _reactRedux = __webpack_require__(10);

	var _store = __webpack_require__(33);

	var _store2 = _interopRequireDefault(_store);

	var _reactHelmet = __webpack_require__(29);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = exports.app = (0, _express2.default)();

	app.set('port', process.env.PORT || 8080);

	app.use((0, _compression2.default)());

	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	app.get('*', function (req, res) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {

	            var html = (0, _server.renderToString)(_react2.default.createElement(
	                _reactRedux.Provider,
	                { store: _store2.default },
	                _react2.default.createElement(_reactRouter.RouterContext, props)
	            ));

	            var head = _reactHelmet2.default.rewind();

	            res.send(buildPage(html, head));
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	});

	function buildPage(innerHTML, head) {
	    var template = '\n        <!doctype html>\n        <html>\n            <head>\n                <meta charset="utf-8" />\n                ' + head.title + '\n                ' + head.meta + '\n                ' + head.link + '\n                <link href=/style.css rel=stylesheet>\n            </head>\n            <body>\n                <div id="app">' + innerHTML + '</div>\n                <script type=text/javascript src=/bundle.js charset=utf-8></script>\n            </body>\n        </html>\n    ';

	    return (0, _htmlMinifier.minify)(template, {
	        collapseWhitespace: true,
	        removeComments: true,
	        removeAttributeQuotes: true
	    });
	}

	app.listen(app.get('port'), function () {
	    return console.log('Running on port ' + app.get('port'));
	}); // eslint-disable-line
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("html-minifier");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(28);

	var _Home2 = _interopRequireDefault(_Home);

	var _About = __webpack_require__(31);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	);

	exports.default = routes;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _SiteHeader = __webpack_require__(11);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	var _SiteFooter = __webpack_require__(20);

	var _SiteFooter2 = _interopRequireDefault(_SiteFooter);

	__webpack_require__(24);

	var _App = __webpack_require__(26);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	    var children = _ref.children;
	    return _react2.default.createElement(
	        'div',
	        { className: _App2.default.app },
	        _react2.default.createElement(_SiteHeader2.default, { className: _App2.default.header }),
	        _react2.default.createElement(
	            'div',
	            { className: _App2.default.content },
	            _react2.default.createElement(
	                'main',
	                { className: _App2.default.main },
	                children
	            )
	        ),
	        _react2.default.createElement(_SiteFooter2.default, { className: _App2.default.footer })
	    );
	};

	exports.default = (0, _reactRedux.connect)()(App);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _SiteHeader = __webpack_require__(12);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	var _SiteNav = __webpack_require__(16);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _classnames = __webpack_require__(19);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$className = _ref.className;
	    var className = _ref$className === undefined ? "" : _ref$className;
	    return _react2.default.createElement(
	        'header',
	        { className: (0, _classnames2.default)(_SiteHeader2.default.header, className) },
	        _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { to: '/', className: _SiteHeader2.default.brand, activeClassName: _SiteHeader2.default['brand--active'] },
	            'Salt Source'
	        ),
	        _react2.default.createElement(_SiteNav2.default, { className: _SiteHeader2.default.nav })
	    );
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"headeraZrKy","brand":"brand2Oc5f"};

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _SiteNav = __webpack_require__(17);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _classnames = __webpack_require__(19);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var className = _ref.className;
	    return _react2.default.createElement(
	        'nav',
	        { className: (0, _classnames2.default)(_SiteNav2.default.nav, className) },
	        _react2.default.createElement(
	            _reactRouter.IndexLink,
	            {
	                to: '/',
	                className: _SiteNav2.default.link,
	                activeClassName: _SiteNav2.default['link--active']
	            },
	            'Home'
	        ),
	        _react2.default.createElement(
	            _reactRouter.Link,
	            {
	                to: '/about',
	                className: _SiteNav2.default.link,
	                activeClassName: _SiteNav2.default['link--active']
	            },
	            'About'
	        )
	    );
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"navN1PEr","link":"linkomIOD"};

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _SiteFooter = __webpack_require__(21);

	var _SiteFooter2 = _interopRequireDefault(_SiteFooter);

	var _classnames = __webpack_require__(19);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _bcsalt = __webpack_require__(23);

	var _bcsalt2 = _interopRequireDefault(_bcsalt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var className = _ref.className;
	    return _react2.default.createElement(
	        'footer',
	        { className: (0, _classnames2.default)(_SiteFooter2.default.footer, className) },
	        _react2.default.createElement('img', { className: _SiteFooter2.default.img, src: _bcsalt2.default })
	    );
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"footer3rNai","img":"imgimmf8"};

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1e7fcca255ddf7449f14728f4429ce18.gif";

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header2bqMv","content":"contentNbIgF","footer":"footer1OQLo"};

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _reactHelmet = __webpack_require__(29);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _meta = __webpack_require__(30);

	var _meta2 = _interopRequireDefault(_meta);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import style from './Home.css';

	var Home = function Home() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var pageMeta = _ref.pageMeta;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, pageMeta || _meta2.default),
	        _react2.default.createElement(
	            'h1',
	            null,
	            'Welcome Home'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'If only we had some content...'
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(Home);

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    title: "Salt Source",
	    meta: [{ "name": "description", "content": "Salt Source" }, { "property": "og:type", "content": "article" }]
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(29);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRedux = __webpack_require__(10);

	var _meta = __webpack_require__(32);

	var _meta2 = _interopRequireDefault(_meta);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import style from './About.css';

	var About = function About() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var pageMeta = _ref.pageMeta;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, pageMeta || _meta2.default),
	        _react2.default.createElement(
	            'h1',
	            null,
	            'About'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Jared has nice abs'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Daniel has nice bikes'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Cory has nice hats'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Jason has nice hair'
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(About);

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    title: "About | Salt Source",
	    meta: [{ "name": "description", "content": "About Salt Source" }, { "property": "og:type", "content": "article" }]
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(34);

	var _people = __webpack_require__(35);

	var _people2 = _interopRequireDefault(_people);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.combineReducers)({ people: _people2.default });

	exports.default = (0, _redux.createStore)(store);

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = people;
	var INIT_PEOPLE = exports.INIT_PEOPLE = Symbol('INIT_PEOPLE');
	var FIND_PEOPLE = exports.FIND_PEOPLE = Symbol('FIND_PEOPLE');
	var SELECT_PERSON = exports.SELECT_PERSON = Symbol('SELECT_PERSON');

	function people() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? { q: '', all: [], filtered: [] } : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case INIT_PEOPLE:
	            return {
	                q: '',
	                all: action.people,
	                filtered: []
	            };

	        case FIND_PEOPLE:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: action.q.length > 1 ? state.all.filter(function (p) {
	                    return ~p.toLowerCase().indexOf(action.q.toLowerCase());
	                }) : []
	            };

	        case SELECT_PERSON:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: []
	            };

	        default:
	            return state;
	    }
	}

/***/ }
/******/ ]);