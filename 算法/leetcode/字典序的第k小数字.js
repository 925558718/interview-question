var findKthNumber = function(n, k) {
    let getCount=(prefix,n)=>{
        let cur=prefix;
        let next=prefix+1;
        let count=0;
        while(cur<=n){
            count += Math.min(n+1, next) - cur;
            cur*=10;
            next*=10;
        }
        return count;
    }
    let p=1;
    let prefix=1;
    while(p<k){
        let count=getCount(prefix,n);
        if(p+count>k){
            prefix*=10;
            p++;
        }else if(p+count<=k){
            prefix++;
            p+=count;
        }
    }
    return prefix;
};

