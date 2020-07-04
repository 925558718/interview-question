let uid=0;
class Dep{
    constructor(){
        this.id=uid++;
        this.pool=[];
    }
    add(watcher){
        this.pool.push(watcher)
    }
    notify(){
        this.pool.forEach(item=>{
            item.update()
        })
    }
    remove(watcher){
        let index=this.pool.indexOf(watcher);
        return this.pool.splice(index,1);
    }
    depend(){
        if(global.target){
            global.target.addDep(this)
        }
    }
}
exports.Dep=Dep