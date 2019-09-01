"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTests = void 0;

var _vertex_tests = require("./vertex_tests");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/// <reference path="./vertex_tests.ts" />
var AppTests =
/*#__PURE__*/
function () {
  function AppTests() {
    _classCallCheck(this, AppTests);
  }

  _createClass(AppTests, [{
    key: "runTests",
    value: function runTests() {
      var vertexTests = new _vertex_tests.VertexTests();
      vertexTests.runTests();
    }
  }]);

  return AppTests;
}();

exports.AppTests = AppTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hcHBfdGVzdHMudHMiXSwibmFtZXMiOlsiQXBwVGVzdHMiLCJ2ZXJ0ZXhUZXN0cyIsIlZlcnRleFRlc3RzIiwicnVuVGVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFDQTtJQUVpQkEsUTs7Ozs7Ozs7OytCQUVHO0FBQ1IsVUFBSUMsV0FBVyxHQUFHLElBQUlDLHlCQUFKLEVBQWxCO0FBQ0FELE1BQUFBLFdBQVcsQ0FBQ0UsUUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGV4VGVzdHMgfSBmcm9tIFwiLi92ZXJ0ZXhfdGVzdHNcIjtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3ZlcnRleF90ZXN0cy50c1wiIC8+XG5cbiAgICBleHBvcnQgY2xhc3MgQXBwVGVzdHMge1xuXG4gICAgICAgIHJ1blRlc3RzICgpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0ZXhUZXN0cyA9IG5ldyBWZXJ0ZXhUZXN0cygpO1xuICAgICAgICAgICAgdmVydGV4VGVzdHMucnVuVGVzdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuIl19