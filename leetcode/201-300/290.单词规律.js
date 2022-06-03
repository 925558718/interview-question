/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = new Map();
    let map2 = new Map();
    s = s.split(" ")
    if (s.length !== pattern.length) return false
    for (let i = 0; i < s.length; i++) {
        if(map.has(pattern[i]) && map.get(pattern[i])!==s[i] || map2.has(s[i]) && map2.get(s[i])!==pattern[i]) return false
        map.set(pattern[i], s[i])
        map2.set(s[i], pattern[i])
    }
    return true
};

wordPattern("abba", "dog cat cat dog")