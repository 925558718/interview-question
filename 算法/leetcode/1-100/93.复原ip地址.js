var restoreIpAddresses = function(s) {
    let res=[];
    let out=[];
    help(s,res,out,0);
    let r=[];
    res.forEach(item=>{
        if(check(item)){
            r.push(item.join("."))
        }
    })
    return r;
    
};
function help(s,res,out,level){
    if(level==3){
        out.push(s.substr(0,s.length))
        res.push(out);
        return;
    }
    for(let i=1;i<=3;i++){
        help(s.substr(i,s.length-1),res,out.concat(s.substr(0,i)),level+1)
    }
}
function check(arr){
    return arr.every(item=>{
        return item.length<=3&&item.length>0&&Number(item)>=0&&Number(item)<=255&&!(item.length>1&&item[0]==0);
    })
}


console.log(restoreIpAddresses("010010"));
