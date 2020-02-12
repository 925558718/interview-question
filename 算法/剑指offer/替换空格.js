function replaceSpace(s)
{
    // write code here
    let str=Array.from(s);
    
    
    let len=str.length-1;
    for(let i=0;i<len;i++){
        if(" "==str[i]){
            str.push(" ");
            str.push(" ");
        }
    }
    console.log(str);
    
    let len2=str.length-1;
    while(len2>len&&len2>=0){
        let c=str[len--];
        
        
        if(c==" "){
            str[len2--]="0";
            str[len2--]="2";
            str[len2--]="%";
        }else{
            str[len2--]=c;
        }
    }
   
    
    return str.join("");
    
}
console.log(replaceSpace("we are happy"));
