var minDistance = function (word1, word2) {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = new Array(n1 + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n2 + 1).fill(0);
  }
  for (let j = 1; j <= n2; j++) dp[0][j] = dp[0][j - 1] + 1;
  for (let i = 1; i <= n1; i++) dp[i][0] = dp[i - 1][0] + 1;
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])) + 1;
      }
    }
  }
  return dp[n1][n2];
};
minDistance("abc", "ab");
