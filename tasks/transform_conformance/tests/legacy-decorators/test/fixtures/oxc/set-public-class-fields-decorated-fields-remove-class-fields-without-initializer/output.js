var _ref, _c2, _ref2;
let _a, _b, _c, _e;
class A {
  constructor() {
    this.z = 3;
    this[_c] = 6;
    this[_e] = 7;
    this["q"] = 8;
  }
  static {
    this.y = 1;
  }
  static {
    this[_a] = 4;
  }
  static [_ref = (_a = a(), _b = b())];
  static {
    this[_b] = 5;
  }
  [_c2 = _c = c()];
  static {
    this.w = this.y;
  }
  static [_ref2 = (_e = e(), f())];
  static {
    this[9] = 10;
  }
}
babelHelpers.decorate([dec], A.prototype, "z", void 0);
babelHelpers.decorate([dec], A.prototype, _c2, void 0);
babelHelpers.decorate([dec], A.prototype, "u", void 0);
babelHelpers.decorate([dec], A.prototype, "q", void 0);
babelHelpers.decorate([dec], A, "y", void 0);
babelHelpers.decorate([dec], A, _ref, void 0);
babelHelpers.decorate([dec], A, "w", void 0);
babelHelpers.decorate([dec], A, "v", void 0);
babelHelpers.decorate([dec], A, _ref2, void 0);
babelHelpers.decorate([dec], A, 9, void 0);
class B extends Base {
  static {
    this.x = 1;
  }
  constructor() {
    super();
    this.y = 2;
  }
}
babelHelpers.decorate([dec], B.prototype, "y", void 0);
babelHelpers.decorate([dec], B, "x", void 0);

