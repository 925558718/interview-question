/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function (expression) {
    let n = 0;
    let sonSum = 0;
    let fatherSum = 1;
    if (expression[0] != '+' && expression[0] != '-') {
        expression = '+' + expression
    }
    while (n < expression.length) {
        let op = expression.substring(n, n + 1)
        n++;
        let start = n;
        while (n < expression.length && +expression[n] >= 0 && +expression[n] <= 10) {
            n++;
        }
        let son = expression.substring(start, n)
        n++;
        start = n;
        while (n < expression.length && +expression[n] >= 0 && +expression[n] <= 10) {
            n++;
        }
        let father = expression.substring(start, n)
        if (op === '+') {
            sonSum *= father
            sonSum += son * fatherSum
            fatherSum *= father
        } else {
            sonSum *= father
            sonSum -= son * fatherSum
            fatherSum *= father
        }
    }
    let c = Math.abs(gcd(sonSum, fatherSum))
    return `${sonSum / c}/${fatherSum / c}`

};
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}