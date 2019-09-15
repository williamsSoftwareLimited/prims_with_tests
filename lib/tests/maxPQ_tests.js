"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxPQTests = void 0;

var _maxPQ = require("../data_structures/maxPQ");

var _fTester = require("./fTester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MaxPQTests =
/*#__PURE__*/
function () {
  function MaxPQTests() {
    _classCallCheck(this, MaxPQTests);
  }

  _createClass(MaxPQTests, null, [{
    key: "runTests",
    value: function runTests() {
      var pq = new _maxPQ.MaxPQ();
      _fTester.FTester.className = "PriorityQueue";

      _fTester.FTester.msg("PriorityQueue exists").is(pq).existing();

      _fTester.FTester.msg("Empty priority queue").is(pq.isEmpty()).equalTo(true);

      pq.insert("p");

      _fTester.FTester.msg("Non-empty priority queue").is(pq.isEmpty()).equalTo(false);

      pq.insert("q");
      pq.insert("e");

      _fTester.FTester.msg("Check the size").is(pq.size()).equalTo(3);

      _fTester.FTester.msg("The heap should have moved p below q").is(pq.delMax()).equalTo("q");

      _fTester.FTester.msg("Check the size").is(pq.size()).equalTo(2);

      pq.insert("q");
      pq.insert("z");
      pq.insert("t");

      _fTester.FTester.msg("The heap should have moved p below q").is(pq.delMax()).equalTo("z");

      _fTester.FTester.msg("Check the size").is(pq.size()).equalTo(4);
    }
  }]);

  return MaxPQTests;
}();

exports.MaxPQTests = MaxPQTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9tYXhQUV90ZXN0cy50cyJdLCJuYW1lcyI6WyJNYXhQUVRlc3RzIiwicHEiLCJNYXhQUSIsIkZUZXN0ZXIiLCJjbGFzc05hbWUiLCJtc2ciLCJpcyIsImV4aXN0aW5nIiwiaXNFbXB0eSIsImVxdWFsVG8iLCJpbnNlcnQiLCJzaXplIiwiZGVsTWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLFU7Ozs7Ozs7OzsrQkFDUztBQUNkLFVBQUlDLEVBQUUsR0FBRyxJQUFJQyxZQUFKLEVBQVQ7QUFDQUMsdUJBQVFDLFNBQVIsR0FBa0IsZUFBbEI7O0FBQ0FELHVCQUFRRSxHQUFSLENBQVksc0JBQVosRUFBb0NDLEVBQXBDLENBQXVDTCxFQUF2QyxFQUEyQ00sUUFBM0M7O0FBRUFKLHVCQUFRRSxHQUFSLENBQVksc0JBQVosRUFBb0NDLEVBQXBDLENBQXVDTCxFQUFFLENBQUNPLE9BQUgsRUFBdkMsRUFBcURDLE9BQXJELENBQTZELElBQTdEOztBQUVBUixNQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWOztBQUNBUCx1QkFBUUUsR0FBUixDQUFZLDBCQUFaLEVBQXdDQyxFQUF4QyxDQUEyQ0wsRUFBRSxDQUFDTyxPQUFILEVBQTNDLEVBQXlEQyxPQUF6RCxDQUFpRSxLQUFqRTs7QUFFQVIsTUFBQUEsRUFBRSxDQUFDUyxNQUFILENBQVUsR0FBVjtBQUNBVCxNQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWOztBQUNBUCx1QkFBUUUsR0FBUixDQUFZLGdCQUFaLEVBQThCQyxFQUE5QixDQUFpQ0wsRUFBRSxDQUFDVSxJQUFILEVBQWpDLEVBQTRDRixPQUE1QyxDQUFvRCxDQUFwRDs7QUFFQU4sdUJBQVFFLEdBQVIsQ0FBWSxzQ0FBWixFQUFvREMsRUFBcEQsQ0FBdURMLEVBQUUsQ0FBQ1csTUFBSCxFQUF2RCxFQUFvRUgsT0FBcEUsQ0FBNEUsR0FBNUU7O0FBQ0FOLHVCQUFRRSxHQUFSLENBQVksZ0JBQVosRUFBOEJDLEVBQTlCLENBQWlDTCxFQUFFLENBQUNVLElBQUgsRUFBakMsRUFBNENGLE9BQTVDLENBQW9ELENBQXBEOztBQUVBUixNQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWO0FBQ0FULE1BQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVLEdBQVY7QUFDQVQsTUFBQUEsRUFBRSxDQUFDUyxNQUFILENBQVUsR0FBVjs7QUFFQVAsdUJBQVFFLEdBQVIsQ0FBWSxzQ0FBWixFQUFvREMsRUFBcEQsQ0FBdURMLEVBQUUsQ0FBQ1csTUFBSCxFQUF2RCxFQUFvRUgsT0FBcEUsQ0FBNEUsR0FBNUU7O0FBQ0FOLHVCQUFRRSxHQUFSLENBQVksZ0JBQVosRUFBOEJDLEVBQTlCLENBQWlDTCxFQUFFLENBQUNVLElBQUgsRUFBakMsRUFBNENGLE9BQTVDLENBQW9ELENBQXBEO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXhQUSB9IGZyb20gXCIuLi9kYXRhX3N0cnVjdHVyZXMvbWF4UFFcIjtcbmltcG9ydCB7IEZUZXN0ZXIgfSBmcm9tIFwiLi9mVGVzdGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXhQUVRlc3RzIHtcbiAgICBzdGF0aWMgcnVuVGVzdHMgKCl7XG4gICAgICAgIHZhciBwcSA9IG5ldyBNYXhQUSgpO1xuICAgICAgICBGVGVzdGVyLmNsYXNzTmFtZT1cIlByaW9yaXR5UXVldWVcIjtcbiAgICAgICAgRlRlc3Rlci5tc2coXCJQcmlvcml0eVF1ZXVlIGV4aXN0c1wiKS5pcyhwcSkuZXhpc3RpbmcoKTtcblxuICAgICAgICBGVGVzdGVyLm1zZyhcIkVtcHR5IHByaW9yaXR5IHF1ZXVlXCIpLmlzKHBxLmlzRW1wdHkoKSkuZXF1YWxUbyh0cnVlKTtcblxuICAgICAgICBwcS5pbnNlcnQoXCJwXCIpO1xuICAgICAgICBGVGVzdGVyLm1zZyhcIk5vbi1lbXB0eSBwcmlvcml0eSBxdWV1ZVwiKS5pcyhwcS5pc0VtcHR5KCkpLmVxdWFsVG8oZmFsc2UpO1xuXG4gICAgICAgIHBxLmluc2VydChcInFcIik7XG4gICAgICAgIHBxLmluc2VydChcImVcIik7XG4gICAgICAgIEZUZXN0ZXIubXNnKFwiQ2hlY2sgdGhlIHNpemVcIikuaXMocHEuc2l6ZSgpKS5lcXVhbFRvKDMpO1xuXG4gICAgICAgIEZUZXN0ZXIubXNnKFwiVGhlIGhlYXAgc2hvdWxkIGhhdmUgbW92ZWQgcCBiZWxvdyBxXCIpLmlzKHBxLmRlbE1heCgpKS5lcXVhbFRvKFwicVwiKTtcbiAgICAgICAgRlRlc3Rlci5tc2coXCJDaGVjayB0aGUgc2l6ZVwiKS5pcyhwcS5zaXplKCkpLmVxdWFsVG8oMik7XG5cbiAgICAgICAgcHEuaW5zZXJ0KFwicVwiKTtcbiAgICAgICAgcHEuaW5zZXJ0KFwielwiKTtcbiAgICAgICAgcHEuaW5zZXJ0KFwidFwiKTtcblxuICAgICAgICBGVGVzdGVyLm1zZyhcIlRoZSBoZWFwIHNob3VsZCBoYXZlIG1vdmVkIHAgYmVsb3cgcVwiKS5pcyhwcS5kZWxNYXgoKSkuZXF1YWxUbyhcInpcIik7XG4gICAgICAgIEZUZXN0ZXIubXNnKFwiQ2hlY2sgdGhlIHNpemVcIikuaXMocHEuc2l6ZSgpKS5lcXVhbFRvKDQpO1xuICAgIH1cbn0iXX0=