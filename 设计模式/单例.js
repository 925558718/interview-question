class Singletonj{
    constructor(){}

}
Singletonj.singleInstance=(function () {
    let instance;
    return function () {
        if(!instance){
            instance=new Singletonj();
        }
        return instance;
    }
})


class Food{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    desc(){

    }
}
class FoodFactory{
    static create(name,type){
        return new Food(name,type);
    }
}
