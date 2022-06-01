/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let flag1=0,flag2=0;
    let cnt1=0,cnt2=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===flag1) cnt1++
        else if(nums[i]===flag2) cnt2++;
        else if(cnt1===0){ flag1=nums[i];cnt1=1}
        else if(cnt2===0) {flag2=nums[i];cnt2=1;}
        else {
            cnt2--;
            cnt1--;
        }
    }
    cnt1=0;
    cnt2=0;
    for(let i=0;i<nums.length;i++) {
        if(flag1===nums[i]) cnt1++;
        else if(flag2===nums[i]) cnt2++;
    }
    let res=[]
    if(cnt1>Math.floor(nums.length/3)) res.push(flag1)
    if(cnt2>Math.floor(nums.length/3)) res.push(flag2)
    return res;
};