var longestValidParentheses = function(s) {
    let res=0,start=0,n=s.length;
    let st=[];
    for(let i=0;i<n;i++){
        if(s[i]=="(") st.push(i);
        else if(s[i]==")"){
            if(st.length==0){
                start=i+1;
            }else{
                st.pop();
                res=st.length==0?Math.max(res,i-start+1):Math.max(res,i-st[st.length-1]);
            }
        }
    }
    return res;
};