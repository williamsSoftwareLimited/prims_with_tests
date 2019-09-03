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

  _createClass(GraphTests, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9ncmFwaF90ZXN0cy50cyJdLCJuYW1lcyI6WyJHcmFwaFRlc3RzIiwiZ3JhcGgiLCJHcmFwaCIsInRlc3RlciIsIlRlc3RlciIsImFkZEVkZ2UiLCJlcXVhbFRvIiwibnVtYmVyT2ZFZGdlcyIsImNvbXBhcmVBcnJheSIsImFkamFjZW50VmVydGljZXMiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJpc1RydWUiLCJ2ZXJ0ZXhFeGlzdHMiLCJpc0ZhbHNlIiwiYWN0dWFsIiwic2xpY2UiLCJjb21wYXJlU3RyaW5nIiwiYWN0dWFsVmVydGljZXMiLCJmb3JFYWNoIiwiZWxlbSIsImkiLCJhcnIiLCJpbmRleE9mIiwibGFzdEluZGV4T2YiLCJhY3R1YWxTYW1lVmVydGV4IiwiZmlsdGVyIiwicCIsImxlbmd0aCIsImdyYXBoSnNvbiIsImNvbnN0cnVjdEdyYXBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLFU7Ozs7Ozs7OzsrQkFDRztBQUNSLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxZQUFKLEVBQVo7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBSUMsY0FBSixDQUFXLE9BQVgsQ0FBYjtBQUNBSCxNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FKLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFFQUYsTUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWVMLEtBQUssQ0FBQ00sYUFBckIsRUFBb0MsQ0FBcEMsRUFBdUMsa0JBQXZDO0FBRUFOLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFDQUosTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUNBSixNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQlAsS0FBSyxDQUFDUSxnQkFBTixDQUF1QixHQUF2QixDQUFwQixFQUFpRCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFqRCxFQUFrRSxlQUFsRTtBQUVBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBSyxDQUFDVyxRQUFOLEVBQVo7QUFFQVQsTUFBQUEsTUFBTSxDQUFDVSxNQUFQLENBQWNaLEtBQUssQ0FBQ2EsWUFBTixDQUFtQixHQUFuQixDQUFkLEVBQXVDLG1CQUF2QztBQUNBWCxNQUFBQSxNQUFNLENBQUNZLE9BQVAsQ0FBZWQsS0FBSyxDQUFDYSxZQUFOLENBQW1CLE1BQW5CLENBQWYsRUFBMkMsbUJBQTNDO0FBRUEsVUFBSUUsTUFBTSxHQUFDZixLQUFLLENBQUNRLGdCQUFOLENBQXVCLEdBQXZCLEVBQTRCUSxLQUE1QixDQUFrQyxDQUFsQyxFQUFvQyxDQUFwQyxFQUF1Q0wsUUFBdkMsRUFBWDtBQUNBVCxNQUFBQSxNQUFNLENBQUNlLGFBQVAsQ0FBcUIsR0FBckIsRUFBMEJGLE1BQTFCLEVBQWtDLG1EQUFsQyxFQXBCUSxDQXNCUjs7QUFDQSxVQUFJRyxjQUFjLEdBQUdsQixLQUFLLENBQUNRLGdCQUFOLENBQXVCLEdBQXZCLENBQXJCO0FBQ0FVLE1BQUFBLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBVUMsR0FBVixFQUFrQjtBQUNyQyxZQUFJQSxHQUFHLENBQUNDLE9BQUosQ0FBWUgsSUFBWixNQUFvQkUsR0FBRyxDQUFDRSxXQUFKLENBQWdCSixJQUFoQixDQUF4QixFQUNJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBOEJVLElBQTlCLEdBQXFDLFlBQXJDLEdBQWtERSxHQUE5RDtBQUNQLE9BSEQsRUF4QlEsQ0E2QlI7O0FBQ0EsVUFBSUcsZ0JBQWdCLEdBQUdQLGNBQWMsQ0FBQ1EsTUFBZixDQUFzQixVQUFBQyxDQUFDO0FBQUEsZUFBRUEsQ0FBQyxLQUFHLEdBQU47QUFBQSxPQUF2QixDQUF2QjtBQUNBekIsTUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWVvQixnQkFBZ0IsQ0FBQ0csTUFBaEMsRUFBd0MsQ0FBeEMsRUFBMkMsK0JBQTNDLEVBL0JRLENBaUNSOztBQUNBLFVBQUlDLFNBQVMsR0FBRztBQUNaLGlCQUFTLENBQ0w7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQURLLEVBRUw7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQUZLLEVBR0w7QUFBQyx3QkFBZSxHQUFoQjtBQUFxQixzQkFBYTtBQUFsQyxTQUhLO0FBREcsT0FBaEI7QUFPQTdCLE1BQUFBLEtBQUssR0FBRyxJQUFJQyxZQUFKLEVBQVI7QUFDQUQsTUFBQUEsS0FBSyxDQUFDOEIsY0FBTixDQUFxQkQsU0FBckI7QUFFQTNCLE1BQUFBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLENBQWYsRUFBa0JMLEtBQUssQ0FBQ00sYUFBeEIsRUFBdUMsNkNBQXZDO0FBRUFHLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFLLENBQUNXLFFBQU4sRUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwiLi4vZ3JhcGgvZ3JhcGhcIjtcbmltcG9ydCB7IFRlc3RlciB9IGZyb20gXCIuL3Rlc3RlclwiO1xuXG5leHBvcnQgY2xhc3MgR3JhcGhUZXN0cyB7XG4gICAgcnVuVGVzdHMgKCkge1xuICAgICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgoKTtcbiAgICAgICAgdmFyIHRlc3RlciA9IG5ldyBUZXN0ZXIoXCJHcmFwaFwiKTtcbiAgICAgICAgZ3JhcGguYWRkRWRnZShcImFcIiwgXCJjXCIpO1xuICAgICAgICBncmFwaC5hZGRFZGdlKFwiZFwiLCBcImFcIik7XG5cbiAgICAgICAgdGVzdGVyLmVxdWFsVG8oZ3JhcGgubnVtYmVyT2ZFZGdlcywgMiwgXCJFZGdlIG51bWJlciB0ZXN0XCIpO1xuXG4gICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiYlwiKTtcbiAgICAgICAgZ3JhcGguYWRkRWRnZShcImFcIiwgXCJkXCIpO1xuICAgICAgICBncmFwaC5hZGRFZGdlKFwiYVwiLCBcImFcIik7XG5cbiAgICAgICAgdGVzdGVyLmNvbXBhcmVBcnJheShncmFwaC5hZGphY2VudFZlcnRpY2VzKFwiYVwiKSwgW1wiY1wiLCBcImRcIiwgXCJiXCJdLCBcIlZlcnRpY2VzIHRlc3RcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coZ3JhcGgudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgdGVzdGVyLmlzVHJ1ZShncmFwaC52ZXJ0ZXhFeGlzdHMoXCJhXCIpLCBcIlRoZSB2ZXJ0ZXggZXhpc3RzXCIpO1xuICAgICAgICB0ZXN0ZXIuaXNGYWxzZShncmFwaC52ZXJ0ZXhFeGlzdHMoXCJ6enp6XCIpLCBcIlRoZSB2ZXJ0ZXggZXhpc3RzXCIpO1xuXG4gICAgICAgIHZhciBhY3R1YWw9Z3JhcGguYWRqYWNlbnRWZXJ0aWNlcyhcImJcIikuc2xpY2UoMCwxKS50b1N0cmluZygpO1xuICAgICAgICB0ZXN0ZXIuY29tcGFyZVN0cmluZyhcImFcIiwgYWN0dWFsLCBcImlmICdhJyBwb2ludHMgdG8gJ2InIHRoZW4gJ2InIHNob3VsZCBwb2ludCB0byAnYSdcIik7XG4gICAgXG4gICAgICAgIC8vc2hvdWxkIGJlIG5vIGR1cGxpY2F0aW9uXG4gICAgICAgIGxldCBhY3R1YWxWZXJ0aWNlcyA9IGdyYXBoLmFkamFjZW50VmVydGljZXMoXCJhXCIpO1xuICAgICAgICBhY3R1YWxWZXJ0aWNlcy5mb3JFYWNoKChlbGVtLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnIuaW5kZXhPZihlbGVtKSE9PWFyci5sYXN0SW5kZXhPZihlbGVtKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGEgZGlydHkgZHVwbGljYXRlOiBcIiArIGVsZW0gKyBcIiBpbiBhcnJheSBcIithcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3Nob3VsZCBiZSBubyBzZWxmIGxvb3BzXG4gICAgICAgIHZhciBhY3R1YWxTYW1lVmVydGV4ID0gYWN0dWFsVmVydGljZXMuZmlsdGVyKHA9PnA9PT1cImFcIik7XG4gICAgICAgIHRlc3Rlci5lcXVhbFRvKGFjdHVhbFNhbWVWZXJ0ZXgubGVuZ3RoLCAwLCBcInRoZSB2ZXJ0ZXggJ2EnIHNlbGYtbG9vcCB0ZXN0XCIpO1xuXG4gICAgICAgIC8vIG5leHQgY29uc3RydWN0IEpTT04gdG8gY29udmVydCB0byBhIGdyYXBoXG4gICAgICAgIHZhciBncmFwaEpzb24gPSB7XG4gICAgICAgICAgICBcImVkZ2VzXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImFcIiwgXCJ0b1ZlcnRleFwiIDogXCJiXCJ9LFxuICAgICAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiYVwiLCBcInRvVmVydGV4XCIgOiBcImNcIn0sXG4gICAgICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJiXCIsIFwidG9WZXJ0ZXhcIiA6IFwiY1wifVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgIGdyYXBoLmNvbnN0cnVjdEdyYXBoKGdyYXBoSnNvbik7XG4gICAgICAgIFxuICAgICAgICB0ZXN0ZXIuZXF1YWxUbygzLCBncmFwaC5udW1iZXJPZkVkZ2VzLCBcImFmdGVyIGNvbnN0cnVjdCBncmFwaCB3aXRoIEpTT04gZWRnZXMgbWF0Y2hcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhncmFwaC50b1N0cmluZygpKTtcbiAgICB9XG59XG5cbiJdfQ==