var strStr = function(haystack, needle) {

    let len=needle.length;
    if(len==0) return 0;
    let left=0;
    while(left<=haystack.length-len){
        let j=0;
        for(j=0;j<len;j++){
            if(needle[j]!=haystack[j+left]) break;
        }
        if(j==len) return left;
        left++;
    }
    return -1;
};
console.log(strStr("hello",'ll'));
