var countAndSay = function(n) {
    if(n<=0) return "";
    let res="1";
    while(--n){
        let cur="";
        for(let i=0;i<res.length;i++){
            let cnt=1;
            while(i+1<res.length&&res[i]==res[i+1]){
                ++cnt;
                i++;
            }
            cur=cnt+res[i];
        }
        res=cur;
    }
    return res;
};