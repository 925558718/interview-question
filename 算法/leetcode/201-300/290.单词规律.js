var wordPattern = function (pattern, s) {
    let patterns = pattern.split('');
    let str = s.split(' ');
    let cache ={};
    for (let i = 0; i < str.length; i++) {
        if (!cache[pattern[i]]) {
            cache[pattern[i]] = str[i];
        }
        if (cache[pattern[i]] && cache[pattern[i]] !== str[i]) return false;
    }
    return true;
};
console.log(wordPattern('aaaa','dog cat cat dog'));