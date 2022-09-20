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
var findBottomLeftValue = function (root) {
    let height = 0;
    let res = root.val;
    const help = (root, depth) => {
        if (!root) return
        help(root.left, depth + 1)
        help(root.right, depth + 1)
        if (depth > height) {
            height = depth
            res = root.val
        }
    }
    help(root, 0)
    return res;
};