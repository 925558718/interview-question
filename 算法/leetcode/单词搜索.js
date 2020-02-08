var exist = function(board, word) {
    let start=word[0];
    let column=board[0].length;
    let row=board.length;
    let visited=[];
    visited=new Array(row);
    for(let i=0;i<row;i++){
        visited[i]=new Array(column).fill(-1)
    }
    let res=false;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
                if(help(i,j,0,board,visited,word)) return true;
        }
    }
    return false;;
};
function help(x,y,level,board,visited,word){
    if(level==word.length) {
        return true;
    }
    
    if(x<0||x>=board.length||y<0||y>=board[0].length||visited[x][y]||word[level]!=board[x][y]){
        return false;
    }
    
    
    
    visited[x][y]=1;
    let res=help(x-1,y,level+1,board,visited,word)||help(x,y+1,level+1,board,visited,word)||help(x+1,y,level+1,board,visited,word)||help(x,y-1,level+1,board,visited,word);
    visited[x][y]=-1;
    return res;
}
let board =
[
    ["C","A","A"],["A","A","A"],["B","C","D"]
]
let word="AAB";
console.log(exist(board,word));
