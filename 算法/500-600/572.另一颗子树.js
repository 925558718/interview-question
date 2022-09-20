/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if(!root) return false;
    let same = isSame(root,subRoot)
    if(same) return true;
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot) 
};
function isSame(root,subRoot) {
    if(!root && !subRoot) return true
    if((!root && subRoot) || (!subRoot && root) ||(subRoot.val !=root.val)) return false;
    return isSame(root.left,subRoot.left) && isSame(root.right,subRoot.right)
}