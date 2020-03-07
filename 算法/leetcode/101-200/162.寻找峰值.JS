var findPeakElement = function(nums) {
    let left=0,right=nums.length;
    while(left<right){
        let mid=(left+right)>>1;
        if(nums[mid]<nums[mid+1]) left=mid+1;
        else right=mid;
    }
    return right;
};