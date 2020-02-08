var longestCommonPrefix = function(strs) {
    if(strs.length==0) return ""
    let res="";
    for(let i=0;i<strs[0].length;i++){
        let c=strs[0][i];
        for(let j=0;j<strs.length;j++){
            if(i>=strs[j].length||strs[j][i]!=c){
                return res;
            }
        }
        res+=c;
    }
    return res;
};
longestCommonPrefix([])