
function getSingleton(fn) {
    let instacnce=null;
    return function () {
        if (!instacnce){
            instacnce=fn.apply(this,arguments);
        }
        return instacnce;
    }
}
