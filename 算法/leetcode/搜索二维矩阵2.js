var searchMatrix = function(matrix, target) {
    if(matrix.length==0||matrix[0].length==0) return false;
    let row=matrix.length,column=matrix[0].length;
    let x=row-1,y=0;
    while(x>=0&&y<column){
        console.log(matrix[x][y]);
        
        if(matrix[x][y]>target) x--;
        else if(matrix[x][y]<target) y++;
        else return true;
    }
    return   false;
};
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5));
