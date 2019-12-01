function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot) return true;
    if(Math.abs(help(pRoot.left)-help(pRoot.right))>1) return false;
    return IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right);
}
function help(p) {
    if(!p) return 0;
    return 1+Math.max(help(p.left),help(p.right))
}
