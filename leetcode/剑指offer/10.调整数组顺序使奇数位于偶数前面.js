function reOrderArray(array)
{
    // write code here
    for (let i=0;i<array.length;i++){
        for (let j=1;j<array.length-i;j++){
            if (array[j]%2!=0&&array[j-1]%2==0){
                [array[j],array[j-1]]=[array[j-1],array[j]]
            }
        }
    }
    return array;
}
