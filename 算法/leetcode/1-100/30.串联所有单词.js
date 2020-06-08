var findSubstring = function(s, words) {
    if(s.length==0||words.length==0) return [];
    let res=[];
    let n=words.length,len=words[0].length;
    let m={};
    words.forEach(item=>{
        if(typeof m[item]=='undefined'){
            m[item]=1;
        }else {
            m[item]++;
        }
    })
    for(let i=0;i<=s.length-n*len;i++){
        let strCnt={};
        let j=0;
        for(j=0;j<n;j++){
            let t=s.substr(i+j*len,len);
            console.log(t,i);
            
            if(typeof m[t]=='undefined') break;
            if(typeof strCnt[t]=='undefined') strCnt[t]=1;
            else strCnt[t]++;
            if(strCnt[t]>m[t]) break;
        }
        if(j==n) res.push(i)
    }
    return res;
};
findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"])