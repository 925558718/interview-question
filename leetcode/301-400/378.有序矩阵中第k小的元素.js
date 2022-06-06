/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length
    let left = 0, right = m * n;
    let targetX = Math.floor((k - 1) / n)
    let targetY = (k - 1) % m
    while (left < right) {
        let mid = (left + right) >> 1;
        let curX = Math.floor(mid / (n + 1))
        let curY = mid % (m + 1)
        if (matrix[curX][curY] < matrix[targetX][targetY]) {
            left = mid + 1
        } else {
            right = mid;
        }
    }
    let resX = Math.floor(right / (n + 1))
    let resY = Math.floor(right % (m + 1))
    return matrix[resX][resY]

};

console.log(kthSmallest([[1, 2], [1, 3]], 2))
