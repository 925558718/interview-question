let m = new Map()
var wordBreak = function (s, wordDict) {
    if (m.has(s)) return m.get(s);
    if (s.length == 0) return [""];
    let res = [];
    for (let i = 0; i < wordDict.length; i++) {
        let item = wordDict[i];
        if (s.substr(0, item.length) != item) continue;
        let rem = wordBreak(s.substr(item.length), wordDict)
        rem.forEach(str => {
            res.push(item + (str.length == 0 ? "" : " ") + str)
        })
    }
    m.set(s, res)
    return m.get(s)
};