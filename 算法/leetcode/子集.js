
var subsets = function(nums) {
    let res=[];
    help(nums,res,[],0);
    return res;
};
function help(nums,res,out,level){
    if(level==nums.length) {
        res.push(out)
        return;
    }
    help(nums,res,out.concat(nums[level]),level+1);
    help(nums,res,out,level+1);
}
console.log(strStr('hello','ll'));
