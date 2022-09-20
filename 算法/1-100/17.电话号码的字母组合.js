var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    let dist = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [];
    help(0, digits, dist, "", res);
    return res;
};
function help(level, digits, dist, out, res) {
    if (level == digits.length) {
        res.push(out)
        return;
    }
    let str = dist[digits[level] - 2];
    for (let i = 0; i < str.length; i++) {
        help(level + 1, digits, dist, out + str[i], res)
    }
}
console.log(letterCombinations(''));
