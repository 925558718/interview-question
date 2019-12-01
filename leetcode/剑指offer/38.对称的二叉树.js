function isSymmetrical(pRoot)
{
    // write code here
    if (!pRoot) return true;
    function help(a,b) {
        if (!a&&!b) return true;
        if ((!a&&b)||(!b&&a)||(a.val!=b.val)) return false;
        return help(a.left,b.right)&&help(a.right,b.left);
    }
    return help(pRoot.left,pRoot.right);
}
let root={
    val:1,
    left:{
        val:2,left:null,right:null
    },right:{
        val:2,left:null,right:null
    }
}
console.log(isSymmetrical(root))
