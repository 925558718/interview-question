const isBadVersion = function (version) {
    return version >= 4
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(n) {
    let left = 1, right = n;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (!isBadVersion(mid)) left = mid + 1
        else right = mid;
    }
    return left
};

console.log(solution(5))