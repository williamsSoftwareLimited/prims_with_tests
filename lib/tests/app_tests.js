"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTests = void 0;

var _maxPQ_tests = require("./maxPQ_tests");

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
      //GraphTests.runTests();
      //DfsTests.runTests();
      _maxPQ_tests.MaxPQTests.runTests();
    }
  }]);

  return AppTests;
}();

exports.AppTests = AppTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hcHBfdGVzdHMudHMiXSwibmFtZXMiOlsiQXBwVGVzdHMiLCJNYXhQUVRlc3RzIiwicnVuVGVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFYUEsUTs7Ozs7Ozs7OytCQUNHO0FBQ1I7QUFDQTtBQUNBQyw4QkFBV0MsUUFBWDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhUZXN0cyB9IGZyb20gXCIuL2dyYXBoX3Rlc3RzXCI7XG5pbXBvcnQgeyBEZnNUZXN0cyB9IGZyb20gXCIuL2Rmc190ZXN0c1wiO1xuaW1wb3J0IHsgTWF4UFFUZXN0cyB9IGZyb20gXCIuL21heFBRX3Rlc3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBUZXN0cyB7XG4gICAgcnVuVGVzdHMgKCkge1xuICAgICAgICAvL0dyYXBoVGVzdHMucnVuVGVzdHMoKTtcbiAgICAgICAgLy9EZnNUZXN0cy5ydW5UZXN0cygpO1xuICAgICAgICBNYXhQUVRlc3RzLnJ1blRlc3RzKCk7XG4gICAgfVxufSAgICAgICAiXX0=