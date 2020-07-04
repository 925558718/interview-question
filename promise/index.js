// function MyPromise(executor){
//     this.status="pending";
//     this.data="";
//     this.resArr=[];
//     this.rejArr=[];
//     const that=this;
//     function resolve(value){
//         that.data=value;
//         that.status="resolved"
//         that.resArr.forEach(item=>{
//             item(value)
//         })
//     }
//     function reject(value){
//         that.data=value;
//         that.status="rejected"
//         that.rejArr.forEach(item=>{
//             item(value)
//         })
//     }
//     try{
//         executor(resolve,reject)
//     }catch{
//         reject()
//     }
// }
// MyPromise.prototype.then=function(OnResovle,OnReject){
//     OnResovle=typeof OnResovle==="function"?OnResovle:function(value){return value}
//     OnReject=typeof OnReject==="function"?OnReject:function(value){return value}
//     const that=this;
//     return new MyPromise((resolve,reject)=>{
//         if(that.status=="resolved"){
//             setTimeout(()=>{
//                 let x=OnResovle(that.data)
//                 resolve(x);
//             })
//         }else if(that.status=="rejected"){
//             setTimeout(()=>{
//                 let x=OnReject(that.data)
//                 reject(x);
//             })
//         }else{
//             let fn1=()=>{
//                 setTimeout(function(){
//                     let x=OnResovle(that.data)
//                     resolve(x);
//                 })
//             }
//             let fn2=()=>{
//                 setTimeout(()=>{
//                     let x=OnReject(that.data)
//                     reject(x);
//                 })
//             }
//             that.resArr.push(fn1);
//             that.rejArr.push(fn2);
//         }
//     })
// }
// let p=new MyPromise((resolve,reject)=>{
//     reject(123)
// })
// console.log(p);
// p.then(res=>{
//     console.log(res);
    
// })
