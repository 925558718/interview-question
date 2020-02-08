Array.prototype.f=function(n){
    if(n==0) return this;
    
    let res=[];
    this.forEach(item=>{
        if(Array.isArray(item)){
            res.push(item.f(n-1))
        }else{
            res.push(item);
        }
    })
    
    return res;
}
console.log([1,[2,3,[4,5,6]]].flat(2));
