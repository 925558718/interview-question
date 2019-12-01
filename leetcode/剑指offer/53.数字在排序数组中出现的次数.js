function GetNumberOfK(data, k)
{
    // write code here
    let left=0,right=data.length-1;
    while (left<right){
        let mid=(left+right)>>1;
        if (k<=data[mid]) right=mid;
        else left=mid+1;
        console.log(right,left)
        }
    console.log(right)
    left=0,right=data.length-1;
    while (left<right){
        let mid=(left+right)>>1;
        if (k<data[mid]) right=mid;
        else left=mid+1;
    }
    console.log(right,left)

}
GetNumberOfK([0,0,0,3,3,3],3)
