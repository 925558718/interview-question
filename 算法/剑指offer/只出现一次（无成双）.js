function FirstNotRepeatingChar(str)
{
    // write code here
    let m={};
    for(let i=0;i<str.length;i++){
        if(typeof m[str[i]]=='undefined') m[str[i]]=1;
        else m[str[i]]+=1;
    }
 
    for(let i=0;i<str.length;i++){
        if(m[str[i]]==1) return i;
    }
    
    
    return -1;
}
console.log(FirstNotRepeatingChar("google"));
