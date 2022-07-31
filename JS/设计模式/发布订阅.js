class EventEmmttier {
  constructor() {
    this.pool = {};
  }
  add(name, fn) {
    if (this.pool[name]) {
      this.pool[name].push(fn);
    } else {
      this.pool[name] = [fn];
    }
  }
  emit(name) {
    this.pool.forEach((item) => {
      item();
    });
  }
  delete(name) {
    this.pool[name] = [];
  }
  once(name, fn) {
    let realFn = () => {
      fn();
      this.pool[name].filter = (item) => {
        return item.once !== name;
      };
    };
    realFn.once = name;
    this.emit(name, realFn);
  }
}
