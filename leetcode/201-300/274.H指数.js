var hIndex = function (citations) {
    citations.sorted((a, b) => {
        return a - b;
    })
    let index = 0;
    while (index < citations.length && citations[citations.length - 1 - i] > index) {
        index++;
    }
    return index;
};