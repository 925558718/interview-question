function Find(target, array)
{
    // write code here
    if (array.length==0||array[0].length==0) return false;
    let row=array[0].length-1;
    let coulmn=array.length-1;
    let x=coulmn,y=0;
    while (x>=0&&y<=coulmn){
        if (array[x][y]==target) return true;
        else if (array[x][y]<target) y++;
        else x--;
    }
    return false;
}
Find(1,[[1,2]])
