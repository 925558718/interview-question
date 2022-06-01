/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  let res = [];
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*"
    ) {
      let left = diffWaysToCompute(expression.substring(0, i));
      let right = diffWaysToCompute(expression.substring(i + 1));
      for (let j = 0; j < left.length; j++) {
        for (let x = 0; x < right.length; x++) {
          if (expression[i] === "+") res.push(left[j] + right[x]);
          else if (expression[i] === "-") res.push(left[j] - right[x]);
          else res.push(left[j] * right[x]);
        }
      }
    }
  }
  if (res.length === 0) res.push(+expression);
  console.log(res);
  return res;
};

diffWaysToCompute("2-1-1");
