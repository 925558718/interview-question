/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = []
    help(k, [], res, 0, n, 1);
    return res
};

function help(k, out, res, sum, target, level) {
    if (sum === target && k === 0) {
        res.push(out)
        return
    }
    if (sum > target || k < 0) return
    for (let i = level; i <= 9; i++) {
        help(k - 1, out.concat(i), res, sum + i, target,i+1);
    }
}

console.log(combinationSum3(3, 7))