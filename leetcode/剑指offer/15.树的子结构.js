function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    function same(a,b) {
        if (!a&&!b) return true;
        if ((!a&&b)||(!b&&a)||(a.val!==b.val)) return false;
        return same(a.left,b.left)&&same(a.right,b.right);
    }
    if (same(pRoot2,pRoot1)) return true;
    else return same(pRoot1.left,pRoot2)||same(pRoot1.right,pRoot2);
}
