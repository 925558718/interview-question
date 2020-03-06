let res=-Number.MAX_VALUE;
var maxPathSum = function(root) {
    help(root,res);
    return res;
};
function help(root,res){
    if(!root) return 0;
    let left=Math.max(help(root.left,0));
    let right=Math.max(help(root.right,0));
    res=Math.max(root.val+left+right,res);
    return Math.max(left,right)+root.val;
}
