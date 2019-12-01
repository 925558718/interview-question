function TreeDepth(pRoot)
{
    // write code here
    if(!pRoot) return 0;
    return 1+Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))
}
