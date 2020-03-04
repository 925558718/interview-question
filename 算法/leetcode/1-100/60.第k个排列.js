var getPermutation = function(n, k) {
    let res="";
    let num="123456789";
    let f=new Array(n).fill(1);
    for(let i=0;i<n;i++) f[i]=f[i-1]*i;;
    --k;
    for(let i=n;i>=1;--i){
        let j=k/f[i-1];
        k%=f[i-1];
        res+=num[j];
        num.splice(j,1);
    }

};

console.log(getPermutation(4,3));
