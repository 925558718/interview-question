// 搜索框输入查询
//2.表单验证
//3.按钮提交事件
//4.resize

function debounce(func,delay) {
    let timer=null;
    return function(){
        let _this=this,
        args=arguments;
        timer&&clearTimeout(timer);
        timer=setTimeout(function () {
            func.apply(this,args)
        },delay)
    }
}

