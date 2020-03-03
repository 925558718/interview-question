var findContentChildren = function(g, s) {
    g=g.sort((a,b)=>a-b);
    s=s.sort((a,b)=>a-b);
    let idx1=0,idx2=0;
    let res=0;
    while(idx1<g.length&&idx2<s.length){
        if(s[idx2]>=g[idx1]){
            res++;
            idx1++;
            idx2++;
        }else{
            idx2++;
        }
    }
    return res;
};
console.log(findContentChildren([1,2],[1,2,3]));
