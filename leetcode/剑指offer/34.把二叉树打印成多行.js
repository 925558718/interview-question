function Print(pRoot)
{
    // write code here
    if (!pRoot) return;
    let res=[];
    let out=[];
    let q=[pRoot];
    while (q.length!=0){
        let len=q.length;
        for (let i=0;i<len;i++){
            let t=q.shift();
            out.push(t.val);
            if (t.left) q.push(t.left);
            if (t.right) q.push(t.right);
        }
        res.push(out);
        out=[];
    }
    return res;
}
