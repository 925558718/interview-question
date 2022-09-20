/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let set1=new Set('asdfghjkl'.split(""))
    let set2=new Set('zxcvbnm'.split(""))
    let set3=new Set('qwertyuiop'.split(""));
    let res=[]
    for(let i=0;i<words.length;i++) {
        let cnt1=0,cnt2=0,cnt3=0;
        for(let j=0;j<words[i].length;j++) {
            let c=words[i][j].toLowerCase()
            if(set1.has(c)) cnt1=1
            if(set2.has(c)) cnt2=1
            if(set3.has(c)) cnt3=1;
            if(cnt3+cnt2+cnt1 > 1) break;
        }
        if(cnt3+cnt2+cnt1 === 1) res.push(words[i])
    }
    return res
};