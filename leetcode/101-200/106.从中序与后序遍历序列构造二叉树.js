function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (inorder, postorder) {
    return help(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
};
function help(inorder, il, ir, postorder, pl, pr) {
    if (il > ir || pl > pr) return null;
    let node = new TreeNode(postorder[pr]);
    let i = il;
    for (i = il; i <= ir; i++) {
        if (inorder[i] == postorder[pr]) break;
    }
    node.left = help(inorder, il, i - 1, postorder, pl, pl + i - il - 1);
    node.right = help(inorder, i + 1, ir, postorder, pl + i - il, pr - 1);
    return node;
}