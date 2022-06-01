var lengthOfLongestSubstring = function (s) {
    let map = new Map(), res = 0;
    let left = 0;
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            left = Math.max(map.get(s[j]) + 1, left);
        }
        res = Math.max(res, j - left + 1);
        map.set(s[j], j);
    }
    return res;
}