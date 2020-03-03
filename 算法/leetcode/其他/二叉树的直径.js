
var diameterOfBinaryTree = function(root) {
    let res={a:0};
    help(root,res);
    return res;
};
function help(root,res){
    if(!root) return 0;
    let left=diameterOfBinaryTree(root.left);
    let right=diameterOfBinaryTree(root.right);
    res.a=Math.max(res.a,left+right)
    return Math.max(left,right)+1;
}