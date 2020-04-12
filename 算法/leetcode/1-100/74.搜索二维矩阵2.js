// var searchMatrix = function(matrix, target) {
//     if(matrix.length==0||matrix[0].length==0) return false;
//     let row=matrix.length,column=matrix[0].length;
//     let x=row-1,y=0;
//     while(x>=0&&y<column){
//         console.log(matrix[x][y]);
//         if(matrix[x][y]>target) x--;
//         else if(matrix[x][y]<target) y++;
//         else return true;
//     }
//     return   false;
// };

// var searchMatrix = function(matrix, target) {
//     if(matrix.length==0||matrix[0].length==0) return false;
//     let row=matrix.length,column=matrix[0].length;
//     let left=0,right=matrix.length;
//     let index=0;
//     while(left<right){
//         let mid=(left+right)>>1;
//         if(matrix[mid][0]==target) return true;
//         if(matrix[mid][0]<=target) left=mid+1;
//         else right=mid;
//     }
//     console.log(right-1);
    
//     index = (right > 0) ? (right - 1) : right;
//     left=0,right=matrix[0].length-1;
//     while(left<=right){
//         let mid=(left+right)>>1;
//         console.log(matrix[index][mid]);
        
//         if(matrix[index][mid]<target){
//             left=mid+1;
//         }else if(matrix[index][mid]>target){
//             right=mid-1;
//         }else{
//             return true;
//         }
//     }
//     return false;
// };

var searchMatrix = function(matrix, target) {
    if(matrix.length==0||matrix[0].length==0) return false;

    let row=matrix.length,column=matrix[0].length;

    let left=0,right=row*column;

    while(left<right){

        let mid=Math.floor((left+(right-left))/2)
        
        
        let x=Math.floor(mid/row);
        let y=mid%row;
       
        
        if(matrix[x][y]== target) return true;

        if(matrix[x][y]<target) left=mid+1;

        else right=mid-1;
    }
    return false;
};
console.log(searchMatrix([[1,1]],2));
