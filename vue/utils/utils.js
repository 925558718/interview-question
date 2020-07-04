let  parsePath=function(path){
    let arr=path.split(".");
    return function(obj){
        for(let i=0;i<arr.length;i++){
            if(!obj) return;
            obj=obj[arr[i]];   
        }
        return obj;
    }
}

const seenObjects=new Set();
let traverse=function(val){
    _traverse(val,seenObjects);
    seenObjects.clear();
}
function _traverse(val,seen){
    if(typeof val!='object') return;
    if(val.__ob__){
        const id=val.__ob__.dep.id;
        if(seen.has(id)) return;
        seen.add(id);
    }
    for(let i in val){
        _traverse(val[i],seen)
    }
}
exports.traverse=traverse;
exports.parsePath=parsePath;