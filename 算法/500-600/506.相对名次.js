/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let des = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    let arr = new Array(score.length).fill(0).map(_ => new Array(2))
    for (let i = 0; i < score.length; i++) {
        arr[i][0] = score[i]
        arr[i][1] = i;
    }
    let res = new Array(score.length).fill(-1)
    arr.sort((a, b) => b[0] - a[0])
    arr.forEach((item, index) => {
        if (index >= 3) {
            res[item[1]] = index + 1 + ''
        } else {
            res[item[1]] = des[index]
        }
    })
    return res;
};