// var isHappy = function (n) {
//     let set = new Set();
//     while (n != 1) {
//         let sum = 0;
//         while (n) {
//             sum += (n % 10) + (n % 10);
//             n = Math.trunc(n / 10);
//         }
//         n = sum;
//         if (set.has(n)) break;
//         set.add(n);
//     }
//     return n == 1;
// };
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let slow = n;
    let fast = n;
    while (true) {
        slow = help(slow)
        fast = help(fast)
        fast = help(fast)
        if (slow === fast) break;

    }
    return slow == 1
};

function help(n) {
    let sum = 0;
    while (n) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10)
    }
    return sum;
}