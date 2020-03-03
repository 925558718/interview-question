var addStrings = function(num1, num2) {
    let len=Math.max(num1.length,num2.length);
    let res=[],count=0;
    let len1=num1.length,len2=num2.length;
    for(let i=0;i<len;i++){
        let a=len1-i-1>=0?Number(num1[len1-i-1]):0;
        let b=len2-i-1>=0?Number(num2[len2-i-1]):0;
        res.push((a+b+count)%10);
        count=(a+b+count)>9?1:0;
    }
    if(count) res.push(count);
    return res.reverse().join("")
};
console.log(addStrings('1','1'));
