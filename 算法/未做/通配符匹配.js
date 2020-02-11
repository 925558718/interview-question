// var minSubArrayLen = function(s, nums) {
//     let left=0,right=0,sum=0;
//     let len=nums.length;
//     let res=len+1;
//     while(right<len){
//         while(sum<s&&right<len){
//             sum+=nums[right++];
//         }
//         while(sum>=s){
//             res=Math.min(res,right-left);
//             sum-=nums[left++];
//         }
//     }
//     return res==len+1?0:res;
// };
var minSubArrayLen = function(s, nums) {
    let sums=new Array(nums.length+1).fill(0);
    let n=nums.length;
    let res=Number.MAX_VALUE;
    for(let i=1;i<n+1;i++){
        sums[i]=nums[i-1]+sums[i-1];
    }
    for(let i=0;i<n;i++){
        let left=i+1,right=n,t=sums[i]+s;
        while(left<right){
            let mid=(left+right)>>1;
            if(sums[mid]<t) left=mid+1;
            else right=mid-1;
        }
        if(left==n+1) break;
        res=Math.min(res,left-i);
    }
    return res==Number.MAX_VALUE?0:res;
};