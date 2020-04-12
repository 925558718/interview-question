function FindNumbersWithSum(array, sum)
{
    // write code here
    let left=0,right=array.length-1;
    let res=[];
    while(left<right){
        if(array[left]+array[right]==sum){
            res.push(array[left],array[right]);
            break;
        }
        while(left<right&&array[left]+array[right]>sum) right--;
        while(left<right&&array[left]+array[right]<sum) left++;
    }
    return res;
}