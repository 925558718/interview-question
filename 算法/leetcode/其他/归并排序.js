function help(s){
    let pre=s[0];
    let cnt=1;
    let res="";
    for(let i=1;i<s.length;i++){
        if(s[i]==pre){
            cnt++;
        }
        else{
            if(cnt==1){
                res+=pre;
            }else{
                res+=pre+cnt;
            }
            
            pre=s[i];
            cnt=1;
        }
    }
    if(cnt==1){
        res+=pre;
    }else{
        res+=pre+cnt;
    }
    return res;
}
console.log(help('aabccccaaa'));
