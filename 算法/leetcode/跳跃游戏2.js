var jump = function(nums) {
    let res=0,n=nums.length;
    let cur=0;
    let i=0;
    while(cur<n-1){
        res++;
        let pre=cur;
        for(;i<=pre;i++){
            cur=Math.max(cur,i+nums[i])
        }
    }
    return res;
};