function VerifySquenceOfBST(sequence)
{
    // write code here
    function help(arr,left,right) {
        if(arr.length==0) return false;
        if (left>=right) return true;

        let mid=left;
        while (arr[mid++]<arr[right]&&mid<right);
        let end=mid;
        while (arr[end++]>arr[right]&&end<right);
        if (end<right) return false;
        if (mid===left||mid===right){
            return help(arr,left,right-1);
        }else{
            return help(arr,left,mid-1)&&help(arr,mid,right-1)
        }
    }
    return help(sequence,0,sequence.length-1)
}
