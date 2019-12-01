var searchInsert = function(nums, target) {
    nums.push(Number.MAX_VALUE)
    for (let i=0;i<nums.length;i++){

        if (nums[i]>=target) return i;
    }
    return 0;
};
console.log(searchInsert([1,3,5,6],7))
