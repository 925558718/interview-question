var generate = function(numRows) {
    let res=[[1]];
    for(let i=1;i<numRows;i++){
        let out=[];
        for(let j=0;j<=i;j++){
            let left=j-1>=0?res[i-1][j-1]:0;
            let right=j<i?res[i-1][j]:0;
            out.push(left+right);
        }
        res.push(out)
    }
    return res;
    
};
generate(0)