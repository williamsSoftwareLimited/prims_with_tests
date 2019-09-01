"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VertexTests = void 0;

var _vertex = require("../prims/models/vertex");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VertexTests =
/*#__PURE__*/
function () {
  function VertexTests() {
    _classCallCheck(this, VertexTests);

    _defineProperty(this, "className", 'Vertex: ');
  }

  _createClass(VertexTests, [{
    key: "runTests",
    value: function runTests() {
      var expectedName = "nameTest";
      var expectedWeight = 10;
      var vertex = new _vertex.Vertex(expectedName, expectedWeight);
      console.log(this.className + "running tests");
      this.exists(vertex);
      this.compare(vertex.name, expectedName);
      this.compare(vertex.weight, expectedWeight);
    }
  }, {
    key: "exists",
    value: function exists(anObject) {
      if (anObject) {
        console.log(this.className + "successfully created");
      } else {
        console.log(this.className + "failed - couldn't create");
      }
    }
  }, {
    key: "compare",
    value: function compare(actualValue, expectedValue) {
      if (actualValue === expectedValue) {
        console.log(this.className + "successful, actual=" + actualValue + " equals expected=" + expectedValue);
      } else {
        console.log(this.className + "failed, actual=" + actualValue + " equals expected=" + expectedValue);
      }
    }
  }]);

  return VertexTests;
}();

exports.VertexTests = VertexTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy92ZXJ0ZXhfdGVzdHMudHMiXSwibmFtZXMiOlsiVmVydGV4VGVzdHMiLCJleHBlY3RlZE5hbWUiLCJleHBlY3RlZFdlaWdodCIsInZlcnRleCIsIlZlcnRleCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJleGlzdHMiLCJjb21wYXJlIiwibmFtZSIsIndlaWdodCIsImFuT2JqZWN0IiwiYWN0dWFsVmFsdWUiLCJleHBlY3RlZFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7SUFFYUEsVzs7Ozs7O3VDQUNHLFU7Ozs7OytCQUNBO0FBQ1IsVUFBSUMsWUFBWSxHQUFHLFVBQW5CO0FBQ0EsVUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBRUEsVUFBSUMsTUFBTSxHQUFHLElBQUlDLGNBQUosQ0FBV0gsWUFBWCxFQUF5QkMsY0FBekIsQ0FBYjtBQUNBRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFMLEdBQWlCLGVBQTdCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZTCxNQUFaO0FBQ0EsV0FBS00sT0FBTCxDQUFhTixNQUFNLENBQUNPLElBQXBCLEVBQTBCVCxZQUExQjtBQUNBLFdBQUtRLE9BQUwsQ0FBYU4sTUFBTSxDQUFDUSxNQUFwQixFQUE0QlQsY0FBNUI7QUFDSDs7OzJCQUNPVSxRLEVBQWlCO0FBQ3JCLFVBQUlBLFFBQUosRUFBYTtBQUNUUCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFMLEdBQWlCLHNCQUE3QjtBQUNILE9BRkQsTUFFTztBQUNIRixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFMLEdBQWlCLDBCQUE3QjtBQUNIO0FBQ0o7Ozs0QkFDUU0sVyxFQUFrQkMsYSxFQUFvQjtBQUMzQyxVQUFJRCxXQUFXLEtBQUtDLGFBQXBCLEVBQWtDO0FBQzlCVCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFMLEdBQWlCLHFCQUFqQixHQUF1Q00sV0FBdkMsR0FBbUQsbUJBQW5ELEdBQXVFQyxhQUFuRjtBQUNILE9BRkQsTUFFTztBQUNIVCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFMLEdBQWlCLGlCQUFqQixHQUFtQ00sV0FBbkMsR0FBK0MsbUJBQS9DLEdBQW1FQyxhQUEvRTtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0ZXggfSBmcm9tICcuLi9wcmltcy9tb2RlbHMvdmVydGV4JztcblxuZXhwb3J0IGNsYXNzIFZlcnRleFRlc3RzIHtcbiAgICBjbGFzc05hbWUgPSAnVmVydGV4OiAnO1xuICAgIHJ1blRlc3RzICgpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkTmFtZSA9IFwibmFtZVRlc3RcIjtcbiAgICAgICAgdmFyIGV4cGVjdGVkV2VpZ2h0ID0gMTA7XG5cbiAgICAgICAgdmFyIHZlcnRleCA9IG5ldyBWZXJ0ZXgoZXhwZWN0ZWROYW1lLCBleHBlY3RlZFdlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xhc3NOYW1lICsgXCJydW5uaW5nIHRlc3RzXCIpO1xuICAgICAgICB0aGlzLmV4aXN0cyh2ZXJ0ZXgpO1xuICAgICAgICB0aGlzLmNvbXBhcmUodmVydGV4Lm5hbWUsIGV4cGVjdGVkTmFtZSk7ICBcbiAgICAgICAgdGhpcy5jb21wYXJlKHZlcnRleC53ZWlnaHQsIGV4cGVjdGVkV2VpZ2h0KTtcbiAgICB9XG4gICAgZXhpc3RzIChhbk9iamVjdDogb2JqZWN0KXtcbiAgICAgICAgaWYgKGFuT2JqZWN0KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xhc3NOYW1lICsgXCJzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xhc3NOYW1lICsgXCJmYWlsZWQgLSBjb3VsZG4ndCBjcmVhdGVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcGFyZSAoYWN0dWFsVmFsdWU6IGFueSwgZXhwZWN0ZWRWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmIChhY3R1YWxWYWx1ZSA9PT0gZXhwZWN0ZWRWYWx1ZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsYXNzTmFtZSArIFwic3VjY2Vzc2Z1bCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xhc3NOYW1lICsgXCJmYWlsZWQsIGFjdHVhbD1cIithY3R1YWxWYWx1ZStcIiBlcXVhbHMgZXhwZWN0ZWQ9XCIrZXhwZWN0ZWRWYWx1ZSk7XG4gICAgICAgIH0gIFxuICAgIH1cbn1cbiJdfQ==