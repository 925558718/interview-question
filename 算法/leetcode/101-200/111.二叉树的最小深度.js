// var minDepth = function(root) {
//     if(!root) return 0;
//     if(!root.left) return 1+minDepth(root.right);
//     if(!root.right) return 1+minDepth(root.left);
//     return Math.min(height(root.left),height(root.right))+1
// };
var minDepth = function(root) {
    if(!root) return 0;
    let q=[root];
    let res=0;
    while(q.length!=0){
        let len=q.length;
        res++;
        for(let i=0;i<len;i++){
            let t=q.shift();
            if(!t.left&&!t.right) return res;
            if(t.left) q.push(t.left);
            if(t.right) q.push(t.right);
        }
    }
    return -1;
};
