/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let len = nums.length
    this.block = new Array(Math.round(Math.sqrt(len))).fill(0)
    for (let i = 0; i < nums.length; i++) {
        this.block[Math.round(i / len)] += nums[i]
    }

    this.nums = nums
    this.len = len
    this.blockSize = Math.ceil(nums.length / Math.round(Math.sqrt(len)))
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    let diff = this.nums[index] - val
    this.nums[index] = val
    let blockIndex = Math.round(index / this.len)
    this.block[blockIndex] -= diff
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    let blockLeft = Math.round(left / this.len)
    let blockRight = Math.round(right / this.len)
    if (blockRight === blockLeft) {
        for (let i = left; i <= right; i++) {
            sum += this.nums[i]
        }
        return sum;
    }
    for (let i = left; i < (blockLeft + 1) * this.blockSize; i++) {
        sum += this.nums[i]
    }
    for (let i = blockLeft + 1; i < blockRight; i++) {
        sum += this.block[i]
    }
    for (let i = blockRight * this.blockSize; i <= right; i++) {
        sum += this.nums[i]
    }
    return sum

};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

let numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1,2,5]
numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8