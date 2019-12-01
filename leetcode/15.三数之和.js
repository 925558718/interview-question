var threeSum = function(arr) {
    arr.sort((a,b)=>a-b);
    let res=[]
    for (let i=1;i<arr.length-1;i++){
        let l=0,r=arr.length-1;
        while (1){

            if (l==i||r==i) break;
            let he=arr[l]+arr[i]+arr[r];
            if (he>0){
                r--;
            }else if (he<0){
                l++;
            }else{
                res.push([arr[l],arr[i],arr[r]]);
                break;
            }
        }
    }
    return res;
};
