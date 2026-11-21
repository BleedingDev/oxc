class A {
  @dec static y = 1;
  @dec z = 3;
  static [a()] = 4;
  @dec static [b()] = 5;
  @dec [c()] = 6;
  @dec static w = this.y;
  @dec static v;
  @dec u;
  [e()] = 7;
  @dec static [f()];
}

class B extends Base {
  @dec static x = 1;
  @dec y = 2;
  constructor() {
    super();
  }
}
