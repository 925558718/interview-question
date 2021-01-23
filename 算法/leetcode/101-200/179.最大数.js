var largestNumber = function (nums) {
  let fn = (a, b) => {
    let n1 = a + "" + b;
    let n2 = b + "" + a;
    return n2 - n1;
  };
  nums = nums.sort(fn);
  let i = 0;
  for (i = 0; i < nums.length - 1; i++) if (nums[i] != 0) break;
  return nums.slice(i, nums.length).join("");
};
console.log(largestNumber([0, 0]));
