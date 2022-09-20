/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1
    dp[3] = 2
    let count = 4;
    let j = 4
    while (j <= n) {
        for (j = count; j < count * 2 && j <= n; j++) {
            dp[j] = dp[j - count / 2] + ((j >= count + count / 2) ? 1 : 0)
        }
        count *= 2;
    }
    return n + 1 < 4 ? dp.slice(0, n + 1) : dp
};


console.log(countBits(8))

// 0。0
// 1。 1

// 10。1  2
// 11。2  3 1

// 100。1 4  4 - cou
// 101。2 5 1 5- c
// 110。2 6 0
// 111。3 7 1

// 1000 1 8 0  8
// 1001 2 9
// 1010 2 10
// 1011 3 11
// 1100 2 12
// 1101 3 13
// 1110 3 14
// 1111 4 15