var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (target == nums[mid]) return true;
        if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (nums[mid] > nums[right]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else right--;
    }
    return false;
};