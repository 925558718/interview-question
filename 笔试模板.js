//1.题目中给出的第一个输入为接下来的输入的行数时：
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    if (inputArr.length == (nLine + 1)) {
        var arr = inputArr.slice(1);
        console.log(arr);
        inputArr = [];
    }
});
//2.输入一行数据，以空格分开：
var readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(line) {
    var tokens = line.split(' ')
    console.log(parseInt(tokens[0]) + parseInt(tokens[1]))
})
rl.on('close',function(){
    process.exit()
})
//3.题目中给出的最后一个输入为输入的行数时：
var readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var count = 1
var tokens = []
rl.on('line',function(line){
    if (count == 3) {
        //说明已经全部存入tokens中
        console.log(tokens)
    }else{
        tokens.push(line)
        count ++
    }
})
//4.
