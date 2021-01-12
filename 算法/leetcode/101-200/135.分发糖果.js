var candy = function (ratings) {
    let candies = [];
    for (let i = 0; i < ratings.length; i++) {
        candies.push(1);
    }
    let flag = true;
    let sum = 0;
    while (flag) {
        flag = false;
        for (let i = 0; i < ratings.length; i++) {
            if (i != ratings.length - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
                candies[i] = candies[i + 1] + 1;
                flag = true;
            }
            if (i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
                candies[i] = candies[i - 1] + 1;
                flag = true;
            }
        }
    }
    return candies.reduce((sum, item) => {
        return sum + item;
    }, 0)
};
var candy = function (ratings) {
    let a1 = new Array(ratings.length);
    let a2 = new Array(ratings.length);
    let res = 0;
    a1.fill(1);
    a2.fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            a1[i] = a1[i - 1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            a2[i] = a2[i + 1] + 1;
        }
    }
    for (let i = 0; i < ratings.length; i++) {
        res += Math.max(a1[i], a2[i])
    }
}