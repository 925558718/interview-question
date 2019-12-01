/*function Fibonacci(n)
{
    // write code here
    let arr=[];
    arr[0]=0;
    arr[1]=1;
    arr[2]=1;
    for (let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];
}*/
function Fibonacci(n)
{

    if (n==0) return 0;
    if (n==1||n==2) return 1;
    return Fibonacci(n-1)+Fibonacci(n-2)
}

console.log(Fibonacci(7))
