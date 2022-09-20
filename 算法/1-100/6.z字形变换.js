var convert = function (s, numRows) {
    if (numRows <= 1) return s;
    let i = 0, n = s.length;
    let vec = new Array(numRows).fill("");
    while (i < n) {
        for (let pos = 0; pos < numRows && i < n; ++pos) {
            vec[pos] += s[i++];
        }
        for (let pos = numRows - 2; pos >= 1 && i < n; --pos) {
            vec[pos] += s[i++];
        }
    }
    return vec.join("");
};
convert("LEETCODEISHIRING", 3)
