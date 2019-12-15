var combinationSum2 = function(candidates, target) {
    let res=[];
    function help(level,out,sum) {

        if (sum==target){
            res.push(out.sort((a, b) => a-b));
            return;
        }else if(sum>target) return;
        else{
            for (let i=level;i<candidates.length;i++){
                help(i,out.concat(candidates[i]),candidates[i]+sum)
            }
        }
    }
    help(0,[],0);
    return res;
};
