var romanToInt = function (s) {
    let dist = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let val = dist[s[i]];
        if (i == s.length - 1 || dist[s[i + 1]] <= dist[s[i]]) res += val;
        else res -= val;
    }
    return res;
};
console.log(romanToInt("IV"));
