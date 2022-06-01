var MyQueue = function () {
    this.s1 = []
    this.s2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.empty()) {
        return -1
    } else {
        this.peek();
        return this.s2.pop();
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    }
    console.log(this.s2)
    return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length ===0
};


var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.pop();
obj.push(5)

console.log(obj.pop())

