/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n === 2 || n === 3) return n - 1
    let res = 1;
    while (n > 4) {
        res *= 3;
        n -= 3;
    }
    return res * n;
};