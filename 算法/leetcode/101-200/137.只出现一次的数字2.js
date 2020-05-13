var singleNumber = function(nums) {
    let res=0;
    for(let i=0;Int32Array;i++){
        let sum=0;
        for(let j=0;j<nums.length;i++){
            sum+=(nums[j]>>i)&i;
        }
        res|=(sum%3)<<i;
    }
    return res;
};