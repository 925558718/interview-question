class Game {
    constructor(){
        this.mainBall=new ball();
        this.ballpool=[];
        for (let i=0;i<9;i++){
            this.ballpool.push(new ball())
        }
        this.animate()

    }
    animate(){
        console.log(1)
        requestAnimationFrame(this.animate)
    }
}
class ball {

}
class stick {

}
var game=new Game()
