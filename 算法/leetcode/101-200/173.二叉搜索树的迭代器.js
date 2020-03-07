var BSTIterator = function(root) {
    this.count=1;
    this.res=[];
    that=this;
    function order(root,res){
        if(!root) return;
        order(root.left,res);
        res.push(root.val);
        order(root.right,res);
    }
    order(root,this.res)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.res[this.count++];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.count<this.res.length;
};
