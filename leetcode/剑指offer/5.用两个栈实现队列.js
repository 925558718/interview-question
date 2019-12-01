function push(node)
{
    // write code here
    s1.push(node);
}
function pop()
{
    // write code here
    if (s2.length==0){
        while (s1.length!=0){
            s2.push(s1.pop());
        }
        return s2.pop();
    }else{
        return s2.pop();
    }
}
let s1=[];
let s2=[];
