// var findDuplicate = function(nums) {
//     let left=0,right=nums.length-1;
//     while(left<right){
//         let mid=(left+right)>>1;
//         let cnt=0;
//         for(let i=0;i<nums.length;i++){
//             if(nums[i]<=mid) cnt++;
//         }
//         if(cnt<=mid) left=mid+1;
//         else right=mid;
//     }
//     return right;
// };
var findDuplicate = function(nums) {
    let slow=0,fast=0,t=0;
    while(true){
        slow=nums[slow];
        fast=nums[nums[fast]];
        if(slow==fast) break;
    }
    while(true){
        slow=nums[slow];
        t=nums[t];
        if(t==slow) break;
    }
    return t;
};
console.log(findDuplicate([3,3,4,2,2]));
