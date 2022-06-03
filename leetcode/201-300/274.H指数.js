/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>{
        return a-b
    })
    for(let i=0;i<citations.length;i++) {
        if(citations[i] <=i) return i;
    }
    return citations.length
};