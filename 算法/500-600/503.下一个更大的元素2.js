/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let n=nums.length;
    let stack=[]
    let res=new Array(n).fill(-1)
    for(let i=0;i<2 * n-1;i++) {
        while(stack.length && nums[stack[stack.length-1]] < nums[i%n]){
            res[stack[stack.length-1]] = nums[i%n]
            stack.pop();
        }
        stack.push(i%n)
    }
    return res;
};