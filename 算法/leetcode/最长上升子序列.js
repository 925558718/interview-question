var lengthOfLIS = function(nums) {
    let dp=new Array(nums.length).fill(1);
    let res=0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            dp[i]=Math.max(dp[i],dp[j]+1)
        }
        res=max(res,dp[i])
    }
    return res;
};