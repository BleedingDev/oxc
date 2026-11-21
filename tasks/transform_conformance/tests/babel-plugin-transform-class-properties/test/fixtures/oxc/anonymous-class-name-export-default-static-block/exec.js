// Static blocks run after the class is defined, including its heritage.
const log = [];
export default class extends (log.push("heritage"), Object) {
  static {
    log.push("block");
  }
  static {
    log.push(this.name);
  }
}

expect(log).toEqual(["heritage", "block", "default"]);
