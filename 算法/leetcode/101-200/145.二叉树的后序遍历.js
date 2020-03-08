var postorderTraversal = function(root) {
    let p=root;
    let s=[];
    let res=[];
    while(p||s.length!=0){
        if(p){
            s.push(p)
            res.unshift(p.val);
            p=p.right;
        }else{
            let t=s.pop();
            p=t.left;
        }
    }
    return res;
};