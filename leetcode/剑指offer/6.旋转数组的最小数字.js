function minNumberInRotateArray(rotateArray)
{
    // write code here
    let left=0,right=rotateArray.length-1;
    while(left<right){
        if (rotateArray[left]<rotateArray[rotateArray]) return rotateArray[left];
        let mid=(left+right)>>1;
        if (rotateArray[mid]>rotateArray[left]) left=mid+1;
        else if (rotateArray[mid]<rotateArray[right]) right=mid;
        else left++;
    }
    return rotateArray[left]
}

console.log(minNumberInRotateArray([3,4,5,1,2]))


