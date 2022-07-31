var countPrimes = function (n) {
    let flag = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (flag[i]) {
            for (let j = i +i ; j < n; j += i) {
                flag[j] = false;
            }
        }
    }
    let res = 0;
    for (let i = 2; i < n; i++) {
        if (flag[i]) res++;
    }
    return res;
};