/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n <= 9) return n
    let edge = 9;
    let count = 1;
    let lastEdge = 0;
    while (n > edge) {
        count += 1
        lastEdge = edge
        edge = edge + 9 * Math.pow(10, count - 1) * count
    }
    let index = n - lastEdge
    let start = Math.pow(10, count - 1) - 1;
    let num = start + Math.ceil(index / count)
    console.log(index, count, num, start)
    let idx = index % count
    let pow = count - idx
    if (idx === 0) {
        return num % 10;
    }
    return Math.floor(num / Math.pow(10, pow))%10
};
console.log(findNthDigit(10000))

//9
//10 - 99 90
//100-999 900
// 9000
// 1
//9 180

//9  180 2700
// 2889
