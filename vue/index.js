const {observer}=require('./Observer')
const {watcher}=require('./watcher')


const vm={
    data:{
        a:[1,2,3]
    }
}

new watcher(vm,(vm)=>{
    console.log(vm.push(1232));
},'data.a')
vm.data.a=123