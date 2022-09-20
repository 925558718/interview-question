/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums[nums.length - k]
};
findKthLargest([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest2 = function (nums, k) {
    quickSort(nums, 0, nums.length - 1, k)
    return nums[nums.length-k]
};

function quickSort(nums, left, right, k) {
    if (left > right) return;
    let start = left, end = right;
    let tag = nums[left];
    while (start < end) {
        while (start < end && nums[end] >= tag) end--;
        while (start < end && nums[start] <= tag) start++;
        if (left < right) {
            let temp = nums[end]
            nums[end] = nums[start]
            nums[start] = temp
        }
    }
    nums[left] = nums[end]
    nums[end] = tag
    if (end === nums.length - k) {
        return nums
    }
    quickSort(nums, left, end - 1, k)
    quickSort(nums, end + 1, right, k)
}

console.log(findKthLargest2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4))