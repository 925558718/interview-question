/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let n = nums.length
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === n) continue;
        let cnt = 0;
        while (nums[i] < n) {
            const temp = nums[i]
            nums[i] = n;
            i = temp
            cnt++;
        }
        res = Math.max(res, cnt)
    }
    return res;
};