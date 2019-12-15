
var canJump = function(nums) {
    let res=false;
    function help(nums,distance) {
        if (distance>=nums.length-1){
            res=true;
        }
        for(let i=1;i<=nums[distance];i++){
            console.log(i,nums[distance])
            help(nums,distance+i)
        }
        return res;
    }
    help(nums,0);
    return res;
};
console.log(canJump([0]))
