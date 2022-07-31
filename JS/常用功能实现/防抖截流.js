
function throttle(fn, wait) {
    let last = 0;
    let timer = null;
    return function (...args) {
        const that = this;
        const now = new Date();
        const offset = now - last;

        if (offset > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            last = now;
            fn.call(null, ...args)
        } else if (!timer) {
            timer = setTimeout(function () {
                last = new Date();
                fn.call(null, ...args);
                timer = null;
            }, wait - offset)
        }
    }
}
function debounce(fn, wait, immediate) {
    let timer = null;
    return function (...args) {
        const that = this;

        timer && clearTimeout(timer);

        if (immediate) {
            console.log('immediate')
            const doNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            doNow && fn.call(that, ...args)
        } else {
            console.log('timer')
            timer = setTimeout(() => {
                fn.call(that, ...args)
            }, wait)
        }
    }
}

function debounce1(fn, wait, immediate) {
    let start = 0;
    return function () {
        let now = new Date();
        if (now - start > wait) {
            fn.call()
            start = now;
        }
    }
}