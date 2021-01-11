/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]


var gameOfLife = function (board) {
    let row = board.length;
    let column = row ? board[0].length : 0;
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            let res =
                + dfs(board, x - 1, y, row, column)
                + dfs(board, x - 1, y + 1, row, column)
                + dfs(board, x, y + 1, row, column)
                + dfs(board, x + 1, y + 1, row, column)
                + dfs(board, x + 1, y, row, column)
                + dfs(board, x + 1, y - 1, row, column)
                + dfs(board, x, y - 1, row, column)
                + dfs(board, x - 1, y - 1, row, column)
            if (board[x][y]) {
                if (res === 2 || res === 3) {
                    board[x][y] |= 2;
                }
            } else {
                if (res === 3) {
                    board[x][y] |= 2;
                }
            }

        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            board[i][j] >>= 1; //右移一位，用第二bit覆盖第一个bit。
        }
    }
    return board
};
function dfs(board, x, y, r, c) {
    if (x < 0 || x >= r || y < 0 || y >= c) return 0;
    return board[x][y] & 1;
}
gameOfLife(board)
console.log(board);