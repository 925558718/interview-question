var lengthOfLastWord = function(s) {
    let end=s.length-1;
    while (end>=0&&s[end]==" ") end--;

    let res=0;
    while (end>=0&&s[end--]!=" ") res++;
    return res;
};

console.log(lengthOfLastWord('hello world'))
