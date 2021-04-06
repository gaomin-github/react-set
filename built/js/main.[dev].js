/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([44,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wiki-wrapper{width:100%;height:100%;display:flex;flex-direction:row}.wiki-sidebar{max-width:200px;flex-shrink:0}.wiki-content{flex:1;flex-shrink:0}", "",{"version":3,"sources":["webpack://./src/components/wiki-entry/wikiEntry.less"],"names":[],"mappings":"AAAA,cAAc,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,kBAAkB,CAAC,cAAc,eAAe,CAAC,aAAa,CAAC,cAAc,MAAM,CAAC,aAAa","sourcesContent":[".wiki-wrapper{width:100%;height:100%;display:flex;flex-direction:row}.wiki-sidebar{max-width:200px;flex-shrink:0}.wiki-content{flex:1;flex-shrink:0}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div{display:block;box-sizing:border-box;width:100%;height:100%;overflow:hidden}", "",{"version":3,"sources":["webpack://./src/app.less"],"names":[],"mappings":"AAAA,IAAI,aAAa,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,eAAe","sourcesContent":["div{display:block;box-sizing:border-box;width:100%;height:100%;overflow:hidden}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a;

exports.__esModule = true;

var redux_actions_1 = __webpack_require__(25); // export default handleAction('fetchWikiInfo',(state,{payload})=>{
//     return payload;
// },null)


exports["default"] = redux_actions_1.handleActions((_a = {}, _a['fetchWikiInfo'] = function (state, _a) {
  var payload = _a.payload;
  return payload;
}, _a), {}); // export const defaultReducer=combineReducers({testReducer2,testReducer3})

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var redux_actions_1 = __webpack_require__(25); //目录树


exports["default"] = redux_actions_1.handleActions({
  'fetchCataLogTree': function fetchCataLogTree(state, _a) {
    var payload = _a.payload;
    return payload;
  },
  'addCatalogNode': function addCatalogNode(state, _a) {
    var payload = _a.payload;
    console.log('add', 'payload', payload);
  }
}, null);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(2));

var react_dom_1 = __importDefault(__webpack_require__(21)); // import 'regenerator-runtime/runtime'


var app_1 = __importDefault(__webpack_require__(49));

var index_1 = __importDefault(__webpack_require__(63));

var MOUNT_NODE = document.getElementById('mainBox'); // console.log('MOUNt_NODE',MOUNT_NODE,6)

react_dom_1["default"].render(react_1["default"].createElement(app_1["default"], {
  store: index_1["default"]
}), MOUNT_NODE); // ReactDOM.render(<App store={store}/>,MOUNT_NODE)
// console.log('this is my-bear-web index.js')

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importStar(__webpack_require__(2));

var react_redux_1 = __webpack_require__(26);

var routeMain_1 = __importDefault(__webpack_require__(53));

__webpack_require__(62);

var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App(props) {
    return _super.call(this, props) || this;
  }

  App.prototype.componentDidMount = function () {
    console.log('app mounted');
  };

  App.prototype.render = function () {
    return react_1["default"].createElement(react_redux_1.Provider, {
      store: this.props.store
    }, react_1["default"].createElement(routeMain_1["default"], null));
  };

  return App;
}(react_1.Component);

exports["default"] = App;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var React = __importStar(__webpack_require__(2));

var react_router_dom_1 = __webpack_require__(79); // import {createContext} from 'react';//


var loadables_1 = __importDefault(__webpack_require__(55)); // import wikiEntry from '$components/wiki-entry/wikiEntry'
// const globalServiceContext={
//     requestLoading(){
//     },
//     requestEndLoading(){
//     }
// }
// const LoadingServiceContext=createContext(globalServiceContext)
// console.log('wikiEntry1',Loadables.WikiEntry)
// console.log('wikiEntry1',WikiEntry)


var testCom = function testCom() {
  return React.createElement("div", null, "testCom");
};

var RouteMain = function RouteMain() {
  var wikiPaths = ['/wiki', '/mywiki'];
  return React.createElement(React.Fragment, null, React.createElement(react_router_dom_1.BrowserRouter, null, React.createElement(react_router_dom_1.Switch, null, React.createElement(react_router_dom_1.Route, {
    path: "/test",
    component: testCom
  }), React.createElement(react_router_dom_1.Route, {
    path: "/wiki",
    exact: true,
    strict: true,
    component: loadables_1["default"].WikiEntry
  }))));
};

exports["default"] = RouteMain;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;
exports.WikiEntry = void 0;

var react_1 = __importDefault(__webpack_require__(2));

var react_loadable_1 = __importDefault(__webpack_require__(56));

exports.WikiEntry = react_loadable_1["default"]({
  // loader:()=>import('$components/wiki-entry/wikiEntry'),
  loader: function loader() {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(57));
    });
  },
  loading: function loading() {
    return null;
  },
  render: function render(loaded) {
    var Com = loaded["default"];
    return react_1["default"].createElement(Com, null);
  }
}); // export const DocEntry=Loadable({
//     loader:()=>import('$components/doc-entry'),
//     loading:()=>null,
//     render:loaded=>{
//         const Com=loaded.default;
//         return <Com/>
//     }
// })

