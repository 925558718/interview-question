/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let res = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            let plus = n + 1;
            if (((plus & n) === 0 || plus % 4 === 0) && n !== 3) {
                n++
            } else {
                n--
            }

        }
        console.log(n)
        res++;
    }
    return res;
}
console.log(integerReplacement(10000))

// 5000 2500 1250 625

// 20 10 5 4 2 1

// 9 8 4 2 1
// 9 10 5 4 2 1