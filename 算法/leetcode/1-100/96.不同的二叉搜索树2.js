function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
var generateTrees = function(n) {
    if(n==0) return {};
    return help(1,n);
};
function help(start,end){
    if(start>end) return null;
    let res=[];
    for(let i=start;i<=end;i++){
        let left=help(start,i-1),right=help(i+1,end);
        for(let j=0;j<left.length;j++){
            for(let x=0;x<right.length;x++){
                let node=new TreeNode(i);
                node.left=left[j];
                node.right=right[x];
                res.push(node)
            }
        }
        
    }
    return res;
}