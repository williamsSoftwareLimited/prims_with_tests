"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxPQ = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MaxPQ =
/*#__PURE__*/
function () {
  function MaxPQ() {
    _classCallCheck(this, MaxPQ);

    _defineProperty(this, "pq", []);

    this.pq.push(""); //index zero isn't used
  }

  _createClass(MaxPQ, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.pq.length == 1;
    }
  }, {
    key: "size",
    value: function size() {
      return this.pq.length - 1;
    }
  }, {
    key: "insert",
    value: function insert(v) {
      this.pq.push(v);
      this.swim();
    }
  }, {
    key: "delMax",
    value: function delMax() {
      console.log("delMax() max is ".concat(this.pq[1]));
      var max = this.pq[1];
      console.log("exchanging 1 and ".concat(this.size()));
      this.exch(1, this.size());
      this.pq.pop();
      this.sink(1);
      return max;
    }
  }, {
    key: "less",
    value: function less(i, j) {
      console.log("less is " + (this.pq[i] < this.pq[j]) + " for " + this.pq[i] + " and " + this.pq[j]);
      return this.pq[i] < this.pq[j];
    }
  }, {
    key: "exch",
    value: function exch(i, j) {
      var t = this.pq[i];
      this.pq[i] = this.pq[j];
      this.pq[j] = t;
    }
  }, {
    key: "swim",
    value: function swim() {
      var k = this.size();
      console.log("swim: pq length is ".concat(this.pq.length));

      while (k > 1 && this.less(Math.floor(k / 2), k)) {
        this.exch(Math.floor(k / 2), k);
        k = Math.floor(k / 2);
      }
    }
  }, {
    key: "sink",
    value: function sink(k) {
      while (2 * k <= this.size()) {
        var j = 2 * k;
        if (j < this.size() && this.less(j, j + 1)) j++;
        if (!this.less(k, j)) break;
        k = j;
      }
    }
  }]);

  return MaxPQ;
}();

