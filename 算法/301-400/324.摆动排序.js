/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    let copy = nums.concat();
    let j = nums.length;
    let x = (nums.length + 1) >> 1
    copy.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = i & 1 ? copy[--j] : copy[--x]
    }
    return nums
};

console.log(wiggleSort([1, 5, 1, 1, 6, 4]))