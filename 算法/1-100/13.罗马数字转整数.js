var romanToInt = function (s) {
  let dist = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let val = dist[s[i]];
    if (i == s.length - 1 || dist[s[i + 1]] <= dist[s[i]]) res += val;
    else res -= val;
  }
  return res;
};

let dist = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
  百: 100,
  千: 1000,
  万: 10000,
  亿: 100000000,
};

var chineseToInt2 = function (s) {
  let res = 0;
  let num = 0;
  for (let i = 0; i <= s.length; i++) {
    if (dist[s[i]] >= 10) {
      if (dist[s[i]] > res) {
        res = (res + num) * dist[s[i]];
      } else {
        res = res + num * dist[s[i]];
      }
    } else {
      num = dist[s[i]];
      if (i === s.length - 1) {
        res += num;
      }
    }
  }
  return res;
};

chineseToInt2("五百五十五万零五百零一");
