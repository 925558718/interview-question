// var invertTree = function(root) {
//     if(!root) return [];
//     let t=root.left;
//     root.left=root.right;
//     root.right=t;
//     invertTree(root.left)
//     invertTree(root.right);
//     return root;
// };
var invertTree = function(root) {
    if(!root) return null;
    let q=[root];
    while(q.length!=0){
        let out=[];
        let len=q.length;
        for(let i=0;i<len;i++){
            let t=q.shift();
            let temp=t.right;
            t.right=t.left;
            t.left=temp;
            if(t.left) q.push(t.left);
            if(t.right) q.push(t.right);
        }
    }
    return root;
};
