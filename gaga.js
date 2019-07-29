"use strict"
var x = 10;
function foo(){
    console.log(this); //window
    console.log(this.x);  //10
}
foo()
