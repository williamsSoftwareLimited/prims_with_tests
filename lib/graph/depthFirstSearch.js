"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DepthFirstSearch = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DepthFirstSearch =
/*#__PURE__*/
function () {
  function DepthFirstSearch(g, startVertex) {
    _classCallCheck(this, DepthFirstSearch);

    _defineProperty(this, "_marked", void 0);

    _defineProperty(this, "_count", void 0);

    this._marked = [];
    this._count = 0;
    this.dfs(g, startVertex);
  }

  _createClass(DepthFirstSearch, [{
    key: "dfs",
    value: function dfs(g, v) {
      this._marked[v] = true;
      this._count++;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = g.adjacentVertices(v)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var vertex = _step.value;

          if (!this.marked(vertex)) {
            console.log("unmarked: " + vertex + ", call dfs this vertex");
            this.dfs(g, vertex);
          } else {
            console.log("marked: " + vertex);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "marked",
    value: function marked(w) {
      return this._marked[w];
    }
  }, {
    key: "count",
    value: function count() {
      return this._count;
    }
  }]);

  return DepthFirstSearch;
}();

exports.DepthFirstSearch = DepthFirstSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9kZXB0aEZpcnN0U2VhcmNoLnRzIl0sIm5hbWVzIjpbIkRlcHRoRmlyc3RTZWFyY2giLCJnIiwic3RhcnRWZXJ0ZXgiLCJfbWFya2VkIiwiX2NvdW50IiwiZGZzIiwidiIsImFkamFjZW50VmVydGljZXMiLCJ2ZXJ0ZXgiLCJtYXJrZWQiLCJjb25zb2xlIiwibG9nIiwidyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLGdCOzs7QUFHVCw0QkFBWUMsQ0FBWixFQUFzQkMsV0FBdEIsRUFBMEM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdEMsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLEdBQUwsQ0FBU0osQ0FBVCxFQUFZQyxXQUFaO0FBQ0g7Ozs7d0JBQ1dELEMsRUFBVUssQyxFQUFXO0FBQzdCLFdBQUtILE9BQUwsQ0FBYUcsQ0FBYixJQUFrQixJQUFsQjtBQUNBLFdBQUtGLE1BQUw7QUFGNkI7QUFBQTtBQUFBOztBQUFBO0FBRzdCLDZCQUFtQkgsQ0FBQyxDQUFDTSxnQkFBRixDQUFtQkQsQ0FBbkIsQ0FBbkIsOEhBQXlDO0FBQUEsY0FBaENFLE1BQWdDOztBQUNyQyxjQUFJLENBQUMsS0FBS0MsTUFBTCxDQUFZRCxNQUFaLENBQUwsRUFBMEI7QUFDdEJFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVILE1BQWYsR0FBd0Isd0JBQXBDO0FBQ0EsaUJBQUtILEdBQUwsQ0FBU0osQ0FBVCxFQUFZTyxNQUFaO0FBQ0gsV0FIRCxNQUdPO0FBQ0hFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFILE1BQXpCO0FBQ0g7QUFDSjtBQVY0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV2hDOzs7MkJBQ2FJLEMsRUFBb0I7QUFDOUIsYUFBTyxLQUFLVCxPQUFMLENBQWFTLENBQWIsQ0FBUDtBQUNIOzs7NEJBQ3NCO0FBQ25CLGFBQU8sS0FBS1IsTUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwiLi9ncmFwaFwiO1xuXG5leHBvcnQgY2xhc3MgRGVwdGhGaXJzdFNlYXJjaCB7XG4gICAgcHJpdmF0ZSBfbWFya2VkOiBhbnk7XG4gICAgcHJpdmF0ZSBfY291bnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihnOiBHcmFwaCwgc3RhcnRWZXJ0ZXg6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX21hcmtlZCA9IFtdO1xuICAgICAgICB0aGlzLl9jb3VudD0wO1xuICAgICAgICB0aGlzLmRmcyhnLCBzdGFydFZlcnRleCk7XG4gICAgfVxuICAgIHByaXZhdGUgZGZzKGc6IEdyYXBoLCB2OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFya2VkW3ZdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY291bnQrKztcbiAgICAgICAgZm9yIChsZXQgdmVydGV4IG9mIGcuYWRqYWNlbnRWZXJ0aWNlcyh2KSl7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFya2VkKHZlcnRleCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVubWFya2VkOiBcIiArIHZlcnRleCArIFwiLCBjYWxsIGRmcyB0aGlzIHZlcnRleFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRmcyhnLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmtlZDogXCIgKyB2ZXJ0ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBtYXJrZWQodzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZWRbd107XG4gICAgfVxuICAgIHB1YmxpYyBjb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxufSJdfQ==