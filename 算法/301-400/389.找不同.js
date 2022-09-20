/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let str=s+t;
    let res=0
    for(let i=0;i<str.length;i++) {
        res ^=str[i].charCodeAt();
    }
    return String.fromCharCode(res);
};