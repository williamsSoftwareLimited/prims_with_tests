"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriorityQueueTests = void 0;

var _priorityQueue = require("../data_structures/priorityQueue");

var _fTester = require("./fTester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PriorityQueueTests =
/*#__PURE__*/
function () {
  function PriorityQueueTests() {
    _classCallCheck(this, PriorityQueueTests);
  }

  _createClass(PriorityQueueTests, null, [{
    key: "runTests",
    value: function runTests() {
      var pq = new _priorityQueue.PriorityQueue();
      _fTester.FTester.className = "PriorityQueue";

      _fTester.FTester.msg("PriorityQueue exists").is(pq).existing();
    }
  }]);

  return PriorityQueueTests;
}();

exports.PriorityQueueTests = PriorityQueueTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9wcmlvcml0eVF1ZXVlX3Rlc3RzLnRzIl0sIm5hbWVzIjpbIlByaW9yaXR5UXVldWVUZXN0cyIsInBxIiwiUHJpb3JpdHlRdWV1ZSIsIkZUZXN0ZXIiLCJjbGFzc05hbWUiLCJtc2ciLCJpcyIsImV4aXN0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLGtCOzs7Ozs7Ozs7K0JBQ1M7QUFDZCxVQUFJQyxFQUFFLEdBQUcsSUFBSUMsNEJBQUosRUFBVDtBQUNBQyx1QkFBUUMsU0FBUixHQUFrQixlQUFsQjs7QUFDQUQsdUJBQVFFLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0MsRUFBcEMsQ0FBdUNMLEVBQXZDLEVBQTJDTSxRQUEzQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi9kYXRhX3N0cnVjdHVyZXMvcHJpb3JpdHlRdWV1ZVwiO1xuaW1wb3J0IHsgRlRlc3RlciB9IGZyb20gXCIuL2ZUZXN0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWVUZXN0cyB7XG4gICAgc3RhdGljIHJ1blRlc3RzICgpe1xuICAgICAgICB2YXIgcHEgPSBuZXcgUHJpb3JpdHlRdWV1ZSgpO1xuICAgICAgICBGVGVzdGVyLmNsYXNzTmFtZT1cIlByaW9yaXR5UXVldWVcIjtcbiAgICAgICAgRlRlc3Rlci5tc2coXCJQcmlvcml0eVF1ZXVlIGV4aXN0c1wiKS5pcyhwcSkuZXhpc3RpbmcoKTtcbiAgICB9XG59Il19