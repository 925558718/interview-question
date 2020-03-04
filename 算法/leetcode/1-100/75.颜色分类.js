var sortColors = function(nums) {
    let color=new Array().fill(0);
    for(let i=0;i<nums.length;i++){
        color[i]++;
    }
    let cur=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<color[i];j++){
            nums[cur++]=i;
        }
    }
};