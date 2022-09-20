/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let m1 = Number.MAX_VALUE
    let m2 = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= m1) m1 = nums[i]
        else if (nums[i] <= m2) m2 = nums[i]
        else return true
    }
    return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let dp = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
                if(dp[i] >=3) return true;
            }
        }
    }
    return false;
};