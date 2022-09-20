var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let k1 = (m + n + 1) >> 1;
  let k2 = (m + n + 2) >> 1;
  return (help(nums1, 0, nums2, 0, k1) + help(nums1, 0, nums2, 0, k2)) / 2;
};
function help(nums1, i, nums2, j, k) {
  if (i >= nums1.length) return nums2[j + k - 1];
  if (j >= nums2.length) return nums1[i + k - 1];
  if (k == 1) return Math.min(nums1[i], nums2[j]);
  let half = k >> 1;
  let n1 = i + half - 1 < nums1.length ? nums1[i + half - 1] : Number.MAX_VALUE;
  let n2 = j + half - 1 < nums2.length ? nums2[j + half - 1] : Number.MAX_VALUE;
  return n1 > n2
    ? help(nums1, i, nums2, j + half, k - half)
    : help(nums1, i + half, nums2, j, k - half);
}
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6]));


