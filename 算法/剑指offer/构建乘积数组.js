function multiply(array)
{
    // write code here
    let b1=new Array(array.length)
    let b2=new Array(array.length)
    b1[0]=array[0];
    b2[b2.length-1]=array[array.length-1];
    for(let i=1;i<array.length;i++){
        b1[i]=b1[i-1]*array[i];
    }
    for(let j=array.length-2;j>=0;j--){
        b2[j]=b2[j+1]*array[j]
    }
    console.log(b1,b2);
    let res=new Array(array.length);
    for(let i=0;i<res.length;i++){
        res[i]=b1[i-1]*b2[i+1];
    }
    console.log(res)   
}
multiply([1,2,3]);
