var MyStack = function () {
    this.q1 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.unshift(x)
    for(let i=0;i<this.q1.length-1;i++) {
        this.q1.unshift(this.q1[this.q1.length-1]);
        this.q1.pop();
        console.log(this.q1)
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q1.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[this.q1.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length===0
};

  var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
var param_3 = obj.top()
var param_4=obj.top();
  console.log(param_3,param_4)

//3 2 1
//4 1 2 3
