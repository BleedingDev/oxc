var _b, _c2, _f, _A;
let _c, _e, _a, _b2;
_a = a();
_b2 = _b = b();
_c2 = _c = c();
_e = e();
_f = f();
class A {
  constructor() {
    this.z = 3;
    this[_c] = 6;
    this[_e] = 7;
  }
}
_A = A;
A.y = 1;
A[_a] = 4;
A[_b2] = 5;
A.w = _A.y;
babelHelpers.decorate([dec], A.prototype, "z", void 0);
babelHelpers.decorate([dec], A.prototype, _c2, void 0);
babelHelpers.decorate([dec], A.prototype, "u", void 0);
babelHelpers.decorate([dec], A, "y", void 0);
babelHelpers.decorate([dec], A, _b, void 0);
babelHelpers.decorate([dec], A, "w", void 0);
babelHelpers.decorate([dec], A, "v", void 0);
babelHelpers.decorate([dec], A, _f, void 0);
class B extends Base {
  constructor() {
    super();
    this.y = 2;
  }
}
B.x = 1;
babelHelpers.decorate([dec], B.prototype, "y", void 0);
babelHelpers.decorate([dec], B, "x", void 0);

