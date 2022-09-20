/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let str=''+nums[0]
    let res=[]
    for(let i=1;i<nums.length;i++) {
        if(nums[i]===nums[i-1]+1) {
            str+='->'+nums[i]
        }else {
            res.push(str)
            str=nums[i]+''
        }
    }
    if(str) res.push(str)
    return res;
};
summaryRanges([0,1,2,4,5,7])