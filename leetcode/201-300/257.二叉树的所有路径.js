
var binaryTreePaths = function (root) {
    if (!root) return [];
    let res = [];
    let out = [];
    dfs(root, res, out);
    return res;
};
function dfs(root, arr, out) {
    if (!root.left && !root.right) {
        out.push(root.val);
        arr.push(out.join('->'));
        return;
    }
    if (!root) return;

    if (root.left) dfs(root.left, arr, out.concat(root.val));
    if (root.right) dfs(root.right, arr, out.concat(root.val));
}