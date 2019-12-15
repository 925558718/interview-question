var maxSubArray = function(nums) {
    let max=nums[0];
    let res=nums[0];
    for (let i=0;i<nums.length;i++){
        max=Math.max(nums[i]+max,nums[i]);
        res=Math.max(max,res)
    }
    return res;
};
