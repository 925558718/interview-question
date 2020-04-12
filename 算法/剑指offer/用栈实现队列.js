/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1=[];
    this.s2=[];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length==0){
        while(this.s1.length!=0){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length!=0) return this.s2[this.s2.length-1]
    return this.s1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length==0&&this.s2.length==0;
};


 
let queue = new MyQueue();

queue.push(1);
queue.push(2);  
console.log(queue.peek());
 // 返回 1
console.log(queue.pop());
  // 返回 1
console.log(queue.empty());



 