/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.origin = nums.concat();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.origin.slice();
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; i++) {
    let t = i + Math.floor(Math.random() * (this.nums.length - i));
    [this.nums[i], this.nums[t]] = [this.nums[t], this.nums[i]];
  }
  return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
