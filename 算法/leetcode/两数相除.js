var divide = function(dividend, divisor) {
    let a=Math.abs(dividend);
    let b=Math.abs(divisor);
    if(b>a) return 0;
    if(b==a) {
        if((dividend>0&&divisor<0)||(dividend<0&&divisor>0)) return -1;
        return 1;
    };
    let res=b;
    let count=1;
    while(res<a){

        res+=b;
        
        
        count++;
        
        
    }    
    count-=1;
    let min=-Math.pow(2,32);
    let max=Math.pow(2,32)-1;
    
    if((dividend>0&&divisor<0)||(dividend<0&&divisor>0)){
        if(min>count) return min;
        return -count;
    }

    if(count>max) return max;
    return count;
};
console.log(divide(-1,1));
