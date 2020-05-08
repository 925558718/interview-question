// var maxPoints = function(points) {
//     let res=0;
//     for(let i=0;i<points.length;i++){
//         let dup=1;
//         for(let j=i+1;j<points.length;j++){
//             let cnt=0;
//             let x1=points[i][0];
//             let x2=points[j][0];
//             let y1=points[i][1];
//             let y2=points[j][1];
//             if(x1==x2&&y1==y2){
//                 dup++;
//                 continue;
//             }
//             for(let k=0;k<points.length;k++){
//                 let x3=points[k][0],y3=points[k][1];
//                 if((x1*y2+x2*y3+y1*x3-y2*x3-y3*x1-y1*x2)==0) cnt++;
//             }
//             res=Math.max(res,cnt);
//         }
//         res=Math.max(res,dup)
//     }
//     return res;
// };
console.log(maxPoints([[1,1],[2,2],[3,3]]));
