var divide = function (dividend, divisor) {
  let flag =
    (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)
      ? true
      : false;
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  if (a < b) return 0;
  let res = 0;
  res = div(a, b);
  res = flag ? res : -res;
  if (res > 2147483647) return 2147483647;
  if (res < -2147483648) return -2147483648;
  return res;
};
function div(a, b) {
  if (a < b) return 0;
  let count = 1;
  let t = b;
  while (t + t < a) {
    count = count + count;
    t = t + t;
  }
  return count + div(a - t, b);
}

console.log(divide(7, -3));
