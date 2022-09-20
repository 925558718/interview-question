//简朴算法
function help0(v, w, N, C) {
  let dp = new Array(N).fill(0).map((item) => new Array(C + 1).fill(0));
  for (let i = 0; i < C + 1; i++) {
    dp[0][i] = i >= v[0] ? w[0] : 0;
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < C + 1; j++) {
      let n = dp[i - 1][j];
      let m = j >= v[i] ? dp[i - 1][j - v[i]] + w[i] : 0;
      dp[i][j] = Math.max(m, n);
    }
  }
  console.log(dp);
  return dp[N - 1][C];
}

// 滚动数组
function help2(v, w, N, C) {
  let dp = new Array(2).fill(0).map((item) => new Array(C + 1).fill(0));
  for (let i = 0; i < C + 1; i++) {
    dp[0][i] = i >= v[i] ? w[i] : 0;
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < C + 1; j++) {
      let n = dp[(i - 1) & 1][j];
      let m = j >= v[i] ? dp[(i - 1) & 1][j - v[i]] + w[i] : 0;
      dp[i & 1][j] = Math.max(m, n);
    }
  }
  return dp[(N - 1) & 1][C];
}

// on
function help3(v, w, N, C) {
  let dp = new Array(C + 1).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = C; j >= v[i]; j--) {
      let n = dp[j];
      let m = dp[j - v[i]] + w[i];
      dp[j] = Math.max(m, n);
    }
  }
  return dp[C];
}
console.log(help0([4, 2, 3], [4, 2, 3], 3, 5));

function help(nums, target) {
  let n = nums.length;
  let sum = nums.reduce((sum, item) => sum + item, 0);
  let dp = new Array(nums.length + 1)
    .fill(0)
    .map((_) => new Array(sum + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    let x = nums[i] - 1;
    for (let j = -sum; j <= sum; j++) {
      if (j - x + sum >= 0) {
        dp[i][j + sum] += dp[i - 1][j - x + sum];
      }
      if (j + x + sum <= 2 * sum) {
        dp[i][j + sum] = dp[i - 1][j + x + sum];
      }
    }
  }
  return dp[n][target + sum];
}
help([1, 1, 1, 1, 1], 3);
