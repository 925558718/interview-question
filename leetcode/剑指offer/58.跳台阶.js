function jumpFloor(number)
{
    // write code here
    let arr=[];
    arr[1]=1;
    arr[2]=2;
    for (let i=3;i<=number;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[number]
}
