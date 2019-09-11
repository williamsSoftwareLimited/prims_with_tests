"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadthFirstSearch = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BreadthFirstSearch =
/*#__PURE__*/
function () {
  function BreadthFirstSearch(g, startVertex) {
    _classCallCheck(this, BreadthFirstSearch);

    _defineProperty(this, "marked", void 0);

    this.marked = [];
  }

  _createClass(BreadthFirstSearch, [{
    key: "bfs",
    value: function bfs(g, v) {
      this.marked[v] = true;
    }
  }]);

  return BreadthFirstSearch;
}();

exports.BreadthFirstSearch = BreadthFirstSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9icmVhZHRoRmlyc3RTZWFyY2gudHMiXSwibmFtZXMiOlsiQnJlYWR0aEZpcnN0U2VhcmNoIiwiZyIsInN0YXJ0VmVydGV4IiwibWFya2VkIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLGtCOzs7QUFFVCw4QkFBWUMsQ0FBWixFQUFzQkMsV0FBdEIsRUFBMEM7QUFBQTs7QUFBQTs7QUFDdEMsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozt3QkFDV0YsQyxFQUFVRyxDLEVBQVc7QUFDN0IsV0FBS0QsTUFBTCxDQUFZQyxDQUFaLElBQWlCLElBQWpCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuL2dyYXBoXCI7XG5cbmV4cG9ydCBjbGFzcyBCcmVhZHRoRmlyc3RTZWFyY2gge1xuICAgIG1hcmtlZDogYW55O1xuICAgIGNvbnN0cnVjdG9yKGc6IEdyYXBoLCBzdGFydFZlcnRleDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSBbXTtcbiAgICB9XG4gICAgcHJpdmF0ZSBiZnMoZzogR3JhcGgsIHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1hcmtlZFt2XSA9IHRydWU7XG4gICAgfVxufSJdfQ==