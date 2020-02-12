function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let cnt=1;
    let flag=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(flag==numbers[i]){
            cnt++;
        }else cnt--;
        if(cnt==0){
            cnt=1;
            flag=numbers[i];
        }
    }
    cnt=0;
    numbers.forEach(item=>{
        if(item==flag) cnt++;
    })
    console.log(cnt,flag);
    
    return cnt>Math.floor(numbers.length/2)?flag:0
}
console.log(MoreThanHalfNum_Solution([4,2,1,4,2,4]));
