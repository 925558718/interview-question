var rotate = function(matrix) {
    if(matrix.length==0||matrix[0].length==0) return [];
    let row=matrix.length;
    let column=matrix[0].length;
    for (let i=0;i<row;i++){
        for (let j=0;j<column;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }

    for (let i=0;i<row;i++){
        matrix[i].reverse()
    }
    return matrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
