function maxInWindows(num, size)
{
    // write code here
    if (size==0) return []
    let res=[]
    for (let i=0;i<num.length-size+1;i++){
        res.push(Math.max(...num.slice(i,i+size)))
    }
    return res;
}

console.log(maxInWindows([2,3,4,2,6,2,5,1],3))

