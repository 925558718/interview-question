var generateMatrix = function(n) {
    let m=new Array(n);
    for(let i=0;i<n;i++){
        m[i]=new Array(n);
    }
    let top=0,right=n-1,bottom=n-1,left=0;
    let idx=1;
    while(true){
        for(let i=left;i<=right;i++) m[top][i]=idx++;
        if(++top>bottom) break;
        for(let i=top;i<=bottom;i++) m[i][right]=idx++;
        if(--right<left) break;
        for(let i=right;i>=left;i--) m[bottom][i]=idx++;
        if(--bottom<top) break;
        for(let i=bottom;i>=top;i--) m[i][left]=idx++;
        if(++left>right) break;
    }
    return m;
    
};
generateMatrix(3)