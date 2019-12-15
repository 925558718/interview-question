var combinationSum = function(candidates, target) {
    let res=new Set();
    function help(level,out,sum) {

        if (sum==target){
            res.add(out.sort((a, b) => a-b));
            return;
        }else if(sum>target) return;
        else{
            for (let i=level;i<candidates.length;i++){

            help(level+1,out.concat(candidates[i]),candidates[i]+sum)
            }
        }
    }
    help(0,[],0);
    return res;

};
console.log(combinationSum([2,3,6,7],7))
