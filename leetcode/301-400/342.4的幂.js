/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return n > 0 && !(n & n - 1) && (n & 0x5555555555) === n
};