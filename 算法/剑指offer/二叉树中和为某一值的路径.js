function FindPath(root, expectNumber)
{
    // write code here
    let res=[];
    help(root,expectNumber,[],res);
    return res;
}
function help(root,expectNumber,out,res){
    if(!root) return;
    if(expectNumber-root.val==0&&!root.left&&!root.right){
        res.push(out.concat(root.val));
        return;
    }
    help(root.left,expectNumber-root.val,out.concat(root.val),res);
    help(root.right,expectNumber-root.val,out.concat(root.val),res);
}