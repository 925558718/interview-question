function GetUglyNumber_Solution(index)
{
    // write code here
    if (index<7) return index;
    let p2=0,p3=0,p5=0,newNum=1;
    let arr=[];
    arr.push(newNum);
    while (arr.length<index){
        newNum=Math.min(arr[p2]*2,arr[p3]*3,arr[p5]*5);
        if (arr[p2]*2==newNum) p2++;
        if (arr[p3]*3==newNum) p3++;
        if (arr[p5]*5==newNum) p5++;
        arr.push(newNum);
    }
    return newNum;
}
