function Public() {
    this.handlers=[]
}
Public.prototype={
    on:function (handler) {
        var self=this;
        self.handlers.push(handler)
    },
    emit: function () {
        var self=this;
        var handlerArgs=arguments;
        for (var i=0;i<self.handlers.length;i++){
            self.handlers[i].apply(self,handlerArgs)
        }
    }
}
var publish=new Public();
publish.on(function (data) {
    console.log(data)
})
publish.on(function (data) {
    console.log(data)
})

publish.emit(1);
publish.emit(2)
