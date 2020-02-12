var isBalanced = function(root) {
    if(!root) return true;
    let left=height(root.left);
    let right=height(root.right);
    if(Math.abs(left-right)>1) return false;
    return isBalanced(root.left)&&isBalanced(root.right);
};
function height(root){
    if(!root) return 0;
    return Math.max(height(root.left),height(root.right))+1;
}