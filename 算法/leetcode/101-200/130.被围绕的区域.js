var solve = function(board) {
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if((j==0||i==0||j==board[i].length-1||i==board.length-1)&&board[i][j]=='O'){
                dfs(i,j,board);
            }
        }
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]=='O') board[i][j]='X';
            if(board[i][j]=='$') board[i][j]='O'
        }
    }
    return board;
};
function dfs(x,y,board){
    if(x<0||x>=board.length||y<0||y>=board[0].length||board[x][y]!='O') return;
    board[x][y]='$';
    dfs(x,y+1,board);
    dfs(x+1,y,board);
    dfs(x,y-1,board);
    dfs(x-1,y,board);
}