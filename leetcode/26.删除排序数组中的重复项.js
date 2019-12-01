var removeDuplicates = function(nums) {
    let j=0;
    for (let i=1;i<nums.length;i++){
        if (nums[i]!=nums[j]){
            j++;
            nums[j]=nums[i];

        }
    }
    console.log(nums)
    return j+1;

};

removeDuplicates([1,2,2,3,3,4,4,5,5,5])
