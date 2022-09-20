/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let left = 1, right = nums.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        let cnt = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) cnt++;
        }
        if (cnt <= mid) left = mid + 1;
        else right = mid;
    }
    return left
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate2 = function (nums) {
    let slow = 0, fast = 0, t = 0;
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break;
    }
    while (true) {
        slow = nums[slow];
        t = nums[t]
        if (slow === t) break;
    }
    return slow;
};

var findDuplicate3 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[nums[i] - 1]) {
            while (nums[i] != nums[nums[i] - 1]) {
                let temp = nums[nums[i] - 1]
                nums[nums[i] - 1] = nums[i]
                nums[i] = temp;
            }
            if (nums[i] === nums[nums[i] - 1] && i != nums[i] - 1) return nums[i]
        } else {
            if (i != nums[i] - 1) return nums[i]
        }
    }
};