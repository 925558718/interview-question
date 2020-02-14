var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    let k1=Math.floor((n+m+1)/2);
    let k2=Math.floor((n+m+2)/2);
    return (help(nums1,0,nums2,0,k1)+help(nums1,0,nums2,0,k2))/2;
};
function help(nums1,i,nums2,j,k){
    if(i>=nums1.length) return nums2[j+k-1];
    if(j>=nums2.length) return nums1[i+k-1];
    if(k==1) return Math.min(numsi[i],nums2[j]);
    let half=Math.floor(k/2);
    let n1=i+half-1<nums1.length?nums1[i+half-1]:Number.MAX_VALUE;
    let n2=j+half-1<nums2.length?nums2[j+half-1]:Number.MAX_VALUE;
    
    if(n1<n2){
        return help(nums1,i+half,nums2,j,k-half);
    }else{
        return help(nums1,i,nums2,j+half,k-half);
    }
}