function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length==0) return false;
    function help(sequence,left,right){
        if(left>right) return true;
        let mid=left;
        while(mid<right&&sequence[mid++]<sequence[right]);
        let t=mid;
        while(t<right&&sequence[t++]>sequence[right]);
        if(t<right) return false;
        if(mid==left){
            return help(sequence,left+1,right);
        }else if(mid==right){
            return help(sequence,left,right-1);
        }else{
            return help(sequence,left,mid-1)&&help(sequence,mid+1,right);
        }
    }
    return help(sequence,0,sequence.length-1);
}