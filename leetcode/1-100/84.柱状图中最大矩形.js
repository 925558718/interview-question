var largestRectangleArea = function (heights) {
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        if (i + 1 < heights.length && heights[i] <= heights[i + 1]) {
            continue;
        }
        let minH = heights[i];
        for (let j = i; j >= 0; j--) {
            minH = Math.min(minH, heights[j]);
            let area = minH * (i - j + 1);
            res = Math.max(res, area);
        }
    }
    return res;
};