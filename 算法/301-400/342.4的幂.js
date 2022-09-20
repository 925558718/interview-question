/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return n > 0 && Math.floor(Math.log10(n) / Math.log10(4)) - Math.log10(n) / Math.log10(4) === 0
};