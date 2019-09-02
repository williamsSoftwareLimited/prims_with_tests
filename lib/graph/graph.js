"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Graph = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Graph =
/*#__PURE__*/
function () {
  function Graph() {
    _classCallCheck(this, Graph);

    _defineProperty(this, "numberOfVertices", 0);

    _defineProperty(this, "numberOfEdges", 0);

    _defineProperty(this, "adjacencyLists", []);
  }

  _createClass(Graph, [{
    key: "constructGraph",
    value: function constructGraph(graphJson) {//todo:
    }
  }, {
    key: "addEdge",
    value: function addEdge(v, w) {
      if (!this.adjacencyLists[v]) {
        this.adjacencyLists.push(v);
        this.adjacencyLists[v] = [];
      }

      this.adjacencyLists[v].push(w);
      this.numberOfEdges++;
    }
  }, {
    key: "adjacentVertices",
    value: function adjacentVertices(v) {
      return this.adjacencyLists[v];
    }
  }]);

  return Graph;
}();

exports.Graph = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9ncmFwaC50cyJdLCJuYW1lcyI6WyJHcmFwaCIsImdyYXBoSnNvbiIsInYiLCJ3IiwiYWRqYWNlbmN5TGlzdHMiLCJwdXNoIiwibnVtYmVyT2ZFZGdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEs7Ozs7Ozs4Q0FDZ0IsQzs7MkNBQ0gsQzs7NENBQ0YsRTs7Ozs7bUNBQ0xDLFMsRUFBZSxDQUMxQjtBQUNIOzs7NEJBQ09DLEMsRUFBV0MsQyxFQUFVO0FBRXpCLFVBQUksQ0FBQyxLQUFLQyxjQUFMLENBQW9CRixDQUFwQixDQUFMLEVBQTZCO0FBQ3pCLGFBQUtFLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCSCxDQUF6QjtBQUNBLGFBQUtFLGNBQUwsQ0FBb0JGLENBQXBCLElBQXVCLEVBQXZCO0FBQ0g7O0FBQ0QsV0FBS0UsY0FBTCxDQUFvQkYsQ0FBcEIsRUFBdUJHLElBQXZCLENBQTRCRixDQUE1QjtBQUNBLFdBQUtHLGFBQUw7QUFDSDs7O3FDQUNnQkosQyxFQUFVO0FBQ3ZCLGFBQU8sS0FBS0UsY0FBTCxDQUFvQkYsQ0FBcEIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyYXBoIHtcbiAgICBudW1iZXJPZlZlcnRpY2VzOiBudW1iZXI9MDtcbiAgICBudW1iZXJPZkVkZ2VzOiBudW1iZXI9MDtcbiAgICBhZGphY2VuY3lMaXN0czogYW55PVtdOyAgICBcbiAgICBjb25zdHJ1Y3RHcmFwaChncmFwaEpzb246IGFueSl7XG4gICAgICAgIC8vdG9kbzpcbiAgICB9XG4gICAgYWRkRWRnZSh2OiBudW1iZXIsIHc6IG51bWJlcil7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFkamFjZW5jeUxpc3RzW3ZdKSB7XG4gICAgICAgICAgICB0aGlzLmFkamFjZW5jeUxpc3RzLnB1c2godik7XG4gICAgICAgICAgICB0aGlzLmFkamFjZW5jeUxpc3RzW3ZdPVtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdHNbdl0ucHVzaCh3KTtcbiAgICAgICAgdGhpcy5udW1iZXJPZkVkZ2VzKys7XG4gICAgfVxuICAgIGFkamFjZW50VmVydGljZXModjogbnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRqYWNlbmN5TGlzdHNbdl07XG4gICAgfVxufSJdfQ==