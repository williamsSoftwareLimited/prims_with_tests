"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTests = void 0;

var _graph = require("../graph/graph");

var _tester = require("./tester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppTests =
/*#__PURE__*/
function () {
  function AppTests() {
    _classCallCheck(this, AppTests);
  }

  _createClass(AppTests, [{
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
      tester.equalTo(actualSameVertex.length, 0, "the vertex 'a' self-loop test");
    }
  }]);

  return AppTests;
}();

exports.AppTests = AppTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hcHBfdGVzdHMudHMiXSwibmFtZXMiOlsiQXBwVGVzdHMiLCJncmFwaCIsIkdyYXBoIiwidGVzdGVyIiwiVGVzdGVyIiwiYWRkRWRnZSIsImVxdWFsVG8iLCJudW1iZXJPZkVkZ2VzIiwiY29tcGFyZUFycmF5IiwiYWRqYWNlbnRWZXJ0aWNlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImlzVHJ1ZSIsInZlcnRleEV4aXN0cyIsImlzRmFsc2UiLCJhY3R1YWwiLCJzbGljZSIsImNvbXBhcmVTdHJpbmciLCJhY3R1YWxWZXJ0aWNlcyIsImZvckVhY2giLCJlbGVtIiwiaSIsImFyciIsImluZGV4T2YiLCJsYXN0SW5kZXhPZiIsImFjdHVhbFNhbWVWZXJ0ZXgiLCJmaWx0ZXIiLCJwIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRWlCQSxROzs7Ozs7Ozs7K0JBRUc7QUFDUixVQUFJQyxLQUFLLEdBQUcsSUFBSUMsWUFBSixFQUFaO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLElBQUlDLGNBQUosQ0FBVyxPQUFYLENBQWI7QUFDQUgsTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUNBSixNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlTCxLQUFLLENBQUNNLGFBQXJCLEVBQW9DLENBQXBDLEVBQXVDLGtCQUF2QztBQUVBTixNQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FKLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFDQUosTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUVBRixNQUFBQSxNQUFNLENBQUNLLFlBQVAsQ0FBb0JQLEtBQUssQ0FBQ1EsZ0JBQU4sQ0FBdUIsR0FBdkIsQ0FBcEIsRUFBaUQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBakQsRUFBa0UsZUFBbEU7QUFFQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQUssQ0FBQ1csUUFBTixFQUFaO0FBRUFULE1BQUFBLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjWixLQUFLLENBQUNhLFlBQU4sQ0FBbUIsR0FBbkIsQ0FBZCxFQUF1QyxtQkFBdkM7QUFDQVgsTUFBQUEsTUFBTSxDQUFDWSxPQUFQLENBQWVkLEtBQUssQ0FBQ2EsWUFBTixDQUFtQixNQUFuQixDQUFmLEVBQTJDLG1CQUEzQztBQUVBLFVBQUlFLE1BQU0sR0FBQ2YsS0FBSyxDQUFDUSxnQkFBTixDQUF1QixHQUF2QixFQUE0QlEsS0FBNUIsQ0FBa0MsQ0FBbEMsRUFBb0MsQ0FBcEMsRUFBdUNMLFFBQXZDLEVBQVg7QUFDQVQsTUFBQUEsTUFBTSxDQUFDZSxhQUFQLENBQXFCLEdBQXJCLEVBQTBCRixNQUExQixFQUFrQyxtREFBbEMsRUFwQlEsQ0FzQlI7O0FBQ0EsVUFBSUcsY0FBYyxHQUFHbEIsS0FBSyxDQUFDUSxnQkFBTixDQUF1QixHQUF2QixDQUFyQjtBQUNBVSxNQUFBQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQVVDLEdBQVYsRUFBa0I7QUFDckMsWUFBSUEsR0FBRyxDQUFDQyxPQUFKLENBQVlILElBQVosTUFBb0JFLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQkosSUFBaEIsQ0FBeEIsRUFDSVgsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQThCVSxJQUE5QixHQUFxQyxZQUFyQyxHQUFrREUsR0FBOUQ7QUFDUCxPQUhELEVBeEJRLENBNkJSOztBQUNBLFVBQUlHLGdCQUFnQixHQUFHUCxjQUFjLENBQUNRLE1BQWYsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLGVBQUVBLENBQUMsS0FBRyxHQUFOO0FBQUEsT0FBdkIsQ0FBdkI7QUFDQXpCLE1BQUFBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlb0IsZ0JBQWdCLENBQUNHLE1BQWhDLEVBQXdDLENBQXhDLEVBQTJDLCtCQUEzQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGV4VGVzdHMgfSBmcm9tIFwiLi92ZXJ0ZXhfdGVzdHNcIjtcbmltcG9ydCB7IEdyYXBoIH0gZnJvbSBcIi4uL2dyYXBoL2dyYXBoXCI7XG5pbXBvcnQgeyBUZXN0ZXIgfSBmcm9tIFwiLi90ZXN0ZXJcIjtcblxuICAgIGV4cG9ydCBjbGFzcyBBcHBUZXN0cyB7XG5cbiAgICAgICAgcnVuVGVzdHMgKCkge1xuICAgICAgICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgICAgICB2YXIgdGVzdGVyID0gbmV3IFRlc3RlcihcIkdyYXBoXCIpO1xuICAgICAgICAgICAgZ3JhcGguYWRkRWRnZShcImFcIiwgXCJjXCIpO1xuICAgICAgICAgICAgZ3JhcGguYWRkRWRnZShcImRcIiwgXCJhXCIpO1xuXG4gICAgICAgICAgICB0ZXN0ZXIuZXF1YWxUbyhncmFwaC5udW1iZXJPZkVkZ2VzLCAyLCBcIkVkZ2UgbnVtYmVyIHRlc3RcIik7XG5cbiAgICAgICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiYlwiKTtcbiAgICAgICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiZFwiKTtcbiAgICAgICAgICAgIGdyYXBoLmFkZEVkZ2UoXCJhXCIsIFwiYVwiKTtcblxuICAgICAgICAgICAgdGVzdGVyLmNvbXBhcmVBcnJheShncmFwaC5hZGphY2VudFZlcnRpY2VzKFwiYVwiKSwgW1wiY1wiLCBcImRcIiwgXCJiXCJdLCBcIlZlcnRpY2VzIHRlc3RcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyYXBoLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICB0ZXN0ZXIuaXNUcnVlKGdyYXBoLnZlcnRleEV4aXN0cyhcImFcIiksIFwiVGhlIHZlcnRleCBleGlzdHNcIik7XG4gICAgICAgICAgICB0ZXN0ZXIuaXNGYWxzZShncmFwaC52ZXJ0ZXhFeGlzdHMoXCJ6enp6XCIpLCBcIlRoZSB2ZXJ0ZXggZXhpc3RzXCIpO1xuXG4gICAgICAgICAgICB2YXIgYWN0dWFsPWdyYXBoLmFkamFjZW50VmVydGljZXMoXCJiXCIpLnNsaWNlKDAsMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRlc3Rlci5jb21wYXJlU3RyaW5nKFwiYVwiLCBhY3R1YWwsIFwiaWYgJ2EnIHBvaW50cyB0byAnYicgdGhlbiAnYicgc2hvdWxkIHBvaW50IHRvICdhJ1wiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvL3Nob3VsZCBiZSBubyBkdXBsaWNhdGlvblxuICAgICAgICAgICAgbGV0IGFjdHVhbFZlcnRpY2VzID0gZ3JhcGguYWRqYWNlbnRWZXJ0aWNlcyhcImFcIik7XG4gICAgICAgICAgICBhY3R1YWxWZXJ0aWNlcy5mb3JFYWNoKChlbGVtLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmluZGV4T2YoZWxlbSkhPT1hcnIubGFzdEluZGV4T2YoZWxlbSkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQgYSBkaXJ0eSBkdXBsaWNhdGU6IFwiICsgZWxlbSArIFwiIGluIGFycmF5IFwiK2Fycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9zaG91bGQgYmUgbm8gc2VsZiBsb29wc1xuICAgICAgICAgICAgdmFyIGFjdHVhbFNhbWVWZXJ0ZXggPSBhY3R1YWxWZXJ0aWNlcy5maWx0ZXIocD0+cD09PVwiYVwiKTtcbiAgICAgICAgICAgIHRlc3Rlci5lcXVhbFRvKGFjdHVhbFNhbWVWZXJ0ZXgubGVuZ3RoLCAwLCBcInRoZSB2ZXJ0ZXggJ2EnIHNlbGYtbG9vcCB0ZXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4iXX0=