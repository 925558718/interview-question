function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let flag=numbers[0];
    let cnt=1;
    for (let i=1;i<numbers.length;i++){
        numbers[i]==flag?cnt++:cnt--;
        if (cnt==0){
            flag=numbers[i];
            cnt++;
        }

    }

    cnt=0;
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]==flag) cnt++
    }

    return cnt>numbers.length>>1?flag:0;
}

console.log(MoreThanHalfNum_Solution(
    [1,2,3,2,2,2,5,4,2]))
