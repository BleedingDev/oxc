var _ref, _c2, _f;
let _a, _b, _c, _e;
class A {
  constructor() {
    this.z = 3;
    this[_c] = 6;
    this[_e] = 7;
    this["q"] = 8;
  }
  static y;
  static {
    this.y = 1;
  }
  z;
  static {
    this[_a] = 4;
  }
  static [_ref = (_a = a(), _b = b())];
  static {
    this[_b] = 5;
  }
  [_c2 = _c = c()];
  static w;
  static {
    this.w = this.y;
  }
  static v;
  u;
  [_e = e()];
  static [_f = f()];
  "q";
  static 9;
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
babelHelpers.decorate([dec], A, _f, void 0);
babelHelpers.decorate([dec], A, 9, void 0);
class B extends Base {
  static x;
  static {
    this.x = 1;
  }
  y;
  constructor() {
    super();
    this.y = 2;
  }
}
babelHelpers.decorate([dec], B.prototype, "y", void 0);
babelHelpers.decorate([dec], B, "x", void 0);

