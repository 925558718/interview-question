var numIslands = function(grid) {
    if(grid.length==0||grid[0].length==0) return 0;
    let column=grid.length;
    let row=grid[0].length;
    let visited=new Array(column);
    for(let i=0;i<column;i++){
        visited[i]=new Array(row).fill(0);
    }
    let res=0;
    for(let i=0;i<column;i++){
        for(let j=0;j<row;j++){
            if(visited[i][j]==0&&grid[i][j]==1){
                res++;
                help(i,j,grid,visited);
            }
        }
    }
    return res;
};
function help(x,y,grid,visited){
    
    if(x<0||x>=grid.length||y<0||y>=grid[0].length||grid[x][y]==0) return;
    if(visited[x][y]==1) return;
    visited[x][y]=1;
    help(x-1,y,grid,visited);
    help(x,y+1,grid,visited);
    help(x+1,y,grid,visited);
    help(x,y-1,grid,visited);
}
let test=[[1,0,1],[1,0,1],[1,0,1]]
console.log(numIslands(test));
