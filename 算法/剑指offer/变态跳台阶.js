function jumpFloorII(number)
{
    // write code here
    let count=0;
    if(number==0) return 1;
    for(let i=1;i<=number;i++){
        count+=jumpFloorII(number-i);
    }
    return count;
}