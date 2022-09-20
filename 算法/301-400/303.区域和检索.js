/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.nums[right] - (this.nums[left- 1] || 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */