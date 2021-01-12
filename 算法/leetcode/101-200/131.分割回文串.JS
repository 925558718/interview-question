var partition = function (s) {
    let res = [];
    dfs(s, res, [], 0);
    return res;

};
function check(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++; right--;
    }
    return true;
}
function dfs(s, res, out, start) {
    if (start == s.length) {
        res.push(out);
        return;
    }
    for (let i = start; i < s.length; i++) {
        let str = s.substr(start, i - start + 1);
        if (check(str)) dfs(s, res, out.concat(str), i + 1)
    }
}
console.log(partition('aab'));

