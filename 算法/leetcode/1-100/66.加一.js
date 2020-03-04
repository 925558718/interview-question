var plusOne = function(digits) {
    let n=digits.length;
    for(let i=digits.length-1;i>=0;--i){
        if(digits[i]<9){
            ++digits[i];
        }
        digits[i]=0;
    }
    let res=new Array(n+1);
    res[0]=1;
    return res;
};