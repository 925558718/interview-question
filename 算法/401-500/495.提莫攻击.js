/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let res = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        let diff = timeSeries[i + 1] - timeSeries[i]
        if (diff > duration) {
            res += duration
        } else {
            res += diff
        }
    }
    return res + duration;
};