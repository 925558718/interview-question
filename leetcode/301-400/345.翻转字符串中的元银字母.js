/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left=0,right=s.length-1;
    let set=new Set(['a','e','i','o','u','A','E','I','O','U'])
    s=s.split('')
    while(left<right) {
        while(left<right && !set.has(s[left]))  left++;
        while(left<right && !set.has(s[right]))  right--;
        let temp=s[left];
        s[left]=s[right]
        s[right]=temp
        left++;
        right--;
    }
    return s.join("")
};