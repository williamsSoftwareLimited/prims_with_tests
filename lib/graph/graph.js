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
      var _this = this;

      var s = "";
      this.adjacencyLists.forEach(function (vertex) {
        s += vertex + ": ";

        _this.adjacentVertices(vertex).forEach(function (adjVertex) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9ncmFwaC50cyJdLCJuYW1lcyI6WyJHcmFwaCIsImdyYXBoSnNvbiIsInYiLCJ3IiwiYWRkT25lV2F5RWRnZSIsIm51bWJlck9mRWRnZXMiLCJ2ZXJ0ZXhFeGlzdHMiLCJhZGphY2VuY3lMaXN0cyIsInB1c2giLCJhZGphY2VudFZlcnRpY2VzIiwiZmluZCIsInAiLCJ1bmRlZmluZWQiLCJzIiwiZm9yRWFjaCIsInZlcnRleCIsImFkalZlcnRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEs7Ozs7Ozs4Q0FDZ0IsQzs7MkNBQ0gsQzs7NENBQ0YsRTs7Ozs7bUNBQ0xDLFMsRUFBZSxDQUMxQjtBQUNIOzs7NEJBQ09DLEMsRUFBV0MsQyxFQUFVO0FBQ3pCLFVBQUlELENBQUMsS0FBR0MsQ0FBUixFQUFXO0FBQ1gsV0FBS0MsYUFBTCxDQUFtQkYsQ0FBbkIsRUFBc0JDLENBQXRCO0FBQ0EsV0FBS0MsYUFBTCxDQUFtQkQsQ0FBbkIsRUFBc0JELENBQXRCO0FBQ0EsV0FBS0csYUFBTDtBQUNIOzs7a0NBQ2FILEMsRUFBVUMsQyxFQUFVO0FBQzlCLFVBQUksQ0FBQyxLQUFLRyxZQUFMLENBQWtCSixDQUFsQixDQUFMLEVBQTJCO0FBQ3ZCLGFBQUtLLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCTixDQUF6QjtBQUNBLGFBQUtLLGNBQUwsQ0FBb0JMLENBQXBCLElBQXVCLEVBQXZCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLEtBQUtPLGdCQUFMLENBQXNCUCxDQUF0QixFQUF5QlEsSUFBekIsQ0FBOEIsVUFBQUMsQ0FBQztBQUFBLGVBQUVBLENBQUMsS0FBR1IsQ0FBTjtBQUFBLE9BQS9CLENBQUwsRUFDSSxLQUFLSSxjQUFMLENBQW9CTCxDQUFwQixFQUF1Qk0sSUFBdkIsQ0FBNEJMLENBQTVCO0FBQ1A7OztpQ0FDWUQsQyxFQUFrQjtBQUMzQixhQUFPLEtBQUtLLGNBQUwsQ0FBb0JMLENBQXBCLE1BQXlCVSxTQUFoQztBQUNIOzs7cUNBQ2dCVixDLEVBQWM7QUFDM0IsYUFBTyxLQUFLSyxjQUFMLENBQW9CTCxDQUFwQixDQUFQO0FBQ0g7OzsrQkFDaUI7QUFBQTs7QUFDZCxVQUFJVyxDQUFTLEdBQUUsRUFBZjtBQUNBLFdBQUtOLGNBQUwsQ0FBb0JPLE9BQXBCLENBQTRCLFVBQUFDLE1BQU0sRUFBSTtBQUNsQ0YsUUFBQUEsQ0FBQyxJQUFFRSxNQUFNLEdBQUMsSUFBVjs7QUFDQSxRQUFBLEtBQUksQ0FBQ04sZ0JBQUwsQ0FBc0JNLE1BQXRCLEVBQThCRCxPQUE5QixDQUFzQyxVQUFBRSxTQUFTLEVBQUk7QUFDL0NILFVBQUFBLENBQUMsSUFBRUcsU0FBUyxHQUFDLEdBQWI7QUFDSCxTQUZEOztBQUdBSCxRQUFBQSxDQUFDLElBQUUsSUFBSDtBQUNILE9BTkQ7QUFPQSxhQUFPQSxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JhcGgge1xuICAgIG51bWJlck9mVmVydGljZXM6IG51bWJlcj0wO1xuICAgIG51bWJlck9mRWRnZXM6IG51bWJlcj0wO1xuICAgIGFkamFjZW5jeUxpc3RzOiBhbnk9W107ICAgIFxuICAgIGNvbnN0cnVjdEdyYXBoKGdyYXBoSnNvbjogYW55KXtcbiAgICAgICAgLy90b2RvOlxuICAgIH1cbiAgICBhZGRFZGdlKHY6IHN0cmluZywgdzogc3RyaW5nKXtcbiAgICAgICAgaWYgKHY9PT13KSByZXR1cm47XG4gICAgICAgIHRoaXMuYWRkT25lV2F5RWRnZSh2LCB3KTtcbiAgICAgICAgdGhpcy5hZGRPbmVXYXlFZGdlKHcsIHYpO1xuICAgICAgICB0aGlzLm51bWJlck9mRWRnZXMrKztcbiAgICB9XG4gICAgYWRkT25lV2F5RWRnZSh2OnN0cmluZywgdzogc3RyaW5nKXtcbiAgICAgICAgaWYgKCF0aGlzLnZlcnRleEV4aXN0cyh2KSkge1xuICAgICAgICAgICAgdGhpcy5hZGphY2VuY3lMaXN0cy5wdXNoKHYpO1xuICAgICAgICAgICAgdGhpcy5hZGphY2VuY3lMaXN0c1t2XT1bXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWRqYWNlbnRWZXJ0aWNlcyh2KS5maW5kKHA9PnA9PT13KSlcbiAgICAgICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdHNbdl0ucHVzaCh3KTtcbiAgICB9XG4gICAgdmVydGV4RXhpc3RzKHY6IHN0cmluZyk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRqYWNlbmN5TGlzdHNbdl0hPT11bmRlZmluZWQ7XG4gICAgfVxuICAgIGFkamFjZW50VmVydGljZXModjogc3RyaW5nKTogW117XG4gICAgICAgIHJldHVybiB0aGlzLmFkamFjZW5jeUxpc3RzW3ZdO1xuICAgIH1cbiAgICB0b1N0cmluZygpOiBzdHJpbmd7XG4gICAgICAgIGxldCBzOiBzdHJpbmcgPVwiXCI7XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdHMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgcys9dmVydGV4K1wiOiBcIjtcbiAgICAgICAgICAgIHRoaXMuYWRqYWNlbnRWZXJ0aWNlcyh2ZXJ0ZXgpLmZvckVhY2goYWRqVmVydGV4ID0+IHtcbiAgICAgICAgICAgICAgICBzKz1hZGpWZXJ0ZXgrXCIgXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHMrPVwiOyBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn0iXX0=