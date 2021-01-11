// 偏函数
function Partial(fn, ...args) {
    for (let i = args.length; i < fn.length; i++) {
        args.push(undefined)
    }
    return (...remainArgs) => {
        let j = 0;
        args.forEach((item, index) => {
            if (item === undefined)
                args[index] = remainArgs[j + 1];
        })
        return fn(...args)
    }
}
function sum(a, b, c) {
    return a + b + c;
}
var p = Partial(sum, 1, 2, 3)

// bind call apply
Function.prototype.call = function (context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    let arg = [...arguments].slice(1);
    let res = context.fn(...arg);
    delete context.fn;
    return res;
}

//apply
Function.prototype.apply = function (context, rest) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    let res = context.fn(...rest);
    return res;
}

//bind
Function.prototype.bind = function () {
    let [ctx, ...args] = arguments;
    ctx.fn = this;
    let tes = ctx.fn(...args);
}

//create
Object.create1 = function (obj, properties) {
    function F() { };
    F.prototype = obj
    let o = new F()
    if (typeof properties === 'object') {
        Object.defineProperties(o, properties);
    }
    return o;
}


//curry
const curry = (fn, ...args) => {
    return args.length < fn.length ? (...arguments) => curry(fn, ...args, ...arguments) : fn(...args)
}


//深拷贝
function DeepCopy(obj, hash = new Map()) {
    if (hash.has(obj)) return hash.get(obj)
    const res = obj.constructor === Array ? [] : {};
    hash.set(obj, res)
    for (let keys in obj) {
        if (obj.hasOwnProperty(keys)) {
            if (obj[keys] && typeof obj[keys] === 'object') {
                res[keys] = copy(obj[keys])
            } else {
                res[keys] = obj[keys]
            }
        }
    }
    return res;
}

//new
function _new() {
    let target = {};
    let [constructor, ...args] = arguments;
    target.prototype = constructor.prototype;
    let res = constructor.apply(target, args)
    if (res && (typeof res === 'object') || typeof res === 'function') {
        return res
    }
    return target
}
