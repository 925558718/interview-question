var lengthOfLongestSubstring = function(s) {
    let m={};
    let left=-1;
    let res=0;
    for(let i=0;i<s.length;i++){
        if(!m[s[i]]) m[s[i]]=0;
        left=Math.max(left,m[s[i]])
        m[s[i]]=i;
        res=Math.max(res,i-left);
    }
    return res;
};