/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    console.log(s)
    if (s.length === 0) return ''
    let str = ''
    let i = 0;
    while (i < s.length) {
        while (s[i] >= 'a' && s[i] <= 'z') str += s[i++]
        let count = 0

        while (i < s.length && s[i] >= '0' && s[i] <= '9') {
            count = count * 10 + (+s[i++])
        }
        let stack = ['[']
        let start = ++i;
        console.log(start)
        while (stack.length !== 0 && i < s.length) {
            if (s[i] === '[') {
                stack.push('[');
                i++;
            } else if (s[i] === ']') {
                stack.pop();
                i++;
            } else i++
        }
        const calcStr = decodeString(s.substring(start, i - 1))
        for (let i = 0; i < count; i++) {
            str += calcStr
        }
    }
    return str
};
console.log(decodeString('3[a2[c]]'))

'3[3[1[a]2[ads]]'