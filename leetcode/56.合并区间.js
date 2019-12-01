var merge = function(intervals) {
    if (intervals.length==0) return []
    intervals.sort((a, b) => a[0]-b[0]);
    let res=[intervals[0]];
    for (let i=1;i<intervals.length;i++){

        if (res[res.length-1][1]>=intervals[i][0]){
            if (res[res.length-1][1]<=intervals[i][1]){
                res[res.length-1][1]=intervals[i][1]
            }
        }else{
            res.push(intervals[i])
        }
    }
    return res;
};
console.log(merge([]))
