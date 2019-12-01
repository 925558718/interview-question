function printMatrix(matrix)
{
    // write code here
    if (matrix.length===0||matrix[0].length===0){
        return 0;
    }

    let top=0,right=matrix[0].length-1,bottom=matrix.length-1,left=0;
    let i;
    while (true){
        for (i=left;i<=right;i++) console.log(matrix[top][i]);
        if (++top>bottom) break;
        for (i=top;i<=bottom;i++) console.log(matrix[i][right]);
        if (--right<left) break;
        for (i=right;i>=left;i--) console.log(matrix[bottom][i]);
        if (--bottom<top) break;
        for (i=bottom;i>=top;i++) console.log(matrix[left][i]);
        if (++left>right) break;
    }

}
printMatrix([[1,2,3]])

