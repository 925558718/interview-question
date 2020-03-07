var findMin = function(nums) {
    let left=0,right=nums.length-1;
    while(left<right){
        if(nums[left]<nums[right]) return nums[left];
        let mid=(left+right)>>1;
        if(nums[mid]>nums[left]){
            left=mid;
        }else if(nums[mid]<nums[right]){
            right=mid;
        }else{
            left++;
        }
    }
    return nums[left]
};