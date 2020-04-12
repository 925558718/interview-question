function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let t=0;
    for(let i=0;i<array.length;i++){
        t^=array[i];
    }
    let index=findFirst(t);
    let t1=0,t2=0;
    for(let i=0;i<array.length;i++){
        if(help(array[i],index)){
            t1^=array[i];
        }else{
            t2^=array[i]
        }
    }
    return [t1,t2]
}
function findFirst(num){
    let index=0;
    while((num&1)==0&&index<32){
        num>>=1;
        index++;
    }
    return index;
}
function help(target,index){
    return ((target>>index)&1)==1;
}