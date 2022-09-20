/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let res = [1]
    let i2 = 0, i3 = 0, i5 = 0;
    while (res.length < n) {
        let m2 = res[i2] * 2, m3 = res[i3] * 3, m5 = res[i5] * 5;
        let mn = Math.min(m2, m3, m5);
        if (mn == m2) ++i2;
        if (mn == m3) ++i3;
        if (mn == m5) ++i5;
        res.push(mn);
    }
    return res[res.length - 1]
};