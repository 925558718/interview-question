/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let cnt = 0;
    let res = -1;
    this.nums.forEach(item => {
        if (item === target) {
            cnt++;
            if (Math.floor(cnt * Math.random()) % cnt === 0) res = i;
        }
    })
    return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */