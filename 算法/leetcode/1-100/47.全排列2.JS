var permuteUnique = function (nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b)
    let visited = new Array(nums.length).fill(0);
    help(0, [], res, visited, nums);
    return res;

};
function help(level, out, res, visited, nums) {
    if (level == nums.length) {
        res.push(out);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (visited[i] == 1) continue;
        if (i > 0 && nums[i] == nums[i - 1] && visited[i - 1] == 0) continue;
        visited[i] = 1;
        help(level + 1, out.concat(nums[i]), res, visited, nums)
        visited[i] = 0;
    }
}
console.log(permuteUnique([1, 1, 2]));
