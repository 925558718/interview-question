var isValidSudoku = function(board) {
    let rowFlag=new Array(9);
    for(let i=0;i<9;i++){
        rowFlag[i]=new Array(9).fill(false)
    }
    let columnFlag=new Array(9);
    for(let i=0;i<9;i++){
        column[i]=new Array(9).fill(false)
    }
    let cellFlag=new Array(9);
    for(let i=0;i<9;i++){
        cellFlag[i]=new Array(9).fill(false)
    }
    

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]=='.') continue;
            let c=board[i][j]-'1';
            if(rowFlag[i][c]||columnFlag[c][j]||cellFlag[3*Math.floor(i/3)+Math.floor(j/3)][c]) return false;
            rowFlag[i][c]=true;
            columnFlag[c][j]=true;
            cellFlag[3*Math.floor(i/3)+Math.floor(j/3)][c]=true;
        }
    }
    return true;
    
};
isValidSudoku()