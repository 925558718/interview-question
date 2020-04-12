function Convert(pRootOfTree)
{
    // write code here
    let arr=[],res=pRootOfTree;
    help(pRootOfTree,arr);
    
    
    for(let i=0;i<arr.length;i++){
        if(i==0){
            arr[i].left=null;
            arr[i].right=arr[i+1];
        }else if(i==arr.length-1){
            arr[i].left=arr[i-1];
            arr[i].right=null;
        }else{
            arr[i].left=arr[i-1];
            arr[i].right=arr[i+1];
        }
    }
    
    console.log(arr[0]);
    
    return arr[0];
}
function help(root,arr){
    if(!root) return ;
    help(root.left,arr);
    arr.push(root);
    help(root.right,arr);
}
let root={
    val:2,
    left:{
        val:1,
        left:null,
        right:null,
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}
Convert(root)

