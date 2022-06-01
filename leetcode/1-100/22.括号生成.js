var generateParenthesis = function (n) {
    let res = [];
    help(0, 0, "", res, n);
    return res;
};
function help(left, right, s, res, n) {
    if (left < right || left > n || right > n) return;
    if (left == n && right == n) {
        res.push(s);
        return;
    }
    help(left + 1, right, s + "(", res, n);
    help(left, right + 1, s + ")", res, n);
}
console.log(generateParenthesis(3));
