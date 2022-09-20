/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    let arr = new Array(2).fill(0)
    res &= -res
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & res) {
            arr[0] ^= nums[i]
        } else {
            arr[1] ^= nums[i]
        }
    }
    return arr
};
// 01 10
// 11 01
// 11 10
// 11 11
// 11 100
singleNumber([1, 2, 1, 3, 2, 5])