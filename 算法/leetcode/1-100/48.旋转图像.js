function rotate(m) {
  let n = m.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      let temp = m[i][j];
      m[i][j] = m[n - 1 - j][n - 1 - i];
      m[n - 1 - j][n - 1 - i] = temp;
    }
  }
  console.log(m);

  return m.reverse();
}
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
