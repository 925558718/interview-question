
var inorderTraversal = function(root) {
    let s=[];
    let p=root;
    let res=[];
    while(p||s.length!=0){
        if(p){
            s.push(p);
            p=p.left;
        }else{
            let t=s.pop();
            res.push(t.val);
            p=t.right;
        }
    }
    return res;
};