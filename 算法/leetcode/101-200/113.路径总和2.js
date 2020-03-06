let res=[];

var pathSum = function(root, sum) {
    help(root,sum,[]);
    return res;
};
function help(root,sum,out){
    if(!root) return false;
    if(sum-root.val==0&&!root.left&&!root.right){
        res.push(out);
        return;
    }
    hasPathSum(root.left,sum-root.val,out.concat(root.val));
    hasPathSum(root.right,sum-root.val,out.concat(root.val));
}