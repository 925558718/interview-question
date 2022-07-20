function InstanceFactor(fn) {
  let instance = null;
  return () => {
    if (instance) return instance;
    instance = new fn();
    return instance;
  };
}
let getInstance = InstanceFactor(function () {
  this.a = 1;
});
let instance = getInstance();
let instance2 = getInstance();
console.log(instance === instance2);
