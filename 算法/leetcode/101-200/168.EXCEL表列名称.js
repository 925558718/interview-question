var convertToTitle = function (n) {
    let res = "";
    let dist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while (n) {
        res += dist[--n % 26];
        n = Math.floor(n / 26);
    }
    return res.split("").reverse().join("");

};
console.log(convertToTitle(1));
