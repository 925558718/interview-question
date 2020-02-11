/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.s1=[];
    this.s2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.s1.push(x);
    if(x>this.s2[this.s2.length-1]){
        this.s2.push(this.s2[this.s2.length-1])
    }else{
        this.s2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop();
    this.s2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.s1.length==0) return -1;
    return this.s1[this.s1.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2[this.s2.length-1]
};



let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin() );

minStack.pop();
console.log(minStack.top());

   
console.log(minStack.getMin());



