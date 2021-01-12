var simplifyPath = function (path) {
    let v = [];
    let i = 0;
    while (i < path.length) {
        while (path[i] == '/' && i < path.length) ++i;
        if (i == path.length) break;
        let start = i;
        while (path[i] != '/' && i < path.length) i++;
        let end = i - 1;
        let s = path.substr(start, end - start + 1);
        if (s == '..') {
            if (v.length != 0) v.pop();
        } else if (s != '.') {
            v.push(s);
        }
    }
    if (v.length == 0) return "/";
    let res = "";
    for (let i = 0; i < v.length; i++) {
        res += '/' + v[i];
    }
    return res;
};
console.log(simplifyPath("/a/b/c"));
