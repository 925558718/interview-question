function FindGreatestSumOfSubArray(array)
{
    // write code here
    let max=array[0];
    let res=array[0];
    for (let i=1;i<array.length;i++){
        max=Math.max(array[i],array[i]+max);
        res=Math.max(res,max);
    }
    return res;
}

