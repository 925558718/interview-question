var groupAnagrams = function(strs) {
    let m={};
    for(let i=0;i<strs.length;i++){
        let d=strs[i].split("").sort((a,b)=>a.localeCompare(b)).join("");
        if(!m[d]) m[d]=[strs[i]];
        else m[d].push(strs[i])
    }
    let res=[];
    for(let i in m){
        res.push(m[i])
    }
    return res;
};
console.log(groupAnagrams(['abc','bca']));
