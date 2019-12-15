var myPow = function(x, n) {
    if (n<0){
        if(x<=0){
            return 0;
        }
        if (-n%2==1){
            return 1/(myPow(x,-n)*x)
        }else{
            let r=1/myPow(x,-n/2);
            return r*r;
        }
    }
    else if (n==0){
        return 1;
    }
    if (n>0){
        if (n%2==1){
            return myPow(x,n-1)*x;
        }else{
            let r=myPow(x,n/2);
            return r*r;
        }
    }
};
console.log(myPow(34.00515,-3))
