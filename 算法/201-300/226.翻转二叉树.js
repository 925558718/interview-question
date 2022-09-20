/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    invertTree(root.left)
    invertTree(root.right);
    let t=root.right
    root.right=root.left;
    root.left=t;
    return root;
};

var invertTree2 = function(root) {
    if(!root) return null;
    let s=[root];
    while(s.length) {
        let t=s.pop();
        if(t.left) s.push(t.left)
        if(t.right) s.push(t.right);
        let temp=t.left;
        t.left=t.right;
        t.right=temp;
    }
    return root;
};