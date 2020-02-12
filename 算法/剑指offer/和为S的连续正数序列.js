function FindContinuousSequence(num,k)
{
    // write code here
    let res=0,len=num.length;
    let sums=num;
    for(let i=1;i<len;i++){
        sums[i]=sums[i-1]+nums[i];
    }
    for(let i=0;i<len;i++){
        if(sums[i]==k) res++;
        for(let j=i-1;j>=0;j--){
            if(sums[i]-sums[j]==k) res++;
        }
    }
    return res;
}