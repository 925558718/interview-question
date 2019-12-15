var permute = function(nums) {
    if (nums.length==0) return []
    let res=[];
    let visited=new Array(nums.length).fill(-1);
    function help(level,out) {
        if (level==nums.length){
            res.push(out);
            return ;
        }
        for (let i=0;i<nums.length;i++){
            if(visited[i]==-1){
                visited[i]=1;
            help(level+1,out.concat(nums[i]));
            visited[i]=-1;
            }
        }
    }
    help(0,[])
    return res;
};
permute([1,2,3])
