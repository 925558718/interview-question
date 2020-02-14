var myAtoi = function(str) {
    let left=0,
    right=0,sign=1;
    let n=str.length;
    while(left<n&&str[left]==" ") left++;
    if(left<n&&(str[left]=="+"||str[left]=="-")){
        sign=(str[left++]=="+")?1:-1;
    }
    right=left;
    while(right<n&&str[right]>='0'&&str[right]<='9'){
        right++;
    }
    let min=-Math.pow(2,31),max=Math.pow(2,31)-1
    let res=Number(str.slice(left,right));
    if(res==0) return 0;
    res*=sign;
    if(res!==res) return 0;
    if(res>max) return max;
    if(res<min) return min;
    return res;
}                              
console.log(myAtoi("+1"));
