class EventEmitter{
    constructor(){
        this.pool={};
    }
    on(type,fn){
        !this.pool[type]?this.pool[type]=[fn]:this.pool[type].push(fn);
    }
    emit(type){
        this.pool[type]&&this.pool[type].forEach(item=>item())
    }
    off(type,fn){
        if(this.pool[type]){
            this.pool[type]=this.pool[type].filter(cb=>cb!=fn)
        };
    }
    once(type,fn){
        let cb=()=>{
            fn();
            this.off(type,fn)
        }
        this.on(type,fn)
    }
}