exports["default"] = {
  WikiEntry: exports.WikiEntry
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_redux_1 = __webpack_require__(26);

var pageTree_1 = __webpack_require__(58); // import {wikiCatalogTree,wikiInfo} from '$redux/selectors/index';


var wikiEntry_1 = __importDefault(__webpack_require__(59));

var mapStateToProps = function mapStateToProps(state) {
  return {// mySpaceTest1:state.a&&state.a.mySpaceTest1,
    // curWikiToken:curWikiToken(state),
    // curWikiInfo:curWikiInfo(state),
    // wikiCatalogTree:wikiCatalogTree(state)
    // wikiInfo:wikiInfo(state)
  };
};

var mapDispatchToProps = {
  fetchWikiInfo: pageTree_1.fetchWikiInfo,
  fetchWikiCataLogTree: pageTree_1.fetchWikiCataLogTree
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(wikiEntry_1["default"]);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addCatalogNode = exports.fetchWikiInfo = exports.fetchWikiCataLogTree = exports.testAction3 = exports.testAction2 = void 0;

var redux_actions_1 = __webpack_require__(25);

exports.testAction2 = redux_actions_1.createAction('testAction2'); // export const testAction3=createAction('testAction3');
// export const testAction3=()=>{
//     return{
//         type:'testAction3',
//     }
// }

var testAction3 = function testAction3(params) {
  var _a;

  return _a = {
    type: 'testAction3'
  }, _a['get'] = {
    info: 'safa test',
    params: params
  }, _a.p = [1, 2, 3], _a;
};

exports.testAction3 = testAction3;

var fetchWikiCataLogTree = function fetchWikiCataLogTree(payload) {
  return {
    type: 'fetchCataLogTree',
    payload: payload
  };
};

exports.fetchWikiCataLogTree = fetchWikiCataLogTree;

var fetchWikiInfo = function fetchWikiInfo(payload) {
  return {
    type: 'fetchWikiInfo',
    payload: payload
  };
};

exports.fetchWikiInfo = fetchWikiInfo;

var addCatalogNode = function addCatalogNode(payload) {
  return {
    type: 'addCatalogNode',
    payload: payload
  };
};

exports.addCatalogNode = addCatalogNode;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(2));

var wiki_sidebar_1 = __importDefault(__webpack_require__(60));

__webpack_require__(61);

var WikiEntry =
/** @class */
function (_super) {
  __extends(WikiEntry, _super);

  function WikiEntry(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      pageTitle: 'wikiEntry'
    };
    return _this;
  }

  WikiEntry.prototype.componentDidMount = function () {
    this.init();
  };

  WikiEntry.prototype.componentDidUpdate = function () {
    console.log('wikiEntry props', this.props);
  };

  WikiEntry.prototype.init = function () {
    var _a = this.props,
        fetchWikiInfo = _a.fetchWikiInfo,
        fetchWikiCataLogTree = _a.fetchWikiCataLogTree; // 初始化当前wiki知识库信息

    fetchWikiInfo({
      userId: '123',
      session: "123_" + Math.random(),
      wikiToken: "123_" + Math.random()
    }); // 初始化wiki详情页目录树

    fetchWikiCataLogTree({
      wikiNodeMap: {
        '1': '1',
        '2': '2'
      }
    });
  };

  WikiEntry.prototype.handleClick = function (params) {// console.log('withEntry click executed',24,params)
  };

  WikiEntry.prototype.render = function () {
    return react_1["default"].createElement("div", {
      className: "wiki-wrapper"
    }, react_1["default"].createElement("div", {
      className: "wiki-sidebar"
    }, react_1["default"].createElement(wiki_sidebar_1["default"], null)), react_1["default"].createElement("div", {
      className: "wiki-content"
    }, react_1["default"].createElement("div", {
      className: "wiki-content-nav"
    }, "this is wiki entry-wrapper:", react_1["default"].createElement("div", null))));
  };

  return WikiEntry;
}(react_1["default"].Component);

exports["default"] = WikiEntry;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(2));

var WikiSideBar =
/** @class */
function (_super) {
  __extends(WikiSideBar, _super); // componentDidMount(){
  //     console.log('wiki-sidebar did mount')
  // }
  // componentDidUpdate(){
  //     console.log('wiki-sidebar did update')
  // }


  function WikiSideBar(p) {
    return _super.call(this, p) || this;
  }

  WikiSideBar.prototype.componentWillUnmount = function () {};

  WikiSideBar.prototype.render = function () {
    return react_1["default"].createElement(react_1["default"].Fragment, null);
  };

  return WikiSideBar;
}(react_1["default"].PureComponent);

exports["default"] = WikiSideBar;

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_wikiEntry_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_wikiEntry_less__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_wikiEntry_less__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_app_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_app_less__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_lib_index_js_node_modules_less_loader_dist_cjs_js_app_less__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var redux_dynamic_modules_1 = __webpack_require__(64); // import {createStore} from 'redux';


var redux_dynamic_modules_saga_1 = __webpack_require__(74); // import {fetchTreeReducer,reducerModule,testReducer2,testReducer3,reducerModel1,defaultReducer} from '$redux/reducers/fetchTree'
// import {defaultReducer} from '$redux/reducers/fetchTree.ts'


