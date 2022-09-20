/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let copy = nums.concat().sort((a, b) => a - b);
    let i = 0, j = nums.length - 1;
    while (i < nums.length && nums[i] === copy[i]) i++;
    while (j > i && nums[j] === copy[j]) j--;
    return j - i + 1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray2 = function (nums) {
    let n = nums.length
    let mx = nums[0], mn = nums[nums.length - 1]

    let end = -2, start = -1;
    for (let i = 1; i < nums.length; i++) {
        mx = Math.max(nums[i], mx)
        mn = Math.min(mn, nums[n - i - 1])
        console.log(mx, mn);
        if (mx > nums[i]) end = i;
        if (mn < nums[n - 1 - i]) start = n - 1 - i
    }
    return end - start + 1
};
findUnsortedSubarray2([2, 6, 4, 8, 10, 9, 15])