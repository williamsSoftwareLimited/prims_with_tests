"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphTests = void 0;

var _graph = require("../graph/graph");

var _tester = require("./tester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GraphTests =
/*#__PURE__*/
function () {
  function GraphTests() {
    _classCallCheck(this, GraphTests);
  }

  _createClass(GraphTests, null, [{
    key: "runTests",
    value: function runTests() {
      var graph = new _graph.Graph();
      var tester = new _tester.Tester("Graph");
      graph.addEdge("a", "c");
      graph.addEdge("d", "a");
      tester.equalTo(graph.numberOfEdges, 2, "Edge number test");
      graph.addEdge("a", "b");
      graph.addEdge("a", "d");
      graph.addEdge("a", "a");
      tester.compareArray(graph.adjacentVertices("a"), ["c", "d", "b"], "Vertices test");
      console.log(graph.toString());
      tester.isTrue(graph.vertexExists("a"), "The vertex exists");
      tester.isFalse(graph.vertexExists("zzzz"), "The vertex exists");
      var actual = graph.adjacentVertices("b").slice(0, 1).toString();
      tester.compareString("a", actual, "if 'a' points to 'b' then 'b' should point to 'a'"); //should be no duplication

      var actualVertices = graph.adjacentVertices("a");
      actualVertices.forEach(function (elem, i, arr) {
        if (arr.indexOf(elem) !== arr.lastIndexOf(elem)) console.log("found a dirty duplicate: " + elem + " in array " + arr);
      }); //should be no self loops

      var actualSameVertex = actualVertices.filter(function (p) {
        return p === "a";
      });
      tester.equalTo(actualSameVertex.length, 0, "the vertex 'a' self-loop test"); // next construct JSON to convert to a graph

      var graphJson = {
        "edges": [{
          "fromVertex": "a",
          "toVertex": "b"
        }, {
          "fromVertex": "a",
          "toVertex": "c"
        }, {
          "fromVertex": "b",
          "toVertex": "c"
        }]
      };
      graph = new _graph.Graph();
      graph.constructGraph(graphJson);
      tester.equalTo(3, graph.numberOfEdges, "after construct graph with JSON edges match");
      console.log(graph.toString());
    }
  }]);

  return GraphTests;
}();

exports.GraphTests = GraphTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9ncmFwaF90ZXN0cy50cyJdLCJuYW1lcyI6WyJHcmFwaFRlc3RzIiwiZ3JhcGgiLCJHcmFwaCIsInRlc3RlciIsIlRlc3RlciIsImFkZEVkZ2UiLCJlcXVhbFRvIiwibnVtYmVyT2ZFZGdlcyIsImNvbXBhcmVBcnJheSIsImFkamFjZW50VmVydGljZXMiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJpc1RydWUiLCJ2ZXJ0ZXhFeGlzdHMiLCJpc0ZhbHNlIiwiYWN0dWFsIiwic2xpY2UiLCJjb21wYXJlU3RyaW5nIiwiYWN0dWFsVmVydGljZXMiLCJmb3JFYWNoIiwiZWxlbSIsImkiLCJhcnIiLCJpbmRleE9mIiwibGFzdEluZGV4T2YiLCJhY3R1YWxTYW1lVmVydGV4IiwiZmlsdGVyIiwicCIsImxlbmd0aCIsImdyYXBoSnNvbiIsImNvbnN0cnVjdEdyYXBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLFU7Ozs7Ozs7OzsrQkFDVTtBQUNmLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxZQUFKLEVBQVo7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBSUMsY0FBSixDQUFXLE9BQVgsQ0FBYjtBQUNBSCxNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FKLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFFQUYsTUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWVMLEtBQUssQ0FBQ00sYUFBckIsRUFBb0MsQ0FBcEMsRUFBdUMsa0JBQXZDO0FBRUFOLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFDQUosTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUNBSixNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQlAsS0FBSyxDQUFDUSxnQkFBTixDQUF1QixHQUF2QixDQUFwQixFQUFpRCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFqRCxFQUFrRSxlQUFsRTtBQUVBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBSyxDQUFDVyxRQUFOLEVBQVo7QUFFQVQsTUFBQUEsTUFBTSxDQUFDVSxNQUFQLENBQWNaLEtBQUssQ0FBQ2EsWUFBTixDQUFtQixHQUFuQixDQUFkLEVBQXVDLG1CQUF2QztBQUNBWCxNQUFBQSxNQUFNLENBQUNZLE9BQVAsQ0FBZWQsS0FBSyxDQUFDYSxZQUFOLENBQW1CLE1BQW5CLENBQWYsRUFBMkMsbUJBQTNDO0FBRUEsVUFBSUUsTUFBTSxHQUFDZixLQUFLLENBQUNRLGdCQUFOLENBQXVCLEdBQXZCLEVBQTRCUSxLQUE1QixDQUFrQyxDQUFsQyxFQUFvQyxDQUFwQyxFQUF1Q0wsUUFBdkMsRUFBWDtBQUNBVCxNQUFBQSxNQUFNLENBQUNlLGFBQVAsQ0FBcUIsR0FBckIsRUFBMEJGLE1BQTFCLEVBQWtDLG1EQUFsQyxFQXBCZSxDQXNCZjs7QUFDQSxVQUFJRyxjQUFjLEdBQUdsQixLQUFLLENBQUNRLGdCQUFOLENBQXVCLEdBQXZCLENBQXJCO0FBQ0FVLE1BQUFBLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBVUMsR0FBVixFQUFrQjtBQUNyQyxZQUFJQSxHQUFHLENBQUNDLE9BQUosQ0FBWUgsSUFBWixNQUFvQkUsR0FBRyxDQUFDRSxXQUFKLENBQWdCSixJQUFoQixDQUF4QixFQUNJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBOEJVLElBQTlCLEdBQXFDLFlBQXJDLEdBQWtERSxHQUE5RDtBQUNQLE9BSEQsRUF4QmUsQ0E2QmY7O0FBQ0EsVUFBSUcsZ0JBQWdCLEdBQUdQLGNBQWMsQ0FBQ1EsTUFBZixDQUFzQixVQUFBQyxDQUFDO0FBQUEsZUFBRUEsQ0FBQyxLQUFHLEdBQU47QUFBQSxPQUF2QixDQUF2QjtBQUNBekIsTUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWVvQixnQkFBZ0IsQ0FBQ0csTUFBaEMsRUFBd0MsQ0FBeEMsRUFBMkMsK0JBQTNDLEVBL0JlLENBaUNmOztBQUNBLFVBQUlDLFNBQVMsR0FBRztBQUNaLGlCQUFTLENBQ0w7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQURLLEVBRUw7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQUZLLEVBR0w7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQUhLO0FBREcsT0FBaEI7QUFPQTdCLE1BQUFBLEtBQUssR0FBRyxJQUFJQyxZQUFKLEVBQVI7QUFDQUQsTUFBQUEsS0FBSyxDQUFDOEIsY0FBTixDQUFxQkQsU0FBckI7QUFFQTNCLE1BQUFBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLENBQWYsRUFBa0JMLEtBQUssQ0FBQ00sYUFBeEIsRUFBdUMsNkNBQXZDO0FBRUFHLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFLLENBQUNXLFFBQU4sRUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwiLi4vZ3JhcGgvZ3JhcGhcIjtcbmltcG9ydCB7IFRlc3RlciB9IGZyb20gXCIuL3Rlc3RlclwiO1xuXG5leHBvcnQgY2xhc3MgR3JhcGhUZXN0cyB7XG4gICAgc3RhdGljIHJ1blRlc3RzICgpIHtcbiAgICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgIHZhciB0ZXN0ZXIgPSBuZXcgVGVzdGVyKFwiR3JhcGhcIik7XG4gICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiY1wiKTtcbiAgICAgICAgZ3JhcGguYWRkRWRnZShcImRcIiwgXCJhXCIpO1xuXG4gICAgICAgIHRlc3Rlci5lcXVhbFRvKGdyYXBoLm51bWJlck9mRWRnZXMsIDIsIFwiRWRnZSBudW1iZXIgdGVzdFwiKTtcblxuICAgICAgICBncmFwaC5hZGRFZGdlKFwiYVwiLCBcImJcIik7XG4gICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiZFwiKTtcbiAgICAgICAgZ3JhcGguYWRkRWRnZShcImFcIiwgXCJhXCIpO1xuXG4gICAgICAgIHRlc3Rlci5jb21wYXJlQXJyYXkoZ3JhcGguYWRqYWNlbnRWZXJ0aWNlcyhcImFcIiksIFtcImNcIiwgXCJkXCIsIFwiYlwiXSwgXCJWZXJ0aWNlcyB0ZXN0XCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIHRlc3Rlci5pc1RydWUoZ3JhcGgudmVydGV4RXhpc3RzKFwiYVwiKSwgXCJUaGUgdmVydGV4IGV4aXN0c1wiKTtcbiAgICAgICAgdGVzdGVyLmlzRmFsc2UoZ3JhcGgudmVydGV4RXhpc3RzKFwienp6elwiKSwgXCJUaGUgdmVydGV4IGV4aXN0c1wiKTtcblxuICAgICAgICB2YXIgYWN0dWFsPWdyYXBoLmFkamFjZW50VmVydGljZXMoXCJiXCIpLnNsaWNlKDAsMSkudG9TdHJpbmcoKTtcbiAgICAgICAgdGVzdGVyLmNvbXBhcmVTdHJpbmcoXCJhXCIsIGFjdHVhbCwgXCJpZiAnYScgcG9pbnRzIHRvICdiJyB0aGVuICdiJyBzaG91bGQgcG9pbnQgdG8gJ2EnXCIpO1xuICAgIFxuICAgICAgICAvL3Nob3VsZCBiZSBubyBkdXBsaWNhdGlvblxuICAgICAgICBsZXQgYWN0dWFsVmVydGljZXMgPSBncmFwaC5hZGphY2VudFZlcnRpY2VzKFwiYVwiKTtcbiAgICAgICAgYWN0dWFsVmVydGljZXMuZm9yRWFjaCgoZWxlbSwgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyLmluZGV4T2YoZWxlbSkhPT1hcnIubGFzdEluZGV4T2YoZWxlbSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBhIGRpcnR5IGR1cGxpY2F0ZTogXCIgKyBlbGVtICsgXCIgaW4gYXJyYXkgXCIrYXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9zaG91bGQgYmUgbm8gc2VsZiBsb29wc1xuICAgICAgICB2YXIgYWN0dWFsU2FtZVZlcnRleCA9IGFjdHVhbFZlcnRpY2VzLmZpbHRlcihwPT5wPT09XCJhXCIpO1xuICAgICAgICB0ZXN0ZXIuZXF1YWxUbyhhY3R1YWxTYW1lVmVydGV4Lmxlbmd0aCwgMCwgXCJ0aGUgdmVydGV4ICdhJyBzZWxmLWxvb3AgdGVzdFwiKTtcblxuICAgICAgICAvLyBuZXh0IGNvbnN0cnVjdCBKU09OIHRvIGNvbnZlcnQgdG8gYSBncmFwaFxuICAgICAgICB2YXIgZ3JhcGhKc29uID0ge1xuICAgICAgICAgICAgXCJlZGdlc1wiOiBbXG4gICAgICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJhXCIsIFwidG9WZXJ0ZXhcIiA6IFwiYlwifSxcbiAgICAgICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImFcIiwgXCJ0b1ZlcnRleFwiIDogXCJjXCJ9LFxuICAgICAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiYlwiLCBcInRvVmVydGV4XCIgOiBcImNcIn1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBncmFwaCA9IG5ldyBHcmFwaCgpO1xuICAgICAgICBncmFwaC5jb25zdHJ1Y3RHcmFwaChncmFwaEpzb24pO1xuICAgICAgICBcbiAgICAgICAgdGVzdGVyLmVxdWFsVG8oMywgZ3JhcGgubnVtYmVyT2ZFZGdlcywgXCJhZnRlciBjb25zdHJ1Y3QgZ3JhcGggd2l0aCBKU09OIGVkZ2VzIG1hdGNoXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coZ3JhcGgudG9TdHJpbmcoKSk7XG4gICAgfVxufVxuXG4iXX0=