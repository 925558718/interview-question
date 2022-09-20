/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let visited = new Array(m)
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }
    let res = {
        maxLen: 0,
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            !visited[i][j] && help(i, j, [], visited, matrix, -Number.MAX_VALUE, res);
        }
    }
    console.log(res)
    return res.maxLen
};

function help(x, y, out, visited, matrix, pre, res) {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return
    if (visited[x][y] || matrix[x][y] <= pre) return

    if (out.length >= res.maxLen) {
        res.maxLen = out.length + 1
    }
    visited[x][y] = true
    help(x - 1, y, out.concat(matrix[x][y]), visited, matrix, matrix[x][y], res)
    help(x + 1, y, out.concat(matrix[x][y]), visited, matrix, matrix[x][y], res)
    help(x, y + 1, out.concat(matrix[x][y]), visited, matrix, matrix[x][y], res)
    help(x, y - 1, out.concat(matrix[x][y]), visited, matrix, matrix[x][y], res)
    visited[x][y] = false
}

longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])