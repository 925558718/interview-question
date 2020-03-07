var longestConsecutive = function(nums) {
    let s=new Set();
    let res=0;
    nums.forEach(item=>{
        s.add(item,1)
    });
    for(let i=0;i<nums.length;i++){
        if(!s.has(nums[i])) continue;
        s.delete(nums[i]);
        let pre=nums[i]-1;
        let next=nums[i]+1;
        while(s.has(pre)) pre--;
        while(s.has(next)) next++;
        res=Math.max(res,next-pre-1);
    }
    return res;
};
longestConsecutive([100, 4, 200, 1, 3, 2])