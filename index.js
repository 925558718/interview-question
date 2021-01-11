console.time('time')
let a=1;
for(let i=0;i<1000000000;i++){
    a*=10;
}
console.timeEnd('time')