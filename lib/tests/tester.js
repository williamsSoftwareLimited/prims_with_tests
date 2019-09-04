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
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (anObject) {
        console.log(this.fullMessage(message) + "successfully created");
      } else {
        console.log(this.fullMessage(message) + "failed - couldn't create");
      }
    }
  }, {
    key: "compareString",
    value: function compareString(actualString, expectedString) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.comparisons(function () {
        return actualString === expectedString;
      }, message, "actual=" + actualString + " equals expected=" + expectedString);
    }
  }, {
    key: "compareArray",
    value: function compareArray(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (actualValue.length !== expectedValue.length) {
        console.log(this.fullMessage(message) + "failed, the arrays are not the same length, actual length=".concat(actualValue.length, " and the expected length=").concat(expectedValue.length));
        return;
      }

      for (var i = 0; i < actualValue.length; i++) {
        if (actualValue[i] === expectedValue[i]) {
          console.log(this.fullMessage(message) + "successful, actual=" + actualValue[i] + " equals expected=" + expectedValue[i]);
        } else {
          console.log(this.fullMessage(message) + "failed, actual=" + actualValue[i] + " equals expected=" + expectedValue[i]);
          return;
        }
      }
    }
  }, {
    key: "isTrue",
    value: function isTrue(expected2BTrue, message) {
      this.comparisons(function () {
        return expected2BTrue === true;
      }, message, "is true");
    }
  }, {
    key: "isFalse",
    value: function isFalse(expected2BFalse, message) {
      this.comparisons(function () {
        return expected2BFalse === false;
      }, message, "is false");
    }
  }, {
    key: "equalTo",
    value: function equalTo(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.comparisons(function () {
        return actualValue === expectedValue;
      }, message, "actual=" + actualValue + " equals expected=" + expectedValue);
    }
  }, {
    key: "moreThan",
    value: function moreThan(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.comparisons(function () {
        return actualValue > expectedValue;
      }, message, "actual=" + actualValue + " is more than expected=" + expectedValue);
    }
  }, {
    key: "lessThan",
    value: function lessThan(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.comparisons(function () {
        return actualValue > expectedValue;
      }, message, "actual=" + actualValue + " is less than expected=" + expectedValue);
    }
  }, {
    key: "comparisons",
    value: function comparisons(func, message) {
      var actualExpected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (func()) {
        console.log(this.fullMessage(message) + "successful, ".concat(actualExpected));
      } else {
        console.log(this.fullMessage(message) + "failed, ".concat(actualExpected));
      }
    }
  }, {
    key: "fullMessage",
    value: function fullMessage(message) {
      return "".concat(this.className, ": ").concat(message, " ");
    }
  }]);

  return Tester;
}();

exports.Tester = Tester;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy90ZXN0ZXIudHMiXSwibmFtZXMiOlsiVGVzdGVyIiwiY2xhc3NOYW1lIiwiYW5PYmplY3QiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImZ1bGxNZXNzYWdlIiwiYWN0dWFsU3RyaW5nIiwiZXhwZWN0ZWRTdHJpbmciLCJjb21wYXJpc29ucyIsImFjdHVhbFZhbHVlIiwiZXhwZWN0ZWRWYWx1ZSIsImxlbmd0aCIsImkiLCJleHBlY3RlZDJCVHJ1ZSIsImV4cGVjdGVkMkJGYWxzZSIsImZ1bmMiLCJhY3R1YWxFeHBlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLE07OztBQUVULGtCQUFZQyxTQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzFCLFNBQUtBLFNBQUwsR0FBZUEsU0FBZjtBQUNIOzs7OzJCQUNPQyxRLEVBQXVDO0FBQUEsVUFBckJDLE9BQXFCLHVFQUFILEVBQUc7O0FBQzNDLFVBQUlELFFBQUosRUFBYTtBQUNURSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxXQUFMLENBQWlCSCxPQUFqQixJQUE0QixzQkFBeEM7QUFDSCxPQUZELE1BRU87QUFDSEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIsMEJBQXhDO0FBQ0g7QUFDSjs7O2tDQUNhSSxZLEVBQXNCQyxjLEVBQThDO0FBQUEsVUFBdEJMLE9BQXNCLHVFQUFKLEVBQUk7QUFDOUUsV0FBS00sV0FBTCxDQUFpQjtBQUFBLGVBQU1GLFlBQVksS0FBS0MsY0FBdkI7QUFBQSxPQUFqQixFQUF3REwsT0FBeEQsRUFBaUUsWUFBVUksWUFBVixHQUF1QixtQkFBdkIsR0FBMkNDLGNBQTVHO0FBQ0g7OztpQ0FDYUUsVyxFQUFrQkMsYSxFQUEwQztBQUFBLFVBQXRCUixPQUFzQix1RUFBSixFQUFJOztBQUN0RSxVQUFJTyxXQUFXLENBQUNFLE1BQVosS0FBdUJELGFBQWEsQ0FBQ0MsTUFBekMsRUFBZ0Q7QUFDNUNSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFdBQUwsQ0FBaUJILE9BQWpCLHdFQUF5Rk8sV0FBVyxDQUFDRSxNQUFyRyxzQ0FBdUlELGFBQWEsQ0FBQ0MsTUFBckosQ0FBWjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNILFdBQVcsQ0FBQ0UsTUFBM0IsRUFBbUNDLENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsWUFBSUgsV0FBVyxDQUFDRyxDQUFELENBQVgsS0FBbUJGLGFBQWEsQ0FBQ0UsQ0FBRCxDQUFwQyxFQUF3QztBQUNwQ1QsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIscUJBQTVCLEdBQWtETyxXQUFXLENBQUNHLENBQUQsQ0FBN0QsR0FBaUUsbUJBQWpFLEdBQXFGRixhQUFhLENBQUNFLENBQUQsQ0FBOUc7QUFDSCxTQUZELE1BRU87QUFDSFQsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIsaUJBQTVCLEdBQThDTyxXQUFXLENBQUNHLENBQUQsQ0FBekQsR0FBNkQsbUJBQTdELEdBQWlGRixhQUFhLENBQUNFLENBQUQsQ0FBMUc7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7OzJCQUNNQyxjLEVBQXlCWCxPLEVBQWlCO0FBQzdDLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNSyxjQUFjLEtBQUcsSUFBdkI7QUFBQSxPQUFqQixFQUE4Q1gsT0FBOUMsRUFBdUQsU0FBdkQ7QUFDSDs7OzRCQUNPWSxlLEVBQTBCWixPLEVBQWlCO0FBQy9DLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNTSxlQUFlLEtBQUcsS0FBeEI7QUFBQSxPQUFqQixFQUFnRFosT0FBaEQsRUFBeUQsVUFBekQ7QUFDSDs7OzRCQUNRTyxXLEVBQXFCQyxhLEVBQTZDO0FBQUEsVUFBdEJSLE9BQXNCLHVFQUFKLEVBQUk7QUFDdkUsV0FBS00sV0FBTCxDQUFpQjtBQUFBLGVBQU1DLFdBQVcsS0FBS0MsYUFBdEI7QUFBQSxPQUFqQixFQUFzRFIsT0FBdEQsRUFBK0QsWUFBVU8sV0FBVixHQUFzQixtQkFBdEIsR0FBMENDLGFBQXpHO0FBQ0g7Ozs2QkFDUUQsVyxFQUFxQkMsYSxFQUEyQztBQUFBLFVBQXBCUixPQUFvQix1RUFBSixFQUFJO0FBQ3JFLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNQyxXQUFXLEdBQUdDLGFBQXBCO0FBQUEsT0FBakIsRUFBb0RSLE9BQXBELEVBQTZELFlBQVVPLFdBQVYsR0FBc0IseUJBQXRCLEdBQWdEQyxhQUE3RztBQUNIOzs7NkJBQ1FELFcsRUFBcUJDLGEsRUFBMkM7QUFBQSxVQUFwQlIsT0FBb0IsdUVBQUosRUFBSTtBQUNyRSxXQUFLTSxXQUFMLENBQWlCO0FBQUEsZUFBTUMsV0FBVyxHQUFHQyxhQUFwQjtBQUFBLE9BQWpCLEVBQW9EUixPQUFwRCxFQUE2RCxZQUFVTyxXQUFWLEdBQXNCLHlCQUF0QixHQUFnREMsYUFBN0c7QUFFSDs7O2dDQUNtQkssSSxFQUFXYixPLEVBQTRDO0FBQUEsVUFBM0JjLGNBQTJCLHVFQUFKLEVBQUk7O0FBQ3ZFLFVBQUlELElBQUksRUFBUixFQUFXO0FBQ1BaLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFdBQUwsQ0FBaUJILE9BQWpCLDBCQUEyQ2MsY0FBM0MsQ0FBWjtBQUNILE9BRkQsTUFFTztBQUNIYixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxXQUFMLENBQWlCSCxPQUFqQixzQkFBdUNjLGNBQXZDLENBQVo7QUFDSDtBQUNKOzs7Z0NBQ21CZCxPLEVBQXlCO0FBQ3pDLHVCQUFVLEtBQUtGLFNBQWYsZUFBNkJFLE9BQTdCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGVzdGVyIHtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lPWNsYXNzTmFtZTtcbiAgICB9XG4gICAgZXhpc3RzIChhbk9iamVjdDogb2JqZWN0LCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKXtcbiAgICAgICAgaWYgKGFuT2JqZWN0KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mdWxsTWVzc2FnZShtZXNzYWdlKSArIFwiZmFpbGVkIC0gY291bGRuJ3QgY3JlYXRlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBhcmVTdHJpbmcoYWN0dWFsU3RyaW5nOiBzdHJpbmcsIGV4cGVjdGVkU3RyaW5nOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5jb21wYXJpc29ucygoKSA9PiBhY3R1YWxTdHJpbmcgPT09IGV4cGVjdGVkU3RyaW5nLCBtZXNzYWdlLCBcImFjdHVhbD1cIithY3R1YWxTdHJpbmcrXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkU3RyaW5nKTtcbiAgICB9XG4gICAgY29tcGFyZUFycmF5IChhY3R1YWxWYWx1ZTogYW55LCBleHBlY3RlZFZhbHVlOiBhbnksIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgaWYgKGFjdHVhbFZhbHVlLmxlbmd0aCAhPT0gZXhwZWN0ZWRWYWx1ZS5sZW5ndGgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mdWxsTWVzc2FnZShtZXNzYWdlKSArIGBmYWlsZWQsIHRoZSBhcnJheXMgYXJlIG5vdCB0aGUgc2FtZSBsZW5ndGgsIGFjdHVhbCBsZW5ndGg9JHthY3R1YWxWYWx1ZS5sZW5ndGh9IGFuZCB0aGUgZXhwZWN0ZWQgbGVuZ3RoPSR7ZXhwZWN0ZWRWYWx1ZS5sZW5ndGh9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YWN0dWFsVmFsdWUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGFjdHVhbFZhbHVlW2ldID09PSBleHBlY3RlZFZhbHVlW2ldKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxNZXNzYWdlKG1lc3NhZ2UpICsgXCJzdWNjZXNzZnVsLCBhY3R1YWw9XCIrYWN0dWFsVmFsdWVbaV0rXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWVbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxNZXNzYWdlKG1lc3NhZ2UpICsgXCJmYWlsZWQsIGFjdHVhbD1cIithY3R1YWxWYWx1ZVtpXStcIiBlcXVhbHMgZXhwZWN0ZWQ9XCIrZXhwZWN0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbiAgICBpc1RydWUoZXhwZWN0ZWQyQlRydWU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbXBhcmlzb25zKCgpID0+IGV4cGVjdGVkMkJUcnVlPT09dHJ1ZSwgbWVzc2FnZSwgXCJpcyB0cnVlXCIpO1xuICAgIH1cbiAgICBpc0ZhbHNlKGV4cGVjdGVkMkJGYWxzZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29tcGFyaXNvbnMoKCkgPT4gZXhwZWN0ZWQyQkZhbHNlPT09ZmFsc2UsIG1lc3NhZ2UsIFwiaXMgZmFsc2VcIik7XG4gICAgfVxuICAgIGVxdWFsVG8gKGFjdHVhbFZhbHVlOiBudW1iZXIsIGV4cGVjdGVkVmFsdWU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nID0gXCJcIikgeyBcbiAgICAgICAgdGhpcy5jb21wYXJpc29ucygoKSA9PiBhY3R1YWxWYWx1ZSA9PT0gZXhwZWN0ZWRWYWx1ZSwgbWVzc2FnZSwgXCJhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuICAgIH1cbiAgICBtb3JlVGhhbihhY3R1YWxWYWx1ZTogbnVtYmVyLCBleHBlY3RlZFZhbHVlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZz1cIlwiKSB7ICBcbiAgICAgICAgdGhpcy5jb21wYXJpc29ucygoKSA9PiBhY3R1YWxWYWx1ZSA+IGV4cGVjdGVkVmFsdWUsIG1lc3NhZ2UsIFwiYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGlzIG1vcmUgdGhhbiBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICB9XG4gICAgbGVzc1RoYW4oYWN0dWFsVmFsdWU6IG51bWJlciwgZXhwZWN0ZWRWYWx1ZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmc9XCJcIikge1xuICAgICAgICB0aGlzLmNvbXBhcmlzb25zKCgpID0+IGFjdHVhbFZhbHVlID4gZXhwZWN0ZWRWYWx1ZSwgbWVzc2FnZSwgXCJhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgaXMgbGVzcyB0aGFuIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgY29tcGFyaXNvbnMoZnVuYzogYW55LCBtZXNzYWdlOiBzdHJpbmcsIGFjdHVhbEV4cGVjdGVkOiBzdHJpbmc9XCJcIikge1xuICAgICAgICBpZiAoZnVuYygpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBgc3VjY2Vzc2Z1bCwgJHthY3R1YWxFeHBlY3RlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBgZmFpbGVkLCAke2FjdHVhbEV4cGVjdGVkfWApO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIHByaXZhdGUgZnVsbE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfTogJHttZXNzYWdlfSBgO1xuICAgIH1cbn1cbiJdfQ==