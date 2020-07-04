const { Dep } =require('./Dep')
const arrayProto=Array.prototype;
const arrayMethods=Object.create(arrayProto);
function observe(value){
    if(typeof value!='object'){
        return;
    } 
    let ob;
    if(Object.prototype.hasOwnProperty.call(value,"__ob__")&&value.__ob__ instanceof Observer){
        ob=value.ob;
    }else{
        ob=new Observer(value)
    }
    return ob;
}

['push','splice','pop','sort','reverse','shift','unshift'].forEach(item=>{
    const oriFunc=arrayMethods[item];
    def(arrayMethods,item,function mutator(...args){
        const result=oriFunc.call(this,...args);
        const ob=this.__ob__;
        let insert;
        switch(item){
            case 'push':
            case 'unshift':
                insert=args;
                break;
            case 'splice':
                insert=args.slice(2);
                break;
        }
        if(insert) ob.observeArray(insert)
        ob.dep.depend();
        return result;
    })
})
function def(obj,key,val,enumerable){
    Object.defineProperty(obj,key,{
        value:val,
        enumerable:!!enumerable,
        configurable:true,
        writable:true
    })
}
class Observer{
    constructor(value){
        this.value=value;
        this.dep=new Dep()
        def(value,'__ob__',this)
        if(!Array.isArray(value)){
            this.walk(value)
        }else{
            value.__proto__=arrayMethods
            this.observeArray(value)
        }
    }
    walk(value){
        const keys=Object.keys(value);
        for(let i=0;i<keys.length;i++){
            observerReactive(value,keys[i],value[keys[i]])
        }
    }
    observeArray(items){
        for(let i=0;i<items.length;i++){
            observe(items)
        }
    }
}
function observerReactive(data,key,val){
    let child=observe(val)
    if(child){
        child.dep.depend()
    }
    let dep=new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get(){
            if(child){
                child.dep.depend()
            }
            dep.depend()
            return val;
        },
        set(newVal){
            if(newVal==val) return;
            dep.notify();
            val=newVal;
        }
    })
}
exports.observer=Observer