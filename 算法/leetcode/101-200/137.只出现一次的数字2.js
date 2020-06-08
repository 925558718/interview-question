var singleNumber = function(nums) {
    let res=0;
    for(let i=0;i<32;i++){
        let sum=0;
        for(let j=0;j<nums.length;i++){
            sum+=(nums[j]>>i)&1;
        }
        res|=(sum%3)<<i;
    }
    return res;
};