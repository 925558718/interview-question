function PrintMinNumber(numbers)
{
    // write code here
    numbers.sort((a, b) => {
        let numA=a+""+b;
        let numB=b+""+a;
        
        return Number(b)-Number(a);
    })
    let res=""
    console.log(numbers)
    for (let i=0;i<numbers.length;i++){
        res+=numbers[i];
    }
    return res;

}
PrintMinNumber([3,32,321])
