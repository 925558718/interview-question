var longestPalindrome = function(s) {
    let res={
        start:-1,
        maxLength:0
    }
    for(let i=0;i<s.length;i++){
        help(s,i,i,res);
        help(s,i,i+1,res);
    }
    return s.substr(res.start,res.maxLength);
};
function help(s,left,right,res){
    while(s[left]==s[right]&&left>=0&&right<s.length){
        left--;right++;
    }
    if(right-left-1>res.maxLength){
        res.start=left+1;
        res.maxLength=right-left-1;
    }
}
console.log(longestPalindrome('cbbd'));
