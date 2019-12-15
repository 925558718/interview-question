var groupAnagrams = function(strs) {
    let m={};
    for (let i=0;i<strs.length;i++){
        let s=Array.from(strs[i]).sort(((a, b) => a.localeCompare(b))).join("");
        console.log(s)
        if (!m[s]){
            m[s]=[strs[i]]
        }else{
            if (m[s].indexOf(strs[i])==-1){
                m[s].push(strs[i])
            }
        }
    }
    let res=[];
    for (let i in m){
        res.push(m[i])
    }

    return res;
};
console.log(groupAnagrams(["",""]))


