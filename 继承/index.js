function sub() {
  this.b = 2;
}
function superOb() {
  this.a = 1;
}

sub.prototype = new superOb();

function sub() {
  superOb.call(this);
}
function superOb() {}

function sub() {
  superOb.call(this);
}
function superOb() {}
sub.prototype = new superOb();
sub.prototype.constructor == sub;

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function create(ori) {
  var o = Object.create(ori);
  o.sayHello = function () {};
  return o;
}

function sub() {
  superOb.call(this);
}
function superOb() {}
sub.prototype = Object.create(superOb.prototype);
