/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let m = new Map();
    let visited = {}
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i])) {
            m.set(s[i], m.get(s[i]) + 1)
        } else {
            m.set(s[i], 1)
        }
    }
    console.log(m)
    let res = ['~']
    for (let i = 0; i < s.length; i++) {
        m.set(s[i], m.get(s[i]) - 1)
        if (visited[s[i]]) continue;
        while (res[res.length - 1].charCodeAt() > s[i].charCodeAt() && m.get(res[res.length - 1])) {
            visited[res[res.length - 1]] = false
            res.pop()
        }
        res.push(s[i])
        visited[s[i]] = true
    }
    return res.slice(1).join("")
};

console.log(removeDuplicateLetters('cbacdcbc'))