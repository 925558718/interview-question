/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
 var validSquare = function(p1, p2, p3, p4) {
    let map=new Set();
    let arr=[p1,p2,p3,p4]
    for(let i=0;i<4;i++) {
        for(let j=i+1;j<4;j++) {
            let x1=arr[i][0],x2=arr[j][0],y1=arr[i][1],y2=arr[j][1]
            let diff=(x1-x2)*(x1-x2) +(y2-y1)*(y2-y1)
            if(diff===0) return false;
            map.add(diff)
        }
    }
    return map.size===2
};