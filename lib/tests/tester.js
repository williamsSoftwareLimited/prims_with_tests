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
    key: "compareString",
    value: function compareString(actualString, expectedString) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualString === expectedString) {
        console.log(fullMessage + "successful, actual=" + actualString + " equals expected=" + expectedString);
      } else {
        console.log(fullMessage + "failed, actual=" + actualString + " equals expected=" + expectedString);
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
  }, {
    key: "isTrue",
    value: function isTrue(expected2BTrue, message) {
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (expected2BTrue === true) {
        console.log(fullMessage + "success, is true");
      } else {
        console.log(fullMessage + "failed, is false");
      }
    }
  }, {
    key: "isFalse",
    value: function isFalse(expected2BFalse, message) {
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (expected2BFalse === false) {
        console.log(fullMessage + "success, is false");
      } else {
        console.log(fullMessage + "failed, is true");
      }
    }
  }, {
    key: "equalTo",
    value: function equalTo(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualValue === expectedValue) {
        console.log(fullMessage + "successful, actual=" + actualValue + " equals expected=" + expectedValue);
      } else {
        console.log(fullMessage + "failed, actual=" + actualValue + " equals expected=" + expectedValue);
      }
    }
  }, {
    key: "moreThan",
    value: function moreThan(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualValue > expectedValue) {
        console.log(fullMessage + "successful, actual=" + actualValue + " is more than expected=" + expectedValue);
      } else {
        console.log(fullMessage + "failed, actual=" + actualValue + " is less than expected=" + expectedValue);
      }
    }
  }, {
    key: "lessThan",
    value: function lessThan(actualValue, expectedValue) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fullMessage = "".concat(this.className, ": ").concat(message, " ");

      if (actualValue < expectedValue) {
        console.log(fullMessage + "successful, actual=" + actualValue + " is less than expected=" + expectedValue);
      } else {
        console.log(fullMessage + "failed, actual=" + actualValue + " is more than expected=" + expectedValue);
      }
    }
  }]);

  return Tester;
}();

exports.Tester = Tester;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy90ZXN0ZXIudHMiXSwibmFtZXMiOlsiVGVzdGVyIiwiY2xhc3NOYW1lIiwiYW5PYmplY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsU3RyaW5nIiwiZXhwZWN0ZWRTdHJpbmciLCJtZXNzYWdlIiwiZnVsbE1lc3NhZ2UiLCJhY3R1YWxWYWx1ZSIsImV4cGVjdGVkVmFsdWUiLCJsZW5ndGgiLCJpIiwiZXhwZWN0ZWQyQlRydWUiLCJleHBlY3RlZDJCRmFsc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxNOzs7QUFFVCxrQkFBWUMsU0FBWixFQUE4QjtBQUFBOztBQUFBOztBQUMxQixTQUFLQSxTQUFMLEdBQWVBLFNBQWY7QUFDSDs7OzsyQkFDT0MsUSxFQUFpQjtBQUNyQixVQUFJQSxRQUFKLEVBQWE7QUFDVEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0gsU0FBTCxHQUFpQixzQkFBN0I7QUFDSCxPQUZELE1BRU87QUFDSEUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0gsU0FBTCxHQUFpQiwwQkFBN0I7QUFDSDtBQUNKOzs7a0NBQ2FJLFksRUFBc0JDLGMsRUFBOEM7QUFBQSxVQUF0QkMsT0FBc0IsdUVBQUosRUFBSTtBQUM5RSxVQUFJQyxXQUFtQixhQUFNLEtBQUtQLFNBQVgsZUFBeUJNLE9BQXpCLE1BQXZCOztBQUNBLFVBQUlGLFlBQVksS0FBS0MsY0FBckIsRUFBb0M7QUFDaENILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcscUJBQWQsR0FBb0NILFlBQXBDLEdBQWlELG1CQUFqRCxHQUFxRUMsY0FBakY7QUFDSCxPQUZELE1BRU87QUFDSEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxpQkFBZCxHQUFnQ0gsWUFBaEMsR0FBNkMsbUJBQTdDLEdBQWlFQyxjQUE3RTtBQUNIO0FBQ0o7OztpQ0FDYUcsVyxFQUFrQkMsYSxFQUEwQztBQUFBLFVBQXRCSCxPQUFzQix1RUFBSixFQUFJO0FBQ3RFLFVBQUlDLFdBQW1CLGFBQU0sS0FBS1AsU0FBWCxlQUF5Qk0sT0FBekIsTUFBdkI7O0FBQ0EsVUFBSUUsV0FBVyxDQUFDRSxNQUFaLEtBQXVCRCxhQUFhLENBQUNDLE1BQXpDLEVBQWdEO0FBQzVDUixRQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUksV0FBZix3RUFBd0ZDLFdBQVcsQ0FBQ0UsTUFBcEcsc0NBQXNJRCxhQUFhLENBQUNDLE1BQXBKO0FBQ0E7QUFDSDs7QUFDRCxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsV0FBVyxDQUFDRSxNQUEzQixFQUFtQ0MsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxZQUFJSCxXQUFXLENBQUNHLENBQUQsQ0FBWCxLQUFtQkYsYUFBYSxDQUFDRSxDQUFELENBQXBDLEVBQXdDO0FBQ3BDVCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksV0FBVyxHQUFHLHFCQUFkLEdBQW9DQyxXQUFXLENBQUNHLENBQUQsQ0FBL0MsR0FBbUQsbUJBQW5ELEdBQXVFRixhQUFhLENBQUNFLENBQUQsQ0FBaEc7QUFDSCxTQUZELE1BRU87QUFDSFQsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxpQkFBZCxHQUFnQ0MsV0FBVyxDQUFDRyxDQUFELENBQTNDLEdBQStDLG1CQUEvQyxHQUFtRUYsYUFBYSxDQUFDRSxDQUFELENBQTVGO0FBQ0E7QUFDSDtBQUNKO0FBRUo7OzsyQkFDTUMsYyxFQUF5Qk4sTyxFQUFpQjtBQUM3QyxVQUFJQyxXQUFtQixhQUFNLEtBQUtQLFNBQVgsZUFBeUJNLE9BQXpCLE1BQXZCOztBQUNBLFVBQUlNLGNBQWMsS0FBRyxJQUFyQixFQUEwQjtBQUN0QlYsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxrQkFBMUI7QUFDSCxPQUZELE1BRU87QUFDSEwsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxrQkFBMUI7QUFDSDtBQUNKOzs7NEJBQ09NLGUsRUFBMEJQLE8sRUFBaUI7QUFDL0MsVUFBSUMsV0FBbUIsYUFBTSxLQUFLUCxTQUFYLGVBQXlCTSxPQUF6QixNQUF2Qjs7QUFDQSxVQUFJTyxlQUFlLEtBQUcsS0FBdEIsRUFBNEI7QUFDeEJYLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcsbUJBQTFCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hMLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcsaUJBQTFCO0FBQ0g7QUFDSjs7OzRCQUNRQyxXLEVBQXFCQyxhLEVBQTZDO0FBQUEsVUFBdEJILE9BQXNCLHVFQUFKLEVBQUk7QUFDdkUsVUFBSUMsV0FBbUIsYUFBTSxLQUFLUCxTQUFYLGVBQXlCTSxPQUF6QixNQUF2Qjs7QUFDQSxVQUFJRSxXQUFXLEtBQUtDLGFBQXBCLEVBQWtDO0FBQzlCUCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksV0FBVyxHQUFHLHFCQUFkLEdBQW9DQyxXQUFwQyxHQUFnRCxtQkFBaEQsR0FBb0VDLGFBQWhGO0FBQ0gsT0FGRCxNQUVPO0FBQ0hQLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcsaUJBQWQsR0FBZ0NDLFdBQWhDLEdBQTRDLG1CQUE1QyxHQUFnRUMsYUFBNUU7QUFDSDtBQUNKOzs7NkJBQ1FELFcsRUFBcUJDLGEsRUFBMkM7QUFBQSxVQUFwQkgsT0FBb0IsdUVBQUosRUFBSTtBQUNyRSxVQUFJQyxXQUFtQixhQUFNLEtBQUtQLFNBQVgsZUFBeUJNLE9BQXpCLE1BQXZCOztBQUNBLFVBQUlFLFdBQVcsR0FBR0MsYUFBbEIsRUFBZ0M7QUFDNUJQLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFXLEdBQUcscUJBQWQsR0FBb0NDLFdBQXBDLEdBQWdELHlCQUFoRCxHQUEwRUMsYUFBdEY7QUFDSCxPQUZELE1BRU87QUFDSFAsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxpQkFBZCxHQUFnQ0MsV0FBaEMsR0FBNEMseUJBQTVDLEdBQXNFQyxhQUFsRjtBQUNIO0FBQ0o7Ozs2QkFDUUQsVyxFQUFxQkMsYSxFQUEyQztBQUFBLFVBQXBCSCxPQUFvQix1RUFBSixFQUFJO0FBQ3JFLFVBQUlDLFdBQW1CLGFBQU0sS0FBS1AsU0FBWCxlQUF5Qk0sT0FBekIsTUFBdkI7O0FBQ0EsVUFBSUUsV0FBVyxHQUFHQyxhQUFsQixFQUFnQztBQUM1QlAsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFdBQVcsR0FBRyxxQkFBZCxHQUFvQ0MsV0FBcEMsR0FBZ0QseUJBQWhELEdBQTBFQyxhQUF0RjtBQUNILE9BRkQsTUFFTztBQUNIUCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksV0FBVyxHQUFHLGlCQUFkLEdBQWdDQyxXQUFoQyxHQUE0Qyx5QkFBNUMsR0FBc0VDLGFBQWxGO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUZXN0ZXIge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jbGFzc05hbWU9Y2xhc3NOYW1lO1xuICAgIH1cbiAgICBleGlzdHMgKGFuT2JqZWN0OiBvYmplY3Qpe1xuICAgICAgICBpZiAoYW5PYmplY3Qpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGFzc05hbWUgKyBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGFzc05hbWUgKyBcImZhaWxlZCAtIGNvdWxkbid0IGNyZWF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wYXJlU3RyaW5nKGFjdHVhbFN0cmluZzogc3RyaW5nLCBleHBlY3RlZFN0cmluZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGxldCBmdWxsTWVzc2FnZTogc3RyaW5nID0gYCR7dGhpcy5jbGFzc05hbWV9OiAke21lc3NhZ2V9IGA7XG4gICAgICAgIGlmIChhY3R1YWxTdHJpbmcgPT09IGV4cGVjdGVkU3RyaW5nKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJzdWNjZXNzZnVsLCBhY3R1YWw9XCIrYWN0dWFsU3RyaW5nK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsTWVzc2FnZSArIFwiZmFpbGVkLCBhY3R1YWw9XCIrYWN0dWFsU3RyaW5nK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFN0cmluZyk7XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBjb21wYXJlQXJyYXkgKGFjdHVhbFZhbHVlOiBhbnksIGV4cGVjdGVkVmFsdWU6IGFueSwgbWVzc2FnZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgICBsZXQgZnVsbE1lc3NhZ2U6IHN0cmluZyA9IGAke3RoaXMuY2xhc3NOYW1lfTogJHttZXNzYWdlfSBgO1xuICAgICAgICBpZiAoYWN0dWFsVmFsdWUubGVuZ3RoICE9PSBleHBlY3RlZFZhbHVlLmxlbmd0aCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtmdWxsTWVzc2FnZX0gZmFpbGVkLCB0aGUgYXJyYXlzIGFyZSBub3QgdGhlIHNhbWUgbGVuZ3RoLCBhY3R1YWwgbGVuZ3RoPSR7YWN0dWFsVmFsdWUubGVuZ3RofSBhbmQgdGhlIGV4cGVjdGVkIGxlbmd0aD0ke2V4cGVjdGVkVmFsdWUubGVuZ3RofWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGFjdHVhbFZhbHVlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChhY3R1YWxWYWx1ZVtpXSA9PT0gZXhwZWN0ZWRWYWx1ZVtpXSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcInN1Y2Nlc3NmdWwsIGFjdHVhbD1cIithY3R1YWxWYWx1ZVtpXStcIiBlcXVhbHMgZXhwZWN0ZWQ9XCIrZXhwZWN0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJmYWlsZWQsIGFjdHVhbD1cIithY3R1YWxWYWx1ZVtpXStcIiBlcXVhbHMgZXhwZWN0ZWQ9XCIrZXhwZWN0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGlzVHJ1ZShleHBlY3RlZDJCVHJ1ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmdWxsTWVzc2FnZTogc3RyaW5nID0gYCR7dGhpcy5jbGFzc05hbWV9OiAke21lc3NhZ2V9IGA7XG4gICAgICAgIGlmIChleHBlY3RlZDJCVHJ1ZT09PXRydWUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcInN1Y2Nlc3MsIGlzIHRydWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsTWVzc2FnZSArIFwiZmFpbGVkLCBpcyBmYWxzZVwiKTtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGlzRmFsc2UoZXhwZWN0ZWQyQkZhbHNlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZ1bGxNZXNzYWdlOiBzdHJpbmcgPSBgJHt0aGlzLmNsYXNzTmFtZX06ICR7bWVzc2FnZX0gYDtcbiAgICAgICAgaWYgKGV4cGVjdGVkMkJGYWxzZT09PWZhbHNlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJzdWNjZXNzLCBpcyBmYWxzZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJmYWlsZWQsIGlzIHRydWVcIik7XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBlcXVhbFRvIChhY3R1YWxWYWx1ZTogbnVtYmVyLCBleHBlY3RlZFZhbHVlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgbGV0IGZ1bGxNZXNzYWdlOiBzdHJpbmcgPSBgJHt0aGlzLmNsYXNzTmFtZX06ICR7bWVzc2FnZX0gYDtcbiAgICAgICAgaWYgKGFjdHVhbFZhbHVlID09PSBleHBlY3RlZFZhbHVlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJzdWNjZXNzZnVsLCBhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgZXF1YWxzIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcImZhaWxlZCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGVxdWFscyBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIG1vcmVUaGFuKGFjdHVhbFZhbHVlOiBudW1iZXIsIGV4cGVjdGVkVmFsdWU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nPVwiXCIpIHtcbiAgICAgICAgbGV0IGZ1bGxNZXNzYWdlOiBzdHJpbmcgPSBgJHt0aGlzLmNsYXNzTmFtZX06ICR7bWVzc2FnZX0gYDtcbiAgICAgICAgaWYgKGFjdHVhbFZhbHVlID4gZXhwZWN0ZWRWYWx1ZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsTWVzc2FnZSArIFwic3VjY2Vzc2Z1bCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGlzIG1vcmUgdGhhbiBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJmYWlsZWQsIGFjdHVhbD1cIithY3R1YWxWYWx1ZStcIiBpcyBsZXNzIHRoYW4gZXhwZWN0ZWQ9XCIrZXhwZWN0ZWRWYWx1ZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgbGVzc1RoYW4oYWN0dWFsVmFsdWU6IG51bWJlciwgZXhwZWN0ZWRWYWx1ZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmc9XCJcIikge1xuICAgICAgICBsZXQgZnVsbE1lc3NhZ2U6IHN0cmluZyA9IGAke3RoaXMuY2xhc3NOYW1lfTogJHttZXNzYWdlfSBgO1xuICAgICAgICBpZiAoYWN0dWFsVmFsdWUgPCBleHBlY3RlZFZhbHVlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlICsgXCJzdWNjZXNzZnVsLCBhY3R1YWw9XCIrYWN0dWFsVmFsdWUrXCIgaXMgbGVzcyB0aGFuIGV4cGVjdGVkPVwiK2V4cGVjdGVkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UgKyBcImZhaWxlZCwgYWN0dWFsPVwiK2FjdHVhbFZhbHVlK1wiIGlzIG1vcmUgdGhhbiBleHBlY3RlZD1cIitleHBlY3RlZFZhbHVlKTtcbiAgICAgICAgfSAgIFxuICAgIH1cbn1cbiJdfQ==