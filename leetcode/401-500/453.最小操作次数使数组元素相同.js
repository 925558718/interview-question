/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let min = Number.MAX_VALUE, res = 0;
    nums.forEach(item => {
        min = Math.min(min, item)
    })
    nums.forEach(item => {
        res += Math.abs(item - min)
    })
    return res
};