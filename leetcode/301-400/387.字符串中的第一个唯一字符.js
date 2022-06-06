/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let m=new Map();
    let res=-1
    for(let i=s.length-1;i>=0;i--) {
        if(!m.has(s[i])) {
            m.set(s[i],0)
        }else {
            m.set(s[i],m.get(s[i])+1)
        }
    }
    for(const item of m.keys()) {
        if(item===1) return
    }
    return res;
};