var titleToNumber = function(s) {
    let res=0;
    let dist=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0;i<s.length;i++){
        res=res*26+dist.indexOf(s[i])+1;
    }
    return res;
};
console.log(titleToNumber('AA'));
