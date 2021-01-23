var findRepeatedDnaSequences = function (s) {
    let res = new Set(), st = new Set();
    for (let i = 0; i + 9 < s.length; i++) {
        let t = s.substr(i, 10);
        if (st.has(t)) res.add(t);
        else st.add(t)
    }
    return res;
};
findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")