var longestPalindrome = function(s) {
    let res={
        start:0,
        maxLen:0
    }
    for (let i=0;i<s.length;i++){
        check(s,i,i,res);
        check(s,i,i+1,res);
    }
    console.log(res)
    return s.substr(res.start,res.maxLen);
};
function check(s,left,right,res) {
    while (s[left]==s[right]&&left>=0&&right<s.length){

        left--;
        right++;
    }
    if (right-left-1>res.maxLen){
        res.start=left+1;
        res.maxLen=right-left-1;
    }
}

console.log(longestPalindrome('babad'))
