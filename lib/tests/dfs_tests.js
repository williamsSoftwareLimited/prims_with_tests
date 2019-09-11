"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DfsTests = void 0;

var _graph = require("../graph/graph");

var _fTester = require("./fTester");

var _depthFirstSearch = require("../graph/depthFirstSearch");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DfsTests =
/*#__PURE__*/
function () {
  function DfsTests() {
    _classCallCheck(this, DfsTests);
  }

  _createClass(DfsTests, null, [{
    key: "runTests",
    value: function runTests() {
      var graph = new _graph.Graph();
      graph.constructGraph(this.graphJson);
      console.log(graph.toString());
      _fTester.FTester.className = "BfsTests";

      _fTester.FTester.msg("Edge Test").is(graph.numberOfEdges).equalTo(8);

      var dfs = new _depthFirstSearch.DepthFirstSearch(graph, "a");
    }
  }]);

  return DfsTests;
}();

exports.DfsTests = DfsTests;

_defineProperty(DfsTests, "graphJson", {
  "edges": [{
    "fromVertex": "a",
    "toVertex": "b"
  }, {
    "fromVertex": "a",
    "toVertex": "c"
  }, {
    "fromVertex": "a",
    "toVertex": "f"
  }, {
    "fromVertex": "b",
    "toVertex": "c"
  }, {
    "fromVertex": "c",
    "toVertex": "d"
  }, {
    "fromVertex": "c",
    "toVertex": "e"
  }, {
    "fromVertex": "d",
    "toVertex": "e"
  }, {
    "fromVertex": "d",
    "toVertex": "f"
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9kZnNfdGVzdHMudHMiXSwibmFtZXMiOlsiRGZzVGVzdHMiLCJncmFwaCIsIkdyYXBoIiwiY29uc3RydWN0R3JhcGgiLCJncmFwaEpzb24iLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJGVGVzdGVyIiwiY2xhc3NOYW1lIiwibXNnIiwiaXMiLCJudW1iZXJPZkVkZ2VzIiwiZXF1YWxUbyIsImRmcyIsIkRlcHRoRmlyc3RTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSxROzs7Ozs7Ozs7K0JBYVM7QUFDZCxVQUFJQyxLQUFLLEdBQUcsSUFBSUMsWUFBSixFQUFaO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixLQUFLQyxTQUExQjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDTSxRQUFOLEVBQVo7QUFDQUMsdUJBQVFDLFNBQVIsR0FBbUIsVUFBbkI7O0FBQ0FELHVCQUFRRSxHQUFSLENBQVksV0FBWixFQUF5QkMsRUFBekIsQ0FBNEJWLEtBQUssQ0FBQ1csYUFBbEMsRUFBaURDLE9BQWpELENBQXlELENBQXpEOztBQUVBLFVBQUlDLEdBQUcsR0FBRyxJQUFJQyxrQ0FBSixDQUFxQmQsS0FBckIsRUFBNEIsR0FBNUIsQ0FBVjtBQUNIOzs7Ozs7OztnQkFyQlFELFEsZUFDa0I7QUFDdkIsV0FBUyxDQUNMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FESyxFQUVMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FGSyxFQUdMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FISyxFQUlMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FKSyxFQUtMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FMSyxFQU1MO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FOSyxFQU9MO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FQSyxFQVFMO0FBQUMsa0JBQWUsR0FBaEI7QUFBcUIsZ0JBQWE7QUFBbEMsR0FSSztBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuLi9ncmFwaC9ncmFwaFwiO1xuaW1wb3J0IHsgRlRlc3RlciB9IGZyb20gXCIuL2ZUZXN0ZXJcIjtcbmltcG9ydCB7IERlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi4vZ3JhcGgvZGVwdGhGaXJzdFNlYXJjaFwiO1xuXG5leHBvcnQgY2xhc3MgRGZzVGVzdHMge1xuICAgIHByaXZhdGUgc3RhdGljIGdyYXBoSnNvbiA9IHtcbiAgICAgICAgXCJlZGdlc1wiOiBbXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImFcIiwgXCJ0b1ZlcnRleFwiIDogXCJiXCJ9LFxuICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJhXCIsIFwidG9WZXJ0ZXhcIiA6IFwiY1wifSxcbiAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiYVwiLCBcInRvVmVydGV4XCIgOiBcImZcIn0sXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImJcIiwgXCJ0b1ZlcnRleFwiIDogXCJjXCJ9LFxuICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJjXCIsIFwidG9WZXJ0ZXhcIiA6IFwiZFwifSxcbiAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiY1wiLCBcInRvVmVydGV4XCIgOiBcImVcIn0sXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImRcIiwgXCJ0b1ZlcnRleFwiIDogXCJlXCJ9LFxuICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJkXCIsIFwidG9WZXJ0ZXhcIiA6IFwiZlwifVxuICAgICAgICBdXG4gICAgfTtcbiAgICBzdGF0aWMgcnVuVGVzdHMgKCl7XG4gICAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCgpO1xuICAgICAgICBncmFwaC5jb25zdHJ1Y3RHcmFwaCh0aGlzLmdyYXBoSnNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoLnRvU3RyaW5nKCkpO1xuICAgICAgICBGVGVzdGVyLmNsYXNzTmFtZT0oXCJCZnNUZXN0c1wiKTtcbiAgICAgICAgRlRlc3Rlci5tc2coXCJFZGdlIFRlc3RcIikuaXMoZ3JhcGgubnVtYmVyT2ZFZGdlcykuZXF1YWxUbyg4KTtcblxuICAgICAgICB2YXIgZGZzID0gbmV3IERlcHRoRmlyc3RTZWFyY2goZ3JhcGgsIFwiYVwiKTtcbiAgICB9XG59Il19