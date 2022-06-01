var threeSum = function(nums) {
    let res=[]
    nums=nums.sort(function(a,b){
        return a-b;
    })
    for(let i=0;i<nums.length-2;i++){
        if(nums[i]>0) break;
        if(i>0&&nums[i]==nums[i-1]) continue;
        let target=0-nums[i],left=i+1,right=nums.length-1;
        while(left<right){
            if(target==nums[left]+nums[right]){
                res.push([nums[i],nums[left],nums[right]]);
                while(left<right&&nums[left]==nums[left+1]) left++;
                while(left<right&&nums[right]==nums[right-1]) right--;
                left++;
                right--;
            }else if(target>nums[left]+nums[right]){
                left++;
            }else{
                right--;
            }
        }
    }
    return res;
}
console.log(threeSum([0,0,0,0]));
