var searchRange = function(nums, target) {
    let left=0,right=nums.length-1;
    let res=[-1,-1];
    while(left<right){
        let mid=(left+right)>>1;
        if(nums[mid]<target) left=mid+1;
        else right=mid;
    }
    if(nums[left]!=target) return res;
    res[0]=left;

    
    left=0,right=nums.length;
    while(left<right){
        let mid=(left+right)>>1;
        if(nums[mid]<=target) left=mid+1;
        else right=mid;
    }
    
    
    res[1]=left-1<0?0:left-1;
    return res;
};
console.log(searchRange([2,2],2));
