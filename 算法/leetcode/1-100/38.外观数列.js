var countAndSay = function(n) {
    let res="1";
    let i=1;
    while(i<n){
        let cur="";
        let num=1;
        for(let j=1;j<res.length;j++){
            if(res[j]==res[j-1]){
                num++;
            }else{
                cur+=num;
                cur+=res[j-1];
                num=1;
            }
        }
        cur+=num;
        cur+=res[res.length-1];
        res=cur;
        i++;
    }
    return res;
};