function Router(params) {
    this.routes=params.routes||[];
    this.mode=params.mode||'hash';
    this.init=function () {
        let that=this;
        document.querySelectorAll('.router').forEach((item,index)=>{
            item.addEventListener('click',function (e) {
                if (e&&e.preventDefault){
                    e.preventDefault()
                }else{
                    window.event.returnValue=false;
                }

                if (that.mode=='hash'){
                    if (this.getAttribute("replace")){
                        let i=window.location.href.indexOf('#');
                        window.location.replace(
                            window.location.href.slice(0,i>=0?i:0)+'#'+this.getAttribute('href')
                        )
                    }else{
                        window.location.hash=this.getAttribute('href')
                    }
                }else{
                    if (this.getAttribute('replace')){
                        window.history.replaceState({},'',window.location.origin+this.getAttribute("href"))
                        that.routerChange();
                    }else{
                        window.history.pushState({},'',window.location.origin+this.getAttribute('href'));
                        that.routerChange();
                    }
                }
            },false)
        })
        if (this.mode=='hash'){
            window.addEventListener('hashchange',()=>{
                this.routerChange();
            })
        }
        this.routerChange();
    }
    this.routerChange=function () {
        if (this.mode=='hash'){
            let nowHash=window.location.hash;
            let index=this.routes.findIndex((item,index)=>{
                return nowHash==('#'+item.path);
            });
            if (index>=0){
                document.querySelector('#router-view').innerHTML=this.routes[index].component;
            }else{
                let defaultIndex=this.routes.findIndex((item,index)=>{
                    return item.path=='*'
                })
                if(defaultIndex>=0){
                    const i=window.location.href.indexOf('#')
                    window.location.replace(
                        window.location.href.slice(0,i>=0?i:0)+'#'+this.routes[defaultIndex].redirect
                    )
                }
            }
        }else{
            let path=window.location.href.replace(window.location.origin,'');
            let index=this.routes.findIndex((item,index)=>{
                return path==item.path;
            })
            if(index>=0){
                document.querySelector('#router-view').innerHTML=this.routes[index].component;
            }else{
                let defaultIndex=this.routes.findIndex((item,index)=>{
                    return item.path=='*'
                })
                if(defaultIndex>=0){
                    window.history.pushState({},'',window.location.origin+this.routes[defaultIndex].redirect);
                    this.routerChange();
                }
            }
        }
    }
    this.init()
}
new Router({
    mode:'history',
    routes: [{
        path: '/home',
        component: "<h1>主页</h1><a href='https://github.com/biaochenxuying'>https://github.com/biaochenxuying</a>"
    }, {
        path: '/news',
        component: "<h1>新闻</h1><a href='http://biaochenxuying.cn/main.html'>http://biaochenxuying.cn/main.html</a>"
    }, {
        path: '/team',
        component: '<h1>团队</h1><h4>全栈修炼</h4>'
    }, {
        path: '/about',
        component: '<h1>关于</h1><h4>关注公众号：BiaoChenXuYing</h4><p>分享 WEB 全栈开发等相关的技术文章，热点资源，全栈程序员的成长之路。</p>'
    }, {
        path: '*',
        redirect: '/home'
    }]
});
