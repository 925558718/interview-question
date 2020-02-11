var findCircleNum = function(M) {
    let n=M.length,res=0;
    let visited=new Array(n).fill(false);
    for(let i=0;i<n;i++){
        if(visited[i]) continue;
        help(M,i,visited);
        res++;
    }
    return res;


};
function help(M,i,visited){
    visited[i]=true;
    for(let j=0;j<M.length;j++){
        if(!M[i][j]||visited[j]) continue;
        help(M,j,visited);
    }
}