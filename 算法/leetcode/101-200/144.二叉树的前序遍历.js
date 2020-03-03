var preorderTraversal = function(root) {
    let s=[];
    let p=root;
    let res=[];
    while(p||s.length!=0){
        if(p){
            res.push(p.val);
            s.push(p);
            p=p.left;
        }else{
            let t=s.pop();
            p=t.right;
        }
    }
    return res;
};