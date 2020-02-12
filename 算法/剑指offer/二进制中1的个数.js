function NumberOf1(n)
{
    // write code here
    let count=0;
    while(n){
        n=n&n-1;
        count++;
    }
    return count;
}