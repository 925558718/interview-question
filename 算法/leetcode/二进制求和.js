var addBinary = function(a, b) {
    let len1=a.length;
    let len2=b.length;
    let len=Math.max(len1,len2);
    let count=0;
    let res=[];
    for(let i=0;i<len;i++){
        let n1=len1-i-1>=0?Number(a[len1-i-1]):0;
        let n2=len2-i-1>=0?Number(b[len2-i-1]):0;
        res.push((n1+n2+count)%2);
        count=(n1+n2+count)>=2?1:0;
    }
    
    
    
    if(count) res.push(count);
    return res.reverse().join("")
};
console.log(addBinary("1111","1111"));
