var multiply = function (num1, num2) {
  let res = "";
  let m = num1.length,
    n = num2.length;
  let vals = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j];
      let p1 = i + j,
        p2 = i + j + 1;
      let sum = mul + vals[p2];
      vals[p1] += Math.floor(sum / 10);
      vals[p2] = sum % 10;
    }
  }
  vals.forEach((item) => {
    if (item != 0) res += item;
  });
  return res;
};
console.log(multiply("10", "20"));
