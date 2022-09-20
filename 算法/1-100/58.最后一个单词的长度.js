var lengthOfLastWord = function (s) {
  let res = "";
  let left = 0,
    right = s.length - 1;
  while (s[left] == " ") left++;
  while (s[right] == " ") right--;
  for (let i = left; i <= right; i++) {
    if (s[i] != " ") {
      res += s[i];
    } else {
      res = "";
    }
  }
  return res.length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
