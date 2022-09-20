function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
    return help(0, nums.length - 1, nums);
};
function help(left, right, nums) {
    if (left > right) return null;
    let mid = (left + right) >> 1;
    let node = new TreeNode(nums[mid]);
    node.left = help(left, mid - 1, nums);
    node.right = help(mid + 1, right, nums);
    return node;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
