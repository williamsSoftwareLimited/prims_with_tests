"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FTester = void 0;

var _tester = require("./tester");

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
    key: "is",
    value: function is(actual) {
      this.tester.className = this.className;
      this.actual = actual;
      return this;
    }
  }, {
    key: "msg",
    value: function msg(_msg) {
      this.message = _msg;
      return this;
    }
  }, {
    key: "equalTo",
    value: function equalTo(expected) {
      this.tester.equalTo(this.actual, expected, this.message);
    }
  }]);

  return FTester;
}();

exports.FTester = FTester;

_defineProperty(FTester, "className", "");

_defineProperty(FTester, "message", "");

_defineProperty(FTester, "tester", new _tester.Tester(""));

_defineProperty(FTester, "actual", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9mVGVzdGVyLnRzIl0sIm5hbWVzIjpbIkZUZXN0ZXIiLCJhY3R1YWwiLCJ0ZXN0ZXIiLCJjbGFzc05hbWUiLCJtc2ciLCJtZXNzYWdlIiwiZXhwZWN0ZWQiLCJlcXVhbFRvIiwiVGVzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7SUFFYUEsTzs7Ozs7Ozs7O3VCQUtDQyxNLEVBQVk7QUFDbEIsV0FBS0MsTUFBTCxDQUFZQyxTQUFaLEdBQXNCLEtBQUtBLFNBQTNCO0FBQ0EsV0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozt3QkFDVUcsSSxFQUFZO0FBQ25CLFdBQUtDLE9BQUwsR0FBYUQsSUFBYjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7NEJBQ2NFLFEsRUFBc0I7QUFDakMsV0FBS0osTUFBTCxDQUFZSyxPQUFaLENBQW9CLEtBQUtOLE1BQXpCLEVBQWlDSyxRQUFqQyxFQUEyQyxLQUFLRCxPQUFoRDtBQUNIOzs7Ozs7OztnQkFoQlFMLE8sZUFDa0IsRTs7Z0JBRGxCQSxPLGFBRWdCLEU7O2dCQUZoQkEsTyxZQUd1QixJQUFJUSxjQUFKLENBQVcsRUFBWCxDOztnQkFIdkJSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0ZXIgfSBmcm9tIFwiLi90ZXN0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEZUZXN0ZXIge1xuICAgIHN0YXRpYyBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdGVzdGVyOiBUZXN0ZXIgPSBuZXcgVGVzdGVyKFwiXCIpO1xuICAgIHByaXZhdGUgc3RhdGljIGFjdHVhbDogYW55O1xuICAgIHN0YXRpYyBpcyhhY3R1YWw6IGFueSl7XG4gICAgICAgIHRoaXMudGVzdGVyLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5hY3R1YWwgPSBhY3R1YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgbXNnKG1zZzogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlPW1zZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBlcXVhbFRvKGV4cGVjdGVkOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudGVzdGVyLmVxdWFsVG8odGhpcy5hY3R1YWwsIGV4cGVjdGVkLCB0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbn0iXX0=