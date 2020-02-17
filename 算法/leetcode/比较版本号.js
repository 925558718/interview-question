var compareVersion = function(version1, version2) {
    let v1=version1.split(".");
    let v2=version2.split(".");
    let len1=v1.length;
    let len2=v2.length;
    let len=Math.max(len1,len2);
    for(let i=0;i<len;i++){
        if(typeof v1[i]=='undefined') v1[i]=0;
        if(typeof v2[i]=='undefined') v2[i]=0;
        if(Number(v1[i])<Number(v2[i])) return -1;
        if(Number(v1[i])>Number(v2[i])) return 1;
    }
    return 0;
};
console.log(compareVersion("1.0.0",'1.0.0.1'));
