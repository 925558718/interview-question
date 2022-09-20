/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0, right = 0;
    let sum = 0;
    let res = nums.length + 1;
    while (right < nums.length) {
        while (sum < target && right < nums.length) {
            sum += nums[right++]
        }
        while (sum >= target) {
            res = Math.min(res, right - left)
            sum -= nums[left++]
        }
    }
    return res === nums.length + 1 ? 0 : res;
};