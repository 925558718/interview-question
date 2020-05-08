var nextPermutation = function(nums) {
    let n=nums.length,i,j;
    for(i=nums.length-2;i>=0;i--){
        if(nums[i+1]>nums[i]){
            for(j=n-1;j>i;j--){
                if(nums[j]>nums[i]) break;
            }
            let t=nums[j];
            nums[j]=nums[i];
            nums[i]=t;
            let r=nums.slice(i+1,nums.length).reverse();
            nums.splice(i+1,r.length,...r)
            return nums;
        }
    }
    return nums.reverse();
};
console.log(nextPermutation([1,2,3]));

