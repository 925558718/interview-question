var rotate = function (nums, k) {
    let t = nums;
    for (let i = 0; i < t.length; i++) {
        nums[(i + k) % t.length] = t[i];
    }
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
