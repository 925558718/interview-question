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


