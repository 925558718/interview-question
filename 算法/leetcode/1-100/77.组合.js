var combine = function (n, k) {
    let res = [];
    help(res, 0, [], k, n);
    return res;
};
function help(res, level, out, k, n) {
    if (out.length == k) {
        res.push(out);
        return;
    }
    for (let i = level; i < n; i++) {
        help(res, i + 1, out.concat(i + 1), k, n)
    }
}
console.log(combine(4, 2));
