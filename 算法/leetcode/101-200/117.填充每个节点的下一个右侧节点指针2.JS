var connect = function(root) {
    if(!root) return null;
    let q1=[];
    let res=[];
    q1.push(root);
    while(q1.length!=0){
        let len=q1.length;
        let out=[]
        for(let i=0;i<len;i++){
            let n=q1.shift();
            out.push(n);
            if(n.left) q1.push(n.left);
            if(n.right) q1.push(n.right);
        }
        for(let i=0;i<out.length-1;i++){
            out[i].next=out[i+1];
        }
        out[out.length-1].next=null;
        res.push(out)
    }
    return root;
};