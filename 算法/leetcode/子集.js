
var strStr = function(haystack, needle) {
    if(needle.length==0) return 0;
    let len=needle.length;
    for(let i=0;i<=haystack.length-len;i++){
        let j=0;
        for(j=0;j<len;j++){
            if(needle[j]!=haystack[j+i]) break;
        }
        if(j==len) return i;
    }
    return -1;
};
console.log(strStr('hello','ll'));
