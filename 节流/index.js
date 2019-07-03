//节流是在单位时间内最多触发一次函数
//应用：1.按钮点击 2.拖拽事件 3.onScoll 4.计算鼠标移动的距离


//时间戳实现
function throttle(func,delay) {
    var lastTime=0;
    return function throttled() {
        var context=this;
        var args=arguments;
        var nowTime=Date.now();
        if(nowTime>lastTime+delay){
            func.apply(context,args);
            lastTime=nowTime;
        }
    }
}
//定时器
function throttle2(func,delay) {
    var timeout=null;
    return function throttled(){
        var context=this;
        var args=arguments;
        if(!timeout){
            timeout=setTimeout(()=>{
                func.apply(context,args);
                clearTimeout(timeout);
                timeout=null;
            },delay)
        }
    }
}
function gaga() {
    console.log(1)
}
//组合实现
function throttle3(func,wait,options){
    var timeout,context,args,result;
    var previous=0;
    if(!options) options={};

    var throttled=function(){
        var now=Date.now()||new Date().getTime();
        if (!previous&&options.leading===false) previous=now;
        var remaining=wait-(now-previous);
        context=this;
        args=arguments;
        if(remaining<=0||remaining>wait){
            if (timeout){
                clearTimeout(timeout);
                timeout=null;
            }
            previous=now;
            result=func.apply(context,args);
            if (!timeout) context=args=null;
        }else{
            timeout=setTimeout(later,remaining);
        }
        return result;
    }
    throttled.cancel=function () {
        clearTimeout(timeout);
        previous=0;
        timeout=context=args=null;
    }
    return throttled;
}


