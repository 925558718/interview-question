var intToRoman = function (num) {
  let res = "";
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let str = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      res += str[i];
    }
  }
};

// 数字转汉字
let val = [100000000, 10000, 1000, 100, 10];
let dist = ["亿", "万", "千", "百", "十"];
let dist2 = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
function help(num) {
  if (num < 10) return dist2[num];

  let edge = 0;
  for (let i = 0; i < val.length; i++) {
    if (num >= val[i]) {
      edge = i;
      break;
    }
  }
  let count = Math.floor(num / val[edge]);
  num -= count * val[edge];

  let edge2 = val.length;
  for (let i = 0; i < val.length; i++) {
    if (num >= val[i]) {
      edge2 = i;
      break;
    }
  }
  return (
    help(count) +
    dist[edge] +
    (Math.abs(edge2 - edge) > 1 ? "零" : "") +
    help(num)
  );
}
console.log(help(1010101));
