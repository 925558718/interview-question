function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data,key,data[key])
    })
}
function defineReactive(data,key,val) {
    var dep=new Dep();
    observe(val);
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            if(Dep.target){
                dep.addSub(Dep.target)
            }
            return val;
        },
        set:function(v){
            if(val==v) return
            val=v;
            dep.notify()
        }
    })
}
Dep.target=null
