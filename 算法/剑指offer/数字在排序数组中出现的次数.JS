function GetNumberOfK(data, k)
{
    // write code here
    let left=0,right=data.length-1;
    while(left<right){
        let mid=(left+right)>>1;
        if(data[mid]>=k){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    left=0,right=data.length-1;
    while(left<right){
        let mid=(left+right)>>1;
        if(data[mid]<=k){
            left=mid+1;
        }else{
            right=mid;
        }
    }
}
GetNumberOfK([1,1,2,2,2,3],2)