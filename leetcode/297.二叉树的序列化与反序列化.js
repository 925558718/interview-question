function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
//递归先序遍历
/*var serialize = function(root) {
    let res=[];
    function help(root) {
        if (!root){
            res.push(null)
        }else{
            res.push(root.val);
            help(root.left);
            help(root.right);
        }
    }
    help(root)
    return res;
};
var deserialize = function(data) {
    if (data.length==0) return null;
    let t=data.shift();
    if (t==null) return null;
    let node=new TreeNode(t);
    node.left=deserialize(data);
    node.right=deserialize(data)
    return node
};*/

//2.层次遍历
let root={
    val:1,
    left:{
        val:2,
        left:null,
        right:null
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}
var serialize = function(root) {
    let q=[root];
    let res=[];
    while (q.length!=0){
        let t=q.shift();
        res.push(t.val);
        t.left?q.push(t.left):res.push(null);
        t.right?q.push(t.right):res.push(null);
    }
    return res;
};
console.log(serialize(root))

var deserialize = function(data) {
    let root=new TreeNode(data.shift());
    let q=[root];
    while (data.length!=0){
        let node=q.shift();
        if (data.length<=0) break;
        let left=data.shift();

        if (left!=null){
            node.left=new TreeNode(left);
            q.push(node.left);
        }else{
            node.left=null;
        }
        if (data.length<=0) break;
        let right=data.shift();
        if (right!=null){
            node.right=new TreeNode(right);
            q.push(node.right);
        }else{
            node.right=null;
        }
    }
    return root;
};
console.log(deserialize(serialize(root)))
