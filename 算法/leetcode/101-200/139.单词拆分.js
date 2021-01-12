var wordBreak = function (s, wordDict) {
    let m = new Set(wordDict);
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && m.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[dp.length - 1]
};
