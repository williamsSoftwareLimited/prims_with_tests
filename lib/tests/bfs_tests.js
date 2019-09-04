"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BfsTests = void 0;

var _graph = require("../graph/graph");

var _fTester = require("./fTester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BfsTests =
/*#__PURE__*/
function () {
  function BfsTests() {
    _classCallCheck(this, BfsTests);
  }

  _createClass(BfsTests, null, [{
    key: "runTests",
    value: function runTests() {
      var graph = new _graph.Graph();
      graph.constructGraph(this.graphJson);
      console.log(graph.toString());
      _fTester.FTester.className = "BfsTests";

      _fTester.FTester.msg("Edge Test").is(graph.numberOfEdges).equalTo(8);
    }
  }]);

  return BfsTests;
}();

exports.BfsTests = BfsTests;

_defineProperty(BfsTests, "graphJson", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9iZnNfdGVzdHMudHMiXSwibmFtZXMiOlsiQmZzVGVzdHMiLCJncmFwaCIsIkdyYXBoIiwiY29uc3RydWN0R3JhcGgiLCJncmFwaEpzb24iLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJGVGVzdGVyIiwiY2xhc3NOYW1lIiwibXNnIiwiaXMiLCJudW1iZXJPZkVkZ2VzIiwiZXF1YWxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBLFE7Ozs7Ozs7OzsrQkFhUztBQUNkLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxZQUFKLEVBQVo7QUFDQUQsTUFBQUEsS0FBSyxDQUFDRSxjQUFOLENBQXFCLEtBQUtDLFNBQTFCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNNLFFBQU4sRUFBWjtBQUNBQyx1QkFBUUMsU0FBUixHQUFtQixVQUFuQjs7QUFDQUQsdUJBQVFFLEdBQVIsQ0FBWSxXQUFaLEVBQXlCQyxFQUF6QixDQUE0QlYsS0FBSyxDQUFDVyxhQUFsQyxFQUFpREMsT0FBakQsQ0FBeUQsQ0FBekQ7QUFFSDs7Ozs7Ozs7Z0JBcEJRYixRLGVBQ2tCO0FBQ3ZCLFdBQVMsQ0FDTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBREssRUFFTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBRkssRUFHTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBSEssRUFJTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBSkssRUFLTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBTEssRUFNTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBTkssRUFPTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBUEssRUFRTDtBQUFDLGtCQUFlLEdBQWhCO0FBQXFCLGdCQUFhO0FBQWxDLEdBUks7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwiLi4vZ3JhcGgvZ3JhcGhcIjtcbmltcG9ydCB7IEZUZXN0ZXIgfSBmcm9tIFwiLi9mVGVzdGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBCZnNUZXN0cyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ3JhcGhKc29uID0ge1xuICAgICAgICBcImVkZ2VzXCI6IFtcbiAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiYVwiLCBcInRvVmVydGV4XCIgOiBcImJcIn0sXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImFcIiwgXCJ0b1ZlcnRleFwiIDogXCJjXCJ9LFxuICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJhXCIsIFwidG9WZXJ0ZXhcIiA6IFwiZlwifSxcbiAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiYlwiLCBcInRvVmVydGV4XCIgOiBcImNcIn0sXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImNcIiwgXCJ0b1ZlcnRleFwiIDogXCJkXCJ9LFxuICAgICAgICAgICAge1wiZnJvbVZlcnRleFwiIDogXCJjXCIsIFwidG9WZXJ0ZXhcIiA6IFwiZVwifSxcbiAgICAgICAgICAgIHtcImZyb21WZXJ0ZXhcIiA6IFwiZFwiLCBcInRvVmVydGV4XCIgOiBcImVcIn0sXG4gICAgICAgICAgICB7XCJmcm9tVmVydGV4XCIgOiBcImRcIiwgXCJ0b1ZlcnRleFwiIDogXCJmXCJ9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIHN0YXRpYyBydW5UZXN0cyAoKXtcbiAgICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgIGdyYXBoLmNvbnN0cnVjdEdyYXBoKHRoaXMuZ3JhcGhKc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coZ3JhcGgudG9TdHJpbmcoKSk7XG4gICAgICAgIEZUZXN0ZXIuY2xhc3NOYW1lPShcIkJmc1Rlc3RzXCIpO1xuICAgICAgICBGVGVzdGVyLm1zZyhcIkVkZ2UgVGVzdFwiKS5pcyhncmFwaC5udW1iZXJPZkVkZ2VzKS5lcXVhbFRvKDgpO1xuXG4gICAgfVxufSJdfQ==