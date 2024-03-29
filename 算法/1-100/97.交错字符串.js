/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;
    let m = s1.length;
    let n = s2.length;
    let dp = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false)
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
            } else if (i === 0) {
                dp[i][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1]
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
            } else {
                dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
            }
        }
    }
    return dp[m][n]
};