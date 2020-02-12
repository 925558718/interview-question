var cuttingRope = function(x) {
    if(n==3) return 2;
    if(n<=2) return 1;
    let x=Math.floor(x/3);
    let y=x%3;
    if(y==0){
        return Math.pow(3,x)
    }else if(y==1){
        return Math.pow(3,x-1)*2*2;
    }else{
        return Math.pow(3,x)*2;
    }
};