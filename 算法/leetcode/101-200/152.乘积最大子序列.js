var maxProduct = function (nums) {
    let res = nums[0], n = nums.length;
    let f = new Array(n).fill(0);
    let g = new Array(n).fill(0);
    g[0] = nums[0];
    f[0] = nums[0];
    for (let i = 1; i < n; i++) {
        f[i] = Math.max(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i])
        g[i] = Math.min(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i])
        res = Math.max(res, f[i]);
    }
    return res;
};