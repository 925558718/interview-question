var sumNumbers = function (root) {
    return help(root, 0)
};
function help(root, sum) {
    if (!root) return 0;
    sum = sum * 10 + root.val;
    if (!root.left && !root.right) return sum;
    return help(root.left, sum) + help(root.right, sum);
}