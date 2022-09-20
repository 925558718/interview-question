/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map();
    let res = 0;
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] + 1)) {
            res = Math.max(res, (map.get(nums[i] + 1) || 0) + (map.get(nums[i])) || 0)
        }
    }
    return res;
};