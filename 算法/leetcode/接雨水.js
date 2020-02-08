// var trap = function(height) {
//     let res=0;
//     for(let i=1;i<height.length;i++){
//         let left_max=0,right_max=0;
//         for(let j=i;j>=0;j--){
//             left_max=Math.max(height[j],left_max);
//         }
//         for(let j=i;j<height.length;j++){
//             right_max=Math.max(height[j],right_max);
//         }
//         res+=Math.min(left_max,right_max)-height[i];
//     }
//     return res;
// };

// var trap = function(height) {
//     let res=0;
//     let left_max=[],right_max=[];
//     let len=height.length;
//     left_max[0]=height[0];
//     for(let i=1;i<len;i++){
//         left_max[i]=Math.max(height[i],left_max[i-1]);
//     }
//     right_max[len-1]=height[len-1];
//     for(let i=len-2;i>=0;i--){
//         right_max[i]=Math.max(height[i],right_max[i+1])
//     };
//     for(let i=1;i<len-1;i++){
//         res+=Math.min(left_max[i],right_max[i])-height[i]
//     }
//     return res;
// }
var trap = function(height) {
    let res=0;
    let left_max=0,right_max=0;
    let left=0,right=height.length-1;
    while(left<right){

        
    }
};