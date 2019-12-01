/*var findKthLargest = function(nums, k) {
    let t=k;
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length-i;j++){
            if (nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
            }
        }
        if (--t==0) return nums[nums.length-k];
    }
    return -1;
};*/

function getP(arr,left,right) {
    let l=left,r=right;
    let temp=arr[l];
    while (l<r){
        while (l<r&&arr[r]>=temp) r--;
        while (l<r&&arr[l]<=temp) l++;
        [arr[r],arr[l]]=[arr[l],arr[r]];
    }
    arr[left]=arr[r];
    arr[r]=temp;
    return r;
}
function help(arr,left,right,k) {
    if (left>right) return;
    let l=left,r=right;
    let index=getP(arr,l,r);

    while (index!=arr.length-k){

        if (index<arr.length-k){
            l=index+1;
            index=getP(arr,l,r);
        }else if(index>arr.length-k){
            r=index-1;
            index=getP(arr,l,r);
        }
    }

    return arr[index];

}
var findKthLargest = function(nums, k) {
    return help(nums,0,nums.length-1,k)
};
console.log(findKthLargest([2,1],2))
