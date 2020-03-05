let res=0;
var dfs = function(gp_val,p_val,node) {
    if(!root) return;
    if(gp_val%2==0){
        res+=node.val;
    }
    dfs(p_val,node.val,node.left);
    dfs(p_val,node.val,node.right);
};
function sumEvenGrandparent(root){
    dfs(1,1,root)
    return res;
}