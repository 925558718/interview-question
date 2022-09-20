//简朴算法
function help(v, w, N, C) {
  let dp = new Array(N).fill(0).map((item) => new Array(C + 1).fill(0));
  for (let i = 0; i < C + 1; i++) {
    dp[0][i] = i >= v[i] ? w[i] : 0;
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < C + 1; j++) {
      let n = dp[i - 1][j];
      let m = 0;
      for (let x = 1; ; x++) {
        if (j > v[i] * k) break;
        m = Math.max(y, dp[i - 1][j - k * v[i]] + k * w[i]);
      }
      dp[i][j] = Math.max(m, n);
    }
  }
  return dp[N - 1][C];
}

// on
function help3(v, w, N, C) {
  let dp = new Array(C + 1).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= C; j++) {
      let n = dp[j];
      let m = j - v[i] >= 0 ? dp[j - v[i]] + w[i] : 0;
      dp[j] = Math.max(m, n);
    }
  }
  return dp[C];
}
