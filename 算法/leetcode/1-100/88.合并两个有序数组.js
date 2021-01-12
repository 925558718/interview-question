var merge = function (nums1, m, nums2, n) {
    let res = [];
    let s1 = 0, s2 = 0;
    while (s1 < m && s2 < n) {
        if (nums1[s1] <= nums2[s2]) {
            res.push(nums1[s1])
            s1++;
        } else {
            res.push(nums2[s2])
            s2++;
        }
    }
    if (s1 == m) {
        for (let i = s2; i < n; i++) {
            res.push(nums2[i]);
        }
    } else {
        for (let i = s1; i < m; i++) {
            res.push(nums1[i]);
        }
    }
    return res;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