var reducers_1 = __importDefault(__webpack_require__(77));

var request_1 = __webpack_require__(78);

var initialState = {};
var commonExtension = [redux_dynamic_modules_saga_1.getSagaExtension()];
var reducerModule1 = {
  id: 'totest',
  reducerMap: {
    // testReducer2, //是从redux工具中看到的store数据结构key
    'wiki': reducers_1["default"]
  },
  sagas: [request_1.testSaga1, request_1.testSaga2]
};
var store3 = redux_dynamic_modules_1.createStore({
  initialState: initialState,
  extensions: commonExtension
}, reducerModule1); // store3.addModules([{
//     id:'totest',
//     reducerMap:{
//         'a':defaultReducer,//是从工具中看到的store数据结构key
//     },
//     sagas:[testSaga1]
// }])

exports["default"] = store3;

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _wikiInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _wikiInfo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wikiInfo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fetchTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _fetchTree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fetchTree__WEBPACK_IMPORTED_MODULE_2__);



var wikiReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  'wikiInfo': _wikiInfo__WEBPACK_IMPORTED_MODULE_1___default.a,
  'catalogTree': _fetchTree__WEBPACK_IMPORTED_MODULE_2___default.a
});
/* harmony default export */ __webpack_exports__["default"] = (wikiReducers);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.testSaga2 = exports.testSaga1 = void 0; // import axiosInstance from '$service/index'

__webpack_require__(37);

var effects_1 = __webpack_require__(24); // import {SagaIterator} from 'redux-saga';
// export function* requestWatcher(){
//     console.log('saga touched')
//     const {type,get,p}=yield take('testAction3');
//     console.log('get',get,'type',type,'p',p)
//     // if(!_isRequestAction(anyAction)){
//     //     return;
//     // }
//     // if(!anyAction['testAction3']){
//     //     // console.log('not testAction3')
//     //     return;
//     // }
//     // let response=yield axiosInstance.get('/space/api/wiki/tree/get_info/?space_id=6915038928504356865&wiki_token=wikcn2RKXvXS0ubOprb3YhLYBRD&with_space=true&with_perm=true')
//     // // console.log('response',response);
//     let response={
//         spaceId:'001',
//         children:[
//             {
//                 spaceId:'002'
//             },
//             {
//                 spaceId:'003'
//             }
//         ]
//     }
//     // yield put({
//     //     type:'testAction2',
//     //     payload:response
//     // })
// }


function sagaWatcher() {}

function testSaga1() {
  var anyAction;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , effects_1.take('*')];

      case 1:
        anyAction = _a.sent();
        console.log('anyAction', 44, anyAction.type);
        return [2
        /*return*/
        ];
    }
  });
}

exports.testSaga1 = testSaga1;

function testSaga2() {
  return __generator(this, function (_a) {
    return [2
    /*return*/
    ];
  });
}

