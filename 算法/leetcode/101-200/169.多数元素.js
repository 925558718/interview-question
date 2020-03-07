var majorityElement = function(nums) {
    let cnt=1;
    let flag=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]==flag){
            cnt++;
        }else  cnt--;
        if(cnt==0){
            flag=nums[i];
            cnt=1;
        }
    }
    return flag;
};