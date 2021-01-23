var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length;
  let column = obstacleGrid[0].length;
  let dp = new Array(row + 1);
  for (let i = 0; i <= row; i++) {
    dp[i] = new Array(column + 1).fill(0);
  }
  dp[0][1] = 1;
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      if (obstacleGrid[i - 1][j - 1] != 0) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[row][column];
};