exports.testSaga2 = testSaga2; // export default requestSaga

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lraS1lbnRyeS93aWtpRW50cnkubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpa2lJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9mZXRjaFRyZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlTWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9sb2FkYWJsZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpa2ktZW50cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcGFnZVRyZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lraS1lbnRyeS93aWtpRW50cnkudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpa2ktc2lkZWJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lraS1lbnRyeS93aWtpRW50cnkubGVzcz83M2RmIiwid2VicGFjazovLy8uL3NyYy9hcHAubGVzcz8zOTU5Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NhZ2FzL3JlcXVlc3QudHMiXSwibmFtZXMiOlsiX2EiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsInJlZHV4X2FjdGlvbnNfMSIsInJlcXVpcmUiLCJoYW5kbGVBY3Rpb25zIiwic3RhdGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInJlYWN0XzEiLCJyZWFjdF9kb21fMSIsImFwcF8xIiwiaW5kZXhfMSIsIk1PVU5UX05PREUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0b3JlIiwiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiX19jcmVhdGVCaW5kaW5nIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJfX3NldE1vZHVsZURlZmF1bHQiLCJ2IiwidmFsdWUiLCJfX2ltcG9ydFN0YXIiLCJyZXN1bHQiLCJyZWFjdF9yZWR1eF8xIiwicm91dGVNYWluXzEiLCJBcHAiLCJfc3VwZXIiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwiUHJvdmlkZXIiLCJDb21wb25lbnQiLCJSZWFjdCIsInJlYWN0X3JvdXRlcl9kb21fMSIsImxvYWRhYmxlc18xIiwidGVzdENvbSIsIlJvdXRlTWFpbiIsIndpa2lQYXRocyIsIkZyYWdtZW50IiwiQnJvd3NlclJvdXRlciIsIlN3aXRjaCIsIlJvdXRlIiwicGF0aCIsImNvbXBvbmVudCIsImV4YWN0Iiwic3RyaWN0IiwiV2lraUVudHJ5IiwicmVhY3RfbG9hZGFibGVfMSIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImxvYWRpbmciLCJsb2FkZWQiLCJDb20iLCJwYWdlVHJlZV8xIiwid2lraUVudHJ5XzEiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaFdpa2lJbmZvIiwiZmV0Y2hXaWtpQ2F0YUxvZ1RyZWUiLCJjb25uZWN0IiwiYWRkQ2F0YWxvZ05vZGUiLCJ0ZXN0QWN0aW9uMyIsInRlc3RBY3Rpb24yIiwiY3JlYXRlQWN0aW9uIiwicGFyYW1zIiwidHlwZSIsImluZm8iLCJ3aWtpX3NpZGViYXJfMSIsIl90aGlzIiwicGFnZVRpdGxlIiwiaW5pdCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInVzZXJJZCIsInNlc3Npb24iLCJNYXRoIiwicmFuZG9tIiwid2lraVRva2VuIiwid2lraU5vZGVNYXAiLCJoYW5kbGVDbGljayIsImNsYXNzTmFtZSIsIldpa2lTaWRlQmFyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJQdXJlQ29tcG9uZW50IiwicmVkdXhfZHluYW1pY19tb2R1bGVzXzEiLCJyZWR1eF9keW5hbWljX21vZHVsZXNfc2FnYV8xIiwicmVkdWNlcnNfMSIsInJlcXVlc3RfMSIsImluaXRpYWxTdGF0ZSIsImNvbW1vbkV4dGVuc2lvbiIsImdldFNhZ2FFeHRlbnNpb24iLCJyZWR1Y2VyTW9kdWxlMSIsImlkIiwicmVkdWNlck1hcCIsInNhZ2FzIiwidGVzdFNhZ2ExIiwidGVzdFNhZ2EyIiwic3RvcmUzIiwiY3JlYXRlU3RvcmUiLCJleHRlbnNpb25zIiwid2lraVJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiV2lraUluZm9SZWR1Y2VyIiwiV2lraVRyZWVSZWR1Y2VyIiwiX19nZW5lcmF0b3IiLCJ0aGlzQXJnIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsIm5leHQiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwic3RlcCIsIm9wIiwiVHlwZUVycm9yIiwiZG9uZSIsInBvcCIsImxlbmd0aCIsInB1c2giLCJlIiwiZWZmZWN0c18xIiwic2FnYVdhdGNoZXIiLCJhbnlBY3Rpb24iLCJ0YWtlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFD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T0FBTyxDQUFDMkgsU0FBUixHQUFvQkEsU0FBcEIsQyxDQUNBLDZCIiwiZmlsZSI6ImpzL21haW4uW2Rldl0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNDQsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aWtpLXdyYXBwZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fS53aWtpLXNpZGViYXJ7bWF4LXdpZHRoOjIwMHB4O2ZsZXgtc2hyaW5rOjB9Lndpa2ktY29udGVudHtmbGV4OjE7ZmxleC1zaHJpbms6MH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aWtpLWVudHJ5L3dpa2lFbnRyeS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsY0FBYyxlQUFlLENBQUMsYUFBYSxDQUFDLGNBQWMsTUFBTSxDQUFDLGFBQWFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpa2ktd3JhcHBlcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9Lndpa2ktc2lkZWJhcnttYXgtd2lkdGg6MjAwcHg7ZmxleC1zaHJpbms6MH0ud2lraS1jb250ZW50e2ZsZXg6MTtmbGV4LXNocmluazowfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsSUFBSSxhQUFhLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJlZHV4X2FjdGlvbnNfMSA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpO1xuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9uKCdmZXRjaFdpa2lJbmZvJywoc3RhdGUse3BheWxvYWR9KT0+e1xuLy8gICAgIHJldHVybiBwYXlsb2FkO1xuLy8gfSxudWxsKVxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWR1eF9hY3Rpb25zXzEuaGFuZGxlQWN0aW9ucygoX2EgPSB7fSxcbiAgICBfYVsnZmV0Y2hXaWtpSW5mbyddID0gZnVuY3Rpb24gKHN0YXRlLCBfYSkge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IF9hLnBheWxvYWQ7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH0sXG4gICAgX2EpLCB7fSk7XG4vLyBleHBvcnQgY29uc3QgZGVmYXVsdFJlZHVjZXI9Y29tYmluZVJlZHVjZXJzKHt0ZXN0UmVkdWNlcjIsdGVzdFJlZHVjZXIzfSlcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZWR1eF9hY3Rpb25zXzEgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTtcbi8v55uu5b2V5qCRXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZHV4X2FjdGlvbnNfMS5oYW5kbGVBY3Rpb25zKHtcbiAgICAnZmV0Y2hDYXRhTG9nVHJlZSc6IGZ1bmN0aW9uIChzdGF0ZSwgX2EpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9LFxuICAgICdhZGRDYXRhbG9nTm9kZSc6IGZ1bmN0aW9uIChzdGF0ZSwgX2EpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkJywgJ3BheWxvYWQnLCBwYXlsb2FkKTtcbiAgICB9XG59LCBudWxsKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG4vLyBpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSdcbnZhciBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcHBcIikpO1xudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIiRyZWR1eC9zdG9yZS9pbmRleFwiKSk7XG52YXIgTU9VTlRfTk9ERSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm94Jyk7XG4vLyBjb25zb2xlLmxvZygnTU9VTnRfTk9ERScsTU9VTlRfTk9ERSw2KVxucmVhY3RfZG9tXzFbXCJkZWZhdWx0XCJdLnJlbmRlcihyZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFwcF8xW1wiZGVmYXVsdFwiXSwgeyBzdG9yZTogaW5kZXhfMVtcImRlZmF1bHRcIl0gfSksIE1PVU5UX05PREUpO1xuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAgc3RvcmU9e3N0b3JlfS8+LE1PVU5UX05PREUpXG4vLyBjb25zb2xlLmxvZygndGhpcyBpcyBteS1iZWFyLXdlYiBpbmRleC5qcycpXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JlZHV4XzEgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG52YXIgcm91dGVNYWluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL3JvdXRlTWFpblwiKSk7XG5yZXF1aXJlKFwiLi9hcHAubGVzc1wiKTtcbnZhciBBcHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYXBwIG1vdW50ZWQnKTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfcmVkdXhfMS5Qcm92aWRlciwgeyBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZSB9LFxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyb3V0ZU1haW5fMVtcImRlZmF1bHRcIl0sIG51bGwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwO1xufShyZWFjdF8xLkNvbXBvbmVudCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuLy8gaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7Ly9cbnZhciBsb2FkYWJsZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZXNcIikpO1xuLy8gaW1wb3J0IHdpa2lFbnRyeSBmcm9tICckY29tcG9uZW50cy93aWtpLWVudHJ5L3dpa2lFbnRyeSdcbi8vIGNvbnN0IGdsb2JhbFNlcnZpY2VDb250ZXh0PXtcbi8vICAgICByZXF1ZXN0TG9hZGluZygpe1xuLy8gICAgIH0sXG4vLyAgICAgcmVxdWVzdEVuZExvYWRpbmcoKXtcbi8vICAgICB9XG4vLyB9XG4vLyBjb25zdCBMb2FkaW5nU2VydmljZUNvbnRleHQ9Y3JlYXRlQ29udGV4dChnbG9iYWxTZXJ2aWNlQ29udGV4dClcbi8vIGNvbnNvbGUubG9nKCd3aWtpRW50cnkxJyxMb2FkYWJsZXMuV2lraUVudHJ5KVxuLy8gY29uc29sZS5sb2coJ3dpa2lFbnRyeTEnLFdpa2lFbnRyeSlcbnZhciB0ZXN0Q29tID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcInRlc3RDb21cIik7IH07XG52YXIgUm91dGVNYWluID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3aWtpUGF0aHMgPSBbJy93aWtpJywgJy9teXdpa2knXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkJyb3dzZXJSb3V0ZXIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlN3aXRjaCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiL3Rlc3RcIiwgY29tcG9uZW50OiB0ZXN0Q29tIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCIvd2lraVwiLCBleGFjdDogdHJ1ZSwgc3RyaWN0OiB0cnVlLCBjb21wb25lbnQ6IGxvYWRhYmxlc18xW1wiZGVmYXVsdFwiXS5XaWtpRW50cnkgfSkpKSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUm91dGVNYWluO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLldpa2lFbnRyeSA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfbG9hZGFibGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIikpO1xuZXhwb3J0cy5XaWtpRW50cnkgPSByZWFjdF9sb2FkYWJsZV8xW1wiZGVmYXVsdFwiXSh7XG4gICAgLy8gbG9hZGVyOigpPT5pbXBvcnQoJyRjb21wb25lbnRzL3dpa2ktZW50cnkvd2lraUVudHJ5JyksXG4gICAgbG9hZGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCckY29tcG9uZW50cy93aWtpLWVudHJ5L2luZGV4JykpOyB9KTsgfSxcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGxvYWRlZCkge1xuICAgICAgICB2YXIgQ29tID0gbG9hZGVkW1wiZGVmYXVsdFwiXTtcbiAgICAgICAgcmV0dXJuIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ29tLCBudWxsKTtcbiAgICB9XG59KTtcbi8vIGV4cG9ydCBjb25zdCBEb2NFbnRyeT1Mb2FkYWJsZSh7XG4vLyAgICAgbG9hZGVyOigpPT5pbXBvcnQoJyRjb21wb25lbnRzL2RvYy1lbnRyeScpLFxuLy8gICAgIGxvYWRpbmc6KCk9Pm51bGwsXG4vLyAgICAgcmVuZGVyOmxvYWRlZD0+e1xuLy8gICAgICAgICBjb25zdCBDb209bG9hZGVkLmRlZmF1bHQ7XG4vLyAgICAgICAgIHJldHVybiA8Q29tLz5cbi8vICAgICB9XG4vLyB9KVxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gICAgV2lraUVudHJ5OiBleHBvcnRzLldpa2lFbnRyeSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcbnZhciBwYWdlVHJlZV8xID0gcmVxdWlyZShcIiRyZWR1eC9hY3Rpb25zL3BhZ2VUcmVlXCIpO1xuLy8gaW1wb3J0IHt3aWtpQ2F0YWxvZ1RyZWUsd2lraUluZm99IGZyb20gJyRyZWR1eC9zZWxlY3RvcnMvaW5kZXgnO1xudmFyIHdpa2lFbnRyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3dpa2lFbnRyeVwiKSk7XG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiAoe1xuLy8gbXlTcGFjZVRlc3QxOnN0YXRlLmEmJnN0YXRlLmEubXlTcGFjZVRlc3QxLFxuLy8gY3VyV2lraVRva2VuOmN1cldpa2lUb2tlbihzdGF0ZSksXG4vLyBjdXJXaWtpSW5mbzpjdXJXaWtpSW5mbyhzdGF0ZSksXG4vLyB3aWtpQ2F0YWxvZ1RyZWU6d2lraUNhdGFsb2dUcmVlKHN0YXRlKVxuLy8gd2lraUluZm86d2lraUluZm8oc3RhdGUpXG59KTsgfTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgZmV0Y2hXaWtpSW5mbzogcGFnZVRyZWVfMS5mZXRjaFdpa2lJbmZvLFxuICAgIGZldGNoV2lraUNhdGFMb2dUcmVlOiBwYWdlVHJlZV8xLmZldGNoV2lraUNhdGFMb2dUcmVlXG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWFjdF9yZWR1eF8xLmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpa2lFbnRyeV8xW1wiZGVmYXVsdFwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZENhdGFsb2dOb2RlID0gZXhwb3J0cy5mZXRjaFdpa2lJbmZvID0gZXhwb3J0cy5mZXRjaFdpa2lDYXRhTG9nVHJlZSA9IGV4cG9ydHMudGVzdEFjdGlvbjMgPSBleHBvcnRzLnRlc3RBY3Rpb24yID0gdm9pZCAwO1xudmFyIHJlZHV4X2FjdGlvbnNfMSA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpO1xuZXhwb3J0cy50ZXN0QWN0aW9uMiA9IHJlZHV4X2FjdGlvbnNfMS5jcmVhdGVBY3Rpb24oJ3Rlc3RBY3Rpb24yJyk7XG4vLyBleHBvcnQgY29uc3QgdGVzdEFjdGlvbjM9Y3JlYXRlQWN0aW9uKCd0ZXN0QWN0aW9uMycpO1xuLy8gZXhwb3J0IGNvbnN0IHRlc3RBY3Rpb24zPSgpPT57XG4vLyAgICAgcmV0dXJue1xuLy8gICAgICAgICB0eXBlOid0ZXN0QWN0aW9uMycsXG4vLyAgICAgfVxuLy8gfVxudmFyIHRlc3RBY3Rpb24zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Rlc3RBY3Rpb24zJ1xuICAgICAgICB9LFxuICAgICAgICBfYVsnZ2V0J10gPSB7XG4gICAgICAgICAgICBpbmZvOiAnc2FmYSB0ZXN0JyxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBfYS5wID0gWzEsIDIsIDNdLFxuICAgICAgICBfYSk7XG59O1xuZXhwb3J0cy50ZXN0QWN0aW9uMyA9IHRlc3RBY3Rpb24zO1xudmFyIGZldGNoV2lraUNhdGFMb2dUcmVlID0gZnVuY3Rpb24gKHBheWxvYWQpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogJ2ZldGNoQ2F0YUxvZ1RyZWUnLFxuICAgIHBheWxvYWQ6IHBheWxvYWRcbn0pOyB9O1xuZXhwb3J0cy5mZXRjaFdpa2lDYXRhTG9nVHJlZSA9IGZldGNoV2lraUNhdGFMb2dUcmVlO1xudmFyIGZldGNoV2lraUluZm8gPSBmdW5jdGlvbiAocGF5bG9hZCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiAnZmV0Y2hXaWtpSW5mbycsXG4gICAgcGF5bG9hZDogcGF5bG9hZFxufSk7IH07XG5leHBvcnRzLmZldGNoV2lraUluZm8gPSBmZXRjaFdpa2lJbmZvO1xudmFyIGFkZENhdGFsb2dOb2RlID0gZnVuY3Rpb24gKHBheWxvYWQpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogJ2FkZENhdGFsb2dOb2RlJyxcbiAgICBwYXlsb2FkOiBwYXlsb2FkXG59KTsgfTtcbmV4cG9ydHMuYWRkQ2F0YWxvZ05vZGUgPSBhZGRDYXRhbG9nTm9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHdpa2lfc2lkZWJhcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIkY29tcG9uZW50cy93aWtpLXNpZGViYXJcIikpO1xucmVxdWlyZShcIi4vd2lraUVudHJ5Lmxlc3NcIik7XG52YXIgV2lraUVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXaWtpRW50cnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV2lraUVudHJ5KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ3dpa2lFbnRyeSdcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBXaWtpRW50cnkucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuICAgIFdpa2lFbnRyeS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd2lraUVudHJ5IHByb3BzJywgdGhpcy5wcm9wcyk7XG4gICAgfTtcbiAgICBXaWtpRW50cnkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGZldGNoV2lraUluZm8gPSBfYS5mZXRjaFdpa2lJbmZvLCBmZXRjaFdpa2lDYXRhTG9nVHJlZSA9IF9hLmZldGNoV2lraUNhdGFMb2dUcmVlO1xuICAgICAgICAvLyDliJ3lp4vljJblvZPliY13aWtp55+l6K+G5bqT5L+h5oGvXG4gICAgICAgIGZldGNoV2lraUluZm8oeyB1c2VySWQ6ICcxMjMnLCBzZXNzaW9uOiBcIjEyM19cIiArIE1hdGgucmFuZG9tKCksIHdpa2lUb2tlbjogXCIxMjNfXCIgKyBNYXRoLnJhbmRvbSgpIH0pO1xuICAgICAgICAvLyDliJ3lp4vljJZ3aWtp6K+m5oOF6aG155uu5b2V5qCRXG4gICAgICAgIGZldGNoV2lraUNhdGFMb2dUcmVlKHsgd2lraU5vZGVNYXA6IHtcbiAgICAgICAgICAgICAgICAnMSc6ICcxJyxcbiAgICAgICAgICAgICAgICAnMic6ICcyJ1xuICAgICAgICAgICAgfSB9KTtcbiAgICB9O1xuICAgIFdpa2lFbnRyeS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3aXRoRW50cnkgY2xpY2sgZXhlY3V0ZWQnLDI0LHBhcmFtcylcbiAgICB9O1xuICAgIFdpa2lFbnRyeS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2lraS13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2lraS1zaWRlYmFyXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHdpa2lfc2lkZWJhcl8xW1wiZGVmYXVsdFwiXSwgbnVsbCkpLFxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3aWtpLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2lraS1jb250ZW50LW5hdlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGhpcyBpcyB3aWtpIGVudHJ5LXdyYXBwZXI6XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCkpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFdpa2lFbnRyeTtcbn0ocmVhY3RfMVtcImRlZmF1bHRcIl0uQ29tcG9uZW50KSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdpa2lFbnRyeTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFdpa2lTaWRlQmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXaWtpU2lkZUJhciwgX3N1cGVyKTtcbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnd2lraS1zaWRlYmFyIGRpZCBtb3VudCcpXG4gICAgLy8gfVxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnd2lraS1zaWRlYmFyIGRpZCB1cGRhdGUnKVxuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBXaWtpU2lkZUJhcihwKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwKSB8fCB0aGlzO1xuICAgIH1cbiAgICBXaWtpU2lkZUJhci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBXaWtpU2lkZUJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMVtcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9O1xuICAgIHJldHVybiBXaWtpU2lkZUJhcjtcbn0ocmVhY3RfMVtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBXaWtpU2lkZUJhcjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lraUVudHJ5Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJlZHV4X2R5bmFtaWNfbW9kdWxlc18xID0gcmVxdWlyZShcInJlZHV4LWR5bmFtaWMtbW9kdWxlc1wiKTtcbi8vIGltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcbnZhciByZWR1eF9keW5hbWljX21vZHVsZXNfc2FnYV8xID0gcmVxdWlyZShcInJlZHV4LWR5bmFtaWMtbW9kdWxlcy1zYWdhXCIpO1xuLy8gaW1wb3J0IHtmZXRjaFRyZWVSZWR1Y2VyLHJlZHVjZXJNb2R1bGUsdGVzdFJlZHVjZXIyLHRlc3RSZWR1Y2VyMyxyZWR1Y2VyTW9kZWwxLGRlZmF1bHRSZWR1Y2VyfSBmcm9tICckcmVkdXgvcmVkdWNlcnMvZmV0Y2hUcmVlJ1xuLy8gaW1wb3J0IHtkZWZhdWx0UmVkdWNlcn0gZnJvbSAnJHJlZHV4L3JlZHVjZXJzL2ZldGNoVHJlZS50cydcbnZhciByZWR1Y2Vyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIkcmVkdXgvcmVkdWNlcnNcIikpO1xudmFyIHJlcXVlc3RfMSA9IHJlcXVpcmUoXCIkcmVkdXgvc2FnYXMvcmVxdWVzdFwiKTtcbnZhciBpbml0aWFsU3RhdGUgPSB7fTtcbnZhciBjb21tb25FeHRlbnNpb24gPSBbcmVkdXhfZHluYW1pY19tb2R1bGVzX3NhZ2FfMS5nZXRTYWdhRXh0ZW5zaW9uKCksXTtcbnZhciByZWR1Y2VyTW9kdWxlMSA9IHtcbiAgICBpZDogJ3RvdGVzdCcsXG4gICAgcmVkdWNlck1hcDoge1xuICAgICAgICAvLyB0ZXN0UmVkdWNlcjIsIC8v5piv5LuOcmVkdXjlt6XlhbfkuK3nnIvliLDnmoRzdG9yZeaVsOaNrue7k+aehGtleVxuICAgICAgICAnd2lraSc6IHJlZHVjZXJzXzFbXCJkZWZhdWx0XCJdXG4gICAgfSxcbiAgICBzYWdhczogW3JlcXVlc3RfMS50ZXN0U2FnYTEsIHJlcXVlc3RfMS50ZXN0U2FnYTJdXG59O1xudmFyIHN0b3JlMyA9IHJlZHV4X2R5bmFtaWNfbW9kdWxlc18xLmNyZWF0ZVN0b3JlKHtcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICBleHRlbnNpb25zOiBjb21tb25FeHRlbnNpb25cbn0sIHJlZHVjZXJNb2R1bGUxKTtcbi8vIHN0b3JlMy5hZGRNb2R1bGVzKFt7XG4vLyAgICAgaWQ6J3RvdGVzdCcsXG4vLyAgICAgcmVkdWNlck1hcDp7XG4vLyAgICAgICAgICdhJzpkZWZhdWx0UmVkdWNlciwvL+aYr+S7juW3peWFt+S4reeci+WIsOeahHN0b3Jl5pWw5o2u57uT5p6Ea2V5XG4vLyAgICAgfSxcbi8vICAgICBzYWdhczpbdGVzdFNhZ2ExXVxuLy8gfV0pXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0b3JlMztcbiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcbmltcG9ydCBXaWtpSW5mb1JlZHVjZXIgZnJvbSAnLi93aWtpSW5mbyc7XG5pbXBvcnQgV2lraVRyZWVSZWR1Y2VyIGZyb20gJy4vZmV0Y2hUcmVlJztcblxuY29uc3Qgd2lraVJlZHVjZXJzPWNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgJ3dpa2lJbmZvJzpXaWtpSW5mb1JlZHVjZXIsXG4gICAgJ2NhdGFsb2dUcmVlJzpXaWtpVHJlZVJlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpa2lSZWR1Y2VyczsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudGVzdFNhZ2EyID0gZXhwb3J0cy50ZXN0U2FnYTEgPSB2b2lkIDA7XG4vLyBpbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tICckc2VydmljZS9pbmRleCdcbnJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpO1xudmFyIGVmZmVjdHNfMSA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7XG4vLyBpbXBvcnQge1NhZ2FJdGVyYXRvcn0gZnJvbSAncmVkdXgtc2FnYSc7XG4vLyBleHBvcnQgZnVuY3Rpb24qIHJlcXVlc3RXYXRjaGVyKCl7XG4vLyAgICAgY29uc29sZS5sb2coJ3NhZ2EgdG91Y2hlZCcpXG4vLyAgICAgY29uc3Qge3R5cGUsZ2V0LHB9PXlpZWxkIHRha2UoJ3Rlc3RBY3Rpb24zJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2dldCcsZ2V0LCd0eXBlJyx0eXBlLCdwJyxwKVxuLy8gICAgIC8vIGlmKCFfaXNSZXF1ZXN0QWN0aW9uKGFueUFjdGlvbikpe1xuLy8gICAgIC8vICAgICByZXR1cm47XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGlmKCFhbnlBY3Rpb25bJ3Rlc3RBY3Rpb24zJ10pe1xuLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnbm90IHRlc3RBY3Rpb24zJylcbi8vICAgICAvLyAgICAgcmV0dXJuO1xuLy8gICAgIC8vIH1cbi8vICAgICAvLyBsZXQgcmVzcG9uc2U9eWllbGQgYXhpb3NJbnN0YW5jZS5nZXQoJy9zcGFjZS9hcGkvd2lraS90cmVlL2dldF9pbmZvLz9zcGFjZV9pZD02OTE1MDM4OTI4NTA0MzU2ODY1Jndpa2lfdG9rZW49d2lrY24yUktYdlhTMHViT3ByYjNZaExZQlJEJndpdGhfc3BhY2U9dHJ1ZSZ3aXRoX3Blcm09dHJ1ZScpXG4vLyAgICAgLy8gLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlJyxyZXNwb25zZSk7XG4vLyAgICAgbGV0IHJlc3BvbnNlPXtcbi8vICAgICAgICAgc3BhY2VJZDonMDAxJyxcbi8vICAgICAgICAgY2hpbGRyZW46W1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIHNwYWNlSWQ6JzAwMidcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgc3BhY2VJZDonMDAzJ1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICBdXG4vLyAgICAgfVxuLy8gICAgIC8vIHlpZWxkIHB1dCh7XG4vLyAgICAgLy8gICAgIHR5cGU6J3Rlc3RBY3Rpb24yJyxcbi8vICAgICAvLyAgICAgcGF5bG9hZDpyZXNwb25zZVxuLy8gICAgIC8vIH0pXG4vLyB9XG5mdW5jdGlvbiBzYWdhV2F0Y2hlcigpIHtcbn1cbmZ1bmN0aW9uIHRlc3RTYWdhMSgpIHtcbiAgICB2YXIgYW55QWN0aW9uO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBlZmZlY3RzXzEudGFrZSgnKicpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBhbnlBY3Rpb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FueUFjdGlvbicsIDQ0LCBhbnlBY3Rpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRlc3RTYWdhMSA9IHRlc3RTYWdhMTtcbmZ1bmN0aW9uIHRlc3RTYWdhMigpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICB9KTtcbn1cbmV4cG9ydHMudGVzdFNhZ2EyID0gdGVzdFNhZ2EyO1xuLy8gZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFNhZ2FcbiJdLCJzb3VyY2VSb290IjoiIn0=