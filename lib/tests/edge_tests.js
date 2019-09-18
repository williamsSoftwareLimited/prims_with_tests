"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EdgeTests = void 0;

var _edge = require("../graph/edge");

var _fTester = require("./fTester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EdgeTests =
/*#__PURE__*/
function () {
  function EdgeTests() {
    _classCallCheck(this, EdgeTests);
  }

  _createClass(EdgeTests, null, [{
    key: "runTests",
    value: function runTests() {
      console.log("Running EdgeTests...");
      _fTester.FTester.className = "edge";
      var edge = new _edge.Edge("a", "b", 10);

      _fTester.FTester.is(edge).existing();

      _fTester.FTester.is(edge.either()).equalTo("b");

      _fTester.FTester.is(edge.other("a")).equalTo("b");

      _fTester.FTester.is(edge.other("b")).equalTo("a");

      _fTester.FTester.is(edge.getWeight()).equalTo(10);

      _fTester.FTester.throwing(function () {
        return edge.other("a");
      });

      _fTester.FTester.throwing(function () {
        return edge.other("z");
      });

      var edgeWithBiggerWeight = new _edge.Edge("z", "x", 15);
      var edgeWithSmallerWeight = new _edge.Edge("z", "x", 5);
      var edgeWithSameWeight = new _edge.Edge("z", "x", 10);

      _fTester.FTester.is(edge.compareTo(edgeWithBiggerWeight)).equalTo(-1);

      _fTester.FTester.is(edge.compareTo(edgeWithSmallerWeight)).equalTo(1);

      _fTester.FTester.is(edge.compareTo(edgeWithSameWeight)).equalTo(0);

      _fTester.FTester.is(edge.toString()).equalTo("a-b 10");

      console.log("Finished EdgeTests");
    }
  }]);

  return EdgeTests;
}();

exports.EdgeTests = EdgeTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9lZGdlX3Rlc3RzLnRzIl0sIm5hbWVzIjpbIkVkZ2VUZXN0cyIsImNvbnNvbGUiLCJsb2ciLCJGVGVzdGVyIiwiY2xhc3NOYW1lIiwiZWRnZSIsIkVkZ2UiLCJpcyIsImV4aXN0aW5nIiwiZWl0aGVyIiwiZXF1YWxUbyIsIm90aGVyIiwiZ2V0V2VpZ2h0IiwidGhyb3dpbmciLCJlZGdlV2l0aEJpZ2dlcldlaWdodCIsImVkZ2VXaXRoU21hbGxlcldlaWdodCIsImVkZ2VXaXRoU2FtZVdlaWdodCIsImNvbXBhcmVUbyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLFM7Ozs7Ozs7OzsrQkFDVTtBQUNmQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBQyx1QkFBUUMsU0FBUixHQUFvQixNQUFwQjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFJQyxVQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsQ0FBWDs7QUFDQUgsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBWCxFQUFpQkcsUUFBakI7O0FBQ0FMLHVCQUFRSSxFQUFSLENBQVdGLElBQUksQ0FBQ0ksTUFBTCxFQUFYLEVBQTBCQyxPQUExQixDQUFrQyxHQUFsQzs7QUFDQVAsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBSSxDQUFDTSxLQUFMLENBQVcsR0FBWCxDQUFYLEVBQTRCRCxPQUE1QixDQUFvQyxHQUFwQzs7QUFDQVAsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBSSxDQUFDTSxLQUFMLENBQVcsR0FBWCxDQUFYLEVBQTRCRCxPQUE1QixDQUFvQyxHQUFwQzs7QUFDQVAsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBSSxDQUFDTyxTQUFMLEVBQVgsRUFBNkJGLE9BQTdCLENBQXFDLEVBQXJDOztBQUNBUCx1QkFBUVUsUUFBUixDQUFpQjtBQUFBLGVBQUlSLElBQUksQ0FBQ00sS0FBTCxDQUFXLEdBQVgsQ0FBSjtBQUFBLE9BQWpCOztBQUNBUix1QkFBUVUsUUFBUixDQUFpQjtBQUFBLGVBQUlSLElBQUksQ0FBQ00sS0FBTCxDQUFXLEdBQVgsQ0FBSjtBQUFBLE9BQWpCOztBQUVBLFVBQUlHLG9CQUFvQixHQUFHLElBQUlSLFVBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixFQUFuQixDQUEzQjtBQUNBLFVBQUlTLHFCQUFxQixHQUFHLElBQUlULFVBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixDQUFuQixDQUE1QjtBQUNBLFVBQUlVLGtCQUFrQixHQUFHLElBQUlWLFVBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixFQUFuQixDQUF6Qjs7QUFDQUgsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBSSxDQUFDWSxTQUFMLENBQWVILG9CQUFmLENBQVgsRUFBaURKLE9BQWpELENBQXlELENBQUMsQ0FBMUQ7O0FBQ0FQLHVCQUFRSSxFQUFSLENBQVdGLElBQUksQ0FBQ1ksU0FBTCxDQUFlRixxQkFBZixDQUFYLEVBQWtETCxPQUFsRCxDQUEwRCxDQUExRDs7QUFDQVAsdUJBQVFJLEVBQVIsQ0FBV0YsSUFBSSxDQUFDWSxTQUFMLENBQWVELGtCQUFmLENBQVgsRUFBK0NOLE9BQS9DLENBQXVELENBQXZEOztBQUVBUCx1QkFBUUksRUFBUixDQUFXRixJQUFJLENBQUNhLFFBQUwsRUFBWCxFQUE0QlIsT0FBNUIsQ0FBb0MsUUFBcEM7O0FBRUFULE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGdlIH0gZnJvbSBcIi4uL2dyYXBoL2VkZ2VcIjtcbmltcG9ydCB7IEZUZXN0ZXIgfSBmcm9tIFwiLi9mVGVzdGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBFZGdlVGVzdHMge1xuICAgIHN0YXRpYyBydW5UZXN0cyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBFZGdlVGVzdHMuLi5cIik7XG5cbiAgICAgICAgRlRlc3Rlci5jbGFzc05hbWUgPSBcImVkZ2VcIjtcbiAgICAgICAgdmFyIGVkZ2UgPSBuZXcgRWRnZShcImFcIiwgXCJiXCIsIDEwKTtcbiAgICAgICAgRlRlc3Rlci5pcyhlZGdlKS5leGlzdGluZygpO1xuICAgICAgICBGVGVzdGVyLmlzKGVkZ2UuZWl0aGVyKCkpLmVxdWFsVG8oXCJiXCIpO1xuICAgICAgICBGVGVzdGVyLmlzKGVkZ2Uub3RoZXIoXCJhXCIpKS5lcXVhbFRvKFwiYlwiKTtcbiAgICAgICAgRlRlc3Rlci5pcyhlZGdlLm90aGVyKFwiYlwiKSkuZXF1YWxUbyhcImFcIik7XG4gICAgICAgIEZUZXN0ZXIuaXMoZWRnZS5nZXRXZWlnaHQoKSkuZXF1YWxUbygxMCk7XG4gICAgICAgIEZUZXN0ZXIudGhyb3dpbmcoKCk9PmVkZ2Uub3RoZXIoXCJhXCIpKTtcbiAgICAgICAgRlRlc3Rlci50aHJvd2luZygoKT0+ZWRnZS5vdGhlcihcInpcIikpO1xuXG4gICAgICAgIHZhciBlZGdlV2l0aEJpZ2dlcldlaWdodCA9IG5ldyBFZGdlKFwielwiLCBcInhcIiwgMTUpO1xuICAgICAgICB2YXIgZWRnZVdpdGhTbWFsbGVyV2VpZ2h0ID0gbmV3IEVkZ2UoXCJ6XCIsIFwieFwiLCA1KTtcbiAgICAgICAgdmFyIGVkZ2VXaXRoU2FtZVdlaWdodCA9IG5ldyBFZGdlKFwielwiLCBcInhcIiwgMTApO1xuICAgICAgICBGVGVzdGVyLmlzKGVkZ2UuY29tcGFyZVRvKGVkZ2VXaXRoQmlnZ2VyV2VpZ2h0KSkuZXF1YWxUbygtMSk7XG4gICAgICAgIEZUZXN0ZXIuaXMoZWRnZS5jb21wYXJlVG8oZWRnZVdpdGhTbWFsbGVyV2VpZ2h0KSkuZXF1YWxUbygxKTtcbiAgICAgICAgRlRlc3Rlci5pcyhlZGdlLmNvbXBhcmVUbyhlZGdlV2l0aFNhbWVXZWlnaHQpKS5lcXVhbFRvKDApO1xuXG4gICAgICAgIEZUZXN0ZXIuaXMoZWRnZS50b1N0cmluZygpKS5lcXVhbFRvKFwiYS1iIDEwXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmluaXNoZWQgRWRnZVRlc3RzXCIpO1xuICAgIH1cbn0iXX0=