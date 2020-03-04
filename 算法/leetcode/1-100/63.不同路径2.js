var uniquePathsWithObstacles = function(obstacleGrid) {
    let row=obstacleGrid.length;
    let column=obstacleGrid[0].length;
    let dp=new Array(row);
    for(let i=0;i<row;i++){
        dp[i]=new Array(column).fill(0);
    }
    for(let i=1;i<row;i++){
        for(let j=1;j<column;j++){
            if((i==0||j==0)&&obstacleGrid[i][j]!=1) dp[i][j]=1;
            if(obstacleGrid[i][j]==1) dp[i][j]=0;
            else dp[i][j]=dp[i-1][j]+dp[i][j-1];
        }
    }
    return dp[row-1][column-1]
};