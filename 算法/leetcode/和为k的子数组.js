var subarraySum = function(nums, k) {
    let res=0,len=nums.length;
    let sums=nums;
    for(let i=1;i<len;i++){
        sums[i]=sums[i-1]+nums[i];
    }
    for(let i=0;i<len;i++){
        if(sums[i]==k) res++;
        for(let j=i-1;j>=0;j--){
            if(sums[i]-sums[j]==k) res++;
        }
    }
    return res;
};
console.log(subarraySum([1,1,1],2));
