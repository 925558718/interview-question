var longestPalindrome = function (s) {
  let res = {
    start: -1,
    maxLength: 0,
  };
  for (let i = 0; i < s.length; i++) {
    help(s, i, i, res);
    help(s, i, i + 1, res);
  }
  return s.substr(res.start, res.maxLength);
};
function help(s, left, right, res) {
  while (s[left] === s[right] && left >= 0 && right < s.length) {
    left--;
    right++;
  }
  if (right - left - 1 > res.maxLength) {
    res.start = left + 1;
    res.maxLength = right - left - 1;
  }
}
console.log(longestPalindrome("cbbd"));

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
  let dp = new Array(s.length);
  let left = 0;
  let len = 1;
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    for (let j = 0; j < i; j++) {
        dp[j][i] = (s[i] == s[j] && (i - j < 2 || dp[j + 1][i - 1]));
      if (dp[j][i] && len < i - j + 1) {
        len = i - j + 1;
        left = j;
      }
    }
  }
  return s.substr(left, len);
};
console.log(longestPalindrome2("cbbd"));
