/*
function Promise(executor) {
    var _this=this;
    _this.status='pending';
    _this.data=undefined;
    _this.onResolvedCallback=[];
    _this.onRejectedCallback=[];
    function resolve(value) {
        setTimeout(function () {
            if(_this.status==='pending'){
                _this.status='resolved';
                _this.data=value;
                for (let i=0;i<_this.onResolvedCallback.length;i++) {
                    _this.onResolvedCallback[i](value);
                }
            }
        })
    }
    function reject(reason){

        setTimeout(function () {
            if(_this.status==='pending'){
                _this.status='rejected';
                _this.data=reason;
                for (let i=0;i<_this.onResolvedCallback.length;i++) {
                    _this.onRejectedCallback[i](reason);
                }
            }
        })
    }
    executor(resolve)
};
Promise.prototype.then=function (onResolve,onReject) {
    var _this=this;
    var promise2;
    this.onResolvedCallback.push(onResolve);
    this.onRejectedCallback.push(onReject);
    onResolve=typeof onResolve==='function'?onResolve:function (value) {return value}
    onReject=typeof onResolve==='function'?onReject:function (reason) {return reason}
    if (_this.status==='resolved') {
        return promise2=new Promise(function (resolve,reject) {
            try{
                var x=onResolve(_this.data);
                if (x instanceof Promise){
                    x.then(resolve,reject)
                } else {
                    resolve(x);
                }
            }catch (e) {
                reject(e);
            }
        })
    }
    if (_this.status==='rejected') {
        return promise2=new Promise(function (resolve,reject) {
            try{
                var x=onResolve(_this.data);
                if (x instanceof Promise){
                    x.then(resolve,reject)
                } else {
                    resolve(x);
                }
            }catch (e) {
                reject(e);
            }
        })
    }
    if (_this.status==='resolved') {
        return promise2=new Promise(function (resolve,reject) {
           _this.onResolvedCallback.push(function (value) {
               try{
                   var x=onResolve(_this.data);
                   if (x instanceof Promise){
                       x.then(resolve,reject)
                   } else {
                       resolve(x);
                   }
               }catch (e) {
                   reject(e);
               }
           })
            _this.onRejectedCallback(function (reason) {
                try{
                    var x=onResolve(_this.data);
                    if (x instanceof Promise){
                        x.then(resolve,reject)
                    } else {
                        resolve(x);
                    }
                }catch (e) {
                    reject(e);
                }
            })
        })
    }
}

*/

function f(exe) {
    let _this=this;
    _this.data=''
    _this.status='pending';
    _this.resolveCallback=[];
    _this.rejectCallback=[];
    function resolve(value) {
        setTimeout(function () {
            if (_this.status='pending'){
                _this.status='resolved'
                _this.data=value;
                _this.resolveCallback.forEach(item=>{
                    item(value)
                })
            }
        })
    }
    function reject(reason) {
        setTimeout(function () {
            if (_this.status='pending'){
                _this.status='rejected'
                _this.data=reason;
                _this.rejectCallback.forEach(item=>{
                    item(reason)
                })
            }
        })
    }
    exe(resolve)
}
f.prototype.then=function (OnResolve,OnReject) {
    self=this;
    var AntherPromise;
    self.resolveCallback.push(OnResolve)
    self.rejectCallback.push(OnReject);
    OnResolve=typeof OnResolve==='function'?OnResolve:function (value) {
        return value
    }
    OnReject=typeof OnReject==="function"?OnReject:function (reason) {
        return reason
    }

    if (self.status==='resolved'){
        return AntherPromise=new f((resolve,reject)=>{
            var x=OnResolve(this.data)
            if (x instanceof f) {
                x.then(resolve,reject)
            }else{
                resolve(x)
            }
        })
    }
    if (this.status==='rejected'){
        return AntherPromise=new f((resolve,reject)=>{

        })
    }
    if (this.status==='pending'){
        return AntherPromise=new f((resolve,reject)=>{
            self.resolveCallback.push(function (value) {
                var x=OnResolve(self.data)
                if (x instanceof f){
                    x.then(resolve,reject);
                } else{
                    resolve(x);
                }
            })
            self.rejectCallback.push(function (reson) {
                var x=OnResolve(self.data)
                if (x instanceof f){
                    x.then(resolve,reject);
                } else{
                    resolve(x);
                }
            })
        })
    }
}
f.all=function (promises) {
    return new f((resolve,reject)=>{
        promises=Array.from(promises)
        if (promises.length==0){
            resolve([])
        } else{
            let res=[];
            let index=0;

        for (let i=0;i<promises.length;i++){
            Promise.resolve(promises[i]).then(data=>{
                res[i]=data;
                if (++index===promises.length){
                    resolve(res);
                }
            },err=>{
                reject(err);
                return ;
            })
        } }
    })
}
var p=new f((resolve,reject)=>{
    resolve(1)
}).then(res=>{
    console.log(res)
}).then(res=>{
    console.log(res)
})
