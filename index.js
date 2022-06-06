let i = 1;
let res = 0;
while (res < 10000) {
    i++;
    res += `${i}`.length
}
console.log(i)