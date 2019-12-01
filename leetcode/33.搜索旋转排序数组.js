var search = function(nums, target) {
    if (nums.length==1&&nums[0]==target) return 0;
    let left=0,right=nums.length-1;
    while (left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if (nums[mid]===target) return mid;
        if (nums[left]<=nums[mid]){
            if (target>=nums[left]&&target<=nums[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }

        }
        else if (nums[right]>=nums[mid]){
            if (target>=nums[mid]&&target<=nums[right]){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
    }
    return -1;
};
console.log(search([5,1,3],5))
