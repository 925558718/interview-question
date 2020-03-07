var evalRPN = function(tokens) {
    if(tokens.length==1) return Number(tokens[0]);
    let s=[];
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]!="+"&&tokens[i]!="-"&&tokens[i]!="*"&&tokens[i]!="/"){
            s.push(Number(tokens[i]))
        }else{
            let num1=s.pop();
            let num2=s.pop();
            if(tokens[i]=="+") s.push(num2+num1);
            if(tokens[i]=="-") s.push(num2-num1);
            if(tokens[i]=="*") s.push(num2*num1);
            if(tokens[i]=="/") s.push(Math.trunc(num2/num1));
        }
    }
    return s[s.length-1]
};