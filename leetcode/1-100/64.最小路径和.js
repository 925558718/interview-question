var minPathSum = function (grid) {
  if (grid[0].length == 0) return 0;
  let row = grid.length,
    column = grid[0].length;
  let dp = new Array(row + 1);
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(column);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < column; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[row - 1][column - 1];
};
console.log(
  minPathSum([
    [0, 1],
    [1, 0],
  ])
);
