

var solveNQueens = function(n) {
    let res=[];
    let queens=new Array(n);
    for(let i=0;i<n;i++){
        queens[i]=new Array(n).fill(".");
    }
    help(0,queens,res);
    return res;
};
function help(level,queens,res){
    let n=queens.length;
    if(level==n){
        res.push(JSON.stringify(queens));
        return;
    }
    for(let i=0;i<n;i++){
        if(isValid(queens,level,i)){
            queens[level][i]='Q'; 
            help(level+1,queens,res);
            queens[level][i]='.';
        }
    }
}
function isValid(queens,row,col){

    for(let i=0;i<row;i++){
        if(queens[i][col]=='Q') return false;
    }
    for(let i=row-1,j=col-1;i>=0&&j>=0;--i,--j){
        if(queens[i][j]=='Q') return false;
    }
    for(let i=row-1,j=col+1;i>=0&&j<queens.length;i--,++j){
        if(queens[i][j]=='Q') return false;
    }
    return true;
}
console.log(solveNQueens(4));

