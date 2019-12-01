var isValid = function(s) {
    let stack=[]

    for (let i=0;i<s.length;i++){
        if (s[i]==='('||s[i]==='{'||s[i]==='['){
            stack.push(s[i])
        }else{

            let s1=stack.pop();

            if((s[i]===')'&&s1==='(')||(s[i]==='}'&&s1==='{')||(s[i]===']'&&s1==='[')){
                continue;
            }else{
                return false;
            }
        }
    }

    return stack.length===0;
};
console.log(isValid('()'))
