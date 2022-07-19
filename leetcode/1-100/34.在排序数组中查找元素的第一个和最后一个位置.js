/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1]
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < target) {
            left = mid + 1
        } else right = mid;
    }
    if (nums[left] != target) return res
    res[0] = left;
    left = 0, right = nums.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] <= target) {
            left = mid + 1
        } else right = mid;
    }
    res[1] = right - 1
    return res;
};