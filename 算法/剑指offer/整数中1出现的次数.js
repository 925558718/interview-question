function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let res=0;
    for(let i=1;i<=n;i++){
        
        res+=help(i);
    }
    return res;
}
function help(num){
    num=(num+"").split("");
    return num.reduce((sum,item)=>{
        return item=='1'?sum+1:sum;
    },0)
}
NumberOf1Between1AndN_Solution(5);
