/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let sum = candyType.length / 2
    let typeSize = (new Set(candyType).size)
    return Math.min(sum, typeSize)
};