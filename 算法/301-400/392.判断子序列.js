/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) j++;
    }
    return j === s.length
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function (s, t) {
    let m = new Map();
    for (let i = 0; i < t.length; i++) {
        if (m.has(t[i])) {
            m.get(t[i]).push(i)
        } else {
            m.set(t[i], [i])
        }
    }
    let start = -1
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i])) {
            let arr = m.get(s[i])
            let left = 0, right = arr.length
            while (left < right) {
                let mid = (left + right) >> 1
                if (arr[mid] <= start) left = mid + 1
                else right = mid
            }
            console.log(start)
            if (right === arr.length) return false;
            start = arr[right]
        } else {
            return false;
        }
    }
    return true
};

console.log(isSubsequence2("axc", "ahbgdc"))