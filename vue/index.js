/*
function SelfVue(data,el,exp) {
    this.data=data;
    observe(data);
    el.innerHTML=this.data[exp];
    new Watcher(this,exp,function (v) {
        el.innerHTML=v;
    })
    return this;
}
*/
function SelfVue(data,el,exp) {
    var self=this;
    this.data=data;

    Object.keys(data).forEach(function (key) {
        self.proxyKeys(key)
    })

    observe(data)

    el.innerHTML=this.data[exp];

    new Watcher(this,exp,function (v) {
        el.innerHTML=v;
    });
    return this;
}


SelfVue.prototype={
    proxyKeys:function (key) {
        var self=this;
        Object.defineProperty(this,key,{
            get() {
                return self.data[key]
            },
            set(v) {
                self.data[key]=v;
            }
        })
    }
}
