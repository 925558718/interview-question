/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let n = num1.length;
  let m = num2.length;
  let res = new Array(n + m).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = num1[i] * num2[j] + res[p2];
      res[p2] = sum % 10;
      res[p1] = Math.floor(sum / 10)
    }
  }
  let str = ''
  res.forEach(item => {
    if (item != 0 || str.length !== 0) str += item
  })
  return str.length ? str : '0'
};