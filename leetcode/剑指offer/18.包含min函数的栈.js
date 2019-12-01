function push(node)
{
    // write code here
    s1.push(node);
    if (s2.length!=0){
        if (s2[s2.length-1]<node)  s2.push(s2[s2.length-1])
        else s2.push(node)
    }else{
        s2.push(node)
    }
}
function pop()
{
    // write code here
    s1.pop();
    s2.pop();
}
function top()
{
    // write code here
    return s1[s1.length-1]
}
function min()
{
    // write code here
    return s2[s2.length-1]
}
let s1=[];
let s2=[]
push(1)
push(2)
pop()
console.log(min())
console.log(s1,s2)
