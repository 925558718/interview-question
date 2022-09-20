/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let x = 0, y = 0;
    let m = mat.length - 1, n = mat[0].length - 1;
    let flag = true
    let res = []
    while (x >= 0 && x <= m && y >= 0 && y <= n) {
        res.push(mat[x][y])
        if (flag) {
            if (y === n) {
                flag = false;
                x += 1;
            } else if (x === 0) {
                y += 1;
                flag = false;
            } else {
                x -= 1;
                y += 1;
            }
        } else {
            if (x === m) {
                y += 1;
                flag = true
            } else if (y === 0) {
                x += 1;
                flag = true
            } else {
                x += 1;
                y -= 1;
            }
        }
    }
    return res;
};
findDiagonalOrder([[1, 2], [3, 4]])
// 1 2
// 3 4