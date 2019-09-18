"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edge = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Edge =
/*#__PURE__*/
function () {
  function Edge(v, w, weight) {
    _classCallCheck(this, Edge);

    _defineProperty(this, "v", void 0);

    _defineProperty(this, "w", void 0);

    _defineProperty(this, "weight", void 0);

    this.v = v;
    this.w = w;
    this.weight = weight;
  }

  _createClass(Edge, [{
    key: "getWeight",
    value: function getWeight() {
      return this.weight;
    }
  }, {
    key: "either",
    value: function either() {
      return this.w;
    }
  }, {
    key: "other",
    value: function other(vertex) {
      if (vertex === this.v) return this.w;else if (vertex === this.w) return this.v;else throw new Error("No other vertex");
    }
  }, {
    key: "compareTo",
    value: function compareTo(that) {
      if (this.weight < that.getWeight()) return -1;
      if (this.weight > that.getWeight()) return 1;else return 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.v, "-").concat(this.w, " ").concat(this.weight);
    }
  }]);

  return Edge;
}();

exports.Edge = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9lZGdlLnRzIl0sIm5hbWVzIjpbIkVkZ2UiLCJ2IiwidyIsIndlaWdodCIsInZlcnRleCIsIkVycm9yIiwidGhhdCIsImdldFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEk7OztBQUlULGdCQUFZQyxDQUFaLEVBQXVCQyxDQUF2QixFQUFrQ0MsTUFBbEMsRUFBaUQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDN0MsU0FBS0YsQ0FBTCxHQUFPQSxDQUFQO0FBQ0EsU0FBS0MsQ0FBTCxHQUFPQSxDQUFQO0FBQ0EsU0FBS0MsTUFBTCxHQUFZQSxNQUFaO0FBQ0g7Ozs7Z0NBQ2lCO0FBQ2QsYUFBTyxLQUFLQSxNQUFaO0FBQ0g7Ozs2QkFDYztBQUNYLGFBQU8sS0FBS0QsQ0FBWjtBQUNIOzs7MEJBQ1lFLE0sRUFBZTtBQUN4QixVQUFJQSxNQUFNLEtBQUcsS0FBS0gsQ0FBbEIsRUFBcUIsT0FBTyxLQUFLQyxDQUFaLENBQXJCLEtBQ0ssSUFBSUUsTUFBTSxLQUFHLEtBQUtGLENBQWxCLEVBQXFCLE9BQU8sS0FBS0QsQ0FBWixDQUFyQixLQUNBLE1BQU0sSUFBSUksS0FBSixDQUFVLGlCQUFWLENBQU47QUFDUjs7OzhCQUNTQyxJLEVBQVk7QUFDbEIsVUFBSSxLQUFLSCxNQUFMLEdBQVlHLElBQUksQ0FBQ0MsU0FBTCxFQUFoQixFQUFrQyxPQUFPLENBQUMsQ0FBUjtBQUNsQyxVQUFJLEtBQUtKLE1BQUwsR0FBWUcsSUFBSSxDQUFDQyxTQUFMLEVBQWhCLEVBQWtDLE9BQU8sQ0FBUCxDQUFsQyxLQUNLLE9BQU8sQ0FBUDtBQUNSOzs7K0JBQ1U7QUFDUCx1QkFBVSxLQUFLTixDQUFmLGNBQW9CLEtBQUtDLENBQXpCLGNBQThCLEtBQUtDLE1BQW5DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRWRnZSB7XG4gICAgcHJpdmF0ZSB2OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB3OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB3ZWlnaHQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih2OiBzdHJpbmcsIHc6IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpe1xuICAgICAgICB0aGlzLnY9djtcbiAgICAgICAgdGhpcy53PXc7XG4gICAgICAgIHRoaXMud2VpZ2h0PXdlaWdodDtcbiAgICB9XG4gICAgcHVibGljIGdldFdlaWdodCgpe1xuICAgICAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG4gICAgfVxuICAgIHB1YmxpYyBlaXRoZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudztcbiAgICB9XG4gICAgcHVibGljIG90aGVyKHZlcnRleDogc3RyaW5nKXtcbiAgICAgICAgaWYgKHZlcnRleD09PXRoaXMudikgcmV0dXJuIHRoaXMudztcbiAgICAgICAgZWxzZSBpZiAodmVydGV4PT09dGhpcy53KSByZXR1cm4gdGhpcy52O1xuICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihcIk5vIG90aGVyIHZlcnRleFwiKTtcbiAgICB9XG4gICAgY29tcGFyZVRvKHRoYXQ6IEVkZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMud2VpZ2h0PHRoYXQuZ2V0V2VpZ2h0KCkpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKHRoaXMud2VpZ2h0PnRoYXQuZ2V0V2VpZ2h0KCkpIHJldHVybiAxO1xuICAgICAgICBlbHNlIHJldHVybiAwO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudn0tJHt0aGlzLnd9ICR7dGhpcy53ZWlnaHR9YDtcbiAgICB9XG59Il19