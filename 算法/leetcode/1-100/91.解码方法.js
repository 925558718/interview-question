let dist=['-','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numDecodings = function(s) {
    if(s.length==0||s[0]=='0') return 0;
    let dp=new Array(s.length+1);
    dp[0]=1;
    for(let i=1;i<dp.length;i++){
        dp[i]=s[i-1]=="0"?0:dp[i-1];
        if(i>1&&(s[i-2]=='1'||(s[i-2]=='2'&&s[i-1]<='6'))){
            dp[i]+=dp[i-2];
        }
    }
    return dp[dp.length-1];
};

console.log(numDecodings("12"));

