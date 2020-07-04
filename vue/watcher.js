const {parsePath,traverse} =require('./utils/utils')
class Watcher{
    constructor(vm,cb,ori,options){
        this.vm=vm;
        if(options){
            this.deep=!!this.deep;
        }else{
            this.deep=false;
        }
        this.deps=[];
        this.depIds=new Set();
        if(typeof ori=='function'){
            this.getter=ori;
        }else{
            this.getter=parsePath(ori)
        }
        this.cb=cb;
        this.value=this.get();
    }
    get(){
        global.target=this;
        let value=this.getter.call(this.vm,this.vm);
        if(this.deep){
            traverse(value)
        }
        global.target=undefined;
        return value;
    }
    update(){
        const old=this.value;
        this.value=this.get();
        this.cb.call(this.vm,this.value,old)
    }
    addDep(dep){
        const id=dep.id;
        if(!this.depIds.has(id)){
            this.depIds.add(id);
            this.deps.push(dep);
            dep.add(this);
        }
    }
    teardown(){
        let i=this.deps.length;
        while(i){
            this.deps[i].remove(this)
        }
    }

}
exports.watcher=Watcher