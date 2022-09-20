var fourSum = function (nums, target) {
    let res = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            let left = j + 1, right = nums.length - 1;
            let sum = nums[left] + nums[right] + nums[i] + nums[j];

            while (left < right) {
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    res.push([nums[left], nums[right], nums[i], nums[j]]);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                }
            }
        }
    }
    console.log(res);

    return res;
};
fourSum([0, 0, 0, 0, 0], 0)