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
    value: function constructGraph(graphJson) {
      var _this = this;

      graphJson.edges.forEach(function (edge) {
        _this.addEdge(edge.fromVertex, edge.toVertex);
      });
    }
  }, {
    key: "addEdge",
    value: function addEdge(v, w) {
      if (v === w) return;
      this.addOneWayEdge(v, w);
      this.addOneWayEdge(w, v);
      this.numberOfEdges++;
    }
  }, {
    key: "addOneWayEdge",
    value: function addOneWayEdge(v, w) {
      if (!this.vertexExists(v)) {
        this.adjacencyLists.push(v);
        this.adjacencyLists[v] = [];
      }

      if (!this.adjacentVertices(v).find(function (p) {
        return p === w;
      })) this.adjacencyLists[v].push(w);
    }
  }, {
    key: "vertexExists",
    value: function vertexExists(v) {
      return this.adjacencyLists[v] !== undefined;
    }
  }, {
    key: "adjacentVertices",
    value: function adjacentVertices(v) {
      return this.adjacencyLists[v];
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this2 = this;

      var s = "";
      this.adjacencyLists.forEach(function (vertex) {
        s += vertex + ": ";

        _this2.adjacentVertices(vertex).forEach(function (adjVertex) {
          s += adjVertex + " ";
        });

        s += "; ";
      });
      return s;
    }
  }]);

  return Graph;
}();

exports.Graph = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9ncmFwaC50cyJdLCJuYW1lcyI6WyJHcmFwaCIsImdyYXBoSnNvbiIsImVkZ2VzIiwiZm9yRWFjaCIsImVkZ2UiLCJhZGRFZGdlIiwiZnJvbVZlcnRleCIsInRvVmVydGV4IiwidiIsInciLCJhZGRPbmVXYXlFZGdlIiwibnVtYmVyT2ZFZGdlcyIsInZlcnRleEV4aXN0cyIsImFkamFjZW5jeUxpc3RzIiwicHVzaCIsImFkamFjZW50VmVydGljZXMiLCJmaW5kIiwicCIsInVuZGVmaW5lZCIsInMiLCJ2ZXJ0ZXgiLCJhZGpWZXJ0ZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxLOzs7Ozs7OENBQ2dCLEM7OzJDQUNILEM7OzRDQUNGLEU7Ozs7O21DQUNMQyxTLEVBQWU7QUFBQTs7QUFDMUJBLE1BQUFBLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsT0FBaEIsQ0FBd0IsVUFBQUMsSUFBSSxFQUFJO0FBQzVCLFFBQUEsS0FBSSxDQUFDQyxPQUFMLENBQWFELElBQUksQ0FBQ0UsVUFBbEIsRUFBOEJGLElBQUksQ0FBQ0csUUFBbkM7QUFDSCxPQUZEO0FBR0g7Ozs0QkFDT0MsQyxFQUFXQyxDLEVBQVU7QUFDekIsVUFBSUQsQ0FBQyxLQUFHQyxDQUFSLEVBQVc7QUFDWCxXQUFLQyxhQUFMLENBQW1CRixDQUFuQixFQUFzQkMsQ0FBdEI7QUFDQSxXQUFLQyxhQUFMLENBQW1CRCxDQUFuQixFQUFzQkQsQ0FBdEI7QUFDQSxXQUFLRyxhQUFMO0FBQ0g7OztrQ0FDYUgsQyxFQUFXQyxDLEVBQVU7QUFDL0IsVUFBSSxDQUFDLEtBQUtHLFlBQUwsQ0FBa0JKLENBQWxCLENBQUwsRUFBMkI7QUFDdkIsYUFBS0ssY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUJOLENBQXpCO0FBQ0EsYUFBS0ssY0FBTCxDQUFvQkwsQ0FBcEIsSUFBdUIsRUFBdkI7QUFDSDs7QUFDRCxVQUFJLENBQUMsS0FBS08sZ0JBQUwsQ0FBc0JQLENBQXRCLEVBQXlCUSxJQUF6QixDQUE4QixVQUFBQyxDQUFDO0FBQUEsZUFBRUEsQ0FBQyxLQUFHUixDQUFOO0FBQUEsT0FBL0IsQ0FBTCxFQUNJLEtBQUtJLGNBQUwsQ0FBb0JMLENBQXBCLEVBQXVCTSxJQUF2QixDQUE0QkwsQ0FBNUI7QUFDUDs7O2lDQUNZRCxDLEVBQWtCO0FBQzNCLGFBQU8sS0FBS0ssY0FBTCxDQUFvQkwsQ0FBcEIsTUFBeUJVLFNBQWhDO0FBQ0g7OztxQ0FDZ0JWLEMsRUFBYztBQUMzQixhQUFPLEtBQUtLLGNBQUwsQ0FBb0JMLENBQXBCLENBQVA7QUFDSDs7OytCQUNpQjtBQUFBOztBQUNkLFVBQUlXLENBQVMsR0FBRSxFQUFmO0FBQ0EsV0FBS04sY0FBTCxDQUFvQlYsT0FBcEIsQ0FBNEIsVUFBQWlCLE1BQU0sRUFBSTtBQUNsQ0QsUUFBQUEsQ0FBQyxJQUFFQyxNQUFNLEdBQUMsSUFBVjs7QUFDQSxRQUFBLE1BQUksQ0FBQ0wsZ0JBQUwsQ0FBc0JLLE1BQXRCLEVBQThCakIsT0FBOUIsQ0FBc0MsVUFBQWtCLFNBQVMsRUFBSTtBQUMvQ0YsVUFBQUEsQ0FBQyxJQUFFRSxTQUFTLEdBQUMsR0FBYjtBQUNILFNBRkQ7O0FBR0FGLFFBQUFBLENBQUMsSUFBRSxJQUFIO0FBQ0gsT0FORDtBQU9BLGFBQU9BLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmFwaCB7XG4gICAgbnVtYmVyT2ZWZXJ0aWNlczogbnVtYmVyPTA7XG4gICAgbnVtYmVyT2ZFZGdlczogbnVtYmVyPTA7XG4gICAgYWRqYWNlbmN5TGlzdHM6IGFueT1bXTsgICAgXG4gICAgY29uc3RydWN0R3JhcGgoZ3JhcGhKc29uOiBhbnkpe1xuICAgICAgICBncmFwaEpzb24uZWRnZXMuZm9yRWFjaChlZGdlID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZShlZGdlLmZyb21WZXJ0ZXgsIGVkZ2UudG9WZXJ0ZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkRWRnZSh2OiBzdHJpbmcsIHc6IHN0cmluZyl7XG4gICAgICAgIGlmICh2PT09dykgcmV0dXJuO1xuICAgICAgICB0aGlzLmFkZE9uZVdheUVkZ2Uodiwgdyk7XG4gICAgICAgIHRoaXMuYWRkT25lV2F5RWRnZSh3LCB2KTtcbiAgICAgICAgdGhpcy5udW1iZXJPZkVkZ2VzKys7XG4gICAgfVxuICAgIGFkZE9uZVdheUVkZ2Uodjogc3RyaW5nLCB3OiBzdHJpbmcpe1xuICAgICAgICBpZiAoIXRoaXMudmVydGV4RXhpc3RzKHYpKSB7XG4gICAgICAgICAgICB0aGlzLmFkamFjZW5jeUxpc3RzLnB1c2godik7XG4gICAgICAgICAgICB0aGlzLmFkamFjZW5jeUxpc3RzW3ZdPVtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hZGphY2VudFZlcnRpY2VzKHYpLmZpbmQocD0+cD09PXcpKVxuICAgICAgICAgICAgdGhpcy5hZGphY2VuY3lMaXN0c1t2XS5wdXNoKHcpO1xuICAgIH1cbiAgICB2ZXJ0ZXhFeGlzdHModjogc3RyaW5nKTpib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5hZGphY2VuY3lMaXN0c1t2XSE9PXVuZGVmaW5lZDtcbiAgICB9XG4gICAgYWRqYWNlbnRWZXJ0aWNlcyh2OiBzdHJpbmcpOiBbXXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRqYWNlbmN5TGlzdHNbdl07XG4gICAgfVxuICAgIHRvU3RyaW5nKCk6IHN0cmluZ3tcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9XCJcIjtcbiAgICAgICAgdGhpcy5hZGphY2VuY3lMaXN0cy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICBzKz12ZXJ0ZXgrXCI6IFwiO1xuICAgICAgICAgICAgdGhpcy5hZGphY2VudFZlcnRpY2VzKHZlcnRleCkuZm9yRWFjaChhZGpWZXJ0ZXggPT4ge1xuICAgICAgICAgICAgICAgIHMrPWFkalZlcnRleCtcIiBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcys9XCI7IFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufSJdfQ==