//冒泡
let arr=[2,3,4,1,3,5,5,6,1,2,5,7];
function swap(a,b) {
    let temp=a;
    a=b;
    b=temp;
}
function maopao(arr) {
    let n=0;
    let k=arr.length-1;;//优化二
    let j=0;
    for (let i=0;i<arr.length-1;i++){
        let flag=0; //优化1 flag
        let pos=0//优化二
        for(j=0;j<k;j++){//优化二
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;//优化1 flag
                pos=j;//优化二
            }
        }
        if (flag==0) break;//优化1 flag
        k=pos;//优化二
        for (j=k-1;j>n;j--){
            if(arr[j+1]>arr[j]){
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
        n++;
        if (flag == 0)//如果没有交换过元素，则已经有序,直接结束
        {
            return;
        }
    }

    return arr;
}

// 复杂度o（n^2）
//优化1   设立flag，若没有交换，及flag=0，跳出一层循环
//优化2    设立pos，保存最后一次交换的下表，下一次循环到k为止
//优化3    反向寻找最小值

function select(arr) {
    for (let i=0;i<arr.length-1;i++){
        let min=i;
        for (let j=i+1;j<arr.length-1;j++){
            if(arr[j]<arr[min])
                min=j;
        }
        let temp=arr[min];
        arr[min]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

//复杂度

function insert(arr) {
    let j,u;
    for (let i=1;i<arr.length;i++){
        let low=0,high=i-1;
        for(j=i-1;j>=0;j--){
            if(arr[i]>arr[j]){
                break;
            }
        }
        let temp=arr[i];
        for (u=i-1;u>j;u--){
            arr[u+1]=arr[u];
        }
        arr[u+1]=temp;
    }
    return arr
}
function getP(arr,low,high){
    let l=low,r=high;
    let temp=arr[low];
    while(low<high){
        while(low<high&&arr[high]>=temp) r--;
        while(low<high&&arr[low]<=temp) l--;
        if(l<r){
            let t=arr[r];
            arr[r]=arr[l];
            arr[l]=t;
        }
        arr[high]=arr[l];
        arr[l]=temp;
    }

}
