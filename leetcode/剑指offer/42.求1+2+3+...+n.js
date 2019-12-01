function IsContinuous(numbers)
{
    // write code here
    if(numbers.length==0) return false;
    numbers.sort((a, b) => a-b);
    let len=numbers.length;
    let count=0;
    while (numbers[0]===0) {numbers.shift();count++};
    if (numbers.length==1) return true;
    for (let i=1;i<numbers.length;i++){
        let x=numbers[i]-numbers[i-1]-1;
        count-=x;
    }

    return count===0;

}
IsContinuous([3,0,0,0,0])
