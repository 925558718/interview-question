var lengthOfLongestSubstring = function(str) {
    let m=[];
    let left=-1;
    let res=0;
    for (let i=0;i<str.length;i++){
        if (typeof m[str[i]]=="undefined"){
            m[str[i]]=-1;
        }
        left=Math.max(left,m[str[i]]);
        m[str[i]]=i;
        res=Math.max(res,i-left);
    }
    return res;
};
