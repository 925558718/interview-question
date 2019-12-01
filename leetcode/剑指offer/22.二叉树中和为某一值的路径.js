function FindPath(root, expectNumber)
{
    // write code here
    let res=[];
    function help(root,num,res,out) {
        if (!root) return;
        if (!root.left&&!root.right&&num-root.val==0){
            res.push(out.concat(root.val));
            return;
        }

        help(root.left,num-root.val,res,out.concat(root.val))
        help(root.right,num-root.val,res,out.concat(root.val))
    }
    help(root,expectNumber,res,[]);
    return res;
}

