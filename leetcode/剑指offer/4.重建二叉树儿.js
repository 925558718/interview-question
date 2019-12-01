
function reConstructBinaryTree(pre, vin)
{
    // write code here
    function TreeNode(val) {
        this.val=val;
        this.left=null;
        this.right=null;
    }
    function help(pre,pl,pr,vin,vl,vr) {
        if (pl>pr||vl>vr){
            return null;
        }
        let i;
        for (i=vl;i<=vr;i++){
            if (vin[i]==pre[pl]) break;
        }
        let node=new TreeNode(pre[pl]);
        node.left=help(pre,pl+1,pl+i-vl,vin,vl,i-1);
        node.right=help(pre,pl+i-vl+1,pr,vin,i+1,vr);
        return node;
    }
    return help(pre,0,pre.length-1,vin,0,vin.length-1)
}
