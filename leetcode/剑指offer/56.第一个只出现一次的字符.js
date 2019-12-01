function FirstNotRepeatingChar(str)
{
    // write code here
    let dist={}
    for (let i=0;i<str.length;i++){
        if(!dist[str[i]]){
            dist[str[i]]=1;
        }else{
            dist[str[i]]++;
        }
    }
    for (let i=0;i<str.length;i++){
        if (dist[str[i]]==1) return i;
    }
    return -1;

}

console.log(FirstNotRepeatingChar('google'))
