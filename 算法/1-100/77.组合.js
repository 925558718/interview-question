/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function (n, k) {
    let res = []
    help(0, [], res, n, k)
    return res
};
function help(level, out, res, n, k) {
    if (out.length === k) {
        return res.push(out)
    }
    for (let i = level; i < n; i++) {
        help(i+ 1, out.concat(i + 1), res, n, k)
    }
}
console.log(combine(4, 2));
