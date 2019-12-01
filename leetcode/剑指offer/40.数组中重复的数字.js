function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let len=numbers.length;
    for (let i=0;i<len;i++){
        let index=numbers[i];
        if (index>=len){
            index-=len;
        }
        if (numbers[index]>=len){
            return index;
        }
        numbers[index]=numbers[index]+len;
    }
    return -1
}

console.log(duplicate([1,2,2,3,4,5,6,7,8]))
