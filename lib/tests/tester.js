"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tester = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tester =
/*#__PURE__*/
function () {
  function Tester(className) {
    _classCallCheck(this, Tester);

    _defineProperty(this, "className", void 0);

    this.className = className;
  }

  _createClass(Tester, [{
    key: "exists",
    value: function exists(anObject) {
      if (anObject) {
        console.log(this.className + "successfully created");
      } else {
        console.log(this.className + "failed - couldn't create");
      }
    }
  }, {
    key: "compareNumber",
    value: function compareNumber(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualValue === expectedValue) {
        console.log(fullMessage + "successful, actual=" + actualValue + " equals expected=" + expectedValue);
      } else {
        console.log(fullMessage + "failed, actual=" + actualValue + " equals expected=" + expectedValue);
      }
    }
  }, {
    key: "compareArray",
    value: function compareArray(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualValue.length !== expectedValue.length) {
        console.log("".concat(fullMessage, " failed, the arrays are not the same length, actual length=").concat(actualValue.length, " and the expected length=").concat(expectedValue.length));
        return;
      }

      for (var i = 0; i < actualValue.length; i++) {
        if (actualValue[i] === expectedValue[i]) {
          console.log(fullMessage + "successful, actual=" + actualValue[i] + " equals expected=" + expectedValue[i]);
        } else {
          console.log(fullMessage + "failed, actual=" + actualValue[i] + " equals expected=" + expectedValue[i]);
          return;
        }
      }
    }
  }]);

  return Tester;
}();

exports.Tester = Tester;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy90ZXN0ZXIudHMiXSwibmFtZXMiOlsiVGVzdGVyIiwiY2xhc3NOYW1lIiwiYW5PYmplY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsVmFsdWUiLCJleHBlY3RlZFZhbHVlIiwibWVzc2FnZSIsImZ1bGxNZXNzYWdlIiwibGVuZ3RoIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLE07OztBQUVULGtCQUFZQyxTQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzFCLFNBQUtBLFNBQUwsR0FBZUEsU0FBZjtBQUNIOzs7OzJCQUNPQyxRLEVBQWlCO0FBQ3JCLFVBQUlBLFFBQUosRUFBYTtBQUNUQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxTQUFMLEdBQWlCLHNCQUE3QjtBQUNILE9BRkQsTUFFTztBQUNIRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxTQUFMLEdBQWlCLDBCQUE3QjtBQUNIO0FBQ0o7OztrQ0FDY0ksVyxFQUFxQkMsYSxFQUE2QztBQUFBLFVBQXRCQyxPQUFzQix1RUFBSixFQUFJO0FBQzdFLFVBQUlDLFdBQW1CLGFBQU0sS0FBS1AsU0FBWCxlQUF5Qk0sT0FBekIsTUFBdkI7O0FBQ0EsVUFBSUYsV0FBVyxLQUFLQyxhQUFwQixFQUFrQztBQUM5QkgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxxQkFBZCxHQUFvQ0gsV0FBcEMsR0FBZ0QsbUJBQWhELEdBQW9FQyxhQUFoRjtBQUNILE9BRkQsTUFFTztBQUNISCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksV0FBVyxHQUFHLGlCQUFkLEdBQWdDSCxXQUFoQyxHQUE0QyxtQkFBNUMsR0FBZ0VDLGFBQTVFO0FBQ0g7QUFDSjs7O2lDQUNhRCxXLEVBQWtCQyxhLEVBQTBDO0FBQUEsVUFBdEJDLE9BQXNCLHVFQUFKLEVBQUk7QUFDdEUsVUFBSUMsV0FBbUIsYUFBTSxLQUFLUCxTQUFYLGVBQXlCTSxPQUF6QixNQUF2Qjs7QUFDQSxVQUFJRixXQUFXLENBQUNJLE1BQVosS0FBdUJILGFBQWEsQ0FBQ0csTUFBekMsRUFBZ0Q7QUFDNUNOLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlSSxXQUFmLHdFQUF3RkgsV0FBVyxDQUFDSSxNQUFwRyxzQ0FBc0lILGFBQWEsQ0FBQ0csTUFBcEo7QUFDQTtBQUNIOztBQUNELFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDTCxXQUFXLENBQUNJLE1BQTNCLEVBQW1DQyxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DLFlBQUlMLFdBQVcsQ0FBQ0ssQ0FBRCxDQUFYLEtBQW1CSixhQUFhLENBQUNJLENBQUQsQ0FBcEMsRUFBd0M7QUFDcENQLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcscUJBQWQsR0FBb0NILFdBQVcsQ0FBQ0ssQ0FBRCxDQUEvQyxHQUFtRCxtQkFBbkQsR0FBdUVKLGFBQWEsQ0FBQ0ksQ0FBRCxDQUFoRztBQUNILFNBRkQsTUFFTztBQUNIUCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksV0FBVyxHQUFHLGlCQUFkLEdBQWdDSCxXQUFXLENBQUNLLENBQUQsQ0FBM0MsR0FBK0MsbUJBQS9DLEdBQW1FSixhQUFhLENBQUNJLENBQUQsQ0FBNUY7QUFDQTtBQUNIO0FBQ0o7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUZXN0ZXIge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jbGFzc05hbWU9Y2xhc3NOYW1lO1xuICAgIH1cbiAgICBleGlzdHMgKGFuT2JqZWN0OiBvYmplY3Qpe1xuICAgICAgICBpZiAoYW5PYmplY3Qpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGFzc05hbWUgKyBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGFzc05hbWUgKyBcImZhaWxlZCAtIGNvdWxkbid0IGNyZWF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wYXJlTnVtYmVyIChhY3R1YWxWYWx1ZTogbnVtYmVyLCBleHBlY3RlZFZhbHVlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgbGV0IGZ1bGxNZXNzYWdlOiBzdHJpbmcgPSBgJHt0aGlzLmNsYXNzTmFtZX06ICR7bWVzc2FnZX0gYDtcbiAgICAgICAgaWYgKGFjdHVhbFZhbHVlID09PSBleHBlY3RlZFZhbHVlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJzdWNjZXNzZnVsLCBhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcImZhaWxlZCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGNvbXBhcmVBcnJheSAoYWN0dWFsVmFsdWU6IGFueSwgZXhwZWN0ZWRWYWx1ZTogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGxldCBmdWxsTWVzc2FnZTogc3RyaW5nID0gYCR7dGhpcy5jbGFzc05hbWV9OiAke21lc3NhZ2V9IGA7XG4gICAgICAgIGlmIChhY3R1YWxWYWx1ZS5sZW5ndGggIT09IGV4cGVjdGVkVmFsdWUubGVuZ3RoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2Z1bGxNZXNzYWdlfSBmYWlsZWQsIHRoZSBhcnJheXMgYXJlIG5vdCB0aGUgc2FtZSBsZW5ndGgsIGFjdHVhbCBsZW5ndGg9JHthY3R1YWxWYWx1ZS5sZW5ndGh9IGFuZCB0aGUgZXhwZWN0ZWQgbGVuZ3RoPSR7ZXhwZWN0ZWRWYWx1ZS5sZW5ndGh9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YWN0dWFsVmFsdWUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGFjdHVhbFZhbHVlW2ldID09PSBleHBlY3RlZFZhbHVlW2ldKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsTWVzc2FnZSArIFwic3VjY2Vzc2Z1bCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlW2ldK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcImZhaWxlZCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlW2ldK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il19