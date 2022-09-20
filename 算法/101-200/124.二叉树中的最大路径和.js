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
 * @return {number}
 */
var maxPathSum = function (root) {
    let res = -Number.MAX_VALUE;
    function help(root) {
        if (!root) return 0;
        let left = Math.max(help(root.left), 0)
        let right = Math.max(help(root.right), 0)
        res = Math.max(res, left + right + root.val)
        return Math.max(left, right) + root.val
    }
    help(root)
    return res;
};
