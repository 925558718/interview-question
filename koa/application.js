const Emitter=require('events')
const http=require('http')
const compose=require('koa-compose')
const context=require('./context')
module.exports=class Application extends Emitter{
    constructor(){
        super();
        this.middleware=[];
        this.context = Object.create(context);
    }

    listen(...arg){
        debug('listen');
        const server=http.createServer(this.callback())
        return server.listen(...arg);
    }

    callback(){
        const fn=compose(this.middleware);
        const handleRequest=(req,res)=>{
            const ctx=this.createContext(req,res)
            return fn(ctx).then(handleResponse).catch(error)
        }
        return handleRequest()
    }
    createContext(req,res){
        const ctx=Object.create(this.context)
        return this.handleRequest(ctx,fn)
    }
    use(fn){
        this.push(fn)
        return this;
    }

}
