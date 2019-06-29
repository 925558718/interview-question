

/*Function.prototype.call1=function () {
    let [thisArg,...args]=[...arguments]
    if (!thisArg){
        thisArg=typeof window==='undefined'?global:window
    }
    console.log(this)
    thisArg.func=this;
    let res=thisArg.func(...args);
    delete thisArg.func;
    return res;
}
function gaga() {
    console.log(this.a)
}
obj={
    a:2
}
gaga.call1(obj)*/

/*




/!*function f(arr) {
    let res=[];
    arr.forEach(item=>{
        if (Array.isArray(item)){
            res.push(...f(item))
        }else{
            res.push(item)
        }
    })
    return res;
}*!/
/!*console.log(f([1,2,['3',[4]],5,]))*!/

//数组方法

/!*let test=[1,2,3,4,5];*!/

/!*test.forEach(item=>{
    console.log(item)
})*!/

//map 有返回值
/!*a=test.map(item=>{
    return item+=1;
})
console.log(a)*!/

//filter筛选
/!*
 b=test.filter(item=>{
     return item>4
 })
console.log(b)
*!/

//some
/!*c=test.some(item=>{
    return item>4
})
console.log(c)*!/
//every
/!*
d=test.every(item=>{
    return item<4
})*!/

//find
/!*test.find(item=>{
    item>10
})*!/

//reduce

/!*e=test.reduce((sum,w)=>{
    return sum+w;
},0)
console.log(e)*!/



//继承

//原型链

/!*
function sub() {
    this.b=2;
}
function superOb() {
    this.a=1
}

sub.prototype=new superOb();
*!/

/!*
var gaga = new sub();
var gaga2 = new sub();

function sub() {
    superOb.call(this)
}
function superOb() {

}*!/

//组合

/!*
function sub() {
    superOb.call(this)
}
function superOb() {

}
    sub.prototype=new superOb();
    sub.prototype.constructor==sub*!/
//原型式
/!*
function object(o) {
    function F() {}
    F.prototype=o;
    return new F()
}

//寄生

function create(ori) {
    var o=Object.create(ori);
    o.sayHello=function () {

    }
    return o;
}


//组合寄生


function sub() {
    superOb.call(this)
}
function superOb() {

}
sub.prototype=Object.create(superOb.prototype)
*!/

/!*str="https://www.nowcoder.com/discuss/200419?type=0&order=0&pos=3&page=1"
function getParmam(str) {
    var index=str.indexOf("?")
    var res=str.slice(index+1,str.length)
    var arr=res.split('&')
    let data={};
    arr.forEach(item=>{
        let gaga=item.split('=')

        data[gaga[0]]=item[1];
    })
    console.log(data)
}
getParmam(str)*!/

//去重
/!*let arr=[1,2,3,4,56,4,3,2,3]

/!*!/!*function f(arr) {
    let hash=[];
    arr.forEach(item=>{
        if (!hash.includes(item)){
            hash.push(item)
        }
    })
    console.log(hash)
}*!/
f(arr)*!/

let res=new Set(arr)
console.log(res)*!/

//深拷贝

/!*function copy(obj) {
    const res=obj.constructor===Array?[]:{};
    for (let keys in obj){
        if (obj.hasOwnProperty(keys)){
            if (obj[keys]&&typeof obj[keys]==='object'){
                res[keys]=copy(obj[keys])
            } else{
                res[keys]=obj[keys]
            }
        }
    }
    return res;
}
let obj={s:2,b:3,c:{gaga1:1, gaga2:{
        hoo:1,hoo2:2
        }}}
console.log(copy(obj))*!/


//new

/!*function _new() {
    let target={};
    let [constructor,...args]=arguments;
    target.prototype=constructor.prototype;
    let res=constructor.apply(target,args)
    if (res&&(typeof res==='object')||typeof res==='function') {
        return res
    }
    return target*!/
}


//call/apply
*/

//柯里化
/*
const curry=(fn,...args)=>{
    console.log(args)
    return args.length<fn.length?(...arguments)=>curry(fn,...args,...arguments):fn(...args)
}

function sumFn(a, b, c) {
    return a + b + c;
}
var sum=curry(sumFn);
sum(2)(3)(5)
*/
/*
let a={
    /!*[Symbol.toPrimitive]:(function (hint) {
        let i=1;
        return function () {
            return i++;
        }
    })()*!/

}
console.log( a == 1 && a == 2 && a == 3 )
*/

/*

Object.cre=function (obj,properties) {
    function F(){}
    F.prototype=obj
    let o=new F()
    if (typeof properties ==='object'){
        Object.defineProperties(o,properties);
    }
    return o
}

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
console.log(person._proto_)
var test=Object.cre(person)
console.log(test)
*/
ar=[]
console.log(typeof ar)
