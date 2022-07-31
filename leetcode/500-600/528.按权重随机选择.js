/**
 * @param {number[]} w
 */
var Solution = function (w) {
    let arr = new Array(w.length)
    arr[0] = w[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + w[i]
    }
    this.arr = arr;
    this.sum = w.reduce((sum, item) => sum + item, 0)

};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let x = Math.floor(this.sum * Math.random()) + 1
    let left = 0, right = this.arr.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (x > this.arr[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */