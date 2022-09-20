// var merge = function(intervals) {
//     if(intervals.length==0) return [];
//     intervals.sort((a,b)=>a[0]-b[0]);
//     let res=[intervals[0]];
//     for(let i=0;i<intervals.length;i++){
//         if(res[res.length-1][1]<intervals[i][0]){
//             res.push(intervals[i])
//         }else{
//             res[res.length-1][1]=Math.max(res[res.length-1][1],intervals[i][1])
//         }
//     }
//     return res;
// };
var merge = function (intervals) {
  let len = intervals.length;
  let res = [];
  let start = [],
    end = [];
  for (let i = 0; i < len; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }
  start = start.sort((a, b) => a - b);
  end = end.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < len; i++) {
    if (i == len - 1 || start[i + 1] > end[i]) {
      res.push([start[j], end[i]]);
      j = i + 1;
    }
  }
  return res;
};
console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
