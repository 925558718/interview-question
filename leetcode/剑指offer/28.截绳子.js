function cutRope(number)
{
    // write code here
    if (number<=2){
        return 1;
    }
    if (number===3){
        return 2;
    }
    let x=Math.floor(number);
    let y=number%3;
    if (y==0){
        return Math.pow(3,x);
    }else if (y==1){
        2*2*Math.pow(3,x-1);
    }else{
        return 2*Math.pow(3,x)
    }
}
