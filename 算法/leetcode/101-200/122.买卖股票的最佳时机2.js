var maxProfit = function (prices) {
    let res = 0, n = prices.length;
    for (let i = 0; i < n - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            res += prices[i + 1] - prices[i];
        }
    }
    return res;
};