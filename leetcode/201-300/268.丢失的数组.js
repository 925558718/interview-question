/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length, flag = false;
    for (let i = 0; i < len; i++) {
        if (nums[i] === len) flag = true
        else {
            while (nums[i] !== nums[nums[i]]) {
                let temp = nums[nums[i]]
                if (nums[i] === len) {
                    nums[i] = temp
                } else {
                    nums[nums[i]] = nums[i]
                    nums[i] = temp
                }
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        console.log(i, nums[i])
        if (i !== nums[i]) {
            return i;
        }
    }
    return len
};
console.log(missingNumber([0, 1]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function(nums) {
    let sum=nums.reduce((item,sum)=>{
        return item+sum
    },0)
    let res=0
    for(let i=0;i<=nums.length;i++) {
        res+=i;
    }
    return res-sum
};