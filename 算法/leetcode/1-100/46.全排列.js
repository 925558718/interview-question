var permute = function(nums) {
    let res=[];
    let out=[];
    let visited=new Array(nums.length).fill(-1);
    function help(level,res,nums,out,visited){
        if(level==nums.length){
            res.push(out)
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(visited[i]==1) continue;
            visited[i]=1;
            help(level+1,res,nums,out.concat(nums[i]),visited)
            visited[i]=-1;
        }
    }
    help(0,res,nums,out,visited);
    return res;
};
console.log(permute([1,2,3]));
