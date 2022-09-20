/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length<=1) return nums.length===0 ? 0: nums[0]
    return Math.max(help(nums.slice(0,-1)),help(nums.slice(1)))
};
var help = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[dp.length - 1];
  };