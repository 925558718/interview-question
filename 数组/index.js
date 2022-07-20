//reduce 实现

Array.prototype.reduce1 = function (handler, init) {
    let initArr = this;
    let arr = initArr.concat();
    if (init) arr.unshift(init);
    let index, value;
    while (arr.length > 1) {
        index = initArr.length - arr.length + 1;
        value = handler(arr[0], arr[1], index, initArr);
        arr.splice(0, 2, value);
    }
    return value;
}

// 数组扁平化


function flatten1(arr) {
    var res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            res.push(item)
        }
    })
    return res;
}

function flatten2(arr) {
    let s = [arr];
    let res = [];
    while (s.length) {
        while (Array.isArray(s[s.length - 1])) {
            let t = s.pop();
            for (let i = t.length - 1; i >= 0; i--) s.push(t[i]);
        }
        res.push(s.pop())
    }
    return res;
}

Array.prototype.flatten3 = function (count) {
    if (count === 0) return this;
    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...arr[i].flatten3(count - 1))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}
let arr = [1, [2, [3]]];


Array.prototype.gaga = function (fn=()=>{}, init) {
    let arr = this;
    let sum = init
    for (let i = 0; i < arr.length; i++) {
        sum = fn(sum, arr[i], i, arr)
    }
    return sum
}
console.log([1,2,3].gaga((sum,item)=>{
    sum+=item;
    return sum;
},0))