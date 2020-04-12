var minCut = function(s) {
    let n=s.length;
    let arr=Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Array(n).fill(false)
    }

    let dp=new Array(n);

    for(let i=0;i<n;i++){
        dp[i]=i;
        for(let j=0;j<=i;j++){
            if(s[i]==s[j]&&(i-j<2||p[j+1][i-1])){
                p[j][i]=true;
                dp[i]=(j==0)?0:Math.min(dp[i],dp[j-1]+1)
            }
        }
    }
    return dp[n-1];
};