

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
/*window.onscroll=function () {
    var imgaes=document.images;
    imgaes.forEach(i=>{
        if (i.getBoundingClientRect().top<window.clientHeight){
            i.src='https://sedasdsa'
        }
    })
}*/

/*
function liu(func,wait) {
    let timeout;
    return function () {
        if (!timeout){
            timeout=setTimeout(()=>{
                timeout=null;
                func();
            },wait)
        }
    }
}

function dou(func,wait) {
    let timeout;
    return function () {
        if (timeout){
           clearTimeout(timeout);
        }
        timeout=setTimeout(function () {
            func();
        },wait)
    }
}

function double(func,wait) {
    let timeout;
    return function () {
        if (timeout) clearTimeout(timeout)
        else{
            timeout=setTimeout(()=>{
                func()
            },wait)
        }
    }
}
*/
/*function curry(fn,...arg) {
    return fn.length>arg.length?(...arguments)=>curry(fn,...arg,...arguments):fn(...arg)
}*/
/*class EventEmitter{
    constructor(){
        this.eventpool={};
    }
    on(event,callback){
        this.eventpool[event]?this.eventpool[event].push(callback):this.eventpool[event]=[callback];
    }
    emit(event,...arg){
        this.eventpool[event]&&this.eventpool[event].forEach(i=>{
            i(...arg)
        })
    }
    off(event){
        this.eventpool[event]&&delete this.eventpool[event]
    }
    once(event,callback){
        this.on(e5vent,(...args)=>{
            callback(...args);
            this.off(event);
        })
    }
}*/

/*
function a() {
    this.b = 3
    console.log(this)
}
a.prototype.b = 7;
var t = new a();
var b = 2;
a();

console.log(this)
*/

/*
const arr=[2,3,4];
let a=arr.reduce((list,num)=>{
    num=num*2;
    list.push(num);
    return list;
},[])
console.log(a)
*/
/*function myp(executor) {
    let self=this;
    this.status='pending';
    this.data='';
    this.arrResolve=[];
    this.arrReject=[];
    function resolve(value) {

            self.status='resolve';
            self.data=value;
            self.arrResolve.forEach(i=>{
                i(value);
            })

    }
    function reject(err) {

            self.status='reject';
            self.data=err;
            self.arrResolve.forEach(i=>{
                i(err);
            })

    }
    try{
        executor(resolve,reject)
    }catch (e) {
        reject(e)
    }
}
myp.prototype.then=function (resolve,reject) {
    resolve=typeof resolve=='function'?resolve:value=>value
    reject=typeof reject=='function'?reject:err=>err
    let self=this;
    var p=new myp((res,rej)=>{

        if (self.status='resolve'){
            this.arrResolve.push(resolve);
            try{
                var x=resolve(self.data)
                res(x);
            }catch (e) {
                reject(e)
            }
        }
        else if (self.status='reject'){
            this.arrReject.push(reject)
            try{
                var x=reject(self.data)
                rej(x);
            }catch (e) {
                reject(e)
            }
        }else if(self.status='pending'){
            this.arrResolve.push(resolve)
            this.arrResolve.push(reject)
        }
    })

    return p;

}
var p=new myp((resolve,reject)=>{
    resolve(1)
}).then(res=>{
    console.log(res)
    return res;
}).then(res=>{
    console.log(res)
    return res;
    }
)*/
//call
/*
Function.prototype.call=function (context) {
    if (!context){
        context=typeof window ==='undefined'?global:window;
    }
    context.fn=this;
    let arg=[...arguments].slice(1);
    let res=context.fn(...arg);
    delete context.fn;
    return res;
}

//apply
Function.prototype.apply=function (context,rest) {
    if (!context){
        context=typeof window ==='undefined'?global:window;
    }
    context.fn=this;
    let res=context.fn(...rest);
    return res;
}
//bind

Function.prototype.bind=function (context) {

}*/



/*
function sum(a,b) {
    let A=(a+'').split('');
    let B=(b+'').split('');
    let lenA=A.length,lenB=B.length,lenC=Math.max(lenA,lenB)+1;
    let res=[],count=0;
    for (let i=0;i<lenC-1;i++){
        let a=lenA-i-1>=0?parseInt( A[lenA-i-1]):0,b=lenB-i-1>=0?parseInt( B[lenB-i-1]):0
        res[i]=(a+b+count)%10;
        count=(a+b)>9?1:0
    }
    return res.reverse().join('');
}*/
/*
console.log=(function (log) {
    return function(str){
        log.call(console,"(app)"+str)
    }

})(console.log)
console.log("haha")
*/
//判断对象是否为空

/*a={}
console.log(JSON.stringify(a)=='{}')

for (let i in a){
    console.log(i)
}

console.log(Reflect.getPrototypeOf(a))

console.log(Reflect.ownKeys(a))*/


//递归遍历数组
/*var arr=[1,2,3]
function a(arr,index) {
    if (index==arr.length) return;
    console.log(arr[index])
    a(arr,index+1)
}
a(arr,0)*/

/*
function jsonp(url,param,callback) {
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        window[callback]=function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
        param={...param,callback};
        let arr=[];
        for (let key in param){
            arr.push(`${key}=${param[key]}`);
        }
        script.src=`${url}?${arr.join('&')}`
        document.body.appendChild(script)
    })

}
*/
//反转字符串
/*

let str="abc";
let s=''
for (let i=str.length-1;i>=0;i--){
    s+=str[i]
}
console.log(Array.from(str).reverse().join(""))

*/


/*
var res=[]
function f(arr,res) {

    arr.forEach(item=>{
        if (Array.isArray(item)){
            f(item,res)
        }else{
            res.push(item)
        }
    })
}

f([2,3,4,[5,66,[7,8]]],res)
console.log(res)

console.log([2,3,4,[5,66,[7,8]]].flat(3))

*/
/*
function flatten(arr) {
    var res=[];
    arr.forEach(item=>{
        if (Array.isArray(item)){
            res=res.concat(flatten(item))
        } else{
            res.push(item)
        }
    })
    return res;
}

*/
/*
function flatten(arr) {
    return arr.reduce((pre,item)=>{
        return pre.concat(Array.isArray(item)?flatten(item):item)
    },[])
}
console.log(flatten([2,3,4,[5,66,[7,8]]]))
*/
//判断一个对象是否为数组
/*let a=[1]
console.log(Array.prototype.isPrototypeOf(a))
console.log(Array.isArray(a))
console.log(a instanceof Array)
console.log(Object.prototype.toString.call(a))*/
//reduce 实现
/*
Array.prototype.reduce1=function (handler,init) {
    let initArr=this;
    let arr=initArr.concat();
    if(init) arr.unshift(init);
    let index,value;
    while(arr.length>1){
        index=initArr.length-arr.length+1;
        value=handler(arr[0],arr[1],index,initArr);
        arr.splice(0,2,value);
    }
    return value;
}

console.log([1,2,3,4].reduce1((sum,item)=>{
    return sum+item
},0))
*/
