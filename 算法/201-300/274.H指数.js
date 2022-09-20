/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    let n=citations.length
    let arr=new Array(n+1).fill(0)
    for(let i=0;i<n;i++) {
        if(citations[i]>n) {
            arr[n]++
        }else {
            arr[citations[i]]++;
        }
    }
    let total=0;
    for(let i=n;i>=0;i--) {
        total+=arr[i]
        if(total>=i) {
            return i;
        }
    }
    return citations[0]
};

// 0 1 3 5 6