exports.MaxPQ = MaxPQ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhX3N0cnVjdHVyZXMvbWF4UFEudHMiXSwibmFtZXMiOlsiTWF4UFEiLCJwcSIsInB1c2giLCJsZW5ndGgiLCJ2Iiwic3dpbSIsImNvbnNvbGUiLCJsb2ciLCJtYXgiLCJzaXplIiwiZXhjaCIsInBvcCIsInNpbmsiLCJpIiwiaiIsInQiLCJrIiwibGVzcyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEs7OztBQUVULG1CQUFhO0FBQUE7O0FBQUEsZ0NBRFUsRUFDVjs7QUFDVCxTQUFLQyxFQUFMLENBQVFDLElBQVIsQ0FBYSxFQUFiLEVBRFMsQ0FDUztBQUNyQjs7Ozs4QkFDeUI7QUFDdEIsYUFBTyxLQUFLRCxFQUFMLENBQVFFLE1BQVIsSUFBZ0IsQ0FBdkI7QUFDSDs7OzJCQUNxQjtBQUNsQixhQUFPLEtBQUtGLEVBQUwsQ0FBUUUsTUFBUixHQUFlLENBQXRCO0FBQ0g7OzsyQkFDYUMsQyxFQUFXO0FBQ3JCLFdBQUtILEVBQUwsQ0FBUUMsSUFBUixDQUFhRSxDQUFiO0FBQ0EsV0FBS0MsSUFBTDtBQUNIOzs7NkJBQ3VCO0FBQ3BCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsMkJBQStCLEtBQUtOLEVBQUwsQ0FBUSxDQUFSLENBQS9CO0FBQ0EsVUFBSU8sR0FBRyxHQUFHLEtBQUtQLEVBQUwsQ0FBUSxDQUFSLENBQVY7QUFDQUssTUFBQUEsT0FBTyxDQUFDQyxHQUFSLDRCQUFnQyxLQUFLRSxJQUFMLEVBQWhDO0FBQ0EsV0FBS0MsSUFBTCxDQUFVLENBQVYsRUFBYSxLQUFLRCxJQUFMLEVBQWI7QUFDQSxXQUFLUixFQUFMLENBQVFVLEdBQVI7QUFDQSxXQUFLQyxJQUFMLENBQVUsQ0FBVjtBQUNBLGFBQU9KLEdBQVA7QUFDSDs7O3lCQUNZSyxDLEVBQVdDLEMsRUFBVTtBQUM5QlIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWSxLQUFLTixFQUFMLENBQVFZLENBQVIsSUFBVyxLQUFLWixFQUFMLENBQVFhLENBQVIsQ0FBdkIsSUFBbUMsT0FBbkMsR0FBMkMsS0FBS2IsRUFBTCxDQUFRWSxDQUFSLENBQTNDLEdBQXNELE9BQXRELEdBQThELEtBQUtaLEVBQUwsQ0FBUWEsQ0FBUixDQUExRTtBQUNBLGFBQU8sS0FBS2IsRUFBTCxDQUFRWSxDQUFSLElBQVcsS0FBS1osRUFBTCxDQUFRYSxDQUFSLENBQWxCO0FBQ0g7Ozt5QkFDWUQsQyxFQUFXQyxDLEVBQVU7QUFDOUIsVUFBSUMsQ0FBQyxHQUFHLEtBQUtkLEVBQUwsQ0FBUVksQ0FBUixDQUFSO0FBQ0EsV0FBS1osRUFBTCxDQUFRWSxDQUFSLElBQWEsS0FBS1osRUFBTCxDQUFRYSxDQUFSLENBQWI7QUFDQSxXQUFLYixFQUFMLENBQVFhLENBQVIsSUFBYUMsQ0FBYjtBQUNIOzs7MkJBQ2M7QUFDWCxVQUFJQyxDQUFDLEdBQUcsS0FBS1AsSUFBTCxFQUFSO0FBQ0FILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUiw4QkFBa0MsS0FBS04sRUFBTCxDQUFRRSxNQUExQzs7QUFDQSxhQUFNYSxDQUFDLEdBQUMsQ0FBRixJQUFPLEtBQUtDLElBQUwsQ0FBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsR0FBQyxDQUFiLENBQVYsRUFBMkJBLENBQTNCLENBQWIsRUFBMkM7QUFDdkMsYUFBS04sSUFBTCxDQUFVUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxHQUFDLENBQWIsQ0FBVixFQUEyQkEsQ0FBM0I7QUFDQUEsUUFBQUEsQ0FBQyxHQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxHQUFDLENBQWIsQ0FBRjtBQUNIO0FBQ0o7Ozt5QkFDWUEsQyxFQUFVO0FBQ25CLGFBQU0sSUFBRUEsQ0FBRixJQUFPLEtBQUtQLElBQUwsRUFBYixFQUF5QjtBQUNyQixZQUFJSyxDQUFDLEdBQUcsSUFBRUUsQ0FBVjtBQUNBLFlBQUlGLENBQUMsR0FBRyxLQUFLTCxJQUFMLEVBQUosSUFBbUIsS0FBS1EsSUFBTCxDQUFVSCxDQUFWLEVBQWFBLENBQUMsR0FBQyxDQUFmLENBQXZCLEVBQTBDQSxDQUFDO0FBQzNDLFlBQUksQ0FBQyxLQUFLRyxJQUFMLENBQVVELENBQVYsRUFBYUYsQ0FBYixDQUFMLEVBQXNCO0FBQ3RCRSxRQUFBQSxDQUFDLEdBQUdGLENBQUo7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1heFBRIHtcbiAgICBwcml2YXRlIHBxOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHEucHVzaChcIlwiKTsgLy9pbmRleCB6ZXJvIGlzbid0IHVzZWRcbiAgICB9XG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBxLmxlbmd0aD09MTtcbiAgICB9XG4gICAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHEubGVuZ3RoLTE7XG4gICAgfVxuICAgIHB1YmxpYyBpbnNlcnQodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHEucHVzaCh2KTsgICAgICAgIFxuICAgICAgICB0aGlzLnN3aW0oKTtcbiAgICB9XG4gICAgcHVibGljIGRlbE1heCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZyhgZGVsTWF4KCkgbWF4IGlzICR7dGhpcy5wcVsxXX1gKTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMucHFbMV07XG4gICAgICAgIGNvbnNvbGUubG9nKGBleGNoYW5naW5nIDEgYW5kICR7dGhpcy5zaXplKCl9YCk7XG4gICAgICAgIHRoaXMuZXhjaCgxLCB0aGlzLnNpemUoKSk7XG4gICAgICAgIHRoaXMucHEucG9wKCk7XG4gICAgICAgIHRoaXMuc2luaygxKTtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgcHJpdmF0ZSBsZXNzKGk6IG51bWJlciwgajogbnVtYmVyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXNzIGlzIFwiKyh0aGlzLnBxW2ldPHRoaXMucHFbal0pK1wiIGZvciBcIit0aGlzLnBxW2ldK1wiIGFuZCBcIit0aGlzLnBxW2pdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHFbaV08dGhpcy5wcVtqXTtcbiAgICB9XG4gICAgcHJpdmF0ZSBleGNoKGk6IG51bWJlciwgajogbnVtYmVyKXtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnBxW2ldO1xuICAgICAgICB0aGlzLnBxW2ldID0gdGhpcy5wcVtqXTtcbiAgICAgICAgdGhpcy5wcVtqXSA9IHQ7XG4gICAgfVxuICAgIHByaXZhdGUgc3dpbSgpIHtcbiAgICAgICAgdmFyIGsgPSB0aGlzLnNpemUoKTtcbiAgICAgICAgY29uc29sZS5sb2coYHN3aW06IHBxIGxlbmd0aCBpcyAke3RoaXMucHEubGVuZ3RofWApO1xuICAgICAgICB3aGlsZShrPjEgJiYgdGhpcy5sZXNzKE1hdGguZmxvb3Ioay8yKSwgaykpe1xuICAgICAgICAgICAgdGhpcy5leGNoKE1hdGguZmxvb3Ioay8yKSwgayk7XG4gICAgICAgICAgICBrPU1hdGguZmxvb3Ioay8yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNpbmsoazogbnVtYmVyKXtcbiAgICAgICAgd2hpbGUoMiprIDw9IHRoaXMuc2l6ZSgpKXtcbiAgICAgICAgICAgIHZhciBqID0gMiprO1xuICAgICAgICAgICAgaWYgKGogPCB0aGlzLnNpemUoKSAmJiB0aGlzLmxlc3MoaiwgaisxKSkgaisrO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxlc3MoaywgaikpIGJyZWFrO1xuICAgICAgICAgICAgayA9IGo7XG4gICAgICAgIH1cbiAgICB9XG59Il19