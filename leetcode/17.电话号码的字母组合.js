var letterCombinations = function(digits) {
    let dist=['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let res=[];
    help(digits.length,0,dist,digits,"",res)
    return res;
};
function help(size,level,dist,digits,out,res) {
    if (level==size){
        res.push(out)
        return;
    }
    for (let i=0;i<dist[digits[level]-2].length;i++){
        help(size,level+1,dist,digits,out+dist[digits[level]-2][i],res);
    }
}

console.log(letterCombinations('9'))
