var setZeroes = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    let m = matrix.length, n = matrix[0].length;
    let rowZero = false, colZero = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] == 0) colZero = true;
    }
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] == 0) rowZero = true;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }


    if (rowZero) {
        for (let i = 0; i < n; i++) matrix[0][i] = 0;
    }
    if (colZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
    return matrix;
};