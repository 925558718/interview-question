let res=0-Number.MAX_VALUE;
var maxPathSum = function(root) {
    
    helper(root);
    return res;
    
};
function helper(node,obj){
    if(!node) return 0;
    let left=Math.max(helper(node.left),0);
    let right=Math.max(helper(node.right),0);
    res=Math.max(left+right+node.val,res);
    return Math.max(left,right)+node.val;
}
console.log(res);
