/**
 * @param {number[][]} wall
 * @return {number}
 */
 var leastBricks = function(wall) {
    let map=new Map();
    let max=0
    for(let row of wall) {
        let sum=0;
        for(let i=0;i<row.length-1;i++) {
            sum+=row[i]
            map.set(sum,(map.get(sum) ||0)+1)
            max=Math.max(max,map.get(sum))
        }
    }
    return wall.length-max
};