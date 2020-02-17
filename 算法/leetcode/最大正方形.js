var maximalSquare = function(matrix) {
    if(matrix.length==0||matrix[0].length==0) return 0;
    let row=matrix.length,column=matrix[0].length;
    let dp=new Array(row);
    let res=Number.MIN_VALUE;
    for(let i=0;i<row;i++){
        dp[i]=new Array(column).fill(0);
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(i==0||j==0) dp[i][j]=matrix[i][j]-'0';
            else if(matrix[i][j]=='1'){
                dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
            }
            res=Math.max(res,dp[i][j]);
        }
        
    }
    return res*res;
};
maximalSquare([["0","0","0"],["0","0","0"],["0","0","0"],["0","0","0"]])