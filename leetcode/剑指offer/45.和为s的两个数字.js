function FindNumbersWithSum(array, sum)
{
    // write code here
    let min=Number.MAX_VALUE;
    let res=0;
    for (let i=0;i<array.length-1;i++){
        let left=i+1,right=array.length-1;
        while (left<=right){

            let mid=(left+right)>>1;
            console.log(array[mid])
            if (array[mid]==sum-array[i]){
                if (min>array[mid]*(array[i])){
                    min=array[mid]*(array[i]);
                    res=[(array[i]),array[mid]];
                }
                break;
            }else if(array[mid]<sum-array[i]) left=mid+1;
            else right=mid-1;
        }

    }
    return res;
}

console.log(FindNumbersWithSum([1,2,4,7,11,16],17))
