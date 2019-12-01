
function KthNode(pRoot, k)
{
    if (k<=0) return null;
    let count=0;
    let res;
    function help(pRoot) {
        if (!pRoot) return;
        help(pRoot.left);
        count++;
        if (k===count){
            res=pRoot;
        }
        help(pRoot.right);
    }
    if(k<0) return null;
    help(pRoot)
    return res;
}

console.log(KthNode({val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}},3))
