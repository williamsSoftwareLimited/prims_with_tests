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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app_tests = __webpack_require__(/*! ./tests/app_tests */ \"./lib/tests/app_tests.js\");\n\nvar appTests = new _app_tests.AppTests();\nappTests.runTests();\n\n//# sourceURL=webpack:///./lib/app.js?");

/***/ }),

/***/ "./lib/graph/graph.js":
/*!****************************!*\
  !*** ./lib/graph/graph.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Graph = void 0;\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nvar Graph =\n/*#__PURE__*/\nfunction () {\n  function Graph() {\n    _classCallCheck(this, Graph);\n\n    _defineProperty(this, \"numberOfVertices\", 0);\n\n    _defineProperty(this, \"numberOfEdges\", 0);\n\n    _defineProperty(this, \"adjacencyLists\", []);\n  }\n\n  _createClass(Graph, [{\n    key: \"constructGraph\",\n    value: function constructGraph(graphJson) {\n      var _this = this;\n\n      graphJson.edges.forEach(function (edge) {\n        _this.addEdge(edge.fromVertex, edge.toVertex);\n      });\n    }\n  }, {\n    key: \"addEdge\",\n    value: function addEdge(v, w) {\n      if (v === w) return;\n      this.addOneWayEdge(v, w);\n      this.addOneWayEdge(w, v);\n      this.numberOfEdges++;\n    }\n  }, {\n    key: \"addOneWayEdge\",\n    value: function addOneWayEdge(v, w) {\n      if (!this.vertexExists(v)) {\n        this.adjacencyLists.push(v);\n        this.adjacencyLists[v] = [];\n      }\n\n      if (!this.adjacentVertices(v).find(function (p) {\n        return p === w;\n      })) this.adjacencyLists[v].push(w);\n    }\n  }, {\n    key: \"vertexExists\",\n    value: function vertexExists(v) {\n      return this.adjacencyLists[v] !== undefined;\n    }\n  }, {\n    key: \"adjacentVertices\",\n    value: function adjacentVertices(v) {\n      return this.adjacencyLists[v];\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var _this2 = this;\n\n      var s = \"\";\n      this.adjacencyLists.forEach(function (vertex) {\n        s += vertex + \": \";\n\n        _this2.adjacentVertices(vertex).forEach(function (adjVertex) {\n          s += adjVertex + \" \";\n        });\n\n        s += \"; \";\n      });\n      return s;\n    }\n  }]);\n\n  return Graph;\n}();\n\nexports.Graph = Graph;\n\n//# sourceURL=webpack:///./lib/graph/graph.js?");

/***/ }),

/***/ "./lib/tests/app_tests.js":
/*!********************************!*\
  !*** ./lib/tests/app_tests.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AppTests = void 0;\n\nvar _graph_tests = __webpack_require__(/*! ./graph_tests */ \"./lib/tests/graph_tests.js\");\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nvar AppTests =\n/*#__PURE__*/\nfunction () {\n  function AppTests() {\n    _classCallCheck(this, AppTests);\n  }\n\n  _createClass(AppTests, [{\n    key: \"runTests\",\n    value: function runTests() {\n      new _graph_tests.GraphTests().runTests();\n    }\n  }]);\n\n  return AppTests;\n}();\n\nexports.AppTests = AppTests;\n\n//# sourceURL=webpack:///./lib/tests/app_tests.js?");

/***/ }),

/***/ "./lib/tests/graph_tests.js":
/*!**********************************!*\
  !*** ./lib/tests/graph_tests.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GraphTests = void 0;\n\nvar _graph = __webpack_require__(/*! ../graph/graph */ \"./lib/graph/graph.js\");\n\nvar _tester = __webpack_require__(/*! ./tester */ \"./lib/tests/tester.js\");\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nvar GraphTests =\n/*#__PURE__*/\nfunction () {\n  function GraphTests() {\n    _classCallCheck(this, GraphTests);\n  }\n\n  _createClass(GraphTests, [{\n    key: \"runTests\",\n    value: function runTests() {\n      var graph = new _graph.Graph();\n      var tester = new _tester.Tester(\"Graph\");\n      graph.addEdge(\"a\", \"c\");\n      graph.addEdge(\"d\", \"a\");\n      tester.equalTo(graph.numberOfEdges, 2, \"Edge number test\");\n      graph.addEdge(\"a\", \"b\");\n      graph.addEdge(\"a\", \"d\");\n      graph.addEdge(\"a\", \"a\");\n      tester.compareArray(graph.adjacentVertices(\"a\"), [\"c\", \"d\", \"b\"], \"Vertices test\");\n      console.log(graph.toString());\n      tester.isTrue(graph.vertexExists(\"a\"), \"The vertex exists\");\n      tester.isFalse(graph.vertexExists(\"zzzz\"), \"The vertex exists\");\n      var actual = graph.adjacentVertices(\"b\").slice(0, 1).toString();\n      tester.compareString(\"a\", actual, \"if 'a' points to 'b' then 'b' should point to 'a'\"); //should be no duplication\n\n      var actualVertices = graph.adjacentVertices(\"a\");\n      actualVertices.forEach(function (elem, i, arr) {\n        if (arr.indexOf(elem) !== arr.lastIndexOf(elem)) console.log(\"found a dirty duplicate: \" + elem + \" in array \" + arr);\n      }); //should be no self loops\n\n      var actualSameVertex = actualVertices.filter(function (p) {\n        return p === \"a\";\n      });\n      tester.equalTo(actualSameVertex.length, 0, \"the vertex 'a' self-loop test\"); // next construct JSON to convert to a graph\n\n      var graphJson = {\n        \"edges\": [{\n          \"fromVertex\": \"a\",\n          \"toVertex\": \"b\"\n        }, {\n          \"fromVertex\": \"a\",\n          \"toVertex\": \"c\"\n        }, {\n          \"fromVertex\": \"b\",\n          \"toVertex\": \"c\"\n        }]\n      };\n      graph = new _graph.Graph();\n      graph.constructGraph(graphJson);\n      tester.equalTo(3, graph.numberOfEdges, \"after construct graph with JSON edges match\");\n      console.log(graph.toString());\n    }\n  }]);\n\n  return GraphTests;\n}();\n\nexports.GraphTests = GraphTests;\n\n//# sourceURL=webpack:///./lib/tests/graph_tests.js?");

/***/ }),

/***/ "./lib/tests/tester.js":
/*!*****************************!*\
  !*** ./lib/tests/tester.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Tester = void 0;\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nvar Tester =\n/*#__PURE__*/\nfunction () {\n  function Tester(className) {\n    _classCallCheck(this, Tester);\n\n    _defineProperty(this, \"className\", void 0);\n\n    this.className = className;\n  }\n\n  _createClass(Tester, [{\n    key: \"exists\",\n    value: function exists(anObject) {\n      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n      if (anObject) {\n        console.log(this.fullMessage(message) + \"successfully created\");\n      } else {\n        console.log(this.fullMessage(message) + \"failed - couldn't create\");\n      }\n    }\n  }, {\n    key: \"compareString\",\n    value: function compareString(actualString, expectedString) {\n      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n      this.comparisons(function () {\n        return actualString === expectedString;\n      }, message, \"actual=\" + actualString + \" equals expected=\" + expectedString);\n    }\n  }, {\n    key: \"compareArray\",\n    value: function compareArray(actualValue, expectedValue) {\n      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n      if (actualValue.length !== expectedValue.length) {\n        console.log(this.fullMessage(message) + \"failed, the arrays are not the same length, actual length=\".concat(actualValue.length, \" and the expected length=\").concat(expectedValue.length));\n        return;\n      }\n\n      for (var i = 0; i < actualValue.length; i++) {\n        if (actualValue[i] === expectedValue[i]) {\n          console.log(this.fullMessage(message) + \"successful, actual=\" + actualValue[i] + \" equals expected=\" + expectedValue[i]);\n        } else {\n          console.log(this.fullMessage(message) + \"failed, actual=\" + actualValue[i] + \" equals expected=\" + expectedValue[i]);\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"isTrue\",\n    value: function isTrue(expected2BTrue, message) {\n      this.comparisons(function () {\n        return expected2BTrue === true;\n      }, message, \"is true\");\n    }\n  }, {\n    key: \"isFalse\",\n    value: function isFalse(expected2BFalse, message) {\n      this.comparisons(function () {\n        return expected2BFalse === false;\n      }, message, \"is false\");\n    }\n  }, {\n    key: \"equalTo\",\n    value: function equalTo(actualValue, expectedValue) {\n      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n      this.comparisons(function () {\n        return actualValue === expectedValue;\n      }, message, \"actual=\" + actualValue + \" equals expected=\" + expectedValue);\n    }\n  }, {\n    key: \"moreThan\",\n    value: function moreThan(actualValue, expectedValue) {\n      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n      this.comparisons(function () {\n        return actualValue > expectedValue;\n      }, message, \"actual=\" + actualValue + \" is more than expected=\" + expectedValue);\n    }\n  }, {\n    key: \"lessThan\",\n    value: function lessThan(actualValue, expectedValue) {\n      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n      this.comparisons(function () {\n        return actualValue > expectedValue;\n      }, message, \"actual=\" + actualValue + \" is less than expected=\" + expectedValue);\n    }\n  }, {\n    key: \"comparisons\",\n    value: function comparisons(func, message) {\n      var actualExpected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n      if (func) {\n        console.log(this.fullMessage(message) + \"successful, \".concat(actualExpected));\n        return true;\n      } else {\n        console.log(this.fullMessage(message) + \"failed, \".concat(actualExpected));\n        return false;\n      }\n    }\n  }, {\n    key: \"fullMessage\",\n    value: function fullMessage(message) {\n      return \"\".concat(this.className, \": \").concat(message, \" \");\n    }\n  }]);\n\n  return Tester;\n}();\n\nexports.Tester = Tester;\n\n//# sourceURL=webpack:///./lib/tests/tester.js?");

/***/ })

/******/ });