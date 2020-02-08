var threeSumClosest = function(nums, target) {
    let a=Number.MAX_VALUE;
    let res;
    nums=nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        let left=i+1,right=nums.length-1;
        while(left<right){
            let sum=nums[left]+nums[right]+nums[i];
            if(Math.abs(sum-target)<a){
                a=Math.abs(sum-target);
                res=sum;
            }
            if(sum>target){
                right--;
            }else{
                left++;
            }
        }
    }
    return res;
};
console.log(threeSumClosest([-1,2,1,-4],1));
