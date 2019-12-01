function Power(base, exponent)
{
    // write code here
    if(exponent<0){
        if (base<=0){
            throw new Error('分母不小于0')
        }else{
            if (-exponent%2==1){
                return 1/(Power(base,-exponent)*base)
            }else{
                let r=1/Power(base,-exponent/2);
                return r*r;
            }
        }
    }
    if (exponent==0) return 1;
    else {
        if (exponent%2==1){
            return Power(base,exponent-1)*base;
        }else{
            let r=Power(base,exponent/2);
            console.log(r)
            return r*r;
        }
    }
}

console.log(Power(2,8))
