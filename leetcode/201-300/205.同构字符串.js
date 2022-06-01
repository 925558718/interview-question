var isIsomorphic = function(s, t) {
    let m1=new Array(256).fill(0);
    let m2=new Array(256).fill(0);
    let size=s.length;
    for(let i=0;i<size;i++){
        if(m1[s[i]]!=m2[t[i]]) return false;
        m1[s[i]]=i+1;
        m2[t[i]]=i+1;
    }
    return true;
};