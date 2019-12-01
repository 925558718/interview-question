function IsPopOrder(pushV, popV)
{
    // write code here
    let index=0;
    let s=[]
    for (let i=0;i<pushV.length;i++){
        s.push(pushV[i]);
        while (s.length&&s[s.length-1]===popV[index]){
            s.pop();
            index++;
        }
    }
    return s.length===0;
}

console.log(IsPopOrder([1,2,3,4,5],[3,5,4,2,1]))
