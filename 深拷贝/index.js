//1 JSON.parse(JSON.stringify(onj))
//无法拷贝函数
//无法拷贝原型链
//忽略symbol
//忽略undefined
//无法正确处理Date类型数据
let obj={
    name:'by',
    age:'22'
}
let n=JSON.parse(JSON.stringify(obj))
//2.递归
function deepClone(obj) {
    if(obj===null||typeof obj!=='object'){
        return obj
    }
    let t=new obj.constructor();
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            t[key]=deepClone(obj[key])
        }
    }
    return t;
}
