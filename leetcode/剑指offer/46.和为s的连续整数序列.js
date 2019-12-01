function FindContinuousSequence(sum)
{
    // write code here
    let left=1,right=2;
    let res=[];
    while (left<right){
        let s=(left+right)*(right-left+1)/2;

        console.log(s)
        if (s==sum){
            let out=[];
            for (let i=left;i<=right;i++) out.push(i);
            res.push(out);
            left++;
        }else if(s<sum) right++;
        else left++;
    }
    return res;
}

console.log(FindContinuousSequence(100))
