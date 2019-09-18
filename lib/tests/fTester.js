"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FTester = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FTester =
/*#__PURE__*/
function () {
  function FTester() {
    _classCallCheck(this, FTester);
  }

  _createClass(FTester, null, [{
    key: "msg",
    value: function msg(message) {
      this.message = ", " + message;
      return this;
    }
  }, {
    key: "is",
    value: function is(actual) {
      this.actual = actual;
      return this;
    }
  }, {
    key: "equalTo",
    value: function equalTo(expected) {
      var operator = "equal to";
      if (this.actual !== expected) operator = "not " + operator;
      console.log("".concat(this.className, ": actual(").concat(this.actual, ") ").concat(operator, " expected(").concat(expected, ")").concat(this.message));
    }
  }, {
    key: "existing",
    value: function existing() {
      var operator = "exist";

      if (this.actual) {
        console.log("".concat(this.className, " ").concat(operator, "s"));
      } else {
        console.log("".concat(this.className, " doesn't ").concat(operator).concat(this.message));
      }
    }
  }, {
    key: "throwing",
    value: function throwing(func) {
      var operator = "thrown an error";

      try {
        func();
        operator = "not " + operator;
      } catch (e) {
        operator = "".concat(operator, ", ").concat(e);
      }

      console.log("".concat(this.className, " has ").concat(operator));
    }
  }]);

  return FTester;
}();

exports.FTester = FTester;

_defineProperty(FTester, "className", "");

_defineProperty(FTester, "message", "");

_defineProperty(FTester, "actual", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9mVGVzdGVyLnRzIl0sIm5hbWVzIjpbIkZUZXN0ZXIiLCJtZXNzYWdlIiwiYWN0dWFsIiwiZXhwZWN0ZWQiLCJvcGVyYXRvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJmdW5jIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLE87Ozs7Ozs7Ozt3QkFJRUMsTyxFQUFnQjtBQUN2QixXQUFLQSxPQUFMLEdBQWEsT0FBS0EsT0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDSDs7O3VCQUNTQyxNLEVBQVk7QUFDbEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs0QkFDY0MsUSxFQUFxQjtBQUNoQyxVQUFJQyxRQUFRLEdBQUMsVUFBYjtBQUNBLFVBQUksS0FBS0YsTUFBTCxLQUFjQyxRQUFsQixFQUNJQyxRQUFRLEdBQUMsU0FBU0EsUUFBbEI7QUFDSkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWUsS0FBS0MsU0FBcEIsc0JBQXlDLEtBQUtMLE1BQTlDLGVBQXlERSxRQUF6RCx1QkFBOEVELFFBQTlFLGNBQTBGLEtBQUtGLE9BQS9GO0FBQ0g7OzsrQkFDd0I7QUFDckIsVUFBSUcsUUFBUSxHQUFDLE9BQWI7O0FBQ0EsVUFBSSxLQUFLRixNQUFULEVBQWdCO0FBQ1pHLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlLEtBQUtDLFNBQXBCLGNBQWlDSCxRQUFqQztBQUNILE9BRkQsTUFFTztBQUNIQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZSxLQUFLQyxTQUFwQixzQkFBeUNILFFBQXpDLFNBQW9ELEtBQUtILE9BQXpEO0FBQ0g7QUFDSjs7OzZCQUNlTyxJLEVBQWlCO0FBQzdCLFVBQUlKLFFBQVEsR0FBRyxpQkFBZjs7QUFDQSxVQUFHO0FBQ0NJLFFBQUFBLElBQUk7QUFDSkosUUFBQUEsUUFBUSxHQUFHLFNBQVNBLFFBQXBCO0FBQ0gsT0FIRCxDQUdFLE9BQU9LLENBQVAsRUFBUztBQUNQTCxRQUFBQSxRQUFRLGFBQU1BLFFBQU4sZUFBbUJLLENBQW5CLENBQVI7QUFDSDs7QUFDREosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWUsS0FBS0MsU0FBcEIsa0JBQXFDSCxRQUFyQztBQUNIOzs7Ozs7OztnQkFuQ1FKLE8sZUFDa0IsRTs7Z0JBRGxCQSxPLGFBRXdCLEU7O2dCQUZ4QkEsTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGVGVzdGVyIHtcbiAgICBzdGF0aWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgc3RhdGljIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYWN0dWFsOiBhbnk7XG4gICAgc3RhdGljIG1zZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLm1lc3NhZ2U9XCIsIFwiK21lc3NhZ2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgaXMoYWN0dWFsOiBhbnkpe1xuICAgICAgICB0aGlzLmFjdHVhbCA9IGFjdHVhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBlcXVhbFRvKGV4cGVjdGVkOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yPVwiZXF1YWwgdG9cIjtcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsIT09ZXhwZWN0ZWQpXG4gICAgICAgICAgICBvcGVyYXRvcj1cIm5vdCBcIiArIG9wZXJhdG9yO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsYXNzTmFtZX06IGFjdHVhbCgke3RoaXMuYWN0dWFsfSkgJHtvcGVyYXRvcn0gZXhwZWN0ZWQoJHtleHBlY3RlZH0pJHt0aGlzLm1lc3NhZ2V9YClcbiAgICB9XG4gICAgc3RhdGljIGV4aXN0aW5nKCkgOiB2b2lkIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yPVwiZXhpc3RcIjtcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xhc3NOYW1lfSAke29wZXJhdG9yfXNgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xhc3NOYW1lfSBkb2Vzbid0ICR7b3BlcmF0b3J9JHt0aGlzLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHRocm93aW5nKGZ1bmM6IGFueSk6IHZvaWQge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSBcInRocm93biBhbiBlcnJvclwiO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBmdW5jKCk7XG4gICAgICAgICAgICBvcGVyYXRvciA9IFwibm90IFwiICsgb3BlcmF0b3I7XG4gICAgICAgIH0gY2F0Y2ggKGUpeyBcbiAgICAgICAgICAgIG9wZXJhdG9yID0gYCR7b3BlcmF0b3J9LCAke2V9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsYXNzTmFtZX0gaGFzICR7b3BlcmF0b3J9YCk7XG4gICAgfVxufSJdfQ==