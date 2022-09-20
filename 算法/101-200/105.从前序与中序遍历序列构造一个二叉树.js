function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    return help(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
function help(pre, pl, pr, ino, il, ir) {
    if (pl > pr || il > ir) return null;
    let i;
    for (i = il; i <= ir; i++) {
        if (ino[i] == pre[pl]) break;
    }
    let node = new TreeNode(pre[pl]);
    node.left = help(pre, pl + 1, pl + i - il, ino, il, i - 1);
    node.right = help(pre, pl + i - il + 1, pr, ino, i + 1, ir);
    return node;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
