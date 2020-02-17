var minCostClimbingStairs = function(cost) {
    let dp=new Array(cost.length+1).fill(0);
    for(let i=2;i<cost.length+1;i++){
        dp[i]=Math.min(dp[i- 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }
    return dp[dp.length-1]
};