var myPow = function(x, n) {
    if(n<0){
        if(-n%2==1){
            return 1/(myPow(x,-n-1)*x);
        }else{
            let r=1/myPow(x,Math.floor(-n/2));
            return r*r;
        }
    }
    if(n==0) return 1;
    else {
        if(n%2==1){
            return myPow(x,n-1)*x;
        }else{
            let r=myPow(x,Math.floor(n/2));
            return r*r;
        }
       
    }
};
console.log(myPow(2,-2));
