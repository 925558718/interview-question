var isInterleave = function(s1, s2, s3) {
    let idx1=0,idx2=0;
    for(let i=0;i<s3.length;i++){
        if(s3[i]==s1[idx1]){
            idx1++;
        }
        if(s3[i]==s2[idx2]){
            idx2++;
        }
    }
    return idx1+idx1===s3.length-2;
};