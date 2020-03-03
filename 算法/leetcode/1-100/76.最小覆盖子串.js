var minWindow = function(s, t) {
    let res="";
    let m={};
    let left=0,cnt=0,minLen=Number.MAX_VALUE;
    for(let i=0;i<t.length;i++){
        if(typeof m[t[i]]!='number') m[t[i]]=1;
        else m[t[i]]++;
    }
    console.log(m);
    
    for(let i=0;i<s.length;i++){
        if(--m[s[i]]>=0) cnt++;
        while(cnt==t.length){
            if(minLen>i-left+1){
                minLen=i-left+1;
                res=s.substr(left,minLen);
            }
            if(++m[s[left]]>0) --cnt;
            ++left;
        }
    }
    return res;
};
console.log(minWindow("ADOBECODEBANC","ABC"));
