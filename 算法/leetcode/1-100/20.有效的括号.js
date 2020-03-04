var isValid = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="{"||s[i]=="["||s[i]=="("){
            stack.push(s[i])
        }
        else{
            let c=stack.pop()
            if(typeof c=='undefined') return false;
            if(c=='('&&s[i]!=')') return false;
            if(c=='{'&&s[i]!='}') return false;
            if(c=='['&&s[i]!=']') return false;
        }
    }
    return stack.length==0;
};
console.log(isValid('[]]'));
