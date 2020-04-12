 function TreeNode(val) {
   this.val = val;
 this.left = this.right = null;
}
// var serialize = function(root) {
//     let res=[];
//     function pre(root){
//         if(!root){
//             root.push(null);
//             return;
//         }
//         res.push(root.val);
//         pre(root.left);
//         pre(root.right);
//     }
//     return res;
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//     if(data.length==0) return null;
//     let val=data.shift();
//     if(val===null) return null;
//     let root=new TreeNode(val);
//     root.left=deserialize(data);;
//     root.right=deserialize(data);;
//     return root;
// };
// console.log(deserialize([2,1,3]));
var serialize = function(root) {
    let q=[root];
    let res=[];
    while(q.length!=0){
        let t=q.shift();
        if(t.left) q.push(t.left);
        else q.push(null)
        if(t.right) q.push(t.right);
        else q.push(null)
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let node=new TreeNode(data.shift());
    
    let q=[node];
    while(q.length!=0){
        
        
        let n=q.shift();
        
        if(data.length==0){
            n.left=null;
        }else{
            n.left=new TreeNode(data.shift());
            q.push(n.left);
        }
        if(data.length==0){
            n.right=null;
        }else{
            n.right=new TreeNode(data.shift());
            q.push(n.right);
        }
    }
    return node;
};
console.log(deserialize([1,2,3]));

