/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let s = new Set()
    let res = 0
    let mask = new Array(words.length)
    let last = words[words.length - 1]
    for (let j = 0; j < last.length; j++) {
        mask[mask.length - 1] |= 1 << (last[j].charCodeAt() - 'a'.charCodeAt())
    }
    for (let i = words.length - 2; i >= 0; i--) {
        for (let j = 0; j < words[i].length; j++) {
            mask[i] |= 1 << (words[i][j].charCodeAt() - 'a'.charCodeAt())
        }
        for (let j = i + 1; j < words.length; j++) {
            if (!(mask[i] & mask[j])) {
                res = Math.max(res, words[i].length * words[j].length)
            }
        }

    }
    return res;
};
maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])