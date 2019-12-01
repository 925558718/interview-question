function LastRemaining_Solution(n, m)
{
    // write code here
    let q=[]
    for (let i=0;i<n;i++){
        q.push(i);
    }
//[0,1,2,3,4]
    let index=0;
    let count=0;

    while (q.length>1){
        index++;
        if (index>=n) index=0;
        if (q[index]==-1) continue;
        count++;
        if (count==m){
            q[index]=-1;
            count=0;

        }
    }
    return q[0];
}

console.log(LastRemaining_Solution(6,7))
