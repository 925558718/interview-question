import { setTimeout } from "timers";

export default class myPromise {
    constructor(exector) {
        this.resArr = [];
        this.rejArr = [];
        this.status = 'pending';
        this.data = '';
        let that = this;
        function resolve(value) {
            that.status = 'resolved';
            that.data = value;
            setTimeout(() => {
                that.resArr.forEach(item => {
                    item(value);
                })
            })

        }
        function reject(err) {
            that.status = 'rejected';
            that.data = err;
            setTimeout(() => {
                that.rejArr.forEach(item => {
                    item(err);
                })
            })
        }
        try {
            exector(resolve, reject);
        } catch{
            reject('出错了');
        }
    }
    then(resolvefn, rejectfn) {
        console.log(this);
        resolvefn = typeof resolvefn === 'function' ? resolvefn : () => resolvefn;
        rejectfn = typeof rejectfn === 'function' ? rejectfn : () => rejectfn;
        return new myPromise((resolve, reject) => {
            if (this.status === 'resolved') {
                try{
                    let x = resolvefn(this.data);
                    resolve(x);
                }catch(e){
                    reject(e);
                }
                
            }
            else if (this.status === 'rejected') {
                try{
                    let x = rejectfn();
                    reject(x);
                }catch(e){
                    reject(e)
                }
            }
            else if (this.status === 'pending') {
                let fn1 = () => {
                    setTimeout(() => {
                        let x = resolvefn(this.data);
                        resolve(x);
                    })
                }
                let fn2 = () =>{
                    setTimeout(() => {
                        let x = rejectfn();
                        reject(x);
                    })
                }
                this.resArr.push(fn1);
                this.rejArr.push(fn2);

            }
        })
    }
    catch() {

    }
    finally() {

    }
    race() {

    }
    all() {

    }
}
let p = new myPromise((resolve, reject) => {
    setTimeout(()=>{
        resolve(123);
    },5000)
}).then(res => {
    console.log(1);
    console.log(res);
})