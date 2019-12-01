function replaceSpace(str)
{
    // write code here
    let s=str.split("");
    let len1=s.length-1;
    for(let i=0;i<=len1;i++){
        if (s[i]==" ") s.push(" "," ");
    }

    let len2=s.length-1;
    while (len2>len1&&len2>=0){
        let c=s[len1--];
        if (c==" "){
            s[len2--]="0";
            s[len2--]="2";
            s[len2--]="%";
        }else{
            s[len2--]=c;
        }
    }

    return s.join("")
}

console.log(replaceSpace('we are happy'))
