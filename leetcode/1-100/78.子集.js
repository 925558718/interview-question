
var subsets = function (nums) {
    let res = [];
    help(nums, res, [], 0);
    return res;
};
function help(nums, res, out, level) {
    res.push(out);
    for (let i = level; i < nums.length; i++) {
        help(nums, res, out.concat(nums[i]), i + 1)
    }
}
console.log(subsets([1, 2, 3]));
