var longestCommonPrefix = function(strs) {
    let res=strs[0];
    for (let i=1;i<strs.length;i++){
        let j=0;
        let len=res.length;

        for (j=0;j<len;j++){

            if (res[j]!=strs[i][j]){
                break;
            }

        }
        res=res.substr(0,j)
    }
    return res;
};
