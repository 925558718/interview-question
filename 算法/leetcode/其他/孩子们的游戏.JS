
function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<1||m<1) return -1;
    let arr=new Array(n).fill(1);
    
    let i=-1,step=0,count=n;
    while(count>0){
        i++;
        if(i>=n) i=0;
        if(arr[i]==0) continue;
        step++;
        if(step==m){
            arr[i]=0;
            step=0;
            count--;
        }
        
    }
    return i;
}
console.log(LastRemaining_Solution(5,3));
