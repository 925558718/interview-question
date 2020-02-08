var rightSideView = function(root) {
    let res=[];
    help(root,0,res)
};
function help(root,level,res){
    if(!root) return;
    if(res.length==level) res.push(root.val);
    help(root.right,level+1,res);
    help(root.left,level+1,res);
}