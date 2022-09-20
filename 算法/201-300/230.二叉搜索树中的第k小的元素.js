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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let cnt = count(root.left);
    if (cnt >= k) {
        return kthSmallest(root.left, k);
    } else if (cnt + 1 < k) {
        return kthSmallest(root.right, k - cnt - 1);
    }
    return root.val;
};

function count(root) {
    if (!root) return 0;
    return 1 + count(root.left) + count(root.right);
}