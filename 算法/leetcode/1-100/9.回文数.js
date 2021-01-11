var isPalindrome = function (x) {
    if (x < 0) return false;
    let ori = x;
    let res = 0;
    while (x) {
        res = res * 10 + x % 10
        x = Math.floor(x / 10);
    }
    return ori === res;
};
