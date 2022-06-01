var searchInsert = function (nums, target) {
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return i;
};
console.log(searchInsert([1, 3, 5, 6], 0));
