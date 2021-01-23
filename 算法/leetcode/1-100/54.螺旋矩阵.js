var spiralOrder = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return [];
  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;
  let res = [];
  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    if (--right < left) break;
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    if (--bottom < top) break;
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    if (++left > right) break;
  }
  return res;
};
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
