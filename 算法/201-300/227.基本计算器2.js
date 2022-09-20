/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let num = 0;
    let stack = []
    let op = '+'
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0') {
            num = num * 10 + +s[i]
        }
        if (['+', '-', '*', '/'].includes(s[i]) || i === s.length - 1) {
            if (op === '+') {
                stack.push(num)
            } else if (op === '-') {
                stack.push(-num)
            } else if (op === '*') {
                let calc = stack[stack.length - 1] * num
                stack.pop();
                stack.push(calc)
            } else if (op === '/') {
                let calc = Math.trunc(stack[stack.length - 1] / num)
                stack.pop();
                stack.push(calc)
            }
            op = s[i]
            num = 0

        }
    }
    return stack.reduce((sum, item) => {
        return sum + item
    }, 0)
};