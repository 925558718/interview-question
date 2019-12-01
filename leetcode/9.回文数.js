var isPalindrome = function(x) {
    if (x<0) return false;
    let res=0;
    let p=x;
    while (x!=0){
        let pop=x%10;
        x=Math.floor(x/10);

        res=res*10+pop;
    }

    return p===res
};
isPalindrome(8)
