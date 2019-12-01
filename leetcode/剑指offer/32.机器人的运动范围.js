function movingCount(threshold, rows, cols)
{
    // write code here
    function add(a,b) {
        let res=0;
        while (a!=0){
            res+=(a%10);
            a=Math.floor(a/10);

        }
        while (b!=0){
            res+=(b%10);
            b=Math.floor(b/10);
        }
        return res;
    }
    function help(x,y) {

        if (x>=rows||y>=cols||x<0||y<0) return;
        if (add(x,y)>threshold) return;
        if (visited[x][y]==1) return;
        console.log(x,y)
        visited[x][y]=1;
        res++;
        help(x-1,y);
        help(x,y+1);
        help(x+1,y);
        help(x,y-1);
    }


    let res=0;
    let visited=new Array(rows);
    for (let i=0;i<rows;i++){
        visited[i]=new Array(cols).fill(-1);
    }
    help(0,0);
    return res;
}

console.log(movingCount(5,10,10))
