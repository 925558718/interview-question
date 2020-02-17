var scoreOfParentheses = function(S) {
    let s=[0];
    let res=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=='('){
            s.push(0);
        }else{
            if(s[s.length-1]==0){
                s.pop();
                s.push(1);
            }else{
                let v=s.pop();
                let w=s.pop();
                s.push(w+Math.max(2*v,1))
            }
        }
    }
    return s.pop()
};