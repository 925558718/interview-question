var reverse = function(x) {
    let res=0;
    while(x!=0){
        let pop=x%10;
        if(res>Number.MAX_VALUE/10||(res==Number.MAX_VALUE/10&&pop>7))
            return 0;
        if(res<-Number.MIN_VALUE/10||(res==-Number.MIN_VALUE/10&&pop<-8)){
            return 0;
        }
        res=res*10+pop;
        x=Math.floor(x/10);
    }
    return res;
};
console.log(reverse(10));
