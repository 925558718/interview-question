function PrintMinNumber(numbers)
{
    // write code here
    for(let i=0;i<numbers.length;i++){
        numbers[i]=numbers[i]+""
    }
    let num=numbers.sort((a,b)=>{
        return (a+b)-(b+a);
    })
    return num.join("")
}
console.log(PrintMinNumber([321,32,3]));
