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

      if (func) {
        console.log(this.fullMessage(message) + "successful, ".concat(actualExpected));
        return true;
      } else {
        console.log(this.fullMessage(message) + "failed, ".concat(actualExpected));
        return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy90ZXN0ZXIudHMiXSwibmFtZXMiOlsiVGVzdGVyIiwiY2xhc3NOYW1lIiwiYW5PYmplY3QiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImZ1bGxNZXNzYWdlIiwiYWN0dWFsU3RyaW5nIiwiZXhwZWN0ZWRTdHJpbmciLCJjb21wYXJpc29ucyIsImFjdHVhbFZhbHVlIiwiZXhwZWN0ZWRWYWx1ZSIsImxlbmd0aCIsImkiLCJleHBlY3RlZDJCVHJ1ZSIsImV4cGVjdGVkMkJGYWxzZSIsImZ1bmMiLCJhY3R1YWxFeHBlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLE07OztBQUVULGtCQUFZQyxTQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzFCLFNBQUtBLFNBQUwsR0FBZUEsU0FBZjtBQUNIOzs7OzJCQUNPQyxRLEVBQXVDO0FBQUEsVUFBckJDLE9BQXFCLHVFQUFILEVBQUc7O0FBQzNDLFVBQUlELFFBQUosRUFBYTtBQUNURSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxXQUFMLENBQWlCSCxPQUFqQixJQUE0QixzQkFBeEM7QUFDSCxPQUZELE1BRU87QUFDSEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIsMEJBQXhDO0FBQ0g7QUFDSjs7O2tDQUNhSSxZLEVBQXNCQyxjLEVBQThDO0FBQUEsVUFBdEJMLE9BQXNCLHVFQUFKLEVBQUk7QUFDOUUsV0FBS00sV0FBTCxDQUFpQjtBQUFBLGVBQU1GLFlBQVksS0FBS0MsY0FBdkI7QUFBQSxPQUFqQixFQUF3REwsT0FBeEQsRUFBaUUsWUFBVUksWUFBVixHQUF1QixtQkFBdkIsR0FBMkNDLGNBQTVHO0FBQ0g7OztpQ0FDYUUsVyxFQUFrQkMsYSxFQUEwQztBQUFBLFVBQXRCUixPQUFzQix1RUFBSixFQUFJOztBQUN0RSxVQUFJTyxXQUFXLENBQUNFLE1BQVosS0FBdUJELGFBQWEsQ0FBQ0MsTUFBekMsRUFBZ0Q7QUFDNUNSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFdBQUwsQ0FBaUJILE9BQWpCLHdFQUF5Rk8sV0FBVyxDQUFDRSxNQUFyRyxzQ0FBdUlELGFBQWEsQ0FBQ0MsTUFBckosQ0FBWjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNILFdBQVcsQ0FBQ0UsTUFBM0IsRUFBbUNDLENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsWUFBSUgsV0FBVyxDQUFDRyxDQUFELENBQVgsS0FBbUJGLGFBQWEsQ0FBQ0UsQ0FBRCxDQUFwQyxFQUF3QztBQUNwQ1QsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIscUJBQTVCLEdBQWtETyxXQUFXLENBQUNHLENBQUQsQ0FBN0QsR0FBaUUsbUJBQWpFLEdBQXFGRixhQUFhLENBQUNFLENBQUQsQ0FBOUc7QUFDSCxTQUZELE1BRU87QUFDSFQsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsSUFBNEIsaUJBQTVCLEdBQThDTyxXQUFXLENBQUNHLENBQUQsQ0FBekQsR0FBNkQsbUJBQTdELEdBQWlGRixhQUFhLENBQUNFLENBQUQsQ0FBMUc7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7OzJCQUNNQyxjLEVBQXlCWCxPLEVBQWlCO0FBQzdDLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNSyxjQUFjLEtBQUcsSUFBdkI7QUFBQSxPQUFqQixFQUE4Q1gsT0FBOUMsRUFBdUQsU0FBdkQ7QUFDSDs7OzRCQUNPWSxlLEVBQTBCWixPLEVBQWlCO0FBQy9DLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNTSxlQUFlLEtBQUcsS0FBeEI7QUFBQSxPQUFqQixFQUFnRFosT0FBaEQsRUFBeUQsVUFBekQ7QUFDSDs7OzRCQUNRTyxXLEVBQXFCQyxhLEVBQTZDO0FBQUEsVUFBdEJSLE9BQXNCLHVFQUFKLEVBQUk7QUFDdkUsV0FBS00sV0FBTCxDQUFpQjtBQUFBLGVBQU1DLFdBQVcsS0FBS0MsYUFBdEI7QUFBQSxPQUFqQixFQUFzRFIsT0FBdEQsRUFBK0QsWUFBVU8sV0FBVixHQUFzQixtQkFBdEIsR0FBMENDLGFBQXpHO0FBQ0g7Ozs2QkFDUUQsVyxFQUFxQkMsYSxFQUEyQztBQUFBLFVBQXBCUixPQUFvQix1RUFBSixFQUFJO0FBQ3JFLFdBQUtNLFdBQUwsQ0FBaUI7QUFBQSxlQUFNQyxXQUFXLEdBQUdDLGFBQXBCO0FBQUEsT0FBakIsRUFBb0RSLE9BQXBELEVBQTZELFlBQVVPLFdBQVYsR0FBc0IseUJBQXRCLEdBQWdEQyxhQUE3RztBQUNIOzs7NkJBQ1FELFcsRUFBcUJDLGEsRUFBMkM7QUFBQSxVQUFwQlIsT0FBb0IsdUVBQUosRUFBSTtBQUNyRSxXQUFLTSxXQUFMLENBQWlCO0FBQUEsZUFBTUMsV0FBVyxHQUFHQyxhQUFwQjtBQUFBLE9BQWpCLEVBQW9EUixPQUFwRCxFQUE2RCxZQUFVTyxXQUFWLEdBQXNCLHlCQUF0QixHQUFnREMsYUFBN0c7QUFFSDs7O2dDQUNtQkssSSxFQUFXYixPLEVBQTRDO0FBQUEsVUFBM0JjLGNBQTJCLHVFQUFKLEVBQUk7O0FBQ3ZFLFVBQUlELElBQUosRUFBUztBQUNMWixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxXQUFMLENBQWlCSCxPQUFqQiwwQkFBMkNjLGNBQTNDLENBQVo7QUFDQSxlQUFPLElBQVA7QUFDSCxPQUhELE1BR087QUFDSGIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkgsT0FBakIsc0JBQXVDYyxjQUF2QyxDQUFaO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7QUFDSjs7O2dDQUNtQmQsTyxFQUF5QjtBQUN6Qyx1QkFBVSxLQUFLRixTQUFmLGVBQTZCRSxPQUE3QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRlc3RlciB7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmNsYXNzTmFtZT1jbGFzc05hbWU7XG4gICAgfVxuICAgIGV4aXN0cyAoYW5PYmplY3Q6IG9iamVjdCwgbWVzc2FnZTogc3RyaW5nID0gXCJcIil7XG4gICAgICAgIGlmIChhbk9iamVjdCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxNZXNzYWdlKG1lc3NhZ2UpICsgXCJzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBcImZhaWxlZCAtIGNvdWxkbid0IGNyZWF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wYXJlU3RyaW5nKGFjdHVhbFN0cmluZzogc3RyaW5nLCBleHBlY3RlZFN0cmluZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMuY29tcGFyaXNvbnMoKCkgPT4gYWN0dWFsU3RyaW5nID09PSBleHBlY3RlZFN0cmluZywgbWVzc2FnZSwgXCJhY3R1YWw9XCIrYWN0dWFsU3RyaW5nK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFN0cmluZyk7XG4gICAgfVxuICAgIGNvbXBhcmVBcnJheSAoYWN0dWFsVmFsdWU6IGFueSwgZXhwZWN0ZWRWYWx1ZTogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGlmIChhY3R1YWxWYWx1ZS5sZW5ndGggIT09IGV4cGVjdGVkVmFsdWUubGVuZ3RoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBgZmFpbGVkLCB0aGUgYXJyYXlzIGFyZSBub3QgdGhlIHNhbWUgbGVuZ3RoLCBhY3R1YWwgbGVuZ3RoPSR7YWN0dWFsVmFsdWUubGVuZ3RofSBhbmQgdGhlIGV4cGVjdGVkIGxlbmd0aD0ke2V4cGVjdGVkVmFsdWUubGVuZ3RofWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGFjdHVhbFZhbHVlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChhY3R1YWxWYWx1ZVtpXSA9PT0gZXhwZWN0ZWRWYWx1ZVtpXSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mdWxsTWVzc2FnZShtZXNzYWdlKSArIFwic3VjY2Vzc2Z1bCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlW2ldK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mdWxsTWVzc2FnZShtZXNzYWdlKSArIFwiZmFpbGVkLCBhY3R1YWw9XCIrYWN0dWFsVmFsdWVbaV0rXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG4gICAgaXNUcnVlKGV4cGVjdGVkMkJUcnVlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb21wYXJpc29ucygoKSA9PiBleHBlY3RlZDJCVHJ1ZT09PXRydWUsIG1lc3NhZ2UsIFwiaXMgdHJ1ZVwiKTtcbiAgICB9XG4gICAgaXNGYWxzZShleHBlY3RlZDJCRmFsc2U6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbXBhcmlzb25zKCgpID0+IGV4cGVjdGVkMkJGYWxzZT09PWZhbHNlLCBtZXNzYWdlLCBcImlzIGZhbHNlXCIpO1xuICAgIH1cbiAgICBlcXVhbFRvIChhY3R1YWxWYWx1ZTogbnVtYmVyLCBleHBlY3RlZFZhbHVlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpIHsgXG4gICAgICAgIHRoaXMuY29tcGFyaXNvbnMoKCkgPT4gYWN0dWFsVmFsdWUgPT09IGV4cGVjdGVkVmFsdWUsIG1lc3NhZ2UsIFwiYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKVxuICAgIH1cbiAgICBtb3JlVGhhbihhY3R1YWxWYWx1ZTogbnVtYmVyLCBleHBlY3RlZFZhbHVlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZz1cIlwiKSB7ICBcbiAgICAgICAgdGhpcy5jb21wYXJpc29ucygoKSA9PiBhY3R1YWxWYWx1ZSA+IGV4cGVjdGVkVmFsdWUsIG1lc3NhZ2UsIFwiYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGlzIG1vcmUgdGhhbiBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICB9XG4gICAgbGVzc1RoYW4oYWN0dWFsVmFsdWU6IG51bWJlciwgZXhwZWN0ZWRWYWx1ZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmc9XCJcIikge1xuICAgICAgICB0aGlzLmNvbXBhcmlzb25zKCgpID0+IGFjdHVhbFZhbHVlID4gZXhwZWN0ZWRWYWx1ZSwgbWVzc2FnZSwgXCJhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgaXMgbGVzcyB0aGFuIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgY29tcGFyaXNvbnMoZnVuYzogYW55LCBtZXNzYWdlOiBzdHJpbmcsIGFjdHVhbEV4cGVjdGVkOiBzdHJpbmc9XCJcIikge1xuICAgICAgICBpZiAoZnVuYyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxNZXNzYWdlKG1lc3NhZ2UpICsgYHN1Y2Nlc3NmdWwsICR7YWN0dWFsRXhwZWN0ZWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbE1lc3NhZ2UobWVzc2FnZSkgKyBgZmFpbGVkLCAke2FjdHVhbEV4cGVjdGVkfWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIHByaXZhdGUgZnVsbE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfTogJHttZXNzYWdlfSBgO1xuICAgIH1cbn1cbiJdfQ==