function LeftRotateString(str, n)
{
    // write code here
    let s1=str.substr(0,n)
    let s2=str.substr(n,str.length);
    return s2+s1;
}

console.log(LeftRotateString('abcXYZdef',3))
