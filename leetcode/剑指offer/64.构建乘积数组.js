function multiply(array)
{
    // write code here
    let len=array.length;
    let B=new Array(len);
    if (len!=0){
        B[0]=1;
        for (let i=1;i<len;i++){
            B[i]=B[i-1]*array[i-1]
        }
        let temp=1;
        for (let j=len-2;j>=0;j--){
            temp*=array[j+1];
            B[j]*=temp;
        }
    }
    return B;
}
//[1,2,3,4,5]
