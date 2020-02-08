var isValid = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="{"||s[i]=="["||s[i]=="("){
            stack.push(s[i])
        }
        else if(s[i]==")"||s[i]=="]"||s[i]=="}"){
            let c=stack[stack.length-1];
            stack.pop()
            if(typeof c=='undefined') return false;
              
            console.log(c,s[i]);
            if(c=='('&&s[i]!=')') return false;
            if(c=='{'&&s[i]!='}') return false;
            if(c=='['&&s[i]!=']') return false;
        }
    }
    return stack.length==0;
};
console.log(isValid('['));
