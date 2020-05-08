// /**
//  * Initialize your data structure here.
//  */
// var MyStack = function() {
//     this.q=[];
// };

// /**
//  * Push element x onto stack. 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.q.push(x);
//     for(let i=0;i<this.q.length-1;i++){
//         this.q.push(q[0]);this.q.shift()
//     }
// };

// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//     return this.q.shift();
//     
// };

// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     return q[0];
// };

// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return this.q.length==0;
// };

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q2.push(x);
    while(this.q2.length>1){
        this.q1.push(this.q2.shift());
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let x=this.top();this.q2.shift();
    return x;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.q2.length==0){
        for(let i=0;i<this.q1.length-1;i++){
            this.q1.push(this.q1.shift());
        }
        this.q2.push(this.q1.shift());
    }
    return this.q2[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length==0&&this.q2.length==0;
};