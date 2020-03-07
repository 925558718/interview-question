var reverseWords = function(s) {
    let str="";
    let res=[]
    let left=0,right=s.length-1;
    while(s[left]==" ") left++;
    while(s[right]==" ") right--;
    for(let i=left;i<=right;i++){
        if(s[i]==" "){
            res.unshift(str)
            str=""
            while(s[i+1]==" "){i++}
            
        }
        else str+=s[i];
    }
    res.unshift(str);
    console.log(res);
    
    let r="";
    for(let i=0;i<res.length-1;i++){
        r+=res[i]+" "
    }
    r+=res[res.length-1]
    return r;
    
};
reverseWords("a good   example")