var removeDuplicates = function(nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(j<2||nums[i]!=nums[j-2]){
            nums[j++]=nums[i];
        }
    }
    return j;
};
console.log(removeDuplicates([1,1,1,2,2,3]));
