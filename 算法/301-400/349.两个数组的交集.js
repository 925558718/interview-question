/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let pre = 0, cur = 0;
    let res = []
    while (pre < nums1.length && cur < nums2.length) {
        if (nums1[pre] < nums2[cur]) {
            pre++
        } else if (nums1[pre] > nums2[cur]) {
            cur++;
        } else {
            res.push(nums1[pre])
            while (pre < nums1.length -1 && nums1[pre] === nums1[pre + 1]) pre++;
            while (cur < nums2.length -1 && nums2[cur] === nums2[cur + 1]) cur++;
            pre++;
            cur++;
        }
    }
    return res;
};

console.log(intersection([1,2,2,1],[2,2]))