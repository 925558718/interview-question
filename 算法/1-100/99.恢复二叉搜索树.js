let pre = null, first = null, second = null, arr = [];
var recoverTree = function (root) {
    order(root);
    let t = arr[arr.length - 1].val;
    arr[arr.length - 1].val = arr[0].val;
    arr[0].val = t;
    return root;
}
function order(root) {
    if (!root) return;
    order(root.left);
    if (!pre) pre = root;
    if (pre && arr.length == 0) {
        if (pre.val > root.val) {
            arr.push(pre);
            arr.push(root);
        }
    } else if (arr.length == 2 && (pre && root.val < pre.val)) arr.push(root);
    pre = root;
    order(root.right);
}
