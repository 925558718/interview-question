function Permutation(str)
{
    // write code here
    if (str.length==0) return [];
    let res=new Set();
    function help(str,level,visited,out) {
        if (level==str.length){
            res.add(out)
            return;
        }
        for (let i=0;i<str.length;i++){
            if (visited[i]==-1) {
                visited[i]=1;
                help(str,level+1,visited,out+str[i])
                visited[i]=-1;
            }
        }
    }
    let visited=new Array(str.length).fill(-1);
    help(str,0,visited,"");
    return Array.from(res);
}

console.log(Permutation('a'))
