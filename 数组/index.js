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

// 数组去重
function flatten(arr) {
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