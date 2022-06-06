/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left=1,right=num>>1;
    while(left < right) {
        let mid=(left+right) >>1;
        let sum=mid * mid;
        if(sum===num) return true;
        if(sum <=num) left=mid+1;
        else right=mid;
    }
    return false;
};
isPerfectSquare(4)