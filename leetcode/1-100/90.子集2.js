var subsetsWithDup = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let res = [];
    help(nums, res, [], 0);
    return res;
};
function help(nums, res, out, level) {
    res.push(out);
    for (let i = level; i < nums.length; i++) {
        help(nums, res, out.concat(nums[i]), i + 1);
        while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
    }
}
console.log(subsetsWithDup([1, 2, 2]));
