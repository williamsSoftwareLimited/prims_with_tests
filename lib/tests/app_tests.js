"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTests = void 0;

var _edge_tests = require("./edge_tests");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppTests =
/*#__PURE__*/
function () {
  function AppTests() {
    _classCallCheck(this, AppTests);
  }

  _createClass(AppTests, [{
    key: "runTests",
    value: function runTests() {
      // GraphTests.runTests();
      // DfsTests.runTests();
      // MaxPQTests.runTests();
      _edge_tests.EdgeTests.runTests();
    }
  }]);

  return AppTests;
}();

exports.AppTests = AppTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hcHBfdGVzdHMudHMiXSwibmFtZXMiOlsiQXBwVGVzdHMiLCJFZGdlVGVzdHMiLCJydW5UZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7OztJQUVhQSxROzs7Ozs7Ozs7K0JBQ0c7QUFDUjtBQUNBO0FBQ0E7QUFDQUMsNEJBQVVDLFFBQVY7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoVGVzdHMgfSBmcm9tIFwiLi9ncmFwaF90ZXN0c1wiO1xuaW1wb3J0IHsgRGZzVGVzdHMgfSBmcm9tIFwiLi9kZnNfdGVzdHNcIjtcbmltcG9ydCB7IE1heFBRVGVzdHMgfSBmcm9tIFwiLi9tYXhQUV90ZXN0c1wiO1xuaW1wb3J0IHsgRWRnZVRlc3RzIH0gZnJvbSBcIi4vZWRnZV90ZXN0c1wiO1xuXG5leHBvcnQgY2xhc3MgQXBwVGVzdHMge1xuICAgIHJ1blRlc3RzICgpIHtcbiAgICAgICAgLy8gR3JhcGhUZXN0cy5ydW5UZXN0cygpO1xuICAgICAgICAvLyBEZnNUZXN0cy5ydW5UZXN0cygpO1xuICAgICAgICAvLyBNYXhQUVRlc3RzLnJ1blRlc3RzKCk7XG4gICAgICAgIEVkZ2VUZXN0cy5ydW5UZXN0cygpO1xuICAgIH1cbn0gICAgICAgIl19