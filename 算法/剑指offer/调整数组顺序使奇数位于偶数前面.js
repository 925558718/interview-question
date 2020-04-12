var exchange = function(nums) {
    let j=0,k=nums.length-1;
    let res=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==1){
            res[j++]=nums[i];
        }else{
            res[k--]=nums[i];
        }
    }
    return res;
};
console.log(exchange([1,2,3,4]));
