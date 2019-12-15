var permuteUnique = function(nums) {
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
                if(i>0&&nums[i-1]==nums[i]&&visited[i-1]==-1)
                {

                    continue;
                }
                visited[i]=1;
                help(level+1,out.concat(nums[i]));
                visited[i]=-1
            }
        }


    }
    help(0,[])
    return res;
};
console.log(permuteUnique([1,1,2]))
