var findKthLargest = function(nums, k) {
    
    let len=nums.length;
    let left=0,right=nums.length-1;
    let index=getP(nums,left,right);
    
    
    while(index!==len-k){
        if(index<len-k){
            left=index+1;
        }else if(index>len-k){
            right=index-1;
        }
        index=getP(nums,left,right)

    }
    console.log(index,len-k);
    
    return nums[index]
};
function getP(arr,left,right){
    let l=left,r=right;
    let temp=arr[left];
    while(l<r){
        while(l<r&&arr[r]>=temp) r--;
        while(l<r&&arr[l]<=temp) l++;
        let t=arr[r];
        arr[r]=arr[l];
        arr[l]=t;
    }
    arr[left]=arr[r];
    arr[r]=temp;
    return r;
}
console.log(findKthLargest([3,2,1,5,6,4],2));
