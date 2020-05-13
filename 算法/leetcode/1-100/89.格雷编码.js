var grayCode = function(n) {
    let res=[[0]];
    for(let i=1;i<=n;i++){
        res[i]=res[i-1].concat([...res[i-1]].reverse().map(item=>item+Math.pow(2,i-1)))
    }
    return res
};
console.log(grayCode(2));
