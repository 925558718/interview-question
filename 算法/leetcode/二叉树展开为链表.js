var flatten = function(root) {
    if(!root) return null;
    if(root.left) flatten(root.left);
    if(root.right) flatten(root.right);
    let t=root.right;
    root.right=root.left;
    root.left=null;
    while(root.right) root=root.right;
    root.right=t;
    return root;
};