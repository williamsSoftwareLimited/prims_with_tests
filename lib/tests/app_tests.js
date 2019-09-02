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
      graph.addEdge(1, 3);
      graph.addEdge(5, 1);
      tester.compareNumber(graph.numberOfEdges, 2, "Edge number test");
      graph.addEdge(1, 2);
      graph.addEdge(1, 4);
      tester.compareArray(graph.adjacentVertices(1), [3, 2, 4], "Vertices test");
    }
  }]);

  return AppTests;
}();

exports.AppTests = AppTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hcHBfdGVzdHMudHMiXSwibmFtZXMiOlsiQXBwVGVzdHMiLCJncmFwaCIsIkdyYXBoIiwidGVzdGVyIiwiVGVzdGVyIiwiYWRkRWRnZSIsImNvbXBhcmVOdW1iZXIiLCJudW1iZXJPZkVkZ2VzIiwiY29tcGFyZUFycmF5IiwiYWRqYWNlbnRWZXJ0aWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVpQkEsUTs7Ozs7Ozs7OytCQUVHO0FBQ1IsVUFBSUMsS0FBSyxHQUFHLElBQUlDLFlBQUosRUFBWjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxJQUFJQyxjQUFKLENBQVcsT0FBWCxDQUFiO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDQUosTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUVBRixNQUFBQSxNQUFNLENBQUNHLGFBQVAsQ0FBcUJMLEtBQUssQ0FBQ00sYUFBM0IsRUFBMEMsQ0FBMUMsRUFBNkMsa0JBQTdDO0FBRUFOLE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDQUosTUFBQUEsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUVBRixNQUFBQSxNQUFNLENBQUNLLFlBQVAsQ0FBb0JQLEtBQUssQ0FBQ1EsZ0JBQU4sQ0FBdUIsQ0FBdkIsQ0FBcEIsRUFBK0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBL0MsRUFBMEQsZUFBMUQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlcnRleFRlc3RzIH0gZnJvbSBcIi4vdmVydGV4X3Rlc3RzXCI7XG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuLi9ncmFwaC9ncmFwaFwiO1xuaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4vdGVzdGVyXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQXBwVGVzdHMge1xuXG4gICAgICAgIHJ1blRlc3RzICgpIHtcbiAgICAgICAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCgpO1xuICAgICAgICAgICAgdmFyIHRlc3RlciA9IG5ldyBUZXN0ZXIoXCJHcmFwaFwiKTtcbiAgICAgICAgICAgIGdyYXBoLmFkZEVkZ2UoMSwgMyk7XG4gICAgICAgICAgICBncmFwaC5hZGRFZGdlKDUsIDEpO1xuXG4gICAgICAgICAgICB0ZXN0ZXIuY29tcGFyZU51bWJlcihncmFwaC5udW1iZXJPZkVkZ2VzLCAyLCBcIkVkZ2UgbnVtYmVyIHRlc3RcIik7XG5cbiAgICAgICAgICAgIGdyYXBoLmFkZEVkZ2UoMSwgMik7XG4gICAgICAgICAgICBncmFwaC5hZGRFZGdlKDEsIDQpO1xuXG4gICAgICAgICAgICB0ZXN0ZXIuY29tcGFyZUFycmF5KGdyYXBoLmFkamFjZW50VmVydGljZXMoMSksIFszLCAyLCA0XSwgXCJWZXJ0aWNlcyB0ZXN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4iXX